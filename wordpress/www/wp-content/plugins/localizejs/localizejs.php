<?php
/**
 * Plugin Name: Localize Integration
 * Plugin URI: http://wordpress.org/plugins/localizejs/
 * Description: Easily integrate Localize into your WordPress site.
 * Author: Kirk Bobash and Payoda for Localize
 * Version: 1.1.5
 * Author URI: https://localizejs.com
 */

/*  Copyright 2021 Localize (support@localizejs.com)

        Original version: 2015 by Jonathan Wu

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/


/**
 * Exit if absolute path
*/
if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Plugin setup
 *
 * Version 1.1.5
*/

// Initialize Localize
add_action('init','init_function');


function init_function() {
    add_action( 'wp_enqueue_scripts', 'add_localizejs_script', 1);
    add_action( 'admin_menu', 'my_plugin_menu');
    add_action( 'admin_init', 'my_plugin_settings' );
};

function localize_settings_validate($input) {

    $message = __('Your settings are saved.');
    $type = 'updated';
    add_settings_error('localize_option_notice', 'localize_option_notice', $message, $type);
    return $input;
    
}

// SET LOCALIZE SCRIPT
function add_localizejs_script() {
    wp_deregister_script( 'localize' );
    wp_deregister_script( 'localizeFallback' );

    $project_key = get_option( 'project_key' );
    $localizejs_settings_url_options = get_option( 'localizejs_settings_url_options' );

    $permalink_plain = (get_option( 'permalink_structure')=="")?true:false;

    wp_register_script('localize', ( '//global.localizecdn.com/localize.js' ), false, null, false);
    wp_register_script('localizeFallback', plugins_url('/localizejs.js',__FILE__) , false, null, false);

    wp_enqueue_script( 'localize' );
    wp_enqueue_script( 'localizeFallback' );

    wp_localize_script( 'localizeFallback', 'PROJECT_KEY', $project_key);
    wp_localize_script( 'localizeFallback', 'URL_OPTIONS', $localizejs_settings_url_options);

    
    if ($localizejs_settings_url_options > 0 && $localizejs_settings_url_options <= 2) {
        init_languages();
        wp_localize_script( 'localizeFallback', 'AVAILABLE_LANGUAGES', (defined('AVAILABLE_LANGUAGES')) ? json_decode(AVAILABLE_LANGUAGES) : []);
        wp_localize_script( 'localizeFallback', 'SOURCE_LANGUAGE', (defined('SOURCE_LANGUAGE')) ? SOURCE_LANGUAGE : NULL);
        wp_localize_script( 'localizeFallback', 'localize_conf', array('permalink_plain'=>get_permalink_plain_set()));
    } else {
        wp_localize_script( 'localizeFallback', 'AVAILABLE_LANGUAGES', []);
        wp_localize_script( 'localizeFallback', 'SOURCE_LANGUAGE', NULL);
    }

}

function my_plugin_menu() {
    $icon_svg = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE2MHB4IiBoZWlnaHQ9IjE2MHB4IiB2aWV3Qm94PSIwIDAgMTYwIDE2MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpza2V0Y2g9Imh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9ucyI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDMuMy4zICgxMjA4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+SWNvbjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJMb2NhbGl6ZS1VSS1FbGVtZW50cyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc2tldGNoOnR5cGU9Ik1TUGFnZSI+CiAgICAgICAgPGcgaWQ9Ikljb24iIHNrZXRjaDp0eXBlPSJNU0FydGJvYXJkR3JvdXAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LjAwMDAwMCwgMTYuMDAwMDAwKSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utb3BhY2l0eT0iMCIgc3Ryb2tlLXdpZHRoPSI1IiBmaWxsPSIjMjQ2Q0EwIj4KICAgICAgICAgICAgPHBhdGggZD0iTTY0LDEwMCBDODMuODgyMjUxLDEwMCAxMDAsODMuODgyMjUxIDEwMCw2NCBDMTAwLDQ0LjExNzc0OSA4My44ODIyNTEsMjggNjQsMjggQzQ0LjExNzc0OSwyOCAyOCw0NC4xMTc3NDkgMjgsNjQgQzI4LDgzLjg4MjI1MSA0NC4xMTc3NDksMTAwIDY0LDEwMCBaIE02NCwxMjAgQzk0LjkyNzk0NiwxMjAgMTIwLDk0LjkyNzk0NiAxMjAsNjQgQzEyMCwzMy4wNzIwNTQgOTQuOTI3OTQ2LDggNjQsOCBDMzMuMDcyMDU0LDggOCwzMy4wNzIwNTQgOCw2NCBDOCw5NC45Mjc5NDYgMzMuMDcyMDU0LDEyMCA2NCwxMjAgWiIgaWQ9Ik92YWwiIHNrZXRjaDp0eXBlPSJNU1NoYXBlR3JvdXAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
    add_menu_page('Localize', 'Localize', 'administrator', 'localizejs', 'my_plugin_settings_page', $icon_svg);
}

