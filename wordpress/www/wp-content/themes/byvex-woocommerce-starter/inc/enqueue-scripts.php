<?php

/**
 * Connect stylesheets & scripts
 *
 * @package Byvex WooCommerce Starter
 */

function byvex_woocommerce_starter_enqueue_scripts()
{
	// Bootstrap CSS
	wp_enqueue_style('byvex-woocommerce-starter-bootstrap', get_template_directory_uri() . '/css/bootstrap.min.css', array(), filemtime(get_template_directory() . "/css/bootstrap.min.css"));

	// Style CSS
	wp_enqueue_style('byvex-woocommerce-starter-style', get_template_directory_uri() . '/css/style.css', array('byvex-woocommerce-starter-bootstrap'), filemtime(get_template_directory() . "/css/style.css"));

	// Google Font - Rubik
	wp_enqueue_style('byvex-woocommerce-starter-rubik', 'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&display=swap', array('byvex-woocommerce-starter-bootstrap', 'byvex-woocommerce-starter-style'));

	// Bootstrap Bundle with PopperJS
	wp_enqueue_script('byvex-woocommerce-starter-bootstrap-bundle', get_template_directory_uri() . '/js/bootstrap.bundle.min.js', array('jquery'), filemtime(get_template_directory() . "/js/bootstrap.bundle.min.js"), true);

	// Main JS
	wp_enqueue_script('byvex-woocommerce-starter-main', get_template_directory_uri() . '/js/main.js', array('jquery', 'byvex-woocommerce-starter-bootstrap-bundle'), filemtime(get_template_directory() . "/js/main.js"), true);

	// Remove Block Styles
	wp_dequeue_style('wp-block-library');
	wp_dequeue_style('wp-block-library-theme');
}
add_action('wp_enqueue_scripts', 'byvex_woocommerce_starter_enqueue_scripts');
