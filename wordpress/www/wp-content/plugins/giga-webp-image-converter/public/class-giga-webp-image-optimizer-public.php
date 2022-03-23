<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://gigareef.com/
 * @since      1.0.0
 *
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/public
 * @author     Michael Maffattone <mikemaff@gigareef.com>
 */
class GWIC_Public {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in GWIC_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The GWIC_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/giga-webp-image-optimizer-public.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in GWIC_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The GWIC_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/giga-webp-image-optimizer-public.js', array( 'jquery' ), $this->version, false );
		wp_localize_script( $this->plugin_name, 'giga_webp_image_optimizer_ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );	

	}

	/**
	 * Create and return giga optimize image webp formate images
	 *
	 * @param Object    $attachment send the media attachment details
	 */
	public function gwic_image_srcset_webp ( $attachment ) {
		$upload_dir = wp_upload_dir();


		$file_url = wp_get_attachment_url( $attachment->ID );
		$dir_url = dirname($file_url);
		$getFileDirWithName = get_attached_file( $attachment->ID );
		$get_dir_details = pathinfo($getFileDirWithName);
		if( isset($get_dir_details) && !empty($get_dir_details) ) {
			$get_dir = $get_dir_details['dirname'];
		}

		$img_meta_details = get_post_meta( $attachment->ID, '_giga_image_optimize_attachment_metadata' );

		$image_sizes = array();
		$get_image_sizes = $this->gwic_image_sizes();
		foreach ($get_image_sizes as $key => $value) {
			array_push($image_sizes, $key);
		}

		if( isset($img_meta_details) && !empty($img_meta_details) ){
			$img_meta_details_sizes = $img_meta_details[0]['sizes'];

			$img_srcset = array();
			$explode_file = explode('/', $img_meta_details[0]['file']);
			$fileKey = count($explode_file) - 1;
			// $fileName = $upload_dir['url'].'/'.$explode_file[$fileKey].' '.$img_meta_details[0]['width'].'w';
			$fileName = $file_url.'.webp '.$img_meta_details[0]['width'].'w';

			if( $fileName != "" ){
				array_push($img_srcset, $fileName);
			}
			foreach ($img_meta_details_sizes as $key => $meta_details) {
				if( in_array($key, $image_sizes)){
					// $fileName = $upload_dir['url'].'/'.$meta_details['file'].' '.$meta_details['width'].'w';
					$fileName = $dir_url.'/'.$meta_details['file'].' '.$meta_details['width'].'w';
					array_push($img_srcset, $fileName);
				}
			}
			$imp_img_srcset_webp = implode(', ', $img_srcset);		
		}
		else{
			$imp_img_srcset_webp = '';
		}
		return $imp_img_srcset_webp;
	}

	/**
	 * Create and return wordpress optimize image webp formate images
	 *
	 * @param Object    $attachment send the media attachment details
	 */
	public function gwic_image_srcset ( $attachment ) {
		$upload_dir = wp_upload_dir();
		$file_url = wp_get_attachment_url( $attachment->ID );
		$dir_url = dirname($file_url);
		$getFileDirWithName = get_attached_file( $attachment->ID );
		$get_dir_details = pathinfo($getFileDirWithName);
		if( isset($get_dir_details) && !empty($get_dir_details) ) {
			$get_dir = $get_dir_details['dirname'];
		}

		$img_meta_details = get_post_meta( $attachment->ID, '_wp_attachment_metadata' );
		$imp_img_srcset_webp = '';
		if( isset($img_meta_details) && !empty($img_meta_details) ){
			$img_meta_details_sizes = $img_meta_details[0]['sizes'];

			$img_srcset = array();
			$explode_file = explode('/', $img_meta_details[0]['file']);
			$fileKey = count($explode_file) - 1;
			// $fileName = $upload_dir['url'].'/'.$explode_file[$fileKey].' '.$img_meta_details[0]['width'].'w';
			$fileName = $file_url.'.webp '.$img_meta_details[0]['width'].'w';

			if( $fileName != "" ){
				array_push($img_srcset, $fileName);
			}
			foreach ($img_meta_details_sizes as $key => $meta_details) {
				//$fileName = $upload_dir['url'].'/'.$meta_details['file'].' '.$meta_details['width'].'w';
				$fileName = $dir_url.'/'.$meta_details['file'].' '.$meta_details['width'].'w';
				array_push($img_srcset, $fileName);
			}
			$imp_img_srcset_webp = implode(', ', $img_srcset);
		}

		return $imp_img_srcset_webp;
	}