// SET PROJECT KEY
function my_plugin_settings() {
    register_setting( 'my-plugin-settings-group', 'project_key' ,'localize_settings_validate');
    register_setting( 'my-plugin-settings-group', 'localizejs_settings_url_options');
}

// SETTINGS PAGE SETUP
function my_plugin_settings_page() {
        ?>
        <?php settings_errors(); ?>
    <div class="wrap">
        <h2>Localize Integration Settings</h2>

        <p>Translate your WordPress site into multiple languages in minutes.</p>
        <p>To use this plugin, login to your <a target="_blank" href="https://localizejs.com/project">Localize Dashboard</a> to get your Project Key.</p>
        <p>Don't have an account? <a target="_blank" href="https://localizejs.com/signup">Signup for a 14 Day Free Trial</a></p>

        <form method="post" action="options.php">
            <?php settings_fields( 'my-plugin-settings-group' ); ?>
            <?php do_settings_sections( 'my-plugin-settings-group' ); ?>
            <table class="form-table">
                <tr valign="top">
                <th scope="row">Project Key</th>
                <td><input type="text" name="project_key" placeholder="Enter Project Key" value="<?php echo esc_attr( get_option('project_key') ); ?>" /></td>
                </tr>
                        <tr valign="top">
                            <th scope="row">Select SEO Options </th>
                            <td>
                                <?php $url_options = esc_attr( get_option('localizejs_settings_url_options') ); ?>
                                <p><label for="options_none"><input type="radio" <?php echo ($url_options==0)?'checked="checked"':"" ?> id="options_none" name="localizejs_settings_url_options" value="0" class="defaultState">Disabled - Add Localize to your site.</label></p>
                                <p><label for="options_subdirectory"><input type="radio" <?php echo ($url_options==1)?'checked="checked"':"" ?> id="options_subdirectory" name="localizejs_settings_url_options" value="1" class="defaultState">Subdirectory - Add Localize to your site using language-specific subdirectories (e.g. https://example.com/es/).</label></p>
                                <p><label for="options_subdomain"><input type="radio" <?php echo ($url_options==2)?'checked="checked"':"" ?> id="options_subdomain" name="localizejs_settings_url_options" value="2" class="defaultState">Subdomain - Add Localize to your site using language-specific subdomains (e.g. https://es.example.com/).</label></p>
                            </td>
                </tr>
            </table>
            <?php submit_button(); ?>
        </form>

        <a target="_blank" href="http://wordpress.org/support/view/plugin-reviews/localizejs?rate=5#postform">
            <?php _e( 'Love Localize? Help spread the word by rating us 5* on WordPress.org', 'localizejs' ); ?>
        </a>
    </div>
            <?php
}

if (!function_exists('curl_init')) {
    if (function_exists('http_response_code'))
        http_response_code(500);

    echo 'PHP Curl library is required';
    exit;
}

function getAvailableLang() {
    
    $project_key = get_option( 'project_key' );
    
    $ch = curl_init("https://global.localizecdn.com/api/lib/".$project_key."/t?v=000&requestor=wp");  
 
    curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    $output=curl_exec($ch);
 
    curl_close($ch);
    $outputObj = json_decode($output);
    return $outputObj;
}

function init_languages(){
    if (!defined('AVAILABLE_LANGUAGES')) {
        //call to get the source and target Languages through the API
        $resultObj = getAvailableLang();
        $available_languages = json_encode($resultObj->el);
        define('AVAILABLE_LANGUAGES', $available_languages);

        $source_language = $resultObj->source;
        define('SOURCE_LANGUAGE', $resultObj->source);
    } 
}

function replace_siteurl($url) {
    
    $url_collection = json_decode(AVAILABLE_LANGUAGES);
    
    $url_array = explode('/', $_SERVER['REQUEST_URI']);
    
    $request_lang = $url_array[1];
    
    if (in_array($request_lang, $url_collection) && ($request_lang != SOURCE_LANGUAGE)) {
        return $url."/".$request_lang;
    } else {
        return $url;
    }
}

function replace_siteurl_subdomain($url) {
    
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $domainName = $_SERVER['HTTP_HOST'];
    
    $url_collection = json_decode(AVAILABLE_LANGUAGES);
    
    $domainArr = explode('.', $domainName);

    if (in_array($domainArr[0], $url_collection)) {
        
        if ($domainArr[0] == SOURCE_LANGUAGE) {
            $domainName = implode(".",array_shift($domainArr));
            return $protocol.$domainName;
        } else {
            return  $protocol.$domainName;
        }
        
    }
    return  $protocol.$domainName;
    
}

function get_permalink_plain_set() {
    $ps = (get_option( 'permalink_structure')=="")?true:false;
    return $ps;
}

function wp_append_query_string( $url, $id ) {
    
    $url_collection = json_decode(AVAILABLE_LANGUAGES);
    $request_lang = $_GET['lang'];

    if (isset($request_lang) && $request_lang != SOURCE_LANGUAGE && in_array($request_lang, $url_collection)) {
        $set_lang = $_GET['lang'];
        $url = add_query_arg( 'lang', $set_lang , $url );
        return $url;
    } 
    return $url;
}


function unparse_url( $parsed_url , $ommit = array( ) )
{
    
    $url           = '';
    
    $p             = array();
    
    $p['scheme']   = isset( $parsed_url['scheme'] ) ? $parsed_url['scheme'] . '://' : ''; 
    
    $p['host']     = isset( $parsed_url['host'] ) ? $parsed_url['host'] : ''; 
    
    $p['port']     = isset( $parsed_url['port'] ) ? ':' . $parsed_url['port'] : ''; 
    
    $p['user']     = isset( $parsed_url['user'] ) ? $parsed_url['user'] : ''; 
    
    $p['pass']     = isset( $parsed_url['pass'] ) ? ':' . $parsed_url['pass']  : ''; 
    
    $p['pass']     = ( $p['user'] || $p['pass'] ) ? $p['pass']."@" : ''; 
    
    $p['path']     = isset( $parsed_url['path'] ) ? $parsed_url['path'] : ''; 
    
    $p['query']    = isset( $parsed_url['query'] ) ? '?' . $parsed_url['query'] : ''; 
    
    $p['fragment'] = isset( $parsed_url['fragment'] ) ? '#' . $parsed_url['fragment'] : '';
    
    if ( $ommit )
    {
        foreach ( $ommit as $key )
        {
            if ( isset( $p[ $key ] ) )
            {
                $p[ $key ] = '';    
            }
        }
    }
      
    return $p['scheme'].$p['user'].$p['pass'].$p['host'].$p['port'].$p['path'].$p['query'].$p['fragment']; 
}

function get_language_from_browser_url() {
    $url_collection = json_decode(AVAILABLE_LANGUAGES);
    
    
    if(get_permalink_plain_set()){
        $request_lang = $_GET['lang'];
    } else {
    
        $url_array = explode('/', $_SERVER['REQUEST_URI']);

        $request_lang = $url_array[1];
    }

    if (in_array($request_lang, $url_collection) && ($request_lang != SOURCE_LANGUAGE)) {
        return $request_lang;

    } else {
        return "";

    }
}

function check_query_string_exists($url_query_str) {
    $url_query_str_arr = explode("=",$url_query_str);
    if (count($url_query_str_arr) > 0) {
        if ($url_query_str_arr[0] == "lang") {
            return true;
        } else {
            return false;
        }
    }
}

function query_string_update_lang($url_query) {
    
    $url_query_arr = explode("&",html_entity_decode($url_query));

    if(strpos($url_query, "lang=") !== false){

        $final_query_string = array();
        foreach ($url_query_arr as &$url_query_str) {

            if (check_query_string_exists($url_query_str)) {

                $lang = get_language_from_browser_url();
                if (!empty($lang)) {
                    $final_query_string[] = "lang=".$lang;
                }
            } else { 
                $final_query_string[] = $url_query_str;
            }
        }
        print_r($final_query_string);

    } else {
        $final_query_string[] = get_language_from_browser_url();
    }
    return implode("&",$final_query_string);
}


function add_language_to_abs_url_path($components = array()) {

    $url_str = $components['path'];
    
    if (!get_permalink_plain_set()) { 
        
        add_language_to_url_path($url_str);
        
    } else {

        $url_query = $components['query'];

        $query_str_resp = query_string_update_lang($url_query);
        $components['query'] = $query_str_resp;
    }
    return unparse_url($components);
    
}


function add_language_to_url_path($url_str) {
    
    if (!get_permalink_plain_set()) { 
        if ($url_str[0] == "/") {
            $url = substr($url_str, 1);
            $removedSlash=true;
        }
        $url_arr = explode("/",$url);   

        if (count($url_arr) > 0) {
            $lng = $url_arr[0];

            $request_lang = get_language_from_browser_url();

            if (!empty($request_lang)) {
                if ($lng == $request_lang) {
                    return $url_str;
                } else {
                    return (($removedSlash)?"/".$request_lang:"")."/".$url;
                }

            } else {
                return $url_str;

            }
        }
    } 
    return $url;
}

function wp_append_query($string) {
    
    $regexp = "<a\s[^>]*href=(\"??)([^#\"][^\" >]*?)\1[^>]*>(.*)<\/a>";
    preg_match_all("/$regexp/siU", $string, $matchArray);
    
    foreach (array_unique($matchArray[2]) as $match){
        $components = parse_url($match);
        
        print "<br>wp_append_query() we have a match<br>";        
        print_r($components);
        //exit();
        
        if (!empty($components['host']) ) {
            //handle for absolute path
            $retlink = add_language_to_abs_url_path($components);
        } else {
            //handle for relative path
            $retlink = add_language_to_url_path($match);
        }
        
        $string = str_replace($match, $retlink, $string); 
        
    }
    return $string;
}

function wp_permalink_plain() {

    add_filter( 'page_link', 'wp_append_query_string', 10, 2 );
    add_filter( 'post_link', 'wp_append_query_string', 10, 2 );
    add_filter( 'term_link','wp_append_query_string', 10, 2 );
    add_filter( 'post_type_archive_link', 'wp_append_query_string', 10, 2 );
    add_filter( 'day_link', 'wp_append_query_string', 10, 2 );
    add_filter( 'month_link', 'wp_append_query_string', 10, 2 );
    add_filter( 'year_link', 'wp_append_query_string', 10, 2 );
    add_filter( 'home_url', 'wp_append_query_string', 10, 2  );
}

function localizejs_get_settings()  {
    
    $url_options = get_option( 'localizejs_settings_url_options' );
    if ($url_options == 0) {
        // do nothing
    }
    else if ($url_options == 1) {
        init_languages();
        add_filter( 'the_content', 'wp_append_query', 10, 3 );
        if (get_permalink_plain_set()) {
            wp_permalink_plain();
        } else {
            add_filter('option_home', 'replace_siteurl');
        }
    }
    else if ($url_options == 2) {
        init_languages();
        add_filter( 'the_content', 'wp_append_query', 10, 3 );
        if (get_permalink_plain_set()) {
            wp_permalink_plain();
        }
        add_filter('option_home', 'replace_siteurl_subdomain');
        
    }

}

add_action('init','localizejs_get_settings',1);
