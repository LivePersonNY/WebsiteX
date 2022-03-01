<?php

/**
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @package Byvex WooCommerce Starter
 */
?>
<!doctype html>
<html <?php language_attributes(); ?> class="h-100 site">

<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
	<script src="https://unpkg.com/@dotlottie/player-component@1.0.0/dist/dotlottie-player.js"></script>
	
	<meta name="robots" content="noindex, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
</head>

<body <?php body_class('h-100'); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site h-100 d-flex flex-column">
		<a class="skip-link text-decoration-none screen-reader-text d-block  text-center" href="#content"><?php esc_html_e('Skip to content', 'byvex-woocommerce-starter'); ?></a>

		<?php get_template_part('template-parts/site-header');
		?>

		<div id="content" class="site-content">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">