	/**
	 * Get information about available image sizes
	 *
	 * @param string    $size send the media size like full, thumbnail
	 */
	public function gwic_image_sizes ( $size = '' ) {
    $wp_additional_image_sizes = wp_get_additional_image_sizes();
    $sizes = array();
    $get_intermediate_image_sizes = get_intermediate_image_sizes();
	 
    // Create the full array with sizes and crop info
    foreach( $get_intermediate_image_sizes as $_size ) {
      if ( in_array( $_size, array( 'thumbnail', 'medium', 'large' ) ) ) {
        $sizes[ $_size ]['width'] = get_option( $_size . '_size_w' );
        $sizes[ $_size ]['height'] = get_option( $_size . '_size_h' );
        $sizes[ $_size ]['crop'] = (bool) get_option( $_size . '_crop' );
      } elseif ( isset( $wp_additional_image_sizes[ $_size ] ) ) {
        $sizes[ $_size ] = array( 
          'width' => $wp_additional_image_sizes[ $_size ]['width'],
          'height' => $wp_additional_image_sizes[ $_size ]['height'],
          'crop' =>  $wp_additional_image_sizes[ $_size ]['crop']
        );
      }
    }
	 
    // Get only 1 size if found
    if ( $size ) {
      if( isset( $sizes[ $size ] ) ) {
        return $sizes[ $size ];
      } else {
        return false;
      }
    }
    return $sizes;
	}

	/**
	 * Filter Hook call add_filter => the_content
	 * Warp <picture> tag into the content images if image is optimized
	 *
	 * @param string    $content send the editor area content
	 */
	public function gwic_the_content_warp_webp_image ( $content ) {
		
		$regex_match_string = '/<img(.*)src="([^"]*)"(.*)>/Um';
    $content = preg_replace_callback($regex_match_string, function($match) {
      $pre_src   = $match[1];
      $src       = $match[2];
      $post_src  = $match[3];
      $additional_classes = array();
      $filename = basename($src);

      preg_match( '@class="([^"]+)"@' , $match[0], $class_match );
			$class = array_pop($class_match);
      $source = "";

			global $wpdb;
			$table_name = $wpdb->prefix.'postmeta';
			$attachment_list = $wpdb->get_row( "SELECT meta_id, post_id, meta_key, meta_value FROM $table_name WHERE meta_key IN ('_giga_image_optimize_attached_file','_giga_image_optimize_attachment_metadata') AND meta_value LIKE '%".$filename."%' " );
			if( isset($attachment_list) && !empty($attachment_list) ){
				$post_id = $attachment_list->post_id;
				$post = get_post( $post_id );  
	      $data_img_srcset = $this->gwic_image_srcset ( $post );
				$data_img_srcset_webp = $this->gwic_image_srcset_webp ( $post );

				$source = '<source type="image/webp" srcset="'.$data_img_srcset_webp.'" />';
				
	      array_push($additional_classes, 'sp-no-webp');

	      if(strpos($pre_src, 'class=') !== false) {
	        $pre_src = preg_replace_callback('/class\=\"(.*)\"/Um', function($match) use($additional_classes) {
	          $current_classes = $match[1];

	          $current_and_new_classes = $current_classes . " " . implode(' ', $additional_classes);

	          return 'class="' . $current_and_new_classes . '"';
	        }, $pre_src);
	      } else {
	        $pre_src = $pre_src . 'class="' . implode(' ', $additional_classes) . '" ';
	      }
	      return '<picture class="'.$class.'" loading="lazy">'.$source.'<img' . $pre_src . 'src="' . $src . '"' . $post_src . '></picture>';		
			}
			else{
				return '<img' . $pre_src . 'src="' . $src . '"' . $post_src . '>';	
			}
    }, $content);

    return $content;
	}

	/**
	 * Filter Hook call add_filter => post_thumbnail_html
	 * Warp <picture> tag into the post thumbnail, featured  images if image is optimized
	 *
	 * @param string    $html image html
	 * @param init    	$post_id post attachment id
	 * @param init    	$post_thumbnail_id post thumbnail id
	 * @param string    $size send the media size like full, thumbnail
	 * @param string    $attr send the media attr
	 */
	public function gwic_post_thumbnail_warp_webp_image ( $html, $post_id, $post_thumbnail_id, $size, $attr ) {
		global $wpdb;

		$table_name = $wpdb->prefix.'postmeta';
		$attachment_list = $wpdb->get_row( "SELECT meta_id, post_id, meta_key, meta_value FROM $table_name WHERE meta_key IN ('_giga_image_optimize_attached_file','_giga_image_optimize_attachment_metadata') AND post_id = ( SELECT meta_value FROM $table_name WHERE post_id = '".$post_id."' AND meta_key = '_thumbnail_id' )" );

		if( isset($attachment_list) && !empty($attachment_list) ){
			$image_class = "";
			$doc = new DOMDocument();
			$doc->loadHTML( $html );
			$xpath = new DOMXPath($doc);
			$imgs = $xpath->query("//img");
			for ($i=0; $i < $imgs->length; $i++) {
		    $img = $imgs->item($i);
		    $image_class = $img->getAttribute("class");
			}

			$post_id = $attachment_list->post_id;
			$post = get_post( $post_id );  
      $data_img_srcset = $this->gwic_image_srcset ( $post );
			$data_img_srcset_webp = $this->gwic_image_srcset_webp ( $post );

			$source = '<source type="image/webp" srcset="'.$data_img_srcset_webp.'" />';
			$warpWebp = '<picture class="'.$image_class.'" loading="lazy">'.$source. ''. $html .'</picture>';		
			$html = $warpWebp;
		}
    return $html;
	}

}
