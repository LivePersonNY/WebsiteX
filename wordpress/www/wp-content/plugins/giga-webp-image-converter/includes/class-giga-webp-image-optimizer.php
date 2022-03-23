<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://gigareef.com/
 * @since      1.0.0
 *
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/includes
 * @author     Michael Maffattone <mikemaff@gigareef.com>
 */
class GWIC_Optimizer {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      GWIC_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'GWIC_VERSION' ) ) {
			$this->version = GWIC_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'giga-webp-image-converter';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - GWIC_Loader. Orchestrates the hooks of the plugin.
	 * - GWIC_I18n. Defines internationalization functionality.
	 * - GWIC_Admin. Defines all hooks for the admin area.
	 * - GWIC_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-giga-webp-image-optimizer-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-giga-webp-image-optimizer-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-giga-webp-image-optimizer-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-giga-webp-image-optimizer-public.php';

		$this->loader = new GWIC_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the GWIC_I18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new GWIC_I18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'gwic_load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {
		global $wpdb;
		$activate_table_name = $wpdb->prefix.'giga_image_optimizer_active_list';
		$active_data = $wpdb->get_row( "SELECT * FROM $activate_table_name" );
		$table_name = $wpdb->prefix.'giga_image_optimizer_settings';
		$settings_data = $wpdb->get_row( "SELECT * FROM $table_name" );
		
		$is_activated = ""; 
		$is_automatically_optimize = "";

		if( isset($active_data) && !empty($active_data) ) {
			$is_activated = $active_data->is_activated; 
		}
		if( isset($settings_data) && !empty($settings_data) ) {
			$is_automatically_optimize = $settings_data->is_automatically_optimize; 
		}

		$plugin_admin = new GWIC_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
		$this->loader->add_action( 'admin_menu', $plugin_admin, 'gwic_add_menu_page');	
		$this->loader->add_action( 'admin_init', $plugin_admin, 'gwic_register_setting' );
		
		if( $is_activated == "Y" ){
			$this->loader->add_action( 'delete_attachment', $plugin_admin, 'gwic_delete_attachment', 10, 1 );
			$this->loader->add_action( 'manage_media_custom_column', $plugin_admin, 'gwic_image_custom_column_button', 10, 2);
			$this->loader->add_filter( 'manage_media_columns', $plugin_admin, 'gwic_compression_media_columns' );
			// $this->loader->add_filter( 'wp_get_attachment_image_attributes', $plugin_admin, 'gwic_add_attachment_image_attributes', 10, 3 );
			// $this->loader->add_filter( 'image_send_to_editor', $plugin_admin, 'gwic_add_custom_data_attribute_send_to_editor', 10, 8 );
			$this->loader->add_filter( 'get_image_tag_class', $plugin_admin, 'gwic_image_tag_class', 10, 2 );
			if( $is_automatically_optimize == 1) {
				$this->loader->add_filter( 'wp_generate_attachment_metadata', $plugin_admin, 'gwic_convert_image_after_upload_filter', 10, 3 );
			}		
			$this->loader->add_filter( 'attachment_fields_to_edit', $plugin_admin, 'gwic_attachment_fields_to_optimize', null, 2 );
			$this->loader->add_action( 'get_attached_file', $plugin_admin, 'gwic_get_attached_file_filter', 10, 2 );
		}

		$this->loader->add_action( 'wp_ajax_gwic_converted_image_ajax', $plugin_admin, 'gwic_converted_image_ajax' );	
		$this->loader->add_action( 'wp_ajax_gwic_settings_data_save', $plugin_admin, 'gwic_settings_data_save' );	
		$this->loader->add_action( 'wp_ajax_gwic_settings_api_key_send', $plugin_admin, 'gwic_settings_api_key_send' );
		$this->loader->add_action( 'wp_ajax_gwic_plugin_activate', $plugin_admin, 'gwic_plugin_activate' );
		// $this->loader->add_action( 'wp_ajax_gwic_generate_captcha_string', $plugin_admin, 'gwic_generate_captcha_string' );
		$this->loader->add_action( 'wp_ajax_gwic_optimize_image_progress', $plugin_admin, 'gwic_optimize_image_progress' );

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {
		global $wpdb;
		$activate_table_name = $wpdb->prefix.'giga_image_optimizer_active_list';
		$active_data = $wpdb->get_row( "SELECT * FROM $activate_table_name" );
		$is_activated = "";

		if( isset($active_data) && !empty($active_data) ) {
			$is_activated = $active_data->is_activated; 
		}

		$plugin_public = new GWIC_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

		if( $is_activated == "Y" ){
			$this->loader->add_filter( 'the_content', $plugin_public, 'gwic_the_content_warp_webp_image', 10, 1 );
			$this->loader->add_filter( 'post_thumbnail_html', $plugin_public, 'gwic_post_thumbnail_warp_webp_image', 20, 5 );
		}
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    GWIC_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
