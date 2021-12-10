<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package headlesswp
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'headlesswp-light' ); ?></a>
	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<?php
				wp_nav_menu(
					array(
						'theme_location'  => 'primary',
						'menu_id'         => 'primary-menu',
						'container'       => 'div',
						'container_class' => 'collapse navbar-collapse',
						'container_id'    => 'navbarToggler',
						'menu_class'      => 'navbar-nav me-auto',
						'fallback_cb'     => 'HeadlessWP_Bootstrap_Navwalker::fallback',
						'walker'          => new HeadlessWP_Bootstrap_Navwalker(),
					)
				);
				?>
			</div>
		</nav><!-- #site-navigation -->
	</header><!-- #masthead -->
	<main id="primary" class="site-main container pt-3">
	<div class="alert alert-warning" role="alert">
		<?php
		printf( '<small>%s</small>', wp_kses_post( __( 'Please note that what you see below is just a generic preview of your content. This is <strong>not</strong> how this content will look like on your Gatsby website.', 'headlesswp-light' ) ) );
		?>
	</div>
