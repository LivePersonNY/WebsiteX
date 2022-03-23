<?php
/**
 * Plus WebP
 *
 * @package    Plus WebP
 * @subpackage PlusWebp Main function
/*  Copyright (c) 2019- Katsushi Kawamori (email : dodesyoswift312@gmail.com)
	This program is free software; you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation; version 2 of the License.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

$pluswebp = new PlusWebp();

/** ==================================================
 * Class Main function
 *
 * @since 1.00
 */
class PlusWebp {

	/** ==================================================
	 * Dir
	 *
	 * @var $upload_dir DIR.
	 */
	private $upload_dir;

	/** ==================================================
	 * URL
	 *
	 * @var $upload_url URL.
	 */
	private $upload_url;

	/** ==================================================
	 * Path
	 *
	 * @var $upload_path PATH.
	 */
	private $upload_path;

	/** ==================================================
	 * Construct
	 *
	 * @since 1.00
	 */
	public function __construct() {

		list( $this->upload_dir, $this->upload_url, $this->upload_path ) = $this->upload_dir_url_path();

		add_filter( 'wp_generate_attachment_metadata', array( $this, 'generate_webp' ), 10, 2 );
		add_action( 'pluswebp_mail_send', array( $this, 'mail_send' ), 10, 1 );

		/* Ajax */
		$action1 = 'bulkgeneratewebp-ajax-action';
		$action2 = 'bulkgeneratewebp_message';
		add_action( 'wp_ajax_' . $action1, array( $this, 'bulkgeneratewebp_update_callback' ) );
		add_action( 'wp_ajax_' . $action2, array( $this, 'bulkgeneratewebp_message_callback' ) );

	}

	/** ==================================================
	 * Webp generate
	 *
	 * @param array $metadata  metadata.
	 * @param int   $attachment_id  ID.
	 * @return array $metadata  metadata.
	 * @since 1.00
	 */
	public function generate_webp( $metadata, $attachment_id ) {

		$pluswebp_settings = get_option( 'pluswebp' );
		$replace           = $pluswebp_settings['replace'];

		$mime_type = get_post_mime_type( $attachment_id );
		if ( in_array( $mime_type, $pluswebp_settings['types'] ) ) {
			$metadata_webp         = $metadata;
			$file_webp             = $this->change_ext( $metadata['file'], 'webp', $pluswebp_settings['addext'] );
			$metadata_webp['file'] = $file_webp;
			foreach ( (array) $metadata['sizes'] as $key => $value ) {
				$file_thumb      = $value['file'];
				$file_thumb_webp = $this->change_ext( $file_thumb, 'webp', $pluswebp_settings['addext'] );
				if ( '.' === dirname( $file_webp ) ) {
					$dir_name_url  = '/';
					$dir_name_path = wp_normalize_path( '/' );
				} else {
					$dir_name_url = '/' . dirname( $file_webp ) . '/';
					$dir_name_path = wp_normalize_path( $dir_name_url );
				}
				$url  = $this->upload_url . $dir_name_url;
				$path = $this->upload_dir . $dir_name_path;
				$ret  = $this->create_webp( $path . $file_thumb, $mime_type, $path . $file_thumb_webp );
				if ( $ret ) {
					$metadata_webp['sizes'][ $key ]['file']      = $file_thumb_webp;
					$metadata_webp['sizes'][ $key ]['mime-type'] = 'image/webp';
					if ( $replace ) {
						unlink( $path . $file_thumb );
						$this->change_db( $url . $file_thumb, $url . $file_thumb_webp );
					}
				}
			}
			$org_img_file = null;
			if ( array_key_exists( 'original_image', $metadata ) && ! empty( $metadata['original_image'] ) ) {
				$org_img_file  = wp_normalize_path( wp_get_original_image_path( $attachment_id, false ) );
				$org_webp_file = $this->change_ext( $org_img_file, 'webp', $pluswebp_settings['addext'] );
				$ret = $this->create_webp( $org_img_file, $mime_type, $org_webp_file );
				if ( $ret ) {
					$metadata_webp['original_image'] = wp_basename( $org_webp_file );
				}
			}

			$ret = $this->create_webp( $this->upload_dir . '/' . $metadata['file'], $mime_type, $this->upload_dir . '/' . $file_webp );
			if ( $ret ) {
				if ( $replace ) {
					$up_post = array(
						'ID'             => $attachment_id,
						'guid'           => $this->upload_url . '/' . $file_webp,
						'post_mime_type' => 'image/webp',
					);
					wp_update_post( $up_post );
					update_post_meta( $attachment_id, '_wp_attached_file', $file_webp );
					/* for bulk generate */
					update_post_meta( $attachment_id, '_wp_attachment_metadata', $metadata_webp );
					/* delete org file */
					unlink( $this->upload_dir . '/' . $metadata['file'] );
					if ( $org_img_file ) {
						unlink( $org_img_file );
					}
					/* Replace */
					$this->change_db( $this->upload_url . '/' . $metadata['file'], $this->upload_url . '/' . $file_webp );
					/* for hook */
					$metadata = $metadata_webp;
					/* for mail */
					$attach_id  = $attachment_id;
				} else {
					$post       = get_post( $attachment_id );
					$title      = get_the_title( $post );
					$attachment = array(
						'guid'           => $this->upload_url . '/' . $file_webp,
						'post_mime_type' => 'image/webp',
						'post_title'     => $title,
						'post_content'   => '',
						'post_status'    => 'inherit',
					);
					$file = $this->upload_dir . '/' . $file_webp;
					$attach_id  = wp_insert_attachment( $attachment, $file );

					/* for XAMPP [ get_attached_file( $attach_id ): Unable to get correct value ] */
					$metapath_name = str_replace( $this->upload_dir . '/', '', $file );
					update_post_meta( $attach_id, '_wp_attached_file', $metapath_name );

					wp_update_attachment_metadata( $attach_id, $metadata_webp );

					$author      = get_userdata( $post->post_author );
					$userid      = $author->ID;
					$postdate    = get_the_date( 'Y-m-d H:i:s', $attachment_id );
					$postdategmt = get_gmt_from_date( $postdate );
					$up_post     = array(
						'ID'                => $attach_id,
						'post_author'       => $userid,
						'post_date'         => $postdate,
						'post_date_gmt'     => $postdategmt,
						'post_modified'     => $postdate,
						'post_modified_gmt' => $postdategmt,
					);
					wp_update_post( $up_post );
				}

				$ids = get_option( 'pluswebp_generate' );
				$ids[] = $attach_id;
				update_option( 'pluswebp_generate', $ids );

				/* for Media Library folders term by Organize Media Folder */
				do_action( 'omf_folders_term_update', $metadata_webp, $attach_id );

				/* for Term filter update by Organize Media Folder */
				do_action( 'omf_term_filter_update' );

			}
		}

		return $metadata;

	}

