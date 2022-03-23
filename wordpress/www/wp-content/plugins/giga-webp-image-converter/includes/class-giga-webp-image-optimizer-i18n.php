<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://gigareef.com/
 * @since      1.0.0
 *
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/includes
 * @author     Michael Maffattone <mikemaff@gigareef.com>
 */
class GWIC_I18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function gwic_load_plugin_textdomain() {

		load_plugin_textdomain(
			'giga-webp-image-converter',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
