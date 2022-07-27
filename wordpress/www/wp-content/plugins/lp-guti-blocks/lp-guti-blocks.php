<?php
/**
 * Plugin Name:       Lp Guti Blocks
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       lp-guti-blocks
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/
 */
function create_block_lp_guti_blocks_block_init() {
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/plain-content/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/hero/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/statsgrid/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/left-right/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/form/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/tabs-a/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/tabs-b/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/tabs-c/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/cardgrid/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/contained-content/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/cta/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/icons-a/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/quote-slider/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/featured-slider/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/faqs/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/callout/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/logos/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/side-by-side/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/program-card/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/team-card/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/board-card/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/exec-card/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/horizontal-text/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/block-pane/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/policy-nav/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/lr-form/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/media-lottie-player/' );
	register_block_type( plugin_dir_path(__FILE__) . 'blocks/careers-search/' );
}
add_action( 'init', 'create_block_lp_guti_blocks_block_init' );

//

function lp_when_admin_inits() {
	add_filter( 'post_link', 'lp_gatsby_urls', 1000, 2);
	add_filter( 'page_link', 'lp_gatsby_urls', 1000, 2);
	add_filter( 'post_type_link', 'lp_gatsby_urls', 1000, 2);
}
//add_action( 'init', 'lp_when_admin_inits');

function lp_gatsby_urls($permalink) {
	$home = $_ENV['SITE_HOME'];
	if (!$home) return $permalink;

	$wp_home = get_option('home');
	//die($home . '    ' . $wp_home . '    ' . $permalink . ' === ' . str_replace($wp_home, $home, $permalink));
	return str_replace($wp_home, $home, $permalink);
}

function register_mkto_script() {
	wp_enqueue_script('mkto-forms', 'https://info.liveperson.com/js/forms2/js/forms2.min.js');
	wp_enqueue_style('dashicons');
}
//add_action( 'admin_enqueue_scripts', 'register_mkto_script');
add_action( 'wp_enqueue_scripts', 'register_mkto_script');

function lp_mime_types($mimes) {
	$mimes['json'] = 'application/json';
	$mimes['lottie'] = 'application/zip';
	return $mimes;
}

add_filter('upload_mimes', 'lp_mime_types');

add_filter( 'post_thumbnail_html', 'lp_remove_width_attribute', 10 );
add_filter( 'image_send_to_editor', 'lp_remove_width_attribute', 10 );

function lp_remove_width_attribute( $html ) {
   $html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
   return $html;
}

function lp_block_categories( $block_categories, $editor_context ) {
   if ( ! empty( $editor_context->post ) ) {
	   array_push(
		   $block_categories,
		   array(
			   'slug'  => 'liveperson',
			   'title' => __( 'LivePerson Page Modules', 'liveperson' ),
			   'icon'  => 'welcome-widgets-menus',
		   )
	   );
   }
   return $block_categories;
}
add_filter( 'block_categories_all', 'lp_block_categories', 10, 2 );