	/** ==================================================
	 * IDs Callback
	 *
	 * @since 2.00
	 */
	public function bulkgeneratewebp_update_callback() {

		$action1 = 'bulkgeneratewebp-ajax-action';
		if ( check_ajax_referer( $action1, 'nonce', false ) ) {
			if ( current_user_can( 'manage_options' ) ) {
				if ( ! empty( $_POST['id'] ) ) {
					$id = absint( $_POST['id'] );
				} else {
					return;
				}
				if ( ! wp_get_attachment_url( $id ) ) {
					$error_string = __( 'No media!', 'plus-webp' );
					$output_html = '<div>ID: ' . $id . ' <span style="color: red;">' . $error_string . '</span></div>';
				} else {
					$output_html = $this->output_html( $id );
				}
				if ( ! empty( $output_html ) ) {
					header( 'Content-type: text/html; charset=UTF-8' );
					$allowed_output_html = array(
						'a'   => array(
							'href' => array(),
							'target' => array(),
							'rel' => array(),
							'style' => array(),
						),
						'img'   => array(
							'src' => array(),
							'width' => array(),
							'height' => array(),
							'style' => array(),
						),
						'div'   => array(
							'style' => array(),
							'class' => array(),
						),
						'font'   => array(
							'color' => array(),
						),
						'ul' => array(),
						'li' => array(),
						'span'   => array(
							'class' => array(),
							'style' => array(),
						),
					);
					echo wp_kses( $output_html, $allowed_output_html );
				}
			}
		} else {
			status_header( '403' );
			echo 'Forbidden';
		}

		wp_die();

	}

