<?php
use Tribe\Vimeo_WP\Vimeo\Vimeo_Auth;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$request = new Vimeo_Auth();
?>
<div class="wrap"><h2><?php /* Empty div to show notifications */ ?></h2></div>
<div class="vimeo-settings wrap">
	<h1 class="vimeo-settings__logo">
		<svg aria-label="<?php esc_attr_e( 'Vimeo for WordPress Settings', 'vimeo-for-wordpress' ); ?>" width="119" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M26.595 16.003c-.115 2.62-1.93 6.203-5.431 10.76-3.617 4.762-6.685 7.135-9.192 7.135-1.556 0-2.867-1.442-3.933-4.34-.72-2.65-1.426-5.314-2.147-7.964-.792-2.898-1.656-4.34-2.564-4.34-.202 0-.893.423-2.089 1.268L0 16.876a304.23 304.23 0 003.89-3.509c1.757-1.529 3.068-2.33 3.947-2.417 2.075-.204 3.343 1.223 3.818 4.295.519 3.306.879 5.359 1.08 6.174.591 2.738 1.254 4.106 1.974 4.106.562 0 1.398-.888 2.507-2.664 1.11-1.777 1.714-3.13 1.787-4.063.158-1.529-.433-2.3-1.787-2.3-.634 0-1.297.145-1.974.436 1.311-4.324 3.804-6.436 7.492-6.32 2.737.088 4.02 1.88 3.86 5.389z" fill="#1A2E3B"/>
			<path d="M43.033 24.477c-1.11 2.126-2.65 4.063-4.596 5.795-2.665 2.33-5.345 3.495-8.01 3.495-1.239 0-2.19-.408-2.838-1.209-.663-.8-.965-1.849-.922-3.145.043-1.325.447-3.378 1.225-6.159.777-2.781 1.166-4.266 1.166-4.47 0-1.049-.36-1.573-1.08-1.573-.245 0-.922.422-2.031 1.267l-1.369-1.63c1.268-1.166 2.55-2.33 3.818-3.51 1.714-1.529 2.982-2.33 3.832-2.417 1.311-.117 2.276.276 2.896 1.18.62.902.85 2.081.691 3.523-.518 2.446-1.08 5.562-1.67 9.334-.044 1.732.575 2.591 1.858 2.591.561 0 1.556-.596 2.982-1.79 1.196-.99 2.175-1.923 2.924-2.796l1.124 1.514zM37.833 3c-.044 1.004-.534 1.965-1.5 2.883-1.08 1.048-2.347 1.558-3.817 1.558-2.276 0-3.371-1.005-3.285-3 .044-1.048.649-2.038 1.816-3C32.228.482 33.525 0 34.965 0c.836 0 1.527.335 2.09.99.561.67.806 1.34.777 2.01z" fill="#1A2E3B"/>
			<path d="M80.347 24.477c-1.11 2.126-2.651 4.062-4.596 5.795-2.665 2.33-5.345 3.495-8.01 3.495-2.594 0-3.847-1.442-3.76-4.34.043-1.28.288-2.839.749-4.645.46-1.805.706-3.218.749-4.222.043-1.53-.418-2.3-1.383-2.3-1.038 0-2.277 1.251-3.717 3.741-1.513 2.621-2.334 5.155-2.464 7.616-.086 1.732.087 3.058.505 3.99-2.781.087-4.726-.38-5.835-1.384-.994-.888-1.455-2.359-1.369-4.412.043-1.281.23-2.577.59-3.858.347-1.282.548-2.432.592-3.451.086-1.486-.462-2.228-1.614-2.228-.994 0-2.075 1.15-3.227 3.436-1.153 2.3-1.801 4.689-1.916 7.193-.087 2.257.057 3.83.432 4.718-2.737.087-4.682-.495-5.82-1.747-.951-1.049-1.383-2.621-1.311-4.762.043-1.048.216-2.504.547-4.368.331-1.864.519-3.32.547-4.368.072-.728-.1-1.078-.533-1.078-.245 0-.922.408-2.03 1.223l-1.442-1.63c.202-.16 1.456-1.326 3.76-3.51 1.672-1.572 2.81-2.373 3.4-2.417 1.038-.087 1.873.35 2.507 1.296.634.947.951 2.039.951 3.29 0 .409-.043.787-.115 1.151a10.874 10.874 0 012.089-2.417c1.83-1.616 3.89-2.52 6.152-2.723 1.959-.16 3.342.306 4.178 1.383.677.889.994 2.155.95 3.8.274-.232.577-.509.894-.785.922-1.093 1.815-1.952 2.694-2.592 1.47-1.093 3.01-1.69 4.596-1.806 1.916-.16 3.284.306 4.12 1.383.72.889 1.037 2.14.95 3.786-.042 1.121-.302 2.752-.806 4.907-.504 2.14-.75 3.378-.75 3.699-.043.844.044 1.427.246 1.747.201.32.677.48 1.44.48.562 0 1.556-.596 2.983-1.79 1.195-.99 2.175-1.922 2.924-2.796l1.153 1.5z" fill="#1A2E3B"/>
			<path d="M102.764 24.419c-1.153 1.936-3.43 3.858-6.815 5.795-4.221 2.446-8.5 3.684-12.85 3.684-3.228 0-5.547-1.092-6.93-3.262-.994-1.485-1.47-3.261-1.441-5.315.043-3.261 1.47-6.363 4.308-9.304 3.111-3.218 6.77-4.834 10.992-4.834 3.904 0 5.979 1.601 6.21 4.82.158 2.052-.951 4.15-3.343 6.319-2.55 2.373-5.763 3.873-9.624 4.514.72 1.004 1.787 1.5 3.227 1.5 2.867 0 5.994-.743 9.38-2.214 2.434-1.034 4.336-2.111 5.733-3.232l1.153 1.529zm-13.572-6.305c.044-1.078-.403-1.617-1.31-1.617-1.196 0-2.407.83-3.645 2.49-1.24 1.66-1.873 3.262-1.902 4.776-.029 0-.029.262 0 .787a13.311 13.311 0 005.071-3.306c1.152-1.281 1.743-2.33 1.786-3.13z" fill="#1A2E3B"/>
			<path d="M118.986 20.37c-.159 3.7-1.513 6.903-4.063 9.596-2.55 2.694-5.72 4.034-9.509 4.034-3.14 0-5.532-1.02-7.174-3.073-1.196-1.529-1.859-3.436-1.974-5.722-.202-3.451 1.037-6.64 3.703-9.523 2.867-3.218 6.468-4.82 10.819-4.82 2.781 0 4.898.947 6.339 2.84 1.354 1.703 1.974 3.946 1.859 6.669zm-6.757-.218a7.797 7.797 0 00-.447-3c-.346-.902-.821-1.368-1.469-1.368-2.032 0-3.703 1.107-5.014 3.334-1.124 1.82-1.714 3.757-1.801 5.81-.043 1.005.144 1.893.533 2.665.433.888 1.052 1.325 1.859 1.325 1.786 0 3.328-1.063 4.596-3.203 1.08-1.777 1.656-3.626 1.743-5.563z" fill="#1A2E3B"/>
		</svg>
	</h1>
	<?php
	if ( $request->has_access_token() ) {
		$user = $request->get_user_account();
		if ( is_array( $user ) && ! empty( $user ) ) {
			$user_image = $user['pictures']['sizes'][1];
			?>
			<div class="vimeo-settings__authenticated">
				<h2 class="vimeo-settings__title--big">
					<?php esc_html_e( 'You’re ready to start using Vimeo for WordPress', 'vimeo-for-wordpress' ); ?>
				</h2>
				<p class="vimeo-settings__paragraph vimeo-settings__text-box">
					<?php esc_html_e( 'You can now access your account.', 'vimeo-for-wordpress' ); ?>
				</p>
				<?php include( '_profile.php' ); ?>
				<div class="vimeo-settings__separator"></div>
				<?php include( '_settings_form.php' ); ?>
			</div>
			<?php
		} else {
			$activation_error = esc_html__( 'Invalid Activation Key. Please re-enter your activation key.', 'vimeo-for-wordpress' );
			include( '_no_auth_user.php' );
		}
	} else {
		include( '_no_auth_user.php' );
	}
	?>

	<h2 class="vimeo-settings__title"> <?php esc_html_e( 'See how to turn your product images into stunning videos with the Vimeo plugin for WooCommerce and Wordpress', 'vimeo-for-wordpress' ); ?> </h2>
	<iframe style="width: 100%; height: 350px;" title="vimeo-player" src="https://player.vimeo.com/video/654273503?h=36f51978e0&portrait=false&title=false&byline=false" width="100%" height="350" frameborder="0" allowfullscreen></iframe>
</div>
