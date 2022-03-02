<?php
/**
 * Plugin Name: LP Image Compression
 * Description: LivePerson image compression extensions - requires TinyPNG compression plugin and WP Offload Media Lite plugin.
 * Version: 1.0.0
 * Author: Rob Lester, LivePerson
 */

class LP_Image_Compression
{
	public function __construct()
	{
		add_action( 'wp_update_attachment_metadata', [$this, 'trigger_static_bust'], 120, 2);
		
	}
	
	public function trigger_static_bust($data, $id)
	{
		$zap = 'https://hooks.zapier.com/hooks/catch/2941791/bir373r/';
		
		$image = wp_get_attachment_image_src($id, 'full');
		if ($image !== false) {
			try {
				wp_remote_post($zap, [
					'body' => [
						'path' => preg_replace("/(^.*(:[0-9]*|\.com))/", "", $image[0])
					]
				]);
			} catch (Exception $e) {
				
			}
		}
		
		$meta         = wp_get_attachment_metadata( $id );
		$backup_sizes = get_post_meta( $id, '_wp_attachment_backup_sizes', true );
		$file         = get_attached_file( $id );
		
		if (metadata_exists('post', $id, 'tiny_compress_images') != '') {
			wp_delete_attachment_files( $id, $meta, $backup_sizes, $file );
		}
		
		return $data;
	}
	
	public function admin_notice__error() {
		$class = 'notice notice-error';
		$message = __( 'Irks! An error has occurred.', 'sample-text-domain' );
		
		printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), esc_html( $message ) );
	}
	
}
new LP_Image_Compression;