	/** ==================================================
	 * Output html for Ajax
	 *
	 * @param array $attach_id  attach_id.
	 * @since 2.00
	 */
	private function output_html( $attach_id ) {

		include_once ABSPATH . 'wp-admin/includes/image.php';

		/* Generate thumbnails */
		$metadata_org = wp_get_attachment_metadata( $attach_id );
		do_action( 'wp_generate_attachment_metadata', $metadata_org, $attach_id );
		if ( get_option( 'pluswebp_generate' ) ) {
			$ids = get_option( 'pluswebp_generate' );
			delete_option( 'pluswebp_generate' );
			$webp_id = $ids[0];
			$metadata = wp_get_attachment_metadata( $webp_id );

			/* Thumbnail urls */
			list( $image_thumbnail, $imagethumburls ) = $this->thumbnail_urls( $webp_id, $metadata, $this->upload_url );
			/* Output datas*/
			list( $attachment_link, $attachment_url, $filename, $original_image_url, $original_filename, $mime_type, $stamptime, $file_size ) = $this->output_datas( $webp_id, $metadata );

			$output_html = '<div style="border-bottom: 1px solid; padding-top: 5px; padding-bottom: 5px;">';
			$output_html .= '<img width="40" height="40" src="' . $image_thumbnail . '" style="float: left; margin: 5px;">';
			$output_html .= '<div style="overflow: hidden;">';
			$output_html .= '<div>ID: ' . $webp_id . '</div>';
			$output_html .= '<div>' . __( 'Title' ) . ': ' . get_the_title( $webp_id ) . '</div>';
			$output_html .= '<div>' . __( 'Permalink:' ) . ' <a href="' . $attachment_link . '" target="_blank" rel="noopener noreferrer" style="text-decoration: none; word-break: break-all;">' . $attachment_link . '</a></div>';
			$output_html .= '<div>URL: <a href="' . $attachment_url . '" target="_blank" rel="noopener noreferrer" style="text-decoration: none; word-break: break-all;">' . $attachment_url . '</a></div>';
			$output_html .= '<div>' . __( 'File name:' ) . ' ' . $filename . '</div>';
			if ( ! empty( $original_image_url ) ) {
				$output_html .= '<div>' . __( 'Original URL', 'plus-webp' ) . ': <a href="' . $original_image_url . '" target="_blank" rel="noopener noreferrer" style="text-decoration: none; word-break: break-all;">' . $original_image_url . '</a></div>';
				$output_html .= '<div>' . __( 'Original File name', 'plus-webp' ) . ': ' . $original_filename . '</div>';
			}
			$output_html .= '<div>' . __( 'Date/Time' ) . ': ' . $stamptime . '</div>';
			$output_html .= '<div>' . __( 'File type:' ) . ' ' . $mime_type . '</div>';
			$output_html .= '<div>' . __( 'File size:' ) . ' ' . $file_size . '</div>';
			if ( ! empty( $imagethumburls ) ) {
				$output_html .= '<div>' . __( 'Images' ) . ': ';
				foreach ( $imagethumburls as $thumbsize => $imagethumburl ) {
					$output_html .= '[<a href="' . $imagethumburl . '" target="_blank" rel="noopener noreferrer" style="text-decoration: none; word-break: break-all;">' . $thumbsize . '</a>]';
				}
				$output_html .= '</div>';
			}
			$output_html .= '</div></div>';
		} else {
			$output_html = null;
		}

		return $output_html;

	}

	/** ==================================================
	 * Thumbnail urls
	 *
	 * @param int    $attach_id  attach_id.
	 * @param array  $metadata  metadata.
	 * @param string $upload_url  upload_url.
	 * @return array $image_thumbnail(string), $imagethumburls(array)
	 * @since 2.00
	 */
	private function thumbnail_urls( $attach_id, $metadata, $upload_url ) {

		$image_attr_thumbnail = wp_get_attachment_image_src( $attach_id, 'thumbnail', true );
		$image_thumbnail = $image_attr_thumbnail[0];

		$imagethumburls = array();
		if ( ! empty( $metadata ) && array_key_exists( 'sizes', $metadata ) ) {
			$thumbnails  = $metadata['sizes'];
			$path_file  = get_post_meta( $attach_id, '_wp_attached_file', true );
			$filename   = wp_basename( $path_file );
			$media_path = str_replace( $filename, '', $path_file );
			$media_url  = $upload_url . '/' . $media_path;
			foreach ( $thumbnails as $key => $key2 ) {
				$imagethumburls[ $key ] = $media_url . $key2['file'];
			}
		}

		return array( $image_thumbnail, $imagethumburls );

	}

