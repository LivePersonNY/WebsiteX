<?php

if ( ! class_exists( 'HeadlessWP_Setup' ) ) {

	class HeadlessWP_Setup {
		public $menu                            = 'headlesswp-setup-page';
		public $plugin_screen_hook_suffix       = null;
		private $dismiss_notice_meta_field_slug = 'headlesswp_setup_dismissed_notice';
		private $theme_name;
		private $child_theme_name;
		public function __construct( $plugins ) {
			if ( is_child_theme() ) {
				$temp_obj               = wp_get_theme();
				$theme_obj              = wp_get_theme( $temp_obj->get( 'Template' ) );
				$this->child_theme_name = $temp_obj->get( 'Name' );
			} else {
				$theme_obj              = wp_get_theme();
				$this->child_theme_name = $theme_obj->get( 'Name' );
			}
			$this->theme_name  = $theme_obj->get( 'Name' );
			$this->all_plugins = $plugins;
			add_action( 'admin_menu', array( $this, 'admin_menu' ) );
			add_action( 'admin_notices', array( $this, 'notices' ) );
			add_action( 'admin_head', array( $this, 'dismiss' ) );
			$this->strings = array(
				'page_title' => sprintf( esc_html__( '%s Setup', 'headlesswp-light' ), $this->child_theme_name ),
				'menu_title' => sprintf( esc_html__( '%s Setup', 'headlesswp-light' ), $this->theme_name ),
			);

			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles' ) );
			add_action( 'wp_ajax_headlesswp_setup_plugin_installer', array( $this, 'plugin_installer' ) );

			// Make sure things get reset on switch theme.
			add_action( 'switch_theme', array( $this, 'clean_setup' ) );
		}

		/**
		 * Return an instance of this class.
		 *
		 * @since     1.0.0
		 *
		 * @return    object    A single instance of this class.
		 */
		public static function get_instance() {

			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		public function is_setup_complete() {

			$complete = array(
				'all_required_plugins_installed' => true,
				'all_plugins_installed'          => true,
				'permalinks_structure_set'       => get_option( 'permalink_structure' ),
			);

			foreach ( $this->all_plugins as $slug => $plugin ) {
				$is_active = is_plugin_active( $plugin['file_path'] );
				if ( ! $is_active ) {
					if ( $plugin['required'] ) {
						$complete['all_required_plugins_installed'] = false;
					}
					$complete['all_plugins_installed'] = false;
					break;
				}
			}
			return $complete;
		}

		public function admin_menu() {
			if ( ! current_user_can( 'install_plugins' ) ) {
				return;
			}
			$this->plugin_screen_hook_suffix[] = add_menu_page(
				$this->strings['page_title'],          // Page title.
				$this->strings['menu_title'],          // Menu title.
				'edit_theme_options',                  // Capability.
				$this->menu,                           // Menu slug.
				array( $this, 'setup_page' ), // Callback.
				get_template_directory_uri() . '/images/gatsby-wp-themes-logo-g.svg',
				4
			);
		}

		public function get_setup_page_url() {
			$url = add_query_arg(
				array(
					'page' => rawurlencode( $this->menu ),
				),
				esc_url( self_admin_url( 'admin.php' ) )
			);
			return $url;
		}


		/**
		 * Check if viewing one of this plugin's admin pages.
		 *
		 * @since   1.0.0
		 *
		 * @return  bool
		 */
		private function viewing_this_plugin() {

			if ( ! isset( $this->plugin_screen_hook_suffix ) ) {
				return false;
			}
			$screen = get_current_screen();
			return in_array( $screen->id, $this->plugin_screen_hook_suffix, true );
		}

		public function enqueue_styles() {
			wp_enqueue_style( 'headlesswp-admin', get_template_directory_uri() . '/css/admin.css', array(), '_HEADLESSWP_VERSION', 'all' );

			if ( ! $this->viewing_this_plugin() ) {
				wp_enqueue_style( 'headlesswp-setup-notices', get_template_directory_uri() . '/css/admin-notices.css', array(), '_HEADLESSWP_VERSION', 'all' );
				return;
			}
			wp_enqueue_style( 'headlesswp-setup', get_template_directory_uri() . '/css/setup.css', array(), '_HEADLESSWP_VERSION', 'all' );
		}

		public function enqueue_scripts() {
			if ( ! $this->viewing_this_plugin() ) {
				return;
			}

			wp_enqueue_script( 'headlesswp-setup-js', get_template_directory_uri() . '/inc/setup/setup.js', array(), '_HEADLESSWP_VERSION', true );

			$all_plugins = array();
			foreach ( $this->all_plugins as $key => $plugin ) {
				array_push(
					$all_plugins,
					array(
						'name'     => $plugin['name'],
						'slug'     => $key,
						'nonce'    => wp_create_nonce( "headlesswp-setup-install-$key" ),
						'required' => $plugin['required'],
					)
				);
			}

			$myparams = array(
				'nonce_import' => wp_create_nonce( 'headlesswp-setup-import' ),
				'current_page' => esc_url( $this->get_setup_page_url() ),
				'all_plugins'  => $all_plugins,
				'classes'      => array(
					'progress' => 'headlesswp-install-container',
					'fail'     => 'headlesswp-install-container headlesswp-install-container-fail',
					'success'  => 'headlesswp-install-container-success headlesswp-install-container',
				),
				'strings'      => array(
					'plugins_fail' => esc_html__( 'Something went wrong during the installation process. Not all plugins are properly installed.', 'headlesswp-light' ),
					'finished'     => esc_html__( 'Finished.', 'headlesswp-light' ),
					'success'      => esc_html__( 'Plugin successfully installed.', 'headlesswp-light' ),
				),
			);

			wp_localize_script( 'headlesswp-setup-js', 'headlesswp_setup_scriptparams', $myparams );

		}

		public function setup_page() {
			$complete = $this->is_setup_complete(); ?>

			<div class="wrap headlesswp-wrap">
				<h1>
						<?php echo esc_html( get_admin_page_title() ); ?>
				</h1>
				<?php if ( ! $complete['permalinks_structure_set'] ) { ?> 
				<section>
					<h2>Permalink structure</h2>
					<p class="headlesswp-notice__text">
						<span role="img" aria-label="warning">⚠️</span><?php printf( wp_kses_post( __( 'Your Gatsby website will not build properly with the "plain" <code>/?p=123</code> permalinks structure. <b>You need to fix the permalinks structure in <a class="headlesswp-notice__link" href="%s">Settings > Permalinks</a></b>', 'headlesswp-light' ) ), esc_url( admin_url( 'options-permalink.php' ) ) ); ?>
					</p>
				</section>
				<?php } ?>
					<?php
					$img_atts = array(
						'alt' => esc_attr__( 'Loading...Please wait', 'headlesswp-light' ),
						'src' => esc_url( get_template_directory_uri() ) . '/images/preloader.gif',
					);
					?>
					<?php if ( ! $complete['all_required_plugins_installed'] ) { ?>
				<section>
					<h2><?php esc_html_e( 'Required plugins', 'headlesswp-light' ); ?></h2>
					<p><?php esc_html_e( "Let's send your content to Gatsby. You will need two WordPress plugins: WP Gatsby and WPGraphQL. Your Gatsby website will not build without both of them. No further configuration of these two plugins is required - you just need to have them installed and activated.", 'headlesswp-light' ); ?></p>
					<ul>
						<?php foreach ( $this->all_plugins as $key => $plugin ) { ?>
							<?php
							if ( $plugin['required'] ) {
								?>
						<li>
							<strong><?php echo esc_html( $plugin['name'] ); ?></strong>
								<?php
								if ( array_key_exists( 'description', $plugin ) ) {
									echo '- ' . wp_kses_post( $plugin['description'] );
								}
								?>
						</li>
							<?php } ?>
						<?php } ?>
					</ul>
					<div class="js-install" style="position: relative; text-align: center">
						<button type="button" class="js-headlesswp-setup__link headlesswp-setup__link" id="headlesswp-install-required" >
							<?php esc_html_e( 'Let\'s Install and Activate Required Plugins.', 'headlesswp-light' ); ?>
						</button>
						<div class="progress-feedback js-progress-feedback js-headlesswp--hidden">
							<span>Installing required plugins. This can take a while...</span>
							<img class="headlesswp-setup__preloader" alt="<?php echo esc_attr( $img_atts['alt'] ); ?>" src="<?php echo esc_url( $img_atts['src'] ); ?>" width="64" height="64">
						</div>
						<div class="headlesswp-feedback"></div>
					</div>
				</section>

				<?php } else { ?>
					<p class="headlesswp-box headlesswp-setup__success"><?php printf( wp_kses_post( __( '<b>All required plugins are installed and activated.</b> <br/>Enjoy working with %s!<br/> <em>Thanks.</em>', 'headlesswp-light' ) ), esc_html( $this->child_theme_name ) ); ?></p>
					<p>
						<?php
						printf( 'Start adding your content', 'headlesswp-light' );
						?>
					</p>
				<?php } ?>

					<?php if ( ! $complete['all_plugins_installed'] ) { ?>
					<section>
					<h2><?php esc_html_e( 'Recommended plugins', 'headlesswp-light' ); ?></h2>
					<p><?php esc_html_e( 'To take full advantage of our Gatsby themes, we recommend a few additional WordPress Plugins. They are not required and your Gatsby will build without any of them. We recommend:', 'headlesswp-light' ); ?></p>
					<ul>
						<?php foreach ( $this->all_plugins as $key => $plugin ) { ?>
							<?php
							if ( ! $plugin['required'] ) {
								?>
						<li>
							<strong><?php echo esc_html( $plugin['name'] ); ?></strong>
								<?php
								if ( array_key_exists( 'description', $plugin ) ) {
									echo '- ' . wp_kses_post( $plugin['description'] );
								}
								?>
						</li>
							<?php } ?>
						<?php } ?>
					</ul>
					<div class="js-install" style="position: relative; text-align: center">
						<button type="button" class="js-headlesswp-setup__link headlesswp-setup__link" id="headlesswp-install-all" >
							<?php esc_html_e( 'Install and Activate All Required & Recommended Plugins.', 'headlesswp-light' ); ?>
						</button>
						<div class="progress-feedback js-progress-feedback js-headlesswp--hidden">
							<span><?php esc_html_e( 'Installing required & recommended plugins. This can take a while...', 'headlesswp-light' ); ?></span>
							<img class="headlesswp-setup__preloader" alt="<?php echo esc_attr( $img_atts['alt'] ); ?>" src="<?php echo esc_url( $img_atts['src'] ); ?>" width="64" height="64">
						</div>
						<div class="headlesswp-feedback"></div>
					</div>
				</section>		
				<?php } else { ?>
					<p class="headlesswp-box headlesswp-setup__success"><?php esc_html_e( 'Yay!! All recommended plugins are installed and activated.', 'headlesswp-light' ); ?></p>
				<?php } ?>
				<footer class="headlesswp-box headlesswp-setup__footer">
					<p><?php esc_html_e( 'The complete list of the required(*) and recommended plugins:', 'headlesswp-light' ); ?></p>
					<ul>
							<?php foreach ( $this->all_plugins as $key => $plugin ) { ?>
							<li><strong>
								<?php
								echo esc_html( $plugin['name'] );
								echo $plugin['required'] ? '*' : '';
								?>
								- </strong>
								<?php
								if ( 'repo' !== $plugin['source'] ) {
									$download_link = $plugin['source'];
									if ( stripos( $plugin['source'], get_template_directory() ) === 0 ) {
										$download_link = str_replace( get_template_directory(), get_template_directory_uri(), $plugin['source'] );
									} elseif ( stripos( $plugin['source'], get_stylesheet_directory() ) === 0 ) {
										$download_link = str_replace( get_stylesheet_directory(), get_stylesheet_directory_uri(), $plugin['source'] );
									}
									echo '<a href="' . esc_url( $download_link ) . '">' . sprintf( esc_html__( '.zip file', 'headlesswp-light' ) ) . '</a>';
								} else {
									esc_html_e( ' available in the WordPress repo', 'headlesswp-light' );
								}
								?>
						</li>
						<?php } ?>
					</ul>	
				</footer>
			</div>
						<?php
		}

		public function required_plugins_notice() {

		}

		public function all_plugins_notices() {

		}

		public function notices() {

			if ( ! current_user_can( 'install_plugins' ) || $this->viewing_this_plugin() ) {
				return;
			}

			$complete = $this->is_setup_complete();

			if ( $complete['all_plugins_installed'] && $complete['permalinks_structure_set'] ) {
				return;
			}

			if ( ! $complete['all_required_plugins_installed'] ) {
				$string  = '<div class="headlesswp-notice">';
				$string .= '<h3>' . sprintf( esc_html__( 'Welcome to %s!', 'headlesswp-light' ), $this->child_theme_name ) . '</h3>';
				$string .= '<p class="headlesswp-notice__text">' . sprintf( __( 'Let\'s start setting up your WordPress website for Gatsby. %s <b>requires</b> two WordPress plugins <i>Gatsby WP</i> et <i>WPGraphQL.</i>', 'headlesswp-light' ), $this->child_theme_name ) . '</p>';
				$string .= '<a href="' . esc_url( $this->get_setup_page_url() ) . '" class="headlesswp-notice__link">' . esc_html__( 'Let\'s install required plugins', 'headlesswp-light' ) . '</a> ';
				$string .= '</div>';
				add_settings_error( 'headlesswp_setup_required', 'headlesswp_setup_required', $string, 'error' );
			}
			if ( ! $complete['all_plugins_installed'] && ! get_user_meta( get_current_user_id(), $this->dismiss_notice_meta_field_slug, true ) ) {
				$string  = '<div class="headlesswp-notice">';
				$string .= '<p class="headlesswp-notice__text">' . sprintf( __( '%s <b>strongly recommends</b> installing certain WordPress plugins. Some of them are not activated on this site.', 'headlesswp-light' ), $this->child_theme_name ) . '</p>';
				$string .= '<a href="' . esc_url( $this->get_setup_page_url() ) . '" class="headlesswp-notice__link">' . esc_html__( 'Learn More', 'headlesswp-light' ) . '</a> ';
				$string .= '<a href="' . esc_url( add_query_arg( 'headlesswp-setup-dismiss', 'dismiss_admin_notices' ) ) . '" class="headlesswp-notice__dismiss" target="_parent">' . esc_html__( 'Dismiss this notice', 'headlesswp-light' ) . '</a>';
				$string .= '</div>';
				add_settings_error( 'headlesswp_setup', 'headlesswp_setup', $string, 'update' );
			}

			if ( ! $complete['permalinks_structure_set'] ) {
				$string  = '<div class="headlesswp-notice">';
				$string .= '<p class="headlesswp-notice__text">' . sprintf( __( 'Your Gatsby website will not build properly with the "plain" <code>/?p=123</code> permalinks structure. You need to fix the permalinks structure in <a class="headlesswp-notice__link" href="%s">Settings > Permalinks</a>', 'headlesswp-light' ), esc_url( admin_url( 'options-permalink.php' ) ) ) . '</p>';
				$string .= '</div>';
				add_settings_error( 'headlesswp_setup_permalinks', 'headlesswp_setup_permalinks', $string, 'error' );
			}

			// Admin options pages already output settings_errors, so this is to avoid duplication.
			if ( 'options-general' !== $GLOBALS['current_screen']->parent_base ) {
				$this->display_settings_errors();
			}
		}
		/**
		 * Add dismissable admin notices.
		 *
		 * Appends a link to the admin nag messages. If clicked, the admin notice disappears and no longer is visible to users.
		 * hooked to admin_head
		 */
		public function dismiss() {
			if ( isset( $_GET['headlesswp-setup-dismiss'] ) ) {
				update_user_meta( get_current_user_id(), $this->dismiss_notice_meta_field_slug, 1 );
			}
		}

		/**
		 * Delete dismissable nag option for all users when theme is switched.
		 */
		private function update_dismiss() {
			delete_metadata( 'user', null, $this->dismiss_notice_meta_field_slug, null, true );
		}

		/**
		 * Display settings errors and remove those which have been displayed to avoid duplicate messages showing
		 */
		protected function display_settings_errors() {

			global $wp_settings_errors;

			settings_errors( 'headlesswp_setup_required' );
			settings_errors( 'headlesswp_setup' );
			settings_errors( 'headlesswp_setup_permalinks' );

			foreach ( (array) $wp_settings_errors as $key => $details ) {
				if ( 'headlesswp_setup_required' === $details['setting'] || 'headlesswp_setup' === $details['setting'] ) {
					unset( $wp_settings_errors[ $key ] );
					break;
				}
			}
		}

		private function is_plugin_installed( $path ) {
			$all = get_plugins();
			return array_key_exists( $path, $all ) || in_array( $path, $all, true );
		}

		private function install_plugin( $plugin ) {
			if ( 'repo' === $this->all_plugins[ $plugin ]['source'] ) {
				$api    = plugins_api(
					'plugin_information',
					array(
						'slug'   => $plugin,
						'fields' => array(
							'short_description' => false,
							'requires'          => false,
							'sections'          => false,
							'rating'            => false,
							'ratings'           => false,
							'downloaded'        => false,
							'last_updated'      => false,
							'added'             => false,
							'tags'              => false,
							'compatibility'     => false,
							'homepage'          => false,
							'donate_link'       => false,
						),
					)
				);
				$source = $api->download_link;
			} else {
				$source = $this->all_plugins[ $plugin ]['source'];
			}

			$skin     = new WP_Ajax_Upgrader_Skin();
			$upgrader = new Plugin_Upgrader( $skin );
			$error    = $upgrader->install( $source );
			/*
			* Check for errors...
			* $upgrader->install() returns NULL on success,
			* otherwise a WP_Error object.
			*/
			if ( is_wp_error( $error ) ) {
				return $error;
			} else {
				return $upgrader->plugin_info();
			}
		}

		public function plugin_installer( $plugin = false ) {

			if ( ! $plugin ) {

				if ( ! isset( $_POST['plugin'] ) ) {
					return;
				}

				$plugin = sanitize_text_field( wp_unslash( $_POST['plugin'] ) );

				check_ajax_referer( 'headlesswp-setup-install-' . esc_attr( $plugin ), 'nonce' );

				if ( ! isset( $this->all_plugins[ $plugin ] ) ) {
					return;
				}
			}

			$plugin_slug      = $this->all_plugins[ $plugin ]['slug']; // Plugin slug.
			$plugin_name      = $this->all_plugins[ $plugin ]['name']; // Plugin name.
			$plugin_source    = $this->all_plugins[ $plugin ]['source']; // Plugin source.
			$plugin_file_path = $this->all_plugins[ $plugin ]['file_path']; // Plugin file path.
			if ( ! isset( $plugin_slug ) || ! isset( $plugin_name ) || ! isset( $plugin_source ) ) {
				return;
			}
			require_once ABSPATH . 'wp-load.php';
			require_once ABSPATH . 'wp-includes/pluggable.php';
			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			require_once ABSPATH . 'wp-admin/includes/file.php';
			require_once ABSPATH . 'wp-admin/includes/misc.php';
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
			require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			$already_installed_as = false;

			if ( is_plugin_active( $plugin_file_path ) ) {
				wp_send_json_success(
					array(
						'plugin'  => $plugin,
						'message' => esc_html__(
							'Plugin already installed and activated.',
							'headlesswp-light'
						),
					)
				);
			}

			if ( $this->is_plugin_installed( $plugin_file_path ) ) {
				$already_installed_as = $plugin_file_path;
			} else {
				// install here
				$already_installed_as = $this->install_plugin( $plugin );
				if ( is_wp_error( $already_installed_as ) ) {
					wp_send_json_error(
						array(
							'plugin'  => $plugin,
							'message' => 'Something went wrong (install)',
						)
					);
				}
			}

			$error = validate_plugin( $already_installed_as );
			if ( is_wp_error( $error ) ) {
				wp_send_json_error(
					array(
						'plugin'  => $plugin,
						'message' => 'Error: Plugin main file has not been found (' . $plugin . ').',
					)
				);
			}
			$error = activate_plugin( $already_installed_as );
			if ( is_wp_error( $error ) ) {
				wp_send_json_error(
					array(
						'plugin'  => $plugin,
						'message' => 'Error: Something went wrong. Plugin has not been activated (' . $plugin . ').',
					)
				);
			}
			wp_send_json_success(
				array(
					'plugin'  => $plugin,
					'message' => 'Plugin has been installed and activated',
				)
			);
		}

		/**
		 * Flushes the plugins cache on theme switch to prevent stale entries
		 * from remaining in the plugin table.
		 */
		private function flush_plugins_cache( $clear_update_cache = true ) {
			wp_clean_plugins_cache( $clear_update_cache );
		}

		public function clean_setup() {
			$this->update_dismiss();
			$this->flush_plugins_cache();
		}
	}
}
