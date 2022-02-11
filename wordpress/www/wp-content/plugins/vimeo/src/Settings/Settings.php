<?php
namespace Tribe\Vimeo_WP\Settings;

use Tribe\Vimeo_WP\Vimeo\Vimeo_Auth;

class Settings {

	const ACCESS_TOKEN             = '_vimeo_access_token';
	const USER_TRACKING            = '_vimeo_user_tracking';
	const USER_TOKEN               = '_vimeo_user_token';
	const VIMEO_GROUP              = 'vimeo_settings';
	const VIMEO_GROUP_ONLY_CONSENT = 'vimeo_settings_only_consent';
	const VIMEO_SECTION            = 'vimeo_settings_section';

	private $valid_key = false;

	/**
	 * Registers the App ID and Secret and allows them to be displayed on the
	 * Settings page.
	 *
	 * @hook admin_init
	 * @return void
	 */
	public function register_settings() {
		add_settings_section(
			self::VIMEO_SECTION,
			null,
			null,
			self::VIMEO_GROUP
		);

		$this->register_user_token();
		$this->register_user_consent();
	}

	/**
	 * Callback from add_settings_field to display the input fields.
	 *
	 * @param array $args
	 * @return void
	 */
	public function field_html( $args ) {
		$text = get_option( $args['id'] );
		printf(
			'<input type="%1$s" id="%2$s" name="%2$s" value="%3$s" class="regular-text" data-js="vimeo-settings-activation-key-input" required />',
			esc_attr( $args['type'] ),
			esc_attr( $args['id'] ),
			esc_attr( $text )
		);
		$this->get_description( $args );
	}

	public function field_checkbox( $args ) {
		$value = get_option( $args['id'] );
		printf(
			'<fieldset>
				<legend class="screen-reader-text"><span>%1$s</span></legend>
				<label class="vimeo-settings__text-box--medium" for="%2$s">
					<input name="%2$s" type="checkbox" id="%2$s" value="1" %3$s />
					%4$s
				</label>
			</fieldset>',
			esc_html__( 'User Tracking Consent', 'vimeo-for-wordpress' ),
			esc_attr( $args['label_for'] ),
			checked( $value, true, false ),
			esc_html__( 'Help us improve our features and services by sharing non-sensitive data via usage tracking that shows us how Vimeo is used. No personal data is tracked or stored.', 'vimeo-for-wordpress' )
		);

		$this->get_description( $args );
	}

	private function register_user_token() {

		register_setting( self::VIMEO_GROUP, self::USER_TOKEN, [ $this,  'sanitize_user_token' ] );

		add_settings_field(
			self::USER_TOKEN,
			__( 'Activation key*', 'vimeo-for-wordpress' ),
			[ $this, 'field_html' ],
			self::VIMEO_GROUP,
			self::VIMEO_SECTION,
			[
				'id'        => self::USER_TOKEN,
				'label_for' => self::USER_TOKEN,
				'type'      => 'text',
				'class'      => 'vimeo-settings__activation-key-row vimeo-settings__table-box--medium',
				'description' => __( 'Paste the Activation Key from Vimeo.com in the box above.', 'vimeo-for-wordpress' ),
			]
		);
	}

	private function register_user_consent() {
		$args = [
			'default'           => false,
			'sanitize_callback' => 'rest_sanitize_boolean',
			'type'              => 'boolean',
		];
		register_setting( self::VIMEO_GROUP, self::USER_TRACKING, $args );

		add_settings_field(
			self::USER_TRACKING,
			__( 'Share anonymous usage data?', 'vimeo-for-wordpress' ),
			[ $this, 'field_checkbox' ],
			self::VIMEO_GROUP,
			self::VIMEO_SECTION,
			[
				'id'        => self::USER_TRACKING,
				'label_for' => self::USER_TRACKING,
				'type'      => 'checkbox',
			]
		);
	}

	private function get_description( $args ) {
		if ( isset( $args[ 'description' ] ) && strlen( $args[ 'description' ] ) ) {
			printf(
				'<p>%s</p>',
				esc_html( $args[ 'description' ] )
			);
		}
	}

	public function sanitize_user_token( $value ) {
		if ( $this->valid_key || get_option( self::USER_TOKEN, '' ) === $value ) {
			return $value;
		}

		if ( $value ) {
			$request = new Vimeo_Auth();
			if ( $request->validate_key( $value ) ) {
				$this->valid_key = true;
				add_settings_error( self::USER_TOKEN, 'success', __(  'Activation Successful.', 'vimeo-for-wordpress' ), 'success' );
			} else {
				$value = '';
				add_settings_error( self::USER_TOKEN, 'error', __( 'Cannot validate activation key. Please try again.', 'vimeo-for-wordpress' ), 'error' );
			}
		}
		return $value;
	}
}
