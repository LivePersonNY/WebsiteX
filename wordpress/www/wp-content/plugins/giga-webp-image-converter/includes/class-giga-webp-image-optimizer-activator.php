<?php

/**
 * Fired during plugin activation
 *
 * @link       https://gigareef.com/
 * @since      1.0.0
 *
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/includes
 * @author     Michael Maffattone <mikemaff@gigareef.com>
 */
class GWIC_Activator {

	/**
	 * Short Description. (use period)
	 *
	 * Long Description.
	 *
	 * @since    1.0.0
	 */
	public static function gwic_activate() {
    add_option( 'gwic_activation_redirect', true );
	}

  /**
   * Create Table on Activation. (use period)
   *
   *
   * @since    1.0.0
   */
  public static function gwic_create_plugin_database_table() {
    global $table_prefix, $wpdb;

    $tblname = 'giga_image_optimizer_active_list';
    $wp_optimizer_table = $table_prefix . $tblname;
    
    #Check to see if the table exists already, if not, then create it

    if($wpdb->get_var( "show tables like '$wp_optimizer_table'" ) != $wp_optimizer_table) {
      $sql = "CREATE TABLE `". $wp_optimizer_table . "` ( ";
      $sql .= "  `id`  int(11)   NOT NULL auto_increment, ";
      $sql .= "  `email`  varchar(255)   NOT NULL, ";
      $sql .= "  `private_api_key`  varchar(255)   NOT NULL, ";
      $sql .= "  `is_activated` ENUM('N','Y') NOT NULL COMMENT 'N => Not Activated, Y => Activated', ";
      $sql .= "  `created_at`  DATETIME NULL DEFAULT NULL, ";
      $sql .= "  PRIMARY KEY (`id`) "; 
      $sql .= ") ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ; ";
      require_once( ABSPATH . '/wp-admin/includes/upgrade.php' );
      dbDelta($sql);
    }    

    $setting_tblname = 'giga_image_optimizer_settings';
    $wp_settings_table = $table_prefix . $setting_tblname;
    
    #Check to see if the table exists already, if not, then create it

    if($wpdb->get_var( "show tables like '$wp_settings_table'" ) != $wp_settings_table) {
      $sql = "CREATE TABLE `". $wp_settings_table . "` ( ";
      $sql .= "  `id`  int(11)   NOT NULL auto_increment, ";
      $sql .= "  `user_id`  int(11)   NOT NULL, ";
      $sql .= "  `email`  varchar(255)   NOT NULL, ";
      $sql .= "  `active_id`  int(11)   NOT NULL, ";
      $sql .= "  `is_automatically_optimize`  TINYINT(1)  NOT NULL, ";
      $sql .= "  `optimize_percentage`  varchar(255)   NOT NULL, ";
      $sql .= "  `created_at`  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, ";
      $sql .= "  `updated_at`  DATETIME NULL DEFAULT NULL, ";
      $sql .= "  PRIMARY KEY (`id`) "; 
      $sql .= ") ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ; ";
      require_once( ABSPATH . '/wp-admin/includes/upgrade.php' );
      dbDelta($sql);
    } 

  }

}
