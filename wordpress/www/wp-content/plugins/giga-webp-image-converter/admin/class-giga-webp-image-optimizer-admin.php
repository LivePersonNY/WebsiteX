<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://gigareef.com/
 * @since      1.0.0
 *
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/admin
 * @author     Michael Maffattone <mikemaff@gigareef.com>
 */
class GWIC_Admin {

	/**
	 * The options name to be used in this plugin
	 *
	 * @since  	1.0.0
	 * @access 	private
	 * @var  	string 		$option_name 	Option name of this plugin
	 */
	private $option_name = 'giga_webp_image_optimizer_gio_option';

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
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles () {

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

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/giga-webp-image-optimizer-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts () {

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

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/giga-webp-image-optimizer-admin.js', array( 'jquery' ), $this->version, false );
		wp_localize_script( $this->plugin_name, 'giga_webp_image_optimizer_ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );		

	}

	/**
	 * Add the menu page.
	 *
	 * @return    void
	 *
	 * @since    1.0.0
	 */
	public function gwic_add_menu_page (){
		if (current_user_can('manage_options')) {
			add_menu_page( __('Giga WebP Image Converter', 'giga-webp-image-converter'), __('Giga WebP Image Converter', 'giga-webp-image-converter'), 'manage_options', $this->plugin_name, array(&$this, 'gwic_display_options_page'), '', 10 );
			// add_submenu_page( 'giga-webp-image-optimizer', __('Settings', 'giga-webp-image-optimizer-settings'), __('Settings', 'giga-webp-image-optimizer-settings'), 'manage_options', 'giga-webp-image-optimizer-settings', array(&$this, 'gwic_display_settings_page') );
		}
	}

	/**
	 * Plugin settings page display
	 */
	public function gwic_display_settings_page () {
		$giga_captcha_data = $this->gwic_generate_captcha_string();
		$giga_activate_data = $this->gwic_get_user_activate_data();
		$giga_settings_data = $this->gwic_get_user_settings_data();
		include_once 'partials/giga-webp-image-optimizer-admin-settings.php';
	}

	/**
	 * Plugin settings register
	 */
	public function gwic_register_setting () {
		add_settings_section(
			$this->option_name . '_general',
			__( 'Giga WebP Image Converter', 'gio' ),
			array( $this, $this->option_name . '_general_cb' ),
			$this->plugin_name
		);
	}

	/**
	 * Plugin settings callback function
	 */
	public function gwic_gio_option_general_cb() { ?>
		<h2><?php esc_html_e( 'Configuration', 'giga-webp-image-converter' ); ?></h2>
		<p>	<?php esc_html_e( 'New images uploaded to the Media Library will be converted automatically if you checked the check box', 'giga-webp-image-converter' ); ?></p>
	<?php }

	/**
	 * Render the options page for plugin
	 *
	 * @since  1.0.0
	 */
	public function gwic_display_options_page () {
		$posts_per_page = get_option('posts_per_page');
		if(isset($posts_per_page) && $posts_per_page > 0) {
			$posts_per_page = get_option('posts_per_page');
		}
		else{
			$posts_per_page = 50;
		}
		
		if (isset($_GET["pageno"])) {
			if( is_numeric($_GET["pageno"]) ) {
				$pageno  = $_GET["pageno"];
			}else{
				$pageno=1; 
			}
		} else { 
			$pageno=1; 
		};  
		$start_from = ($pageno-1) * $posts_per_page; 
		$get_optimized_data = $this->gwic_get_all_converted_images();
		$total_records = count($get_optimized_data);
		$total_pages = ceil($total_records / $posts_per_page);

		$get_total_records = $this->gwic_get_all_images();

		$giga_captcha_data = $this->gwic_generate_captcha_string();
		$not_optimized_image_ids = $this->gwic_get_not_optimized_image_ids();
		$giga_optimized_images = $this->gwic_get_all_converted_images($posts_per_page,$pageno);
		$giga_activate_data = $this->gwic_get_user_activate_data();
		$giga_settings_data = $this->gwic_get_user_settings_data();
		include_once 'partials/giga-webp-image-optimizer-admin-display.php';
	}

	/**
	 * Add extra columns name into the media Library list table
	 *
	 * @param array $posts_columns
	 *
	 * Filter Hook call add_filter => manage_media_columns 
	 */
	public function gwic_compression_media_columns ( $posts_columns ) {
		$posts_columns['giga_image_compression'] = 'Giga WebP Image Converter';
		return $posts_columns;
	}

	/**
	 * Add custom column button
	 *
	 * @param string $column_name
	 */
	public function giga_image_compression_custom_column ( $column_name ) {
		if ( 'giga_image_compression' !== $column_name ) {
			return;
		} ?>
		<input type="button" width="100%" name="optimize_image_button" value="<?php esc_html_e( 'Convert', 'giga-webp-image-converter' ); ?>" />
	<?php }

	/**
	 * Display optimize button custom column in the Media list table.
	 *
	 * @param string $column_name Name of the custom column.
	 * @param int    $post_id Current Attachment ID.
	 *
	 * Action Hook call add_action => manage_media_custom_column 
	 */
	public function gwic_image_custom_column_button ( $column_name, $post_id ) {
		if ( 'giga_image_compression' !== $column_name ) {
			return;
		}
		if( wp_attachment_is_image( $post_id ) ){
			$img_meta_details = get_post_meta( $post_id, '_wp_attachment_metadata' );
			if( isset($img_meta_details) && !empty($img_meta_details) ){
				$meta_key = '_giga_image_optimize_attached_file';
				$is_img_optimized = $this->gwic_is_image_optimized( $post_id, $meta_key );

				if( $is_img_optimized ){
					// esc_html__( 'Converted', 'giga-webp-image-converter' );
					esc_html_e( 'Converted', 'giga-webp-image-converter' );
				}
				else{ ?>
					<span id="giga_optimize_image_span_<?php esc_html_e( $post_id, 'giga-webp-image-converter' ); ?>">
						<input class="giga_optimize_image_button button" type="button" width="100%" name="optimize_image_button" id="optimize_image_button_<?php esc_html_e( $post_id, 'giga-webp-image-converter' ); ?>" data-postid="<?php esc_html_e( $post_id, 'giga-webp-image-converter' ); ?>" value="<?php esc_html_e( 'Convert', 'giga-webp-image-converter' ); ?>" />
					<span>
				<?php } ?>
				<span id="giga-optimize-loading-message-<?php esc_html_e( $post_id, 'giga-webp-image-converter' ); ?>"></span>
				<span id="giga-optimize-show-message-<?php esc_html_e( $post_id, 'giga-webp-image-converter' ); ?>" class="giga-optimize-show-message"></span>
			<?php }
		}
	}

	/**
	 * Plugin active against API key Ajax Call
	 */
	public function gwic_plugin_activate () {
		global $wpdb;
		if( isset($_POST['api_key']) ){
			$api_key = sanitize_text_field($_POST['api_key']);
		}else{
			$api_key = "";
		}
		$table_name =  $wpdb->prefix.'giga_image_optimizer_active_list';
		$activate_data = $this->gwic_get_user_activate_data();
		if( isset($activate_data) && !empty($activate_data) ) {
			if( count($activate_data) > 0 ) {
				if( $activate_data->private_api_key == trim($api_key," ") ){
					$activate_id = $activate_data->id;
					$wpdb->update( 
			    	$table_name, 
				    array(
			        'is_activated' => 'Y'
				    ), 
				    array(
			        "id" => $activate_id
				    )
					);
					echo 1;
				}
				else{
					echo 0;
				}
			}
			else{
				echo 0;
			}
		}
		else{
			echo 0;
		}
		exit();
	}

	/**
	 * Optimize image ajax call
	 *
	 * @param int    $post_id Current Attachment ID.
	 */
	public function gwic_converted_image_ajax () {
		$get_post_id = sanitize_textarea_field($_POST['id']);
		$return = $this->gwic_generate_optimize_image ( $get_post_id );
		echo $return;
		exit();
	}

	/**
	 * Is image converted or not check
	 *
	 * @param int    	$post_id Current Attachment ID.
	 * @param string  $meta_key meta table key _giga_image_optimize_attached_file
	 */
	public function gwic_is_image_optimized ( $post_id, $meta_key ) {
		$img_meta_details = get_post_meta( $post_id, $meta_key );
		if( isset($img_meta_details) ){
			if( !empty($img_meta_details) ) {
				if( count($img_meta_details) > 0) {
					return 1;
				}
				else{
					return 0;
				}
			}
			else{
				return 0;
			}
		}
		else{
			return 0;
		}
	}

	/**
	 * Optimized image and uploaded to its folder
	 *
	 * @param string  $source_url current image source url
	 * @param string  $destination_url where to store optimized image
	 * @param int    	$quality image decrease quality value
	 */
	public function gwic_converted_image ( $source_url, $destination_url, $quality ) {
		/*$image_info = getimagesize($source_url);
		$file = basename($source_url);
		
		if ($image_info['mime'] == 'image/jpeg') $image = imagecreatefromstring(file_get_contents($source_url));
		elseif ($image_info['mime'] == 'image/gif') $image = imagecreatefromstring(file_get_contents($source_url));
		elseif ($image_info['mime'] == 'image/png') $image = imagecreatefromstring(file_get_contents($source_url));

		ob_start();
		imagejpeg( $image, NULL, $quality );
		$cont = ob_get_contents();
		ob_end_clean();
		imagedestroy( $image );
		$content = imagecreatefromstring( $cont );
		// $output = $destination_url;

		if( imagewebp( $content, $destination_url ) ){
			imagedestroy( $content );
			return 1;
		}
		else{
			imagedestroy( $content );
			return 0;
		}*/

		$image_info = getimagesize($source_url);
		if ($image_info['mime'] == 'image/jpeg') $image = imagecreatefromjpeg($source_url);
		elseif ($image_info['mime'] == 'image/gif') $image = imagecreatefromgif($source_url);
		elseif ($image_info['mime'] == 'image/png') $image = imagecreatefrompng($source_url);

		if( imagejpeg($image, $destination_url, $quality) ){
			return 1;
		}
		else{
			return 0;
		}		
	}

	/**
	 * Converted image and uploaded to its folder
	 *
	 * @param string    $source_url current image source url
	 * @param string    $destination_url where to store converted image
	 * @param int    		$quality image decrease quality value
	 *
	 * Filter Hook call add_filter => wp_get_attachment_image_attributes 
	 */
	public function gwic_add_attachment_image_attributes ( $atts, $attachment, $size ) {
		$imp_img_srcset = $this->gwic_image_srcset ( $attachment );
		$imp_img_srcset_webp = $this->gwic_image_srcset_webp ( $attachment );

		$attr['class'] = $atts['class'].' giga-webp-image-optimizer-img';
		$attr['src'] = $atts['src'];
		$attr['data-img-srcset'] = $imp_img_srcset;
		$attr['data-img-srcset-webp'] = $imp_img_srcset_webp;
		$attr['data-img-ID'] = $attachment->ID;
    return $attr;
	}

	/**
	 * Create and return giga convert image webp formate images
	 *
	 * @param Object    $attachment send the media attachment details
	 */
	public function gwic_image_srcset_webp ( $attachment ) {
		$upload_dir = wp_upload_dir();
		$img_meta_details = get_post_meta( $attachment->ID, '_giga_image_optimize_attachment_metadata' );

		$file_url = wp_get_attachment_url( $attachment->ID );
		$dir_url = dirname($file_url);

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
			$fileName = $file_url.'.webp '.$img_meta_details[0]['width'].'w';

			if( $fileName != "" ){
				array_push($img_srcset, $fileName);
			}
			if(isset($img_meta_details_sizes) && !empty($img_meta_details_sizes) ){
				foreach ($img_meta_details_sizes as $key => $meta_details) {
					if( in_array($key, $image_sizes)){
						$fileName = $dir_url.'/'.$meta_details['file'].' '.$meta_details['width'].'w';
						array_push($img_srcset, $fileName);
					}
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
	 * Create and return wordpress convert image webp formate images
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
			$fileName = $file_url.'.webp '.$img_meta_details[0]['width'].'w';

			if( $fileName != "" ){
				array_push($img_srcset, $fileName);
			}
			foreach ($img_meta_details_sizes as $key => $meta_details) {
				$fileName = $dir_url.'/'.$meta_details['file'].' '.$meta_details['width'].'w';
				array_push($img_srcset, $fileName);
			}
			$imp_img_srcset_webp = implode(', ', $img_srcset);
		}

		return $imp_img_srcset_webp;
	}

	/**
	 * Get all giga converted images list
	 *
	 * @param 
	 */	
	public function gwic_get_all_converted_images ($posts_per_page='',$paged='') {
		if( $posts_per_page !="" && $paged !=""){
			$query_images_args = array(
		    'post_type' => 'attachment',
		    'post_mime_type' =>'image',
		    'post_status' => 'inherit',
		    'orderby' => 'ID',
        'order' => 'desc',
		    'posts_per_page' => $posts_per_page,
		    'paged' => $paged,
		    'meta_query' => array(
	        array(
	          'key' => '_giga_image_optimize_attached_file', 
	        )
	      ),
			);
		}
		else {
			$query_images_args = array(
		    'post_type' => 'attachment',
		    'post_mime_type' =>'image',
		    'post_status' => 'inherit',
		    'orderby' => 'ID',
        'order' => 'desc',
		    'posts_per_page' => -1,
		    'meta_query' => array(
	        array(
	          'key' => '_giga_image_optimize_attached_file', 
	        )
	      ),
			);
		}


		$query_images = new WP_Query( $query_images_args );
		$images = array();
		$i = 0;
		foreach ( $query_images->posts as $image) {
			$attach_details = $this->gwic_get_attachment_details( $image->ID );
			$webp_attach_details = $this->gwic_get_attachment_details( $image->ID, '.webp' );
	    $images[$i]['image_id'] = $image->ID;
	    $images[$i]['image_url'] = wp_get_attachment_url( $image->ID );
	    $images[$i]['image_details'] = $attach_details;
	    $images[$i]['webp_image_details'] = $webp_attach_details;
		$i++; }
		return $images;
	}

	/**
	 * Get media image attachment details
	 *
	 * @param int    		$ID attachment ID
	 * @param string    $extra_extension send others image extension like .webp
	 *
	 * @return array 	Return full, large, medium, thumbnail size media data
	 */
	public function gwic_get_attachment_details ( $ID, $extra_extension = '' ) {
		$attach_details = wp_get_attachment_metadata( $ID );
		$images_data = array();
		$upload_dir = wp_upload_dir(); // path,url,subdir,basedir,baseurl

		$file_url = wp_get_attachment_url( $ID );
		$dir_url = dirname($file_url);
		$getFileDirWithName = get_attached_file( $ID );
		$get_dir_details = pathinfo($getFileDirWithName);
		if( isset($get_dir_details) && !empty($get_dir_details) ) {
			$get_dir = $get_dir_details['dirname'];
		}

		$attach_details_sizes = $attach_details['sizes'];

		$base_dir = $upload_dir['basedir'];
		$sub_dir = $upload_dir['subdir'];
		$main_url = $upload_dir['url'];
		$base_url = $upload_dir['baseurl'];
		$file_path = ""; $size_in_bytes = ""; $size = "";
		
		if( isset($attach_details['file']) && !empty($attach_details['file']) ){
			$file_path = $base_dir .'/'. $attach_details['file'] . $extra_extension;
			$size_in_bytes = filesize( $file_path );
			$size = size_format( filesize( $file_path ), 2 );
		}
		$url = $base_url .'/'. $attach_details['file'] . $extra_extension;


		$images_data['full']['file_path'] = $file_path;
		$images_data['full']['url'] = $url;
		$images_data['full']['size_in_bytes'] = $size_in_bytes;
		$images_data['full']['size'] = $size;
		

		foreach( $attach_details_sizes as $key => $details_size) {
			if( $key == 'large' || $key == 'medium' || $key == 'thumbnail' ) {
				$file_path = ""; $size_in_bytes = ""; $size = "";
				if( isset($details_size['file']) && !empty($details_size['file']) ){
					$file_path = $get_dir .'/'. $details_size['file'] . $extra_extension;
					$size_in_bytes = filesize( $file_path );
					$size = size_format( filesize( $file_path ), 2 );
				}
				$url = $dir_url .'/'. $details_size['file'] . $extra_extension;

				$images_data[$key]['file_path'] = $file_path;
				$images_data[$key]['url'] = $url;
				$images_data[$key]['size_in_bytes'] = $size_in_bytes;
				$images_data[$key]['size'] = $size;
			}
		}
		return $images_data;
	}

	/**
	 * Get not converted image ids
	 */
	public function gwic_get_not_optimized_image_ids () {
		$image_query_args = array(
	    'post_type' => 'attachment',
	    'post_mime_type' =>'image',
	    'post_status' => 'inherit',
	    'posts_per_page' => -1,
		);
		$images = new WP_Query( $image_query_args );

		$optimized_images = $this->gwic_get_all_converted_images();
		$optimized_image_ids = array();
		foreach ( $optimized_images as $value) {
			array_push($optimized_image_ids, $value['image_id']);	
		}

		$not_optimized_image_ids = array();
		$i = 0;
		foreach ( $images->posts as $value) {
			if( !in_array($value->ID, $optimized_image_ids) ) {
				array_push($not_optimized_image_ids, $value->ID);
			}
		$i++; }
		return $not_optimized_image_ids;
	}

	/**
	 * Get information about available image sizes
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
	 * Optimize and convert to the WEBP format image after upload image 
	 *
	 * @param array $form_fields
	 * @param int 	$attachment_id 
	 *
	 * Filter Hook call add_filter => attachment_fields_to_edit 
	 */
	public function gwic_convert_image_after_upload_filter ( $metadata,  $attachment_id ) {
		$optimize_image = $this->gwic_generate_optimize_image( $attachment_id );
		return $metadata; 
		exit();
	}

	/**
	 * Create WEBP format image
	 */
	public function gwic_generate_optimize_image ( $ids ) {
		$get_post_id = $ids;
		$return = ''; $not_optimized = array();
		if( isset($get_post_id) && !empty($get_post_id) ){
			$explode_post_id = explode(',', $get_post_id);
			foreach($explode_post_id as $post_id) {
				$settings_data = $this->gwic_get_user_settings_data();
				if( isset($settings_data) && !empty($settings_data) ){
					$quality = $settings_data->optimize_percentage;
					if( $quality > 57 && $quality < 75) {
						$quality = 58;
					}
					elseif( $quality >= 75 && $quality <= 85) {
						$quality = 59;
					}
					elseif( $quality >= 85 && $quality <= 100) {
						$quality = 60;
					}else{
						$quality = $quality;
					}
				}
				else{
					$quality = 60;
				}
				$get_attachment_metadata = array();
				if( is_numeric($post_id) ){
					$attach_details = wp_get_attachment_metadata($post_id);
					$upload_dir = wp_upload_dir(); // path,url,subdir,basedir,baseurl
					
					/*$file_url = $upload_dir['baseurl'].'/'.$attach_details['file'];
					$explode_file_url = explode('/',parse_url($file_url)['path']);   
					$filename = $explode_file_url[count($explode_file_url)-1];
					$get_dir = $upload_dir['path']; // Full Path
					$change_file_extension_name = $filename.'.webp';
					$destination_url = $get_dir.'/'.$change_file_extension_name;*/

					if(isset($attach_details) && !empty($attach_details)) {
						$get_dir = ""; $destination_url = ""; $optimize_main_image = false; $subdir = ""; $meta_value = "";

						$file_url = wp_get_attachment_url( $post_id );
						$filename = basename(get_post_meta( $post_id, '_wp_attached_file', true));
						$getFileDirWithName = get_attached_file( $post_id );
						$get_dir_details = pathinfo($getFileDirWithName);
						if( isset($get_dir_details) && !empty($get_dir_details) ) {
							$get_dir = $get_dir_details['dirname'];
						}
						$change_file_extension_name = $filename.'.webp';
						if( $get_dir !="" ) {
							$destination_url = $get_dir.'/'.$change_file_extension_name;
						}

						if( $destination_url !="" ) {
							$optimize_main_image =  $this->gwic_converted_image($file_url, $destination_url, $quality);
						}

						if($optimize_main_image) {
							/*$meta_value = ltrim($upload_dir['subdir'], '/').'/'.$change_file_extension_name;
							update_post_meta( $post_id, '_giga_image_optimize_attached_file', $meta_value );

							$get_attachment_metadata['file'] = ltrim($upload_dir['subdir'], '/').'/'.$change_file_extension_name;
							$get_attachment_metadata['width'] = $attach_details['width'];
							$get_attachment_metadata['height'] = $attach_details['height'];
							$get_attachment_metadata['mime-type'] = "image/webp";*/

							if( isset($attach_details['file']) && $attach_details['file'] != "" ){
								$get_directory_details = pathinfo($attach_details['file']);
								if( isset($get_directory_details) && !empty($get_directory_details) ){
									$subdir = $get_directory_details['dirname'];
									$meta_value = $subdir.'/'.$change_file_extension_name;
								}
							}
							if( $meta_value != "" ){
								update_post_meta( $post_id, '_giga_image_optimize_attached_file', $meta_value );
								$get_attachment_metadata['file'] = $meta_value;
								$get_attachment_metadata['width'] = $attach_details['width'];
								$get_attachment_metadata['height'] = $attach_details['height'];
								$get_attachment_metadata['mime-type'] = "image/webp";
							}
						}

						$attach_sizes = $attach_details['sizes'];
						if( isset($attach_sizes) && !empty($attach_sizes) ) {
							foreach( $attach_sizes as $key => $size ) {
								$optimize_image_size_name = $key;
								if( $get_dir !="" ){
									$size_file_url = $get_dir.'/'.$size['file'];
									$change_file_extension_name = $size['file'].'.webp';
									$size_destination_url = $get_dir.'/'.$change_file_extension_name;
									$optimize_image = $this->gwic_converted_image($size_file_url, $size_destination_url, $quality);

									if($optimize_image) {
										$get_attachment_metadata['sizes'][$optimize_image_size_name]['file'] = $change_file_extension_name;
										$get_attachment_metadata['sizes'][$optimize_image_size_name]['width'] = $size['width'];
										$get_attachment_metadata['sizes'][$optimize_image_size_name]['height'] = $size['height'];
										$get_attachment_metadata['sizes'][$optimize_image_size_name]['mime-type'] = "image/webp";
									}							
								}
							}
						}

						/*$attach_sizes = $attach_details['sizes'];
						if( isset($attach_sizes) && !empty($attach_sizes) ) {
							foreach( $attach_sizes as $key => $size ) {
								$optimize_image_size_name = $key;
								$size_file_url = $upload_dir['baseurl'].''.$upload_dir['subdir'].'/'.$size['file'];
								$change_file_extension_name = $size['file'].'.webp';
								$size_destination_url = $get_dir.'/'.$change_file_extension_name;
								$optimize_image = $this->gwic_converted_image($size_file_url, $size_destination_url, $quality);
								
								if($optimize_image) {
									$get_attachment_metadata['sizes'][$optimize_image_size_name]['file'] = $change_file_extension_name;
									$get_attachment_metadata['sizes'][$optimize_image_size_name]['width'] = $size['width'];
									$get_attachment_metadata['sizes'][$optimize_image_size_name]['height'] = $size['height'];
									$get_attachment_metadata['sizes'][$optimize_image_size_name]['mime-type'] = "image/webp";
								}
							}
						}*/

						if( isset($attach_details['original_image']) && $attach_details['original_image'] !="") {
							/*$file_url = $upload_dir['url'].'/'.$attach_details['original_image'];
							$filename = $attach_details['original_image']; 
							$get_dir = $upload_dir['path']; // Full Path
							$change_file_extension_name = $filename.'.webp';
							$destination_url = $get_dir.'/'.$change_file_extension_name;

							$optimize_original_image =  $this->gwic_converted_image($file_url, $destination_url, $quality);
							if($optimize_original_image) {
								$get_attachment_metadata['original_image'] = $attach_details['original_image'].'.webp';
							}*/

							if( $get_dir !="" ) {
								$file_url = $get_dir.'/'.$attach_details['original_image'];
								$filename = $attach_details['original_image'];
								$change_file_extension_name = $filename.'.webp';
								$destination_url = $get_dir.'/'.$change_file_extension_name;
								$optimize_original_image =  $this->gwic_converted_image($file_url, $destination_url, $quality);
								if($optimize_original_image) {
									$get_attachment_metadata['original_image'] = $attach_details['original_image'].'.webp';
								}
							}
						}

						if($optimize_main_image) {
							update_post_meta( $post_id, '_giga_image_optimize_attachment_metadata', $get_attachment_metadata );
						}
						else{
							array_push($not_optimized, $post_id);
						}

						$return = true;
					}
					else{
						$return = false;
					}
				}
				else{
					$return = false;
				}				
			}
		}
		else{
			$return = false;
		}
		$return_data = array(
			'not_optimized_ids' => $not_optimized,
			'return' => $return
		);
		// echo json_encode($return_data);

		return $return;	
	}

	/**
	 * Ajax call for settings Quality Percentage and Optimized Automatically data save
	 */
	public function gwic_settings_data_save () {
		global $wpdb;

		if( isset($_POST['percentage']) ){
			$get_percentage = sanitize_text_field($_POST['percentage']);
			if( is_numeric($get_percentage) && $get_percentage > 0){
				$percentage = $get_percentage;
			}else{
				$percentage = 60;
			}
		}
		else {
			$percentage = 60;
		}

		$optimized_automatically = sanitize_text_field($_POST['optimized_automatically']);
		$user_id = get_current_user_id();
		$table_name = $wpdb->prefix.'giga_image_optimizer_settings';
		$plugin_activate_table_name =  $wpdb->prefix.'giga_image_optimizer_active_list';
			
		$activate_list = $wpdb->get_row( "SELECT * FROM $plugin_activate_table_name " );
		$settings_data = $wpdb->get_row( "SELECT * FROM $table_name " );
		$email = "";
		$active_id = "";
		$settings_id = "";
		if( isset($activate_list) && !empty($activate_list) ) {
			$email = $activate_list->email;
			$active_id = $activate_list->id;
		}

		if( isset($settings_data) && !empty($settings_data) ) { 
			if( $settings_data->id > 0 ) { 
				$settings_id = $settings_data->id;
				$wpdb->update( 
			    $table_name, 
			    array( 
		        'user_id'     							=> $user_id,
		        'email'    									=> $email,
		        'active_id' 								=> $active_id,
		        'is_automatically_optimize' => $optimized_automatically,
		        'optimize_percentage' 			=> $percentage,
		        'updated_at' 								=> date('Y-m-d H:i:s'),
			    ), 
			    array(
		        "id" => $settings_id
			    )
				);
			}
			else {
				$wpdb->insert( 
			    $table_name, 
			    array( 
		        'user_id'     							=> $user_id,
		        'email'    									=> $email,
		        'active_id' 								=> $active_id,
		        'is_automatically_optimize' => $optimized_automatically,
		        'optimize_percentage' 			=> $percentage,
			    )
				);
				$settings_id = $wpdb->insert_id;				
			}
		}
		else{
			$wpdb->insert( 
		    $table_name, 
		    array( 
	        'user_id'     							=> $user_id,
	        'email'    									=> $email,
	        'active_id' 								=> $active_id,
	        'is_automatically_optimize' => $optimized_automatically,
	        'optimize_percentage' 			=> $percentage,
		    )
			);
			$settings_id = $wpdb->insert_id;	
		}
		echo $settings_id;
		exit();
	}

	/**
	 * Get plugin activate data
	 */
	public function gwic_get_user_activate_data () {
		global $wpdb;

		$user_id = get_current_user_id();
		$table_name = $wpdb->prefix.'giga_image_optimizer_active_list';
		$activate_data = $wpdb->get_row( "SELECT * FROM $table_name" );
		return $activate_data;
	}

	/**
	 * Get plugin settings data
	 */
	public function gwic_get_user_settings_data () {
		global $wpdb;

		$user_id = get_current_user_id();
		$table_name = $wpdb->prefix.'giga_image_optimizer_settings';
		$settings_data = $wpdb->get_row( "SELECT * FROM $table_name" );
		return $settings_data;
	}	

	/**
	 * Ajax call for settings API key mail send
	 */
	public function gwic_settings_api_key_send () {
		global $wpdb;

		$email = sanitize_email($_POST['email']);
		$website = sanitize_text_field($_POST['website']);
		$api_key = md5(uniqid(rand(), true));
		$table_name =  $wpdb->prefix.'giga_image_optimizer_active_list';
		$settings_table_name = $wpdb->prefix.'giga_image_optimizer_settings';
		$activate_list = $wpdb->get_row( "SELECT * FROM $table_name " );
		$settings_list = $wpdb->get_row( "SELECT * FROM $settings_table_name " );

		if( isset($activate_list) ) {
			if( count($activate_list) > 0) {
				$activate_id = $activate_list->id;
				$wpdb->update( 
		    	$table_name, 
			    array(
		        'email' => $email,
		        'private_api_key' => $api_key,
		        'is_activated' => 'Y',
			    ), 
			    array(
		        "id" => $activate_id
			    )
				);
				if( isset($settings_list) ) {
					if( count($settings_list) > 0) {
						$settings_id = $settings_list->id;
						$wpdb->update( 
				    	$settings_table_name, 
					    array(
				        'is_automatically_optimize' => 1,
				        'optimize_percentage' => 60,
				        'active_id' => $activate_id,
					    ), 
					    array(
				        "id" => $settings_id
					    )
						);
					}
					else{
						$wpdb->insert( 
					    $settings_table_name, 
					    array(
				        'is_automatically_optimize' => 1,
				        'optimize_percentage' => 60,
				        'active_id' => $activate_id,
					    )
						);
						$settings_id = $wpdb->insert_id;	
					}
				}
				else{
					$wpdb->insert( 
				    $settings_table_name, 
				    array(
			        'is_automatically_optimize' => 1,
			        'optimize_percentage' => 60,
			        'active_id' => $activate_id,
				    )
					);
					$settings_id = $wpdb->insert_id;	
				}
			}
		}
		else{
			$wpdb->insert( 
		    $table_name, 
		    array(
	        'email' => $email,
	        'private_api_key' => $api_key,
	        'is_activated' => 'Y',
		    )
			);
			$activate_id = $wpdb->insert_id;	
			$wpdb->insert( 
		    $settings_table_name, 
		    array(
	        'is_automatically_optimize' => 1,
	        'optimize_percentage' => 60,
	        'active_id' => $activate_id,
		    )
			);
			$settings_id = $wpdb->insert_id;	
		}

		if( $email != "" && $activate_id > 0 ) {
			echo 1;
		}
		else{
			echo 0;
		}
		exit();
	}

	/**
	 * Adding our custom fields to the $form_fields array
	 * Show Converted button when you view an image or edit
	 * 
	 * @param array 	$form_fields
	 * @param object 	$post
	 * @return array
	 *
	 * Filter Hook call add_filter => attachment_fields_to_edit 
	 */
	public function gwic_attachment_fields_to_optimize ( $form_fields, $post ) {
		if( wp_attachment_is_image( $post->ID ) ){
			$img_meta_details = get_post_meta( $post->ID, '_wp_attachment_metadata' );
			if( isset($img_meta_details) && !empty($img_meta_details) ){
				$meta_key = '_giga_image_optimize_attached_file';
				$is_img_optimized = $this->gwic_is_image_optimized( $post->ID, $meta_key );

				if( $is_img_optimized ){
					$button_html = '<b>Converted</b>';
				}
				else{
					$button_html = '<span id="giga_optimize_image_span_'.$post->ID.'"><input class="giga_optimize_image_button button" type="button" width="100%" name="optimize_image_button" id="optimize_image_button_'.$post->ID.'" data-postid="'.$post->ID.'" value="Convert" /><span>';
				}

				$button_html .= '<span id="giga-optimize-loading-message-'.$post->ID.'"></span><span id="giga-optimize-show-message-'.$post->ID.'" class="giga-optimize-show-message"></span>';

				
				$form_fields["source_url"] = array(
					"label" => __(""),
					"input" => "html",
					'html'  => $button_html,
				);
				return $form_fields;
			}
		}
		else{
			return $form_fields;
		}
	}

	/**
	 * Attachment delete hook call for unlink webp images file
	 *
	 * @param int $ID this is attachment id
	 *
	 * Action Hook call add_action => delete_attachment 
	 */
	public function gwic_delete_attachment ( $ID ) {
		/**
		 *Unlink WEBP file for delete
		 */
		$attach_details = get_post_meta( $ID, '_giga_image_optimize_attachment_metadata' );
		if( isset($attach_details) && !empty($attach_details) ){
			$images_data = array();
			$upload_dir = wp_upload_dir(); // path,url,subdir,basedir,baseurl
			$file_url = wp_get_attachment_url( $ID );
			$dir_url = dirname($file_url);

			$getFileDirWithName = get_attached_file( $ID );
			$get_dir_details = pathinfo($getFileDirWithName);
			if( isset($get_dir_details) && !empty($get_dir_details) ) {
				$get_dir = $get_dir_details['dirname'];
			}

			$attach_details_sizes = $attach_details[0]['sizes'];
			$images_data[] = $getFileDirWithName;
			foreach( $attach_details_sizes as $key => $details_size) {
				if( $get_dir != "" ){
					$images_data[] = $get_dir.'/'.$details_size['file'];
				}
			}
			if( isset($attach_details[0]['original_image']) && $attach_details[0]['original_image'] !="") {
				if( $get_dir != "" ){
					$images_data[] = $get_dir.'/'.$attach_details[0]['original_image'];
				}
			}

			if( isset($images_data) && !empty($images_data) ) {
				foreach ($images_data as $images_path) {
					unlink($images_path);
				}
			}
		}

		/**
		 *Unlink main file for delete
		 */
		$getFileDirWithName = get_attached_file( $ID );
		if( isset($getFileDirWithName) && !empty($getFileDirWithName) ){
			$get_dir_details = pathinfo($getFileDirWithName);
			if( isset($get_dir_details) && !empty($get_dir_details) ) {
				unlink( $get_dir.'/'.$get_dir_details['filename'] );
			}
		}
	}

	/**
	 * Get converted attach file path
	 *
	 * Action Hook call add_action => get_attached_file  
	 */
	public function gwic_get_attached_file_filter ( $array, $int ) {
		global $wpdb;

		$upload_dir = wp_upload_dir();
		$table_name = $wpdb->prefix.'postmeta';
		$attachment_list = $wpdb->get_row( "SELECT meta_id, post_id, meta_key, meta_value FROM $table_name WHERE post_id = '".$int."' AND meta_key = '_giga_image_optimize_attached_file' " );

		if( isset($attachment_list) && !empty($attachment_list) ){
			$file_path = $upload_dir['basedir'].'/'.$attachment_list->meta_value;
			return $file_path;
		}
		else{
			return $array;
		}
	} 

	/**
	 * Editor to add extra parameter into image html like data-img-ID 
	 * When you insert image into the editor section
	 *
	 * Filter Hook call add_filter => image_send_to_editor 
	 */
	public function gwic_add_custom_data_attribute_send_to_editor( $html, $id, $caption, $title, $align, $url, $size, $alt ){ 
		global $wpdb;

		if( $id > 0 ){
			$upload_dir = wp_upload_dir();
			$table_name = $wpdb->prefix.'postmeta';
			$attachment_list = $wpdb->get_row( "SELECT meta_id, post_id, meta_key, meta_value FROM $table_name WHERE post_id = '".$id."' AND meta_key = '_giga_image_optimize_attached_file' " );

			if( isset($attachment_list) && !empty($attachment_list) ){
	      $post = get_post( $id );        
	      $img_size = wp_get_attachment_image_src($id, 'full'); // get media full size url
	      $imp_img_srcset = $this->gwic_image_srcset ( $post );
				$imp_img_srcset_webp = $this->gwic_image_srcset_webp ( $post );

				$data = sprintf( ' data-img-ID="%s"', esc_attr( $id ) );
	      $data .= sprintf( ' data-img-srcset="%s"', esc_attr( $imp_img_srcset ) );
	      if( isset($imp_img_srcset_webp) && !empty($imp_img_srcset_webp) ){
	      	$data .= sprintf( ' data-img-srcset-webp="%s"', esc_attr( $imp_img_srcset_webp ) );
	      }
	      $data .= sprintf( ' data-media-url="%s" ', esc_url( $img_size[0] ) );
	      $html = str_replace( "<img src", "<img{$data}src", $html ); 
	    }
    }
    return $html;	  
	}

	/**
	 * After activate plugin set a class name into the optimizedimage tag
	 * 
	 * @param string 	$class
	 * @param int 		$id attachment post id
	 *
	 * Filter Hook call add_filter => get_image_tag_class 
	 */
	public function gwic_image_tag_class ( $class, $id ) {
		global $wpdb;

		$table_name = $wpdb->prefix.'postmeta';
		$attachment_list = $wpdb->get_row( "SELECT meta_id, post_id, meta_key, meta_value FROM $table_name WHERE post_id = '".$id."' AND meta_key = '_giga_image_optimize_attached_file' " );

		if( isset($attachment_list) && !empty($attachment_list) ){
			$class .= ' giga-webp-image-optimizer-img';
		}
		else{
			return $class;
		}
		return $class;
	}

	/**
	 * Get all media image files
	 */
	public function gwic_get_all_images () {
		$query_images_args = array(
	    'post_type' => 'attachment',
	    'post_mime_type' =>'image',
	    'post_status' => 'inherit',
	    'orderby' => 'ID',
      'order' => 'desc',
	    'posts_per_page' => -1,
		);


		$query_images = new WP_Query( $query_images_args );
		$images = array();
		$i = 0;
		foreach ( $query_images->posts as $image) {
			$attach_details = $this->gwic_get_attachment_details( $image->ID );
	    $images[$i]['image_id'] = $image->ID;
	    $images[$i]['image_url'] = wp_get_attachment_url( $image->ID );
	    $images[$i]['image_details'] = $attach_details;
		$i++; }
		return $images;
	}	

	/**
	 * Auto generate captcha string
	 */
	public function gwic_generate_captcha_string () {
		$input = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
		$strength = 6;
    $input_length = strlen($input);
    $random_string = '';
    for($i = 0; $i < $strength; $i++) {
      $random_character = $input[mt_rand(0, $input_length - 1)];
      $random_string .= $random_character;
    }
    return $random_string;		
	}

	/**
	 * Get image converted total, percentage details for progress bar
	 */
	public function gwic_optimize_image_progress	() {
		$get_total_records = $this->gwic_get_all_images();
		$get_optimized_data = $this->gwic_get_all_converted_images();
		$totalImages = 0; 
    $totalOptimizedImages = 0; 
    $percentageImage = 0;

		if( isset($get_total_records) && !empty($get_total_records) ){ 
      $totalImages = count($get_total_records);
    } 

    if( isset($get_optimized_data) && !empty($get_optimized_data) ){
      $totalOptimizedImages = count($get_optimized_data);
    }
    if($totalImages > 0){
      $percentageImage = round( ($totalOptimizedImages / $totalImages) * 100 );
    }
    $return_data = array(
    	'total_image' => $totalImages,
    	'optimized_image' => $totalOptimizedImages,
    	'percentage' => $percentageImage,
    );
    echo json_encode($return_data);
    exit();
	}

}
