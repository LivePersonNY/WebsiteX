<?php

/**
 * Used any time that get_search_form() is called.
 *
 * @package Byvex WooCommerce Starter
 */
$byvex_woocommerce_starter_unique_id = wp_unique_id('search-');
?>

<form class="" method="get" action="<?php echo esc_url(home_url('/')); ?>">
	<label for="<?php echo esc_attr($byvex_woocommerce_starter_unique_id); ?>" class="form-label mb-0">
		<?php echo __('Enter your search term', 'byvex-woocommerce-starter'); ?>
	</label>
	<div class="d-flex">
		<input type="search" name="s" placeholder="..." id="<?php echo esc_attr($byvex_woocommerce_starter_unique_id); ?>" class="form-control mb-2 me-1" />
		<input type="submit" value="<?php echo esc_attr_x('Search', 'submit button', 'byvex-woocommerce-starter'); ?>" class="btn btn-primary mb-2" />
	</div>
</form>