	/** ==================================================
	 * Output datas
	 *
	 * @param int   $attach_id  attach_id.
	 * @param array $metadata  metadata.
	 * @return array (string) $attachment_link, $attachment_url, $filename, $original_image_url, $original_filename, $mime_type(string), $stamptime, $file_size
	 * @since 2.00
	 */
	private function output_datas( $attach_id, $metadata ) {

		$attachment_link = get_attachment_link( $attach_id );
		$attachment_url = wp_get_attachment_url( $attach_id );
		$filename = wp_basename( $attachment_url );
		if ( ! empty( $metadata ) && array_key_exists( 'original_image', $metadata ) && ! empty( $metadata['original_image'] ) ) {
			$original_image_url = wp_get_original_image_url( $attach_id );
			$original_filename = wp_basename( $original_image_url );
		} else {
			$original_image_url = null;
			$original_filename = null;
		}
		$mime_type = get_post_mime_type( $attach_id );

		$stamptime = get_the_time( 'Y-n-j ', $attach_id ) . get_the_time( 'G:i:s', $attach_id );
		if ( ! empty( $metadata ) && array_key_exists( 'filesize', $metadata ) && ! empty( $metadata['filesize'] ) ) {
			$file_size = $metadata['filesize'];
		} else {
			$file_size = @filesize( get_attached_file( $attach_id ) );
		}
		if ( ! $file_size ) {
			$file_size = __( 'Could not retrieve.', 'plus-webp' );
		} else {
			$file_size = size_format( $file_size );
		}

		return array( $attachment_link, $attachment_url, $filename, $original_image_url, $original_filename, $mime_type, $stamptime, $file_size );

	}

	/** ==================================================
	 * Messages Callback
	 *
	 * @since 2.00
	 */
	public function bulkgeneratewebp_message_callback() {

		$action2 = 'bulkgeneratewebp_message';
		if ( check_ajax_referer( $action2, 'nonce', false ) ) {
			$error_count = 0;
			$error_update = null;
			$success_count = 0;
			if ( ! empty( $_POST['error_count'] ) ) {
				$error_count = absint( $_POST['error_count'] );
			}
			if ( ! empty( $_POST['error_update'] ) ) {
				$error_update = sanitize_text_field( wp_unslash( $_POST['error_update'] ) );
			}
			if ( ! empty( $_POST['success_count'] ) ) {
				$success_count = absint( $_POST['success_count'] );
			}

			$back_html = '<strong><a style="text-decoration: none;" href="' . admin_url( 'tools.php?page=pluswebp' ) . '">' . __( 'Back' ) . '</a></strong>';

			$output_html = null;
			if ( $error_count > 0 ) {
				/* translators: error message %1$d: media count %2$s: back link */
				$error_message = sprintf( __( 'Errored to the generation of %1$d medias.', 'plus-webp' ), $error_count, $back_html );
				$output_html .= '<div class="notice notice-error is-dismissible"><ul><li><div>' . $error_message . '</div>' . $error_update . '</li></ul></div>';
			}
			if ( $success_count > 0 ) {
				/* translators: success message %1$d: media count %2$s: back link */
				$success_message = sprintf( __( 'Succeeded to the generation webp of %1$d medias for Media Library. %2$s', 'plus-webp' ), $success_count, $back_html );
				$output_html .= '<div class="notice notice-success is-dismissible"><ul><li><div>' . $success_message . '</li></ul></div>';
			}

			header( 'Content-type: text/html; charset=UTF-8' );
			$allowed_output_html = array(
				'div' => array(
					'class' => array(),
				),
				'ul' => array(),
				'li' => array(),
				'strong' => array(),
				'a' => array(
					'style' => array(),
					'href' => array(),
				),
			);
			echo wp_kses( $output_html, $allowed_output_html );
		}

		wp_die();

	}

