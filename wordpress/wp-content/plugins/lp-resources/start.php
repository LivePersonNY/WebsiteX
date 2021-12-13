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
		add_action('after_setup_theme', [$this, 'register_menu_locations'], 0 );
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
		
		
		
	}
	
	public function register_menu_locations()
	{
		register_nav_menus([
			'login_menu' => 'Login Area',
		]);
	}
	
	public function return_gatsby()
	{
		
	}
}
new LP_Resources;