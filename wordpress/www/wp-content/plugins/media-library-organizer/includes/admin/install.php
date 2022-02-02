<?php
/**
 * Installation class
 * 
 * @package   Media_Library_Organizer
 * @author    WP Media Library
 * @version   1.0.0
*/
class Media_Library_Organizer_Install {

    /**
     * Holds the base class object.
     *
     * @since   1.0.5
     *
     * @var     object
     */
    public $base;

    /**
     * Constructor
     * 
     * @since   1.0.5
     *
     * @param   object $base    Base Plugin Class
     */
    public function __construct( $base ) {

        // Store base class
        $this->base = $base;

    }

    /**
     * Runs the installation routine on the currently active site
     *
     * @since   1.0.0
     */
    public function install() {

        // Update the version number
        update_option( $this->base->plugin->name . '-version', $this->base->plugin->version ); 

    }

    /**
     * Runs migration routines when the plugin is updated
     *
     * @since   1.0.0
     */
    public function upgrade() {

        global $wpdb;

        // Get current installed version number
        $installed_version = get_option( $this->base->plugin->name . '-version' ); // false | 1.1.7

        // If the version number matches the plugin version, bail
        if ( $installed_version == $this->base->plugin->version ) {
            return;
        }

        /**
         * 1.3.2: Migrate general[taxonomy_enabled] to general[mlo-category_enabled]
         */
        if ( ! $installed_version || $installed_version < '1.3.2' ) {
            $settings = $this->base->get_class( 'settings' )->get_settings( 'general' );
            $settings['mlo-category_enabled'] = ( isset( $settings['taxonomy_enabled'] ) ? $settings['taxonomy_enabled'] : 1 );
            unset( $settings['taxonomy_enabled'] );
            $this->base->get_class( 'settings' )->update_settings( 'general', $settings );
        }

        // Update the version number
        update_option( $this->base->plugin->name . '-version', $this->base->plugin->version );  

    }

    /**
     * Runs the uninstallation routine on the currently active site
     *
     * @since   1.0.0
     */
    public function uninstall() {

    }

    /**
     * Returns the singleton instance of the class.
     *
     * @since       1.0.0
     * @deprecated  1.0.5
     *
     * @return      object Class.
     */
    public static function get_instance() {

        // Define class name
        $name = 'install';

        // Warn the developer that they shouldn't use this function.
        _deprecated_function( __FUNCTION__, '1.0.5', 'Media_Library_Organizer()->get_class( \'' . $name . '\' )' );

        // Return the class
        return Media_Library_Organizer()->get_class( $name );

    }

}