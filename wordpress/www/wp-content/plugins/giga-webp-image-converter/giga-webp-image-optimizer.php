<?php

/**
 *
 * @link              https://gigareef.com/
 * @since             1.0.0
 * @package           Giga_WebP_Image_Optimizer
 *
 * @wordpress-plugin
 * Plugin Name:       Giga WebP Image Converter
 * Plugin URI:        https://gigareef.com/
 * Description:       Convert images with ease for free: reduce image sizes without deleting the originals. Improve Google Site Speed Score and SEO.
 * Version:           1.0.0
 * Author:            Gigareef
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       giga-webp-image-converter
 * Domain Path:       /languages

 * Copyright 2021 Gigareef
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'GWIC_VERSION', '1.0.0' );

add_filter( 'plugin_row_meta', 'gwic_plugin_row_meta', 10, 2 );
function gwic_plugin_row_meta( $links, $file ) {    
  if ( plugin_basename( __FILE__ ) == $file ) {
    $row_meta = array(
      'settings'    => '<a href="' . esc_url( admin_url( '/admin.php?page=giga-webp-image-converter' ) ) . '" aria-label="' . esc_attr__( 'Setting Page', 'giga-webp-image-converter' ) . '">' . esc_html__( 'Setting Page', 'giga-webp-image-converter' ) . '</a>'
    );
    return array_merge( $links, $row_meta );
  }
  return (array) $links;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-giga-webp-image-optimizer-activator.php
 */
function gwic_activate_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-giga-webp-image-optimizer-activator.php';
	GWIC_Activator::gwic_activate();
  GWIC_Activator::gwic_create_plugin_database_table();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-giga-webp-image-optimizer-deactivator.php
 */
function gwic_deactivate_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-giga-webp-image-optimizer-deactivator.php';
	GWIC_Deactivator::gwic_deactivate();
}

register_activation_hook( __FILE__, 'gwic_activate_plugin' );
register_deactivation_hook( __FILE__, 'gwic_deactivate_plugin' );

add_action( 'admin_init', 'gwic_activation_redirect' );

/**
 * Redirects the user after Giga WebP Image Converter plugin activation
 */
function gwic_activation_redirect() {
  // Make sure it's the correct user
  if ( get_option( 'gwic_activation_redirect', false ) ) {
    // Make sure we don't redirect again after this one
    delete_option( 'gwic_activation_redirect' );
    // wp_safe_redirect( admin_url( 'admin.php?page=giga-webp-image-optimizer-settings' ) );
    wp_safe_redirect( admin_url( 'admin.php?page=giga-webp-image-converter' ) );
    exit;
  }
}

/**
 * When initialize then check the content image and warp with picture tag if image is optimized
 */
add_action('init', function(){
  if ( is_admin() )
    return;
  if (defined('DOING_AJAX') && DOING_AJAX)
    return;

  ob_start('gwic_start_warp_image_ajax');
}, 1);

add_action('shutdown', function(){
  ob_end_flush();
}, -1);

function gwic_start_warp_image_ajax($content_of_the_buffer){
  return gwic_warp_image_picture_tag($content_of_the_buffer);
}

/**
 * Warp <picture> tag
 */
function gwic_warp_image_picture_tag($content){
  // Don't do anything with the RSS feed.
  if (is_feed() || is_admin()) {
    return $content;
  }
  $new_content = gwic_check_pictures_tag($content);
  if ($new_content !== false)
  {
    $content = $new_content;
  }

  $regex_match_string = '/<img(.*)src="([^"]*)"(.*)>/Um';
  $content = preg_replace_callback($regex_match_string, function($match) {
    if (strpos($match[0], 'sp-no-webp') || strpos($match[0], 'rev-sildebg')) {
      return $match[0];
    }

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
      $data_img_srcset = gwic_image_srcset ( $post );
      $data_img_srcset_webp = gwic_image_srcset_webp ( $post );

      $source = '<source type="image/webp" srcset="'.$data_img_srcset_webp.'" />';
      
      // array_push($additional_classes, 'giga-webp-image-optimizer-img');
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
 * Return WEBP srcset
 */
function gwic_image_srcset_webp ( $attachment ) {
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
  $get_image_sizes = gwic_image_sizes();
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
 * Return original image srcset
 */
function gwic_image_srcset ( $attachment ) {
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
 * Return image sizes
 */
function gwic_image_sizes ( $size = '' ) {
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
 * Check picture tag exists or not
 */
function gwic_check_pictures_tag($content) {
  $pattern = '/<picture.*?>.*?(<img.*?>).*?<\/picture>/is';
  preg_match_all($pattern, $content, $matches);

  if ($matches === false)
    return false;

  if ( is_array($matches) && count($matches) > 0) {
    foreach($matches[1] as $match) {
      $imgtag = $match;

      if (strpos($imgtag, 'class=') !== false) {
        $pos = strpos($imgtag, 'class=');
        $pos = $pos + 7;
        $newimg = substr($imgtag, 0, $pos) . 'sp-no-webp ' . substr($imgtag, $pos);
      }
      else {
        $pos = 4;
        $newimg = substr($imgtag, 0, $pos) . ' class="sp-no-webp" ' . substr($imgtag, $pos);
      }
      $content = str_replace($imgtag, $newimg, $content);
    }
  }
  return $content;
}

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-giga-webp-image-optimizer.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function gwic_run_image_converter() {

	$plugin = new GWIC_Optimizer();
	$plugin->run();

}
gwic_run_image_converter();
