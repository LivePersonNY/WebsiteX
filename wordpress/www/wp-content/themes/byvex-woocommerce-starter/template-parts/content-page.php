<?php

/**
 * Template part for displaying page content in page.php
 *
 * @package Byvex Woocommerce Starter
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="entry-content">
		<?php
			the_content();
	
			wp_link_pages(
				array(
					'before'   => '<nav class="page-links">',
					'after'    => '</nav>',
					/* translators: %: Page number. */
					'pagelink' => esc_html__('Page %', 'byvex-woocommerce-starter'),
				)
			);
		?>
	</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
