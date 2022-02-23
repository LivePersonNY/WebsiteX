<?php

/**
 * The template for displaying all single posts
 *
 * @package Byvex WooCommerce Starter
 */
get_header();
?>

<div class="container">
	<?php if (have_posts()) :
		while (have_posts()) :
			the_post();

			get_template_part('template-parts/content');

			byvex_woocommerce_starter_the_post_navigation();

			if (comments_open() || get_comments_number()) :
				comments_template();
			endif;
		endwhile;
	endif; ?>
</div>

<?php
get_footer();
?>
