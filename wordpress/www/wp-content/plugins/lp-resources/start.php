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
		
		add_action('admin_init', [$this, 'admin_init'], 100);

		add_filter('get_custom_logo_image_attributes', [$this, 'logo_class']);
		
		add_filter('gatsby_action_monitors', [$this, 'filter_gatsby_actions']);
		
		add_filter('get_avatar_url', [$this, 'filter_avatar'], 10, 2);
		
		add_filter( 'page_row_actions', [$this, 'add_stage_action' ], 100, 2 );
		add_filter( 'post_row_actions', [$this, 'add_stage_action' ], 10, 2 );
		
		add_action( 'load-edit.php', [$this, 'set_to_stage']);
		
		add_filter('gatsby_trigger_dispatch_args', [$this, 'filter_gatsby_hooks'], 10, 2);
		
	}
	
	function filter_gatsby_hooks($args, $webhook)
	{
		global $post;
		if ($post->post_type == 'staged-page') {
			return [
				'headers' => [
					'x-gatsby-cache' => 'false',
				],
			];
		}
		return [];
	}
	
	function filter_gatsby_actions($actions)
	{
		unset($actions['MediaMonitor']);
		unset($actions['UserMonitor']);
		unset($actions['AcfMonitor']);
		unset($actions['PreviewMonitor']);
		
		return $actions;
	}

	function add_stage_action( $actions, $post )
	{

		if ( get_post_status( $post ) != 'publish')
		{
			$nonce = wp_create_nonce( 'quick-stage-action' ); 
			$link = admin_url( "edit.php?lp_update_id={$post->ID}&_wpnonce=$nonce&post_type=staged-page" );
			$actions['stage'] = "<a href='$link'>Stage</a>";
		}   
		
		if ( get_post_status( $post ) == 'publish' && $post->post_type == 'staged-page') {
			unset($actions['create_revision']);
			$nonce = wp_create_nonce( 'quick-stage-action' ); 
			$link_p = admin_url( "edit.php?lp_publish_id={$post->ID}&_wpnonce=$nonce&post_type=page" );
			$link_u = admin_url( "edit.php?lp_unstage_id={$post->ID}&_wpnonce=$nonce&post_type=page" );
			$actions['publish'] = "<a href='$link_p'>Publish</a>";
			$actions['unstage'] = "<a href='$link_u'>Unstage</a>";
		}
		return $actions;
	}
	
	function set_to_stage() 
	{
		$nonce = isset( $_REQUEST['_wpnonce'] ) ? $_REQUEST['_wpnonce'] : null;
		if ( wp_verify_nonce( $nonce, 'quick-stage-action' ) && isset( $_REQUEST['lp_update_id'] ) )
		{
			$my_post = array();
			$my_post['ID'] = $_REQUEST['lp_update_id'];
			$my_post['post_status'] = 'publish';
			$my_post['post_type'] = 'staged-page';
			wp_update_post( $my_post );
		}
		
		if ( wp_verify_nonce( $nonce, 'quick-stage-action' ) && isset( $_REQUEST['lp_publish_id'] ) )
		{
			$my_post = array();
			$my_post['ID'] = $_REQUEST['lp_publish_id'];
			$my_post['post_type'] = 'page';
			wp_update_post( $my_post );
		}
		
		if ( wp_verify_nonce( $nonce, 'quick-stage-action' ) && isset( $_REQUEST['lp_unstage_id'] ) )
		{
			$my_post = array();
			$my_post['ID'] = $_REQUEST['lp_unstage_id'];
			$my_post['post_type'] = 'page';
			$my_post['post_status'] = 'draft';
			wp_update_post( $my_post );
		}
	}
	
	function filter_avatar($url, $id_or_email)
	{
		//wp_die($url);
		// Get user ID, if is numeric
		if ( is_numeric($id_or_email) ) {
		
			$user_id = (int)$id_or_email;
					
		// If is string, maybe the user email
		} elseif ( is_string($id_or_email) ) {
		
			// Find user by email
			$user = get_user_by( 'email', $id_or_email );
		
			// If user doesn't exists or this is not an ID
			if ( !isset($user->ID) || !is_numeric($user->ID) ) {
				return $url;
			}
		
			$user_id = (int)$user->ID;
		
		// If is an object
		} elseif ( is_object($id_or_email) ) {
		
			// If this is not an ID
			if ( !isset($id_or_email->ID) || !is_numeric($id_or_email->ID) ) {
				return $url;
			}
		
			$user_id = (int)$id_or_email->ID;
		
		}
			
		// Get attachment ID from user meta
		$attachment_id = get_user_meta( $user_id, SUA_USER_META_KEY, true );
		
		if ( empty($attachment_id) || !is_numeric($attachment_id) ) {
			return $url;
		}
		
		// Get attachment image src
		$attachment_src = wp_get_attachment_image_src( $attachment_id, 'medium' );
		
		// Override WordPress src
		if ( $attachment_src !== false ) {
			return $attachment_src[0];
			//$avatar = preg_replace( '/src=("|\').*?("|\')/', "src='{$attachment_src[0]}'", $avatar );
		}
		
		return $url;
	}
	
	
	
	function logo_class($attr)
	{
		$attr['class'] = 'site-logo';
		return $attr;
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
		register_taxonomy('resource-type', 'resource', [
			'hierarchical' => true,
			'public' => true,
			'show_in_rest' => true,
		]);
		
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
			'supports' => [
				'title',
				'editor',
				'excerpt',
				'thumbnail',
				'author',
				'post-formats',
			],
			'taxonomies' => [
				'resource-type',
				'post-format'
			],
		]);
		
		register_post_type('staged-page', [
			'labels' => [
				'name_admin_bar' => 'Staged Page',
				'name' => 'Staged Pages',
				'singular_name' => 'Staged Page',
			],
			'public' => true,
			'menu_icon' => 'dashicons-hidden',
			//'publicly_queryable' => null,
			'capability_type' => 'page',
			//'map_meta_cap' => true,
			//'show_in_ui' => false,
			'show_in_rest' => true,
			//'rest_base' => 'pages',
			'hierarchical' => true,
			'show_in_graphql' => true,
			'graphql_single_name' => 'staged_page',
			'graphql_plural_name' => 'staged_pages',
		]);
		
		/*if (!is_user_logged_in() && $_ENV['NO_LOGIN_SCREEN'] === TRUE) {
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