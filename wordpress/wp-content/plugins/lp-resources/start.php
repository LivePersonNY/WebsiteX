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
	}
	
	public function register_type()
	{
		register_post_type('resource', [
			'labels' => [
				'name' => 'Resources',
				'singular_name' => 'Resource',
				'add_new_item' => 'Add New Resource',
			],
			'public' => true,
			'menu_icon' => 'dashicons-table-col-after',
			'show_in_rest' => true,
		]);
	}
}
new LP_Resources;