	/** ==================================================
	 * Mail send hook
	 *
	 * @param string $to  to.
	 * @since 1.09
	 */
	public function mail_send( $to ) {

		$post_ids = get_option( 'pluswebp_generate' );
		delete_option( 'pluswebp_generate' );

		if ( function_exists( 'wp_date' ) ) {
			$now_date_time = wp_date( 'Y-m-d H:i:s' );
		} else {
			$now_date_time = date_i18n( 'Y-m-d H:i:s' );
		}
		$pluswebp_mail_send = array();
		$pluswebp_mail_send['datetime'] = $now_date_time;

		/* translators: Date and Time */
		$message = sprintf( __( 'Plus WebP : %s', 'plus-webp' ), $now_date_time ) . "\r\n\r\n";

		if ( ! empty( $post_ids ) ) {

			$message .= __( 'Generation of WebP is complete.', 'plus-webp' ) . "\r\n\r\n";
			$pluswebp_mail_send['count'] = count( $post_ids );

			$count = 0;
			foreach ( $post_ids as $attach_id ) {
				$metadata  = wp_get_attachment_metadata( $attach_id );

				/* Thumbnail urls */
				list( $image_thumbnail, $imagethumburls ) = $this->thumbnail_urls( $attach_id, $metadata, $this->upload_url );
				/* Output datas*/
				list( $attachment_link, $attachment_url, $filename, $original_image_url, $original_filename, $mime_type, $stamptime, $file_size ) = $this->output_datas( $attach_id, $metadata );

				$count++;
				$message .= __( 'Count' ) . ': ' . $count . "\n";
				$message .= 'ID: ' . $attach_id . "\n";
				$message .= __( 'Title' ) . ': ' . get_the_title( $attach_id ) . "\n";
				$message .= __( 'Permalink:' ) . ' ' . $attachment_link . "\n";
				$message .= 'URL: ' . $attachment_url . "\n";
				$message .= __( 'File name:' ) . ' ' . $filename . "\n";
				if ( ! empty( $original_image_url ) ) {
					$message .= __( 'Original URL:', 'plus-webp' ) . ' ' . $original_image_url . "\n";
					$message .= __( 'Original File name:', 'plus-webp' ) . ' ' . $original_filename . "\n";
				}
				$message .= __( 'Date/Time' ) . ': ' . $stamptime . "\n";
				$message .= __( 'File size:' ) . ' ' . $file_size . "\n";
				if ( ! empty( $imagethumburls ) ) {
					foreach ( $imagethumburls as $thumbsize => $imagethumburl ) {
						$message .= $thumbsize . ': ' . $imagethumburl . "\n";
					}
				}
				$message .= "\n";
			}
		} else {
			$message .= __( 'WebP was not generated. A file with the same name already exists.', 'plus-webp' ) . "\r\n\r\n";
			$pluswebp_mail_send['count'] = 0;
		}

		update_option( 'pluswebp_generate_mail', $pluswebp_mail_send );

		/* translators: blogname for subject */
		$subject = sprintf( __( '[%s] WebP generate', 'plus-webp' ), get_option( 'blogname' ) );
		wp_mail( $to, $subject, $message );

	}

	/** ==================================================
	 * Webp create
	 *
	 * @param string $filename  input filename for pictures.
	 * @param string $mime_type  mimetype.
	 * @param string $filename_webp  output filename for webp.
	 * @return bool $ret create bool.
	 * @since 1.00
	 */
	private function create_webp( $filename, $mime_type, $filename_webp ) {

		if ( ! file_exists( $filename ) ) {
			return false;
		}
		if ( file_exists( $filename_webp ) ) {
			return false;
		}

		$pluswebp_settings = get_option( 'pluswebp' );
		@set_time_limit( 60 );
		@ini_set( 'memory_limit', '256M' );

		$ret = false;
		switch ( $mime_type ) {
			case 'image/jpeg':
				$src = imagecreatefromjpeg( $filename );
				$img = imagecreatetruecolor( imagesx( $src ), imagesy( $src ) );
				$bgcolor = imagecolorallocate( $img, 255, 255, 255 );
				imagefill( $img, 0, 0, $bgcolor );
				imagealphablending( $img, true );
				break;
			case 'image/png':
				$src = imagecreatefrompng( $filename );
				$img = imagecreatetruecolor( imagesx( $src ), imagesy( $src ) );
				imagealphablending( $img, false );
				imagesavealpha( $img, true );
				break;
			case 'image/bmp':
				$src = imagecreatefrombmp( $filename );
				$img = imagecreatetruecolor( imagesx( $src ), imagesy( $src ) );
				break;
			case 'image/gif':
				$src = imagecreatefromgif( $filename );
				$img = imagecreatetruecolor( imagesx( $src ), imagesy( $src ) );
				$bgcolor = imagecolorallocatealpha( $img, 0, 0, 0, 127 );
				imagefill( $img, 0, 0, $bgcolor );
				imagecolortransparent( $img, $bgcolor );
				break;
		}

		imagecopy( $img, $src, 0, 0, 0, 0, imagesx( $src ), imagesy( $src ) );
		imagedestroy( $src );
		$ret = imagewebp( $img, $filename_webp, $pluswebp_settings['quality'] );
		imagedestroy( $img );

		return $ret;

	}

