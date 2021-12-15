<?php
require_once dirname(__FILE__) . '/includes/lib/mo-saml-options-enum.php';
include_once 'mo_saml_logger.php'; 
add_action( 'admin_init', 'mo_saml_miniorange_import_export');

$tab_class_names_array =array(
	"SSO_Login"         => 'mo_saml_options_enum_sso_loginMoSAML',
	"Identity_Provider" => 'mo_saml_options_enum_identity_providerMoSAML',
	"Service_Provider"  => 'mo_saml_options_enum_service_providerMoSAML',
	"Attribute_Mapping" => 'mo_saml_options_enum_attribute_mappingMoSAML',
	"Role_Mapping"      => 'mo_saml_options_enum_role_mappingMoSAML'
);

if(get_option('MO_SAML_TEST_STATUS')!=1){

	$tab_class_names_array['Test_Configuration'] = 'mo_saml_options_test_configuration';
}

define("Tab_Class_Names",serialize($tab_class_names_array));

/**
 *Function to display block of UI for export Import
 */
function mo_saml_miniorange_keep_configuration_saml() {
	echo '<div class="mo_saml_support_layout" id="mo_saml_keep_configuration_intact">
        <div>
        <h3>' . __('Keep configuration Intact','miniorange-saml-20-single-sign-on') . '</h3>
        <form name="f" method="post" action="" id="settings_intact">';

    wp_nonce_field('mo_saml_keep_settings_on_deletion');
	echo '<input type="hidden" name="option" value="mo_saml_keep_settings_on_deletion"/>
		<label class="switch">
		<input type="checkbox" name="mo_saml_keep_settings_intact" ';
        echo checked(get_option('mo_saml_keep_settings_on_deletion')=='true');
		echo 'onchange="document.getElementById(\'settings_intact\').submit();"/>
		<span class="slider round"></span>
					</label><span style="padding-left:5px">' .
        __('Enabling this would keep your settings intact when plugin is uninstalled','miniorange-saml-20-single-sign-on') . '</span>
        <p><b>' . __('Please enable this option when you are updating to a Premium version.','miniorange-saml-20-single-sign-on') . '</b></p>
        </form>
        </div>
        <br /><br />
	</div>';
}

function mo_saml_display_add_ons_iframe($add_on){
	$wp_version_no=mo_saml_options_plugin_constants::WP_Version;
    $iframeDOM = "<link rel='stylesheet' href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css' integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p' crossorigin='anonymous' />
	<div class='cstm-iframe'>
					<div class='cstm-addon-row'>
						<div class='col-md-3'>
							<img src='".plugin_dir_url( __FILE__ )."images/addons_logos/ssosession.png' alt='add-ons iframe' width='80px'>
						</div>
						<div class='col-md-8 pr-0 text-dark'>
							<a href='".$add_on[2]."' target='_target' class='cstm-h4 text-dark'><b>".$add_on[0]."</b></a>
							<h5 class='cstm-h5'><span class='text-secondary'>By</span><span><a rel='nofollow' href='https://miniorange.com' target='_blank' class='text-secondary'>&nbsp;miniOrange</a></span></h5> 
							<div class='text-warning'>
							<i class='fas fa-star'></i>
							<i class='fas fa-star'></i>
							<i class='fas fa-star'></i>
							<i class='fas fa-star'></i>
							<i class='fas fa-star'></i>
							</div>
						</div>
					</div>
					<p class='mt-2'>".$add_on[1]."</p>
					<div class='cstm-addon-row align-items-center'>
						<div class='col-md-6'>
							<i class='fab fa-wordpress'> &nbsp;Tested with ".$wp_version_no."</i>
						</div>
						<div class='col-md-6 text-right'>
							<a class='plugin-download button download-button button-large bg-info text-white' target='_blank' href='".$add_on[2]."'>Get this plugin</a>
						</div>
					</div>
				</div>";
	echo $iframeDOM;

}

/**
 *Function iterates through the enum to create array of values and converts to JSON and lets user download the file
 */
function mo_saml_miniorange_import_export($test_config_screen=false, $json_in_string=false) {

    if($test_config_screen)
        $_POST['option'] = 'mo_saml_export';

	if ( array_key_exists("option", $_POST)  ) {

	    if($_POST['option']=='mo_saml_export' || $_POST['option']=='mo_saml_logger'){
	        if($test_config_screen and $json_in_string)
	            $export_referer = check_admin_referer('mo_saml_contact_us_query_option');
	        else if($_POST['option']=='mo_saml_export')
	            $export_referer = check_admin_referer('mo_saml_export');
	        else {
		        $export_referer = check_admin_referer('mo_saml_logger');
		        $json_in_string = true;
            }

				if($export_referer){
					$tab_class_name = maybe_unserialize(Tab_Class_Names);
					$configuration_array = array();
					foreach ($tab_class_name as $key => $value) {
						$configuration_array[$key] = mo_saml_get_configuration_array($value);
					}
					$configuration_array["Version_dependencies"] = mo_saml_get_version_informations();
					$version = phpversion();
					if(substr($version,0 ,3) === '5.3'){
						$json_string=(json_encode($configuration_array, JSON_PRETTY_PRINT));
					} else {
						$json_string=(json_encode($configuration_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
					}

					if($json_in_string)
						return $json_string;
					header("Content-Disposition: attachment; filename=miniorange-saml-config.json");
					echo $json_string;
					exit;
				}
	    }
	    else if($_POST['option']=='mo_saml_keep_settings_on_deletion' and check_admin_referer('mo_saml_keep_settings_on_deletion')) {

            if (array_key_exists('mo_saml_keep_settings_intact', $_POST))
                update_option('mo_saml_keep_settings_on_deletion', 'true');
            else
                update_option('mo_saml_keep_settings_on_deletion', '');

        }

        return;


	}





}

function mo_saml_get_configuration_array($class_name ) {
	$class_object = call_user_func( $class_name . '::getConstants' );
	$mo_array = array();
	foreach ( $class_object as $key => $value ) {
		$mo_option_exists=get_option($value);

		if($mo_option_exists){
            $mo_option_exists = maybe_unserialize($mo_option_exists);
			$mo_array[ $key ] = $mo_option_exists;

		}

	}

	return $mo_array;
}

function mo_saml_update_configuration_array($configuration_array ) {
	$tab_class_name = maybe_unserialize( Tab_Class_Names );
	foreach ( $tab_class_name as $tab_name => $class_name ) {
		foreach ( $configuration_array[ $tab_name ] as $key => $value ) {
			$option_string = constant( "$class_name::$key" );
			$mo_option_exists = get_option($option_string);
			if ( $mo_option_exists) {
				if(is_array($value))
					$value = serialize($value);
				update_option( $option_string, $value );
			}
		}
	}

}

function mo_saml_get_version_informations(){
	$array_version = array();
	$array_version["Plugin_version"] = mo_saml_options_plugin_constants::Version;
	$array_version["PHP_version"] = phpversion();
	$array_version["Wordpress_version"] = get_bloginfo('version');
	$array_version["OPEN_SSL"] = mo_saml_is_openssl_installed();
	$array_version["CURL"] = mo_saml_is_curl_installed();
    $array_version["ICONV"] = mo_saml_is_iconv_installed();
    $array_version["DOM"] = mo_saml_is_dom_installed();

	return $array_version;

}

