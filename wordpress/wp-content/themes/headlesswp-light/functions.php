<?php
/**
 * Headless  WP functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package headlesswp
 */

$headlesswp_plugins = apply_filters(
	'headlesswp_plugins',
	array(
		'wp-gatsby'         => array(
			'slug'        => 'wp-gatsby',
			'name'        => 'WP Gatsby',
			'source'      => 'repo',
			'file_path'   => 'wp-gatsby/wp-gatsby.php',
			'required'    => true,
			'description' => __( 'WP Gatsby is a free open-source WordPress plugin that prepares your WordPress site to work as a data source for Gatsby. This plugin is required by the source plugin used by Gatsby to build your website.', 'headlesswp-light' ),
		),
		'wp-graphql'        => array(
			'slug'        => 'wp-graphql',
			'name'        => 'WP GraphQL',
			'source'      => 'repo',
			'file_path'   => 'wp-graphql/wp-graphql.php',
			'required'    => true,
			'description' => __( 'WP GraphQL is a free, open-source WordPress plugin that allows you to separate your CMS from your presentation layer. It provides an extendable GraphQL schema that is used by Gatsby.', 'headlesswp-light' ),
		),
		'wordpress-seo'     => array(
			'slug'        => 'wordpress-seo',
			'name'        => 'Yoast SEO',
			'source'      => 'repo',
			'file_path'   => 'wordpress-seo/wp-seo.php',
			'required'    => false,
			'description' => __( 'One ot the most popular SEO WordPress plugins, it helps your website to rank higher in search engines.', 'headlesswp-light' ),
		),
		'add-wpgraphql-seo' => array(
			'slug'        => 'add-wpgraphql-seo',
			'name'        => 'Add WPGraphQL SEO',
			'source'      => 'repo',
			'file_path'   => 'add-wpgraphql-seo/wp-graphql-yoast-seo.php',
			'required'    => false,
			'description' => __( 'This plugin enables Yoast SEO Support for WPGraphQL.', 'headlesswp-light' ),
		),
		'code-syntax-block' => array(
			'slug'        => 'code-syntax-block',
			'name'        => 'Code Syntax Block',
			'source'      => 'repo',
			'file_path'   => 'code-syntax-block/index.php',
			'required'    => false,
			'description' => __( 'You might need this plugin if you plan to post code snippets on your website. Code Syntax Block extends the WordPress Block Editor by adding syntax highlighting and is compatible with our themes.', 'headlesswp-light' ),
		),
	)
);

if ( is_child_theme() ) {
	$temp_obj  = wp_get_theme();
	$theme_obj = wp_get_theme( $temp_obj->get( 'Template' ) );
} else {
	$theme_obj = wp_get_theme();
}

if ( ! defined( '_HEADLESSWP_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_HEADLESSWP_VERSION', $theme_obj->get( 'Version' ) );
}

if ( ! function_exists( 'headlesswp_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function headlesswp_setup() {
		load_theme_textdomain( 'headlesswp-light', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		// to remove ?
		// add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		/*
		 * Reset color presets.
		 *
		 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#block-color-palettes
		 */
		add_theme_support(
			'editor-color-palette',
			array()
		);

		/*
		 * Reset gradient presets.
		 *
		 * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#block-gradient-presets
		 */

		add_theme_support(
			'editor-gradient-presets',
			array()
		);

		require_once get_template_directory() . '/inc/class-headlesswp-bootstrap-navwalker.php';

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'primary' => esc_html__( 'Primary', 'headlesswp-light' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);

				// Add support for Block Styles.
		add_theme_support( 'wp-block-styles' );
		if ( apply_filters( 'headlesswp_support_align_wide', true ) ) {
			add_theme_support( 'align-wide' );
		}
		

	}
endif;
add_action( 'after_setup_theme', 'headlesswp_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function headlesswp_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'headlesswp_content_width', 640 );
}
add_action( 'after_setup_theme', 'headlesswp_content_width', 0 );


/**
 * Enqueue scripts and styles.
 */

add_action(
	'wp_enqueue_scripts',
	function () {
		wp_enqueue_style( 'b5', get_template_directory_uri() . '/css/style.css', array(), _HEADLESSWP_VERSION );
		wp_enqueue_style( 'headlesswp-style', get_stylesheet_uri(), array( 'b5' ), _HEADLESSWP_VERSION );
		wp_enqueue_script( 'headlesswp-navigation', get_template_directory_uri() . '/build/navigation.js', array(), _HEADLESSWP_VERSION, true );
		// phpcs:disable
		wp_enqueue_script( 'fontawesome', 'https://kit.fontawesome.com/569911808f.js', array(), null, false );
		// phpcs:enable
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
		}
	}
);


/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';


// redirect users that are not logged in to another template
add_filter(
	'template_include',
	function( $template ) {
		if ( ! is_user_logged_in() ) {
			$new_template = locate_template( array( 'headless.php' ) );
			if ( '' !== $new_template ) {
				return $new_template;
			}
		}
		return $template;
	},
	99
);

if ( is_admin() ) {
	require_once get_template_directory() . '/inc/setup/class-headlesswp-setup.php';
	new HeadlessWP_Setup( $headlesswp_plugins );
}

		
		require get_template_directory() . '/plugin-update-checker/plugin-update-checker.php';
		$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
			'https://headlesswp-archive.netlify.app/headlesswp.json',
			__FILE__, //Full path to the main plugin file or functions.php.
			'headlesswp-light'
		);
