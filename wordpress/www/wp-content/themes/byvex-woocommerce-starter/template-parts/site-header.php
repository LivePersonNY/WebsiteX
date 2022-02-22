<header id="masthead" class="" role="banner">
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container" style="position: relative">
			<a class="navbar-brand fw-bold m-0 p-0 text-truncate" href="<?php echo esc_url(home_url('/')); ?>" title="<?php bloginfo('name'); ?> - <?php bloginfo('description'); ?>">
				<?php if (get_option('site_logo')) : ?>
					<?php $logo_id = get_option('site_logo'); $image = wp_get_attachment_image_src( $logo_id , 'full' ); ?>
					<img src="<?php echo $image[0] ?? null ?>" class="site-logo" />
				<?php endif; ?>
			</a>
	
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false">
				<span class="navbar-toggler-icon"></span>
			</button>
	
			<?php
			wp_nav_menu(array(
				'theme_location' => 'gatsby-header-menu',
				'depth' => 3,
				'container' => 'div',
				'container_id' => 'mainNav',
				'container_class' => 'collapse navbar-collapse',
				'menu_id' => false,
				'menu_class' => 'nav navbar-nav ms-auto',
				'fallback_cb' => 'WP_Bootstrap_Navwalker::fallback',
				'walker' => new Bootstrap_Walker_Nav_Menu()
			));
			?>
		</div>
	</nav>
</header>
