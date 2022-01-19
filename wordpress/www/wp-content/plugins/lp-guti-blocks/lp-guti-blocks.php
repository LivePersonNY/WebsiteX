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


}
add_action( 'init', 'create_block_lp_guti_blocks_block_init' );

function register_mkto_script() {
	wp_enqueue_script('mkto-forms', 'https://info.liveperson.com/js/forms2/js/forms2.min.js');
	wp_enqueue_style('dashicons');
}
//add_action( 'admin_enqueue_scripts', 'register_mkto_script');
add_action( 'wp_enqueue_scripts', 'register_mkto_script');
