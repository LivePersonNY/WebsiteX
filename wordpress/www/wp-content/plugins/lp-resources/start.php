<?php
/**
 * Plugin Name: LP Resources
 * Description: LivePerson Resources section plugin.
 * Version: 1.0.0
 * Author: Rob Lester, LivePerson
 */
 
class LP_Resources
{
	public function __construct()
	{
		add_action('init', [$this, 'register_type']);
		add_action('init', [$this, 'register_menu_locations'] );
		//add_filter( 'block_parser_class', [$this, 'change_filter'], 10, 1 );
		//add_filter( 'render_block_data', [$this, 'render_block_data'], 10, 2);
		
		add_action('graphql_register_types', [$this, 'graphql_fields']);
		
		add_filter( 'block_categories_all', [$this, 'block_categories'], 10, 2 );
		
		add_Action('admin_init', [$this, 'admin_init'], 100);

		
	}
	
	function admin_init()
	{
		header("Access-Control-Allow-Origin: *");
		header_remove("Referrer-Policy");
	}

	
	function block_categories( $block_categories, $editor_context ) {
		if ( ! empty( $editor_context->post ) ) {
			array_push(
				$block_categories,
				array(
					'slug'  => 'liveperson',
					'title' => __( 'LivePerson Modules', 'liveperson' ),
					'icon'  => 'welcome-widgets-menus',
				)
			);
		}
		return $block_categories;
	}
	
	public function graphql_fields()
	{
		/*register_graphql_field( 'Page', 'vimeo_video', [
		   'type' => 'String',
		   'description' => __( 'The url of the featured video', 'wp-graphql' ),
		   'resolve' => function( $post ) {
			 $url = get_post_meta( $post->ID, '_pfv_vimeo_video_url', true );
			 return ! empty( $url ) ? $url : NULL;
		   }
		] );
		
		register_graphql_field( 'Settings', 'pluginScripts', [
			'type' => 'String',
			'description' => 'All enqueued front end scripts',
			'resolve' => function() {
				ob_start();
				wp_head();
				return ob_get_clean();
			}
		]);
		
		register_graphql_field( 'Settings', 'ip_address', [
			'type' => 'String',
			'description' => 'IP Address from request',
			'resolve' => function() {
				return $_SERVER['REMOTE_ADDR'];
			}
		]);*/
		
		
		
		register_graphql_field( 'Settings', 'site_logo', [
			'type' => 'String',
			'description' => 'Company Logo',
			'resolve' => function() {
				$logo_id = get_option('site_logo');
				$image = wp_get_attachment_image_src( $logo_id , 'full' );
				return $image[0] ?? null;
			}
		]);
		
		register_graphql_field( 'Settings', 'site_icon', [
			'type' => 'String',
			'description' => 'Company Logo',
			'resolve' => function() {
				$logo_id = get_option('site_icon');
				$image = wp_get_attachment_image_src( $logo_id , 'full' );
				return $image[0] ?? null;
			}
		]);
	}
	
	public function register_type()
	{
		register_post_type('resource', [
			'labels' => [
				'name' => 'Resources',
				'singular_name' => 'Resource',
				'add_new_item' => 'Add New Resource',
				'edit_item' => 'Edit Resource',
			],
			'public' => true,
			'menu_icon' => 'dashicons-table-col-after',
			'show_in_rest' => true,
		]);
		
		register_post_type('post_legacy', [
			'labels' => [
				'name' => 'Posts (Legacy)',
			],
			'public' => true,
			'show_in_rest' => false,
			'show_in_graphql' => true,
			'graphql_single_name' => 'LegacyPost',
			'graphql_plural_name' => 'LegacyPosts',
		]);
		
		/*if (!is_user_logged_in()) {
			if ($_SERVER['REQUEST_METHOD'] != 'GET') return;
			wp_redirect('https://liveperson.okta.com/home/wordpress_ssoscim/0oaer2x0ifOaljlZF2p7/aln1ivllsm7a1KmQ61d8?fromHome=true', 302);
		}*/
		
	}
		
	public function render_block_data($parsed_block, $source_block)
	{		
		if ($parsed_block['blockName'] === 'core/columns') {
			
			$parsed_block['innerContent'] = array_map(function($item) {
				return $item !== NULL ? str_replace('wp-block-columns', 'row', $item) : NULL;
			}, $parsed_block['innerContent']);
			
			$parsed_block['innerBlocks'] = array_map(function($block) {
				$block['innerContent'] = array_map(function($item) {
					return $item !== NULL ? str_replace('wp-block-column', 'col', $item) : NULL;
				}, $block['innerContent']);
				return $block;
			}, $parsed_block['innerBlocks']);
			
		}
	
		return $parsed_block;
	}
	
	public function change_filter($current_parser)
	{
		//return $current_parser;
		return new LP_Parser;
	}
	
	public function register_menu_locations()
	{
		register_nav_menus(apply_filters('gatsby_locations', [
			'login-menu' => __( 'Login Menu [Added by LivePerson]', 'WPGatsby' ),
			'legal-menu' => __( 'Legal Menu [Added by LivePerson]', 'WPGatsby' )
		]));
	}
	
	public function return_gatsby()
	{
		
	}
	
	public function menu_fields($markup)
	{
		wp_die($markup);
	}
}
new LP_Resources;

//require_once('parser.php');