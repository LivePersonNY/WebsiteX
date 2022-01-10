<?php

/**
 * Preload & Preconnect External Resources
 *
 * @package Byvex WooCommerce Starter
 */

function byvex_woocommerce_starter_preload($hints, $relation_type)
{
	if ('preconnect' === $relation_type) {

		// Google fonts CDN
		$hints[] = [
			'href'        => 'https://fonts.googleapis.com',
		];
		$hints[] = [
			'href'        => 'https://fonts.gstatic.com',
			'crossorigin' => 'anonymous',
		];
	}
	return $hints;
}

add_filter('wp_resource_hints', 'byvex_woocommerce_starter_preload', 10, 2);
