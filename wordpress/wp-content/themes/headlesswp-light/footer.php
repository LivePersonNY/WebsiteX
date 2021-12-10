<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package headlesswp
 */

?>
	</main>
	<footer id="colophon" class="site-footer text-white bg-dark p-4">
		<div class="site-info container text-center">
				<?php
				/* translators: 1: Theme name, 2: Theme author. */
				printf( esc_html__( 'Theme: %1$s by %2$s.', 'headlesswp-light' ), 'Headless WP Light', '<a href="https://gatsbywpthemes.com/">Gatsby WP Themes</a>' );
				?>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
