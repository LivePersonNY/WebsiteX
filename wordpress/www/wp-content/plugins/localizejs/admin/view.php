<?php settings_errors(); ?>
<div class="wrap">
    <h2>Localize Integration Settings</h2>

    <p>Translate your WordPress site into multiple languages in minutes.</p>
    <p>To use this plugin, login to your <a target="_blank" href="https://app.localizejs.com/project">Localize Dashboard</a> to get your Project Key.</p>
    <p>Don't have an account? <a target="_blank" href="https://localizejs.com/signup">Signup for a Free Trial</a></p>

    <form method="post" action="options.php">
        <?php settings_fields( 'localize-settings-group' ); ?>
        <?php do_settings_sections( 'localize-settings-group' ); ?>
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