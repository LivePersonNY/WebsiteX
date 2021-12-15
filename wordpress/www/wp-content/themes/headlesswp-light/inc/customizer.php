<?php
/**
 * Headless WP Theme Customizer
 *
 * @package headlesswp
 */
require_once get_template_directory() . '/inc/class-headlesswp-sortable-checkboxes-custom-control.php';
require_once get_template_directory() . '/inc/class-headlesswp-all-follows-custom-control.php';
require_once get_template_directory() . '/inc/class-headlesswp-color-custom-control.php';

add_action(
	'customize_register',
	function ( $wp_customize ) use ( $headlesswp_customizer_config ) {
		$wp_customize->get_setting( 'blogname' )->transport        = 'postMessage';
		$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';

		if ( isset( $wp_customize->selective_refresh ) ) {
			$wp_customize->selective_refresh->add_partial(
				'blogname',
				array(
					'selector'        => '[data-to="blogname"]',
					'render_callback' => function() {
						return get_bloginfo( 'name' );
					},
				)
			);
			$wp_customize->selective_refresh->add_partial(
				'blogdescription',
				array(
					'selector'        => '[data-to="tagline"]',
					'render_callback' => function() {
						return get_bloginfo( 'description' );
					},
				)
			);
			$wp_customize->selective_refresh->add_partial(
				'site_icon',
				array(
					'selector'         => '[data-to="site-icon"]',
					'fallback_refresh' => false,
				)
			);
		}

		$wp_customize->remove_section( 'custom_css' );
		$wp_customize->remove_control( 'custom_logo' );
		$wp_customize->remove_control( 'display_header_text' );

		$wp_customize->add_panel(
			'headlesswp-site-settings',
			array(
				'title'       => __( 'Settings for your Gatsby website', 'headlesswp-light' ),
				'description' => __( 'Description', 'headlesswp-light' ),
				'priority'    => 1,
			)
		);

		// Move Site Identity tab to our custom panel.
		$wp_customize->get_section( 'title_tagline' )->panel = 'headlesswp-site-settings';
		$wp_customize->add_section(
			'headlesswp-features',
			array(
				'title'       => __( 'General Features', 'headlesswp-light' ),
				//'description' => __( '', 'headlesswp-light' ),
				'panel'       => 'headlesswp-site-settings',
			)
		);

		if ( $headlesswp_customizer_config['logo'] ) {
			$wp_customize->add_setting(
				'headlesswp-logo',
				array(
					'type'              => 'option',
					'capability'        => 'manage_options',
					'sanitize_callback' => 'absint',
				)
			);
			$wp_customize->add_control(
				new WP_Customize_Cropped_Image_Control(
					$wp_customize,
					'headlesswp-logo_control',
					array(
						'label'                            => __( 'Logo', 'headlesswp-light' ),
						'mime_type'                        => 'image',
						'priority'                         => 10,
						'section'                          => 'title_tagline',
						'settings'                         => 'headlesswp-logo',
						'flex_width'                       => true,
						'flex_height'                      => true,
					)
				)
			);
			$wp_customize->selective_refresh->add_partial(
				'headlesswp-logo',
				array(
					'selector' => '.logo',
				)
			);
		}

		if ( $headlesswp_customizer_config['dark_mode_logo'] ) {
			$wp_customize->add_setting(
				'headlesswp-dark_mode_logo',
				array(
					'type'              => 'option',
					'capability'        => 'manage_options',
					'sanitize_callback' => 'absint',
				)
			);

			$wp_customize->add_control(
				new WP_Customize_Cropped_Image_Control(
					$wp_customize,
					'headlesswp-dark_mode_logo_control',
					array(
						'label'       => __( 'Dark Mode Logo', 'headlesswp-light' ),
						'mime_type'   => 'image',
						'priority'    => 11,
						'section'     => 'title_tagline',
						'settings'    => 'headlesswp-dark_mode_logo',
						'flex_width'  => true,
						'flex_height' => true,
					)
				)
			);
			$wp_customize->selective_refresh->add_partial(
				'headlesswp-dark_mode_logo',
				array(
					'selector' => '.dark-mode-logo',
				)
			);
		}
		if ( $headlesswp_customizer_config['add_wp_comments'] ) {
			$wp_customize->add_setting(
				'headlesswp-add_wp_comments',
				array(
					'type'              => 'option',
					'transport'         => 'postMessage',
					'capability'        => 'manage_options',
					'default'           => $headlesswp_customizer_config['add_wp_comments']['default'],
					'sanitize_callback' => function( $checked ) {
						return ( ( isset( $checked ) && true === $checked ) ? true : false );
					},
				)
			);

			$wp_customize->add_control(
				'headlesswp-add_wp_comments',
				array(
					'type'        => 'checkbox',
					'priority'    => 12, // Within the section.
					'section'     => 'headlesswp-features', // Required, core or custom.
					'label'       => __( 'Add WordPress Comments', 'headlesswp-light' ),
					'description' => __( 'Our Gatsby theme supports native WordPress comments.', 'headlesswp-light' ),
				)
			);
			$wp_customize->selective_refresh->add_partial(
				'headlesswp-add_wp_comments',
				array(
					'selector'         => '[data-to="headlesswp-add_wp_comments"]',
					'fallback_refresh' => false,
				)
			);
		}

		if ( $headlesswp_customizer_config['add_wp_search'] ) {
			$wp_customize->add_setting(
				'headlesswp-add_wp_search',
				array(
					'type'              => 'option',
					'transport'         => 'postMessage',
					'capability'        => 'manage_options',
					'default'           => $headlesswp_customizer_config['add_wp_search']['default'],
					'fallback_refresh'  => false,
				)
			);

			$wp_customize->add_control(
				'headlesswp-add_wp_search',
				array(
					'type'        => 'checkbox',
					'priority'    => 12, // Within the section.
					'section'     => 'headlesswp-features', // Required, core or custom.
					'label'       => __( 'Add WordPress Search', 'headlesswp-light' ),
					'description' => __( 'Check here to add native search functionality.', 'headlesswp-light' ),
				)
			);
			$wp_customize->selective_refresh->add_partial(
				'headlesswp-add_wp_search',
				array(
					'selector'         => '[data-to="headlesswp-add_wp_search"]',
					'fallback_refresh' => false,
				)
			);
		}

		if ( $headlesswp_customizer_config['add_color_modes'] ) {
			$wp_customize->add_setting(
				'headlesswp-add_color_modes',
				array(
					'type'              => 'option',
					'transport'         => 'postMessage',
					'capability'        => 'manage_options',
					'default'           => $headlesswp_customizer_config['add_color_modes']['default'],
					'sanitize_callback' => function( $checked ) {
						return ( ( isset( $checked ) && true === $checked ) ? true : false );
					},
				)
			);

			$wp_customize->add_control(
				'headlesswp-add_color_modes',
				array(
					'type'        => 'checkbox',
					'priority'    => 12, // Within the section.
					'section'     => 'headlesswp-features', // Required, core or custom.
					'label'       => __( 'Add Color Modes', 'headlesswp-light' ),
					'description' => __( 'Activate color modes.', 'headlesswp-light' ),
				)
			);
			$wp_customize->selective_refresh->add_partial(
				'headlesswp-add_color_modes',
				array(
					'selector'         => '[data-to="headlesswp-add_color_modes"]',
					'fallback_refresh' => false,
				)
			);
		}

		if ( $headlesswp_customizer_config['social_follow'] ) {
			$wp_customize->add_section(
				'headlesswp-social_follow',
				array(
					'title'       => __( 'Social Follow Links', 'headlesswp-light' ),
					// 'description' => __( '', 'headlesswp-light' ),
					'panel'       => 'headlesswp-site-settings',
				)
			);
			require_once get_template_directory() . '/inc/customizer-follow-links.php';
		}

		if ( $headlesswp_customizer_config['widgets'] ) {
			$wp_customize->add_section(
				'headlesswp-widgets',
				array(
					'title' => __( 'Gatsby Widgets', 'headlesswp-light' ),
					'panel' => 'headlesswp-site-settings',
				)
			);
			$areas = $headlesswp_customizer_config['widgets']['areas'];
			foreach ( $areas as $key => $area ) {

					$wp_customize->add_setting(
						"headlesswp-$key",
						array(
							'default'           => $area['default'],
							'transport'         => 'postMessage',
							'sanitize_callback' => 'sanitize_text_field',
						)
					);
					$choices = array();
				foreach ( $headlesswp_customizer_config['widgets']['widgets_list'] as $slug => $settings ) {
					$choices[ $slug ] = $settings['title'];
				}
					$wp_customize->add_control(
						new HeadlessWP_Sortable_Checkboxes_Custom_Control(
							$wp_customize,
							"headlesswp-$key",
							array(
								'label'       => $area['label'],
								'description' => $area['description'],
								'section'     => 'headlesswp-widgets',
								'input_attrs' => array(
									'sortable' => true,
								),
								'choices'     => $choices,
							)
						)
					);
					$wp_customize->selective_refresh->add_partial(
						"headlesswp-$key",
						array(
							'selector'         => "[data-to='headlesswp-$key']",
							'fallback_refresh' => false,
						)
					);
			}
			if ( $headlesswp_customizer_config['widgets']['archive_sidebar_position'] ) {
				$wp_customize->add_setting(
					'headlesswp-archive_sidebar_position',
					array(
						'default'           => $headlesswp_customizer_config['widgets']['archive_sidebar_position']['default'],
						'transport'         => 'postMessage',
						'sanitize_callback' => 'sanitize_text_field',

					)
				);
					$wp_customize->add_control(
						'headlesswp-archive_sidebar_position',
						array(
							'type'        => 'select',
							'section'     => 'headlesswp-widgets',
							'label'       => $headlesswp_customizer_config['widgets']['archive_sidebar_position']['label'],
							'description' => isset( $headlesswp_customizer_config['widgets']['archive_sidebar_position']['description'] ) ? $headlesswp_customizer_config['widgets']['archive_sidebar_position']['description'] : '',
							'choices'     => $headlesswp_customizer_config['widgets']['archive_sidebar_position']['choices'],
						)
					);
					$wp_customize->selective_refresh->add_partial(
						'headlesswp-archive_sidebar_position',
						array(
							'selector' => '[data-to="headlesswp-archive_sidebar_position"]',
						)
					);
			}
		}

		if ( $headlesswp_customizer_config['colors'] ) {
			$wp_customize->add_panel(
				'headlesswp-css-theme',
				array(
					'title'       => __( 'Gatsby CSS Theme', 'headlesswp-light' ),
					// 'description' => __( 'Currently our Gatsby themes ...', 'headlesswp-light' ),
					'panel'       => 'headlesswp-site-settings',
					'priority'    => 2,
				)
			);
			$wp_customize->add_section(
				'headlesswp-css-theme-colors',
				array(
					'title'       => __( 'Gatsby Colors', 'headlesswp-light' ),
					// 'description' => __( 'Currently our Gatsby themes ...', 'headlesswp-light' ),
					'panel'       => 'headlesswp-css-theme',
				)
			);
			foreach ( $headlesswp_customizer_config['colors'] as $name => $settings ) {
				$wp_customize->add_setting(
					"headlesswp-colors-$name",
					array(
						'capability'        => 'manage_options',
						'default'           => $settings['default'],
						'transport'         => 'postMessage',
						'sanitize_callback' => 'sanitize_hex_color',
					)
				);
				$wp_customize->add_control(
					new HeadlessWP_Color_Custom_Control(
						$wp_customize,
						"headlesswp-colors-$name",
						array(
							'label'       => $settings['label'],
							'description' => array_key_exists( 'description', $settings ) ? $settings['description'] : null,
							'section'     => 'headlesswp-css-theme-colors',
						)
					)
				);
				$wp_customize->selective_refresh->add_partial(
					"headlesswp-colors-$name",
					array(
						'selector'         => '[data-to="' . "headlesswp-colors-$name" . '"]',
						'fallback_refresh' => false,
					)
				);
			}
			if ( $headlesswp_customizer_config['modes'] ) {
				foreach ( $headlesswp_customizer_config['modes'] as $key => $mode ) {
					$wp_customize->add_section(
						"headlesswp-css-theme-mode-$key",
						array(
							'title' => sprintf( __( 'Gatsby Colors - Mode %s', 'headlesswp-light' ), $key ),
							'panel' => 'headlesswp-css-theme',
						)
					);
					foreach ( $mode as $name => $settings ) {
						$wp_customize->add_setting(
							"headlesswp-colors-mode-$key-$name",
							array(
								'capability'        => 'manage_options',
								'default'           => $settings['default'],
								'transport'         => 'postMessage',
								'sanitize_callback' => 'sanitize_hex_color',
							)
						);
						$wp_customize->add_control(
							new HeadlessWP_Color_Custom_Control(
								$wp_customize,
								"headlesswp-colors-mode-$key-$name",
								array(
									'label'       => $settings['label'],
									'description' => array_key_exists( 'description', $settings ) ? $settings['description'] : null,
									'section'     => "headlesswp-css-theme-mode-$key",
								)
							)
						);
						$wp_customize->selective_refresh->add_partial(
							"headlesswp-colors-mode-$key-$name",
							array(
								'selector'         => '[data-to="' . "headlesswp-colors-mode-$key-$name" . '"]',
								'fallback_refresh' => false,
							)
						);
					}
				}
			}
		}

	}
);


		/**
		 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
		 */

add_action(
	'customize_preview_init',
	function () use ( $headlesswp_customizer_config ) {
		wp_enqueue_script( 'headlesswp-customizer', get_template_directory_uri() . '/build/customizer-preview.js', array( 'customize-preview' ), _HEADLESSWP_VERSION, true );
		wp_localize_script(
			'headlesswp-customizer',
			'headlesswp_customizer_params',
			array(
				'colors' => $headlesswp_customizer_config['colors'],
				'modes'  => $headlesswp_customizer_config['modes'],
			)
		);
	}
);


add_action(
	'customize_controls_print_styles',
	function() {
		wp_enqueue_style( 'headlesswp-customize-css', get_template_directory_uri() . '/css/customizer-main.css', array(), '_HEADLESSWP_VERSION' );
	}
);

add_action(
	'customize_controls_enqueue_scripts',
	function() {
		// phpcs:disable
		wp_enqueue_script( 'fontawesome', 'https://kit.fontawesome.com/569911808f.js' );
		// phpcs:enable
		wp_enqueue_script( 'headlesswp-custom-controls3-js', get_template_directory_uri() . '/build/customizer.js', array(), '_HEADLESSWP_VERSION', true );
	}
);
