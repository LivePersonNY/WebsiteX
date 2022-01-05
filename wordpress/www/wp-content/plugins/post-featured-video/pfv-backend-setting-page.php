<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
if (!function_exists('pfvideo_menu_callback_fun')){
    function pfvideo_menu_callback_fun() { ?>
        <div class="wrap">
            
            <?php $tab = isset($_GET['tab']) ? $_GET['tab'] : 'dashboard'; ?>

            <h2 class="nav-tab-wrapper">
                <a href="<?php echo admin_url('admin.php?page=featuredvideo'); ?>" class="nav-tab <?php echo $tab == 'dashboard' ? 'nav-tab-active' : ''; ?>"><?php _e('Dashboard', 'post-featured-video'); ?></a>
                <a href="<?php echo admin_url('admin.php?page=featuredvideo&tab=settings'); ?>" class="nav-tab <?php echo $tab == 'settings' ? 'nav-tab-active' : ''; ?>"><?php _e('General Settings', 'post-featured-video'); ?></a>            
                <a href="<?php echo admin_url('admin.php?page=featuredvideo&tab=help'); ?>" class="nav-tab <?php echo $tab == 'help' ? 'nav-tab-active' : ''; ?>"><?php _e('Help/Usage', 'post-featured-video'); ?></a>
            </h2>

            <?php if ((string) $tab === 'dashboard') { ?>
                
                <div id="poststuff">
                                 
                    <?php
                    wp_enqueue_style('pfv_backend_style');
    				if( isset($_GET['settings-updated']) && $_GET['settings-updated'] == 'true'):
    				   echo '<div id="setting-error-settings_updated" class="updated settings-error"> 
    				<p><strong>Settings saved.</strong></p></div>';
    				endif;

    				echo _e("<h3>Enable featured video option for post types</h3>","post-featured-video");	
                    echo _e("<p class='pvf-notic-msg'>This setting enables an option on the page/post in the backend where the user can set video. To display video, please make sure the featured image set.</p>","post-featured-video");
    				//add_settings_section()
    				echo '<form method="post" action="options.php">';
    				do_settings_sections('pfv_featured_settings_group');
    				settings_fields('pfv_featured_settings_group');
    				$get_reg_settins = get_option('pfv_seetings_opt');
    				
    				$args = array(
    				   'public'   => true,
    				   '_builtin' => false
    				);
    				  
    				$output = 'names'; // 'names' or 'objects' (default: 'names')
    				$operator = 'and'; // 'and' or 'or' (default: 'and')
    				  
    				$post_types = get_post_types( $args, $output, $operator );
    				$post_types['post'] = "post"; 
    				$post_types['page'] = "page"; 
    				if ( $post_types ) { 
    				    foreach ( $post_types  as $post_type ) { //Add menu to exist custom post type				    	
    				    	$pt = get_post_type_object( $post_type );	
    				    	echo '<div class="pfv-pty-cls"><div class="pfv-posty-labl">' . esc_html($pt->labels->name) . '</div>'; 
    				    	?>
    							<label class="pfv_onoff_switcher">
    							  	<input type="checkbox" name="pfv_seetings_opt[]" value="<?php echo $post_type; ?>" <?php if(!empty($get_reg_settins) && in_array($post_type, $get_reg_settins)){ echo "checked"; }?>>
    							  	<span class="pfv_onoff_slder"></span>
    							</label>
    						<?php
    						echo "</div>";
    				    }				       
    				} 
    				submit_button();
    				echo '</form>'; ?>
                    
                </div>
                <?php
            } else if ((string) $tab === 'settings') {
                if (isset($_POST['pfv_general_setig']) && current_user_can('manage_options')) {
                    /*Video Autoplay*/
                    if (isset($_POST['pfv_autoply_video'])) {
                        update_option('pfv_autoply_video', (int) $_POST['pfv_autoply_video']);
                    } else {
                        update_option('pfv_autoply_video', 0);
                    }
                    /*open video in popup*/
                    if (isset($_POST['pfv_open_vid_inpopup'])) {
                        update_option('pfv_open_vid_inpopup', (int) $_POST['pfv_open_vid_inpopup']);
                    } else {
                        update_option('pfv_open_vid_inpopup', 0);
                    }
                    /*set display mode*/
                    if (isset($_POST['vpfy_disply_video'])) {
                        update_option('vpfy_disply_video', sanitize_text_field($_POST['vpfy_disply_video']));
                    }
                    

                    echo '<div class="updated notice is-dismissible"><p>Settings updated!</p></div>';
                }
                ?>
                <form method="post" action="">
                    <h3><?php _e('Settings', 'post-featured-video'); ?></h3>

                    <p>
                        <input type="checkbox" name="pfv_autoply_video" id="pfv_autoply_video" value="1" <?php if (get_option('pfv_autoply_video') == 1) echo 'checked'; ?>> <label for="pfv_autoply_video" data-toggle="tooltip" title="Autoplay only works when the popup is enabled"><?php _e('Autoplay <small>(Autoplay only works when the popup is enabled)</small>', 'post-featured-video'); ?></label>
                    </p>
                    <p>
                        <input type="checkbox" name="pfv_open_vid_inpopup" id="pfv_open_vid_inpopup" value="1" <?php if (get_option('pfv_open_vid_inpopup') == 1) echo 'checked'; ?>> <label for="pfv_open_vid_inpopup"><?php _e('Open video in popup', 'post-featured-video'); ?> </label>
                    </p>
                            
                    <h3><?php _e('Display mode', 'post-featured-video'); ?></h3>
                    
                    <div class="pvfdisplymod">
                        <!-- youtube video -->
                        <p>
                            <input type="radio" name="vpfy_disply_video" value="pfvyoutubeurl" <?php 
                            if(empty(get_option('vpfy_disply_video')) || (get_option('vpfy_disply_video') == 'pfvyoutubeurl') ){
                                echo 'checked';
                            }
                            ?>>
                            <label for="youtubeurl"><?php _e('Youtube', 'post-featured-video'); ?></label>
                        </p>
                        <!-- Vimeo Video -->
                        <p>
                            <input type="radio" name="vpfy_disply_video" value="pfvvimeourl" <?php if (get_option('vpfy_disply_video') == 'pfvvimeourl') echo 'checked'; ?>>
                            <label for="Vimeo"><?php _e('Vimeo', 'post-featured-video'); ?></label>
                        </p>

                        <!-- HTML Video/ Upload Video -->

                        <p>
                            <input type="radio" name="vpfy_disply_video" value="pfvuploder" <?php if (get_option('vpfy_disply_video') == 'pfvuploder') echo 'checked'; ?>>
                            <label for="cutomvideo"><?php _e('Custom Video Upload', 'post-featured-video'); ?></label>
                        </p>

                    </div>

                    <p><input type="submit" name="pfv_general_setig" class="button button-primary" value="<?php _e('Save Changes', 'post-featured-video'); ?>"></p>
                </form>
                <?php
            } 
            else if ((string) $tab === 'help') { ?>
                <div id="poststuff">
                    <?php _e('<h3>Help &amp; Usage Details</h3>
                    <h4>To display video instead of featured image</h4>
                    <p>1] To enable the featured video options for the specific post type, go to the plugin setting (dashboard) page and enable it.</p>
                    <p>2] There are many options to show which type of video ie. Youtube, Vimeo or Uploaded/Media library MP4 Video, you can select from plugin setting page. Once selected you will see the options to add video on post/page.</p>
                    <p>3] There are many more options for video ie. open video in the popup, autoplay video etc.</p>', 'post-featured-video'); ?>                
                </div>
                <?php
            }
            ?>
        </div>
    <?php
    }
}
/*Register settings*/
if (!function_exists('pfvideo_featured_vd_settings')){
    function pfvideo_featured_vd_settings(){
    	register_setting('pfv_featured_settings_group','pfv_seetings_opt');	
    }
}
