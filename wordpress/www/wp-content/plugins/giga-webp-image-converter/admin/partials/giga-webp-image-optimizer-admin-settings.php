<?php

/**
 * Provide a admin area view for the plugin
 *
 * This file is used to markup the admin-facing aspects of the plugin.
 *
 * @link       https://gigareef.com/
 * @since      1.0.0
 *
 * @package    Giga_WebP_Image_Optimizer
 * @subpackage Giga_WebP_Image_Optimizer/admin/partials
 */
?>
  <hr>
  <h2>Giga WebP Image Converter Settings</h2>
  
  <h4>General Configuration</h4>
  <?php 
  $activate_email = "";
  $private_api_key = "";
  $is_activated = "N";

  if( isset($giga_activate_data) && !empty($giga_activate_data) ) {
    $activate_email = $giga_activate_data->email;
    $private_api_key = $giga_activate_data->private_api_key;
    $is_activated = $giga_activate_data->is_activated;
  }
  ?>
  
  <?php if( $is_activated == "N" ){ ?>
    <b>Step 1</b>
    <p>Start optimizing your images immediately by providing your email address.</p>
    <!-- <p>To access Giga WebP Image Converter plugin , <span class="settings_sign_up_js">sign up here</span></p> -->
    <div class="section_step_1">
      <form action="#" method="post">
        <input type="hidden" name="website" id="website" value="<?php esc_html_e( site_url(), 'giga-webp-image-converter' ); ?>" >
        <table class="form-table" role="presentation">
          <tr>
            <th scope="row"><label for="giga_image_optimizer_email">Email</label></th>
            <td class="show_activate_email_js">
              <input required="true" placeholder="" type="email" class="regular-text" name="giga_image_optimizer_email" id="giga_image_optimizer_email" value="<?php esc_html_e( $activate_email, 'giga-webp-image-converter' ); ?>" required="">
            </td>
          </tr>
          <tr>
            <th scope="row"><label for="giga_image_optimizer_captcha">Captcha</label></th>
            <td class="show_captcha_js">
              <input type="hidden" name="captcha" id="captcha" value="<?php if(isset($giga_captcha_data) && !empty($giga_captcha_data)){ esc_html_e( $giga_captcha_data, 'giga-webp-image-converter' ); } ?>">
              <div class="captcha-display"><?php if(isset($giga_captcha_data) && !empty($giga_captcha_data)){ esc_html_e( $giga_captcha_data, 'giga-webp-image-converter' ); } ?></div>
              <input type="text" name="giga_image_optimizer_captcha" id="giga_image_optimizer_captcha" value="" required="">
            </td>
          </tr>
          <tr>
            <th scope="row">
              <button type="button" name="api_key_send_button" id="api_key_send_button" class="button button-primary api_key_send_button_js" >Submit</button>
            </th>
            <td>
              <span class="api_key_send_message_error error"></span>
              <span class="api_key_send_message_success"></span>
            </td>
          </tr>
        </table>
      </form>    
    </div>
  <?php }else{ ?>
    <p>Plugin is activated</p>
  <?php } ?>

  <?php if( $is_activated == "Y" ){ ?>
    <?php 
    $is_automatically_optimize = 0;
    $optimize_percentage = '';
    if( isset($giga_settings_data) && !empty($giga_settings_data) ) {
      $is_automatically_optimize = $giga_settings_data->is_automatically_optimize;
      $optimize_percentage = $giga_settings_data->optimize_percentage;
    }
    ?>
    <form action="#" method="post">
      <h4>Configuration</h4>
      <!-- <p>New images uploaded to the Media Library will be optimized automatically if you checked the check box.</p> -->
      <table class="form-table" role="presentation">
        <?php /* ?>
        <tr>
          <th scope="row"><label for="optimized_percentage"><b>Quality Percentage: </b></label></th>
          <td><input class="" type="text" name="optimized_percentage" id="optimized_percentage" required="" value="<?php echo $optimize_percentage; ?>"></td>
        </tr>
        <?php */ ?>
        <tr>
          <th scope="row"><label for="optimized_automatically"><b>Optimized Automatically: </b></label><br/><span class="extra-text">New images uploaded to the Media Library will be optimized automatically if you checked the check box</span></th>
          <td><input type="checkbox" name="optimized_automatically" id="optimized_automatically" required="" <?php if( $is_automatically_optimize == 1) { esc_html_e( 'checked', 'giga-webp-image-converter' ); } ?> ></td>
        </tr>

        <tr>
          <th scope="row">
            <button type="button" name="settings_submit" id="settings_submit" class="button button-primary settings_submit_button_js" />Save Changes</button>
          </th>
          <td><span class="settings-message-js"></span></td>
        </tr>
      </table>
    </form>
  <?php } ?>  
  <hr>