	/** ==================================================
	 * Change ext
	 *
	 * @param string $before_file_name  before_file_name.
	 * @param string $ext  ext.
	 * @param bool   $addext  addext.
	 * @return array $after_file_name  after_file_name.
	 * @since 1.00
	 */
	private function change_ext( $before_file_name, $ext, $addext ) {

		if ( $addext ) {
			$after_file_name = $before_file_name . '.' . $ext;
		} else {
			$exts            = explode( '.', $before_file_name );
			$before_ext      = '.' . end( $exts );
			$after_ext       = '.' . $ext;
			$after_file_name = str_replace( $before_ext, $after_ext, $before_file_name );
		}

		return $after_file_name;

	}

	/** ==================================================
	 * Change DB
	 *
	 * @param string $before_url  before_url.
	 * @param string $after_url  after_url.
	 * @since 1.00
	 */
	private function change_db( $before_url, $after_url ) {

		global $wpdb;

		/* Replace */
		$wpdb->query(
			$wpdb->prepare(
				"
				UPDATE {$wpdb->prefix}posts
				SET post_content = replace( post_content, %s, %s )
				",
				$before_url,
				$after_url
			)
		);

	}

	/** ==================================================
	 * Upload Path
	 *
	 * @return array $upload_dir,$upload_url,$upload_path  uploadpath.
	 * @since 1.00
	 */
	public function upload_dir_url_path() {

		$wp_uploads = wp_upload_dir();

		$relation_path_true = strpos( $wp_uploads['baseurl'], '../' );
		if ( $relation_path_true > 0 ) {
			$relationalpath = substr( $wp_uploads['baseurl'], $relation_path_true );
			$basepath       = substr( $wp_uploads['baseurl'], 0, $relation_path_true );
			$upload_url     = $this->realurl( $basepath, $relationalpath );
			$upload_dir     = wp_normalize_path( realpath( $wp_uploads['basedir'] ) );
		} else {
			$upload_url = $wp_uploads['baseurl'];
			$upload_dir = wp_normalize_path( $wp_uploads['basedir'] );
		}

		if ( is_ssl() ) {
			$upload_url = str_replace( 'http:', 'https:', $upload_url );
		}

		if ( $relation_path_true > 0 ) {
			$upload_path = $relationalpath;
		} else {
			$upload_path = str_replace( site_url( '/' ), '', $upload_url );
		}

		$upload_dir  = untrailingslashit( $upload_dir );
		$upload_url  = untrailingslashit( $upload_url );
		$upload_path = untrailingslashit( $upload_path );

		return array( $upload_dir, $upload_url, $upload_path );

	}

	/** ==================================================
	 * Real Url
	 *
	 * @param  string $base  base.
	 * @param  string $relationalpath relationalpath.
	 * @return string $realurl realurl.
	 * @since  1.00
	 */
	private function realurl( $base, $relationalpath ) {

		$parse = array(
			'scheme'   => null,
			'user'     => null,
			'pass'     => null,
			'host'     => null,
			'port'     => null,
			'query'    => null,
			'fragment' => null,
		);
		$parse = wp_parse_url( $base );

		if ( strpos( $parse['path'], '/', ( strlen( $parse['path'] ) - 1 ) ) !== false ) {
			$parse['path'] .= '.';
		}

		if ( preg_match( '#^https?://#', $relationalpath ) ) {
			return $relationalpath;
		} elseif ( preg_match( '#^/.*$#', $relationalpath ) ) {
			return $parse['scheme'] . '://' . $parse['host'] . $relationalpath;
		} else {
			$base_path = explode( '/', dirname( $parse['path'] ) );
			$rel_path  = explode( '/', $relationalpath );
			foreach ( $rel_path as $rel_dir_name ) {
				if ( '.' === $rel_dir_name ) {
					array_shift( $base_path );
					array_unshift( $base_path, '' );
				} elseif ( '..' === $rel_dir_name ) {
					array_pop( $base_path );
					if ( count( $base_path ) === 0 ) {
						$base_path = array( '' );
					}
				} else {
					array_push( $base_path, $rel_dir_name );
				}
			}
			$path = implode( '/', $base_path );
			return $parse['scheme'] . '://' . $parse['host'] . $path;
		}

	}

}


