<?php

/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package Byvex WooCommerce Starter
 */

// Add a pingback url auto-discovery header for single posts, pages, or attachments
function byvex_woocommerce_starter_pingback_header()
{
	if (is_singular() && pings_open()) {
		echo '<link rel="pingback" href="', esc_url(get_bloginfo('pingback_url')), '">';
	}
}
add_action('wp_head', 'byvex_woocommerce_starter_pingback_header');
