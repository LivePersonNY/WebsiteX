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
<div class="wrap">
  <h2>Giga WebP Image Converter</h2>
  <hr>
  <?php if( $is_activated == "N" ){ ?>
    <h2>Giga WebP Image Converter Settings</h2>
    <h4>General Configuration</h4>
    <b>Step 1</b>
    <p>Start converting your images immediately by providing your email address.</p>
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
      <!-- <h4>Configuration</h4>
      <p>New images uploaded to the Media Library will be optimized automatically if you checked the check box.</p> -->
      <table class="form-table" role="presentation">
        <?php /* ?>
        <tr>
          <th scope="row"><label for="optimized_percentage"><b>Quality Percentage: </b></label></th>
          <td><input class="" type="text" name="optimized_percentage" id="optimized_percentage" required="" value="<?php echo $optimize_percentage; ?>"></td>
        </tr>
        <?php */ ?>
        <tr>
          <th scope="row"><label for="optimized_automatically"><b>Automatically Convert Images: </b></label><br/><span class="extra-text">All images should be automatically converted upon upload</span></th>
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

  <?php if( isset($giga_activate_data) && !empty($giga_activate_data) ){ 
    if( $giga_activate_data->is_activated == "Y" ){ ?>

      <h2>Bulk Image Convert</h2>
      <p>Click this button to convert all the images in your media library. This will take longer for larger media libraries.</p>
      <form action="#" method="post">
        <div class="bulk_image_optimized_js">
          <textarea style="display: none;" name="bulk_optimized_ids" id="bulk_optimized_ids" ><?php esc_html_e( implode(',', $not_optimized_image_ids), 'giga-webp-image-converter' ); ?></textarea>
          <button type="button" name="bulk_optimized_button" id="bulk_optimized_button" class="button button-primary bulk_optimized_button_js">Convert</button>
          <span class="bulk-optimized-message-js"></span>
        </div>
      </form>  
      <p>&nbsp;</p>
      <hr>

      <!-- <h2>Tracking</h2> -->
      <?php 
      $originalTotalImageSizeTotal = 0; 
      $originalImageSizeTotal = 0; 
      $originalWebpImageSizeTotal = 0; 
      $totalImages = 0; 
      $totalOptimizedImages = 0; 
      $percentageImage = 0;
      if( isset($get_total_records) && !empty($get_total_records) ){ 
        $totalImages = count($get_total_records);
        foreach ($get_total_records as $key => $image) {
          $originalTotalImageSizeTotal += $image['image_details']['full']['size_in_bytes'];
        }
      } 
  
      if( isset($get_optimized_data) && !empty($get_optimized_data) ){
        $totalOptimizedImages = count($get_optimized_data);
        foreach ($get_optimized_data as $key => $image) {
          $originalImageSizeTotal += $image['image_details']['full']['size_in_bytes'];
          $originalWebpImageSizeTotal += $image['webp_image_details']['full']['size_in_bytes'];
        }
      }
      $saving_images_size = ( $originalTotalImageSizeTotal - $originalWebpImageSizeTotal );
      if($totalImages > 0){
        $percentageImage = round( ($totalOptimizedImages / $totalImages) * 100 );
      }
      ?>
      <section class="giga-image-container">
        <div class="giga-image-left-half">
          <?php 
          if( $saving_images_size > 0) { ?>
            <div class='image-total-savings'>
              Total Savings:
              <span><?php esc_html_e( size_format( $saving_images_size, 2 ), 'giga-webp-image-converter' ); ?></span>
            </div>
          <?php } ?>
        </div>
        <div class="giga-image-right-half">
          <div class="giga-image-left-half">
            <div class="progress-circle <?php if($percentageImage >= 50){ esc_html_e( 'over50', 'giga-webp-image-converter' ); } ?> p<?php esc_html_e( $percentageImage, 'giga-webp-image-converter' ); ?>" id="progress-circle-js">
              <span><?php esc_html_e( $percentageImage, 'giga-webp-image-converter' ); ?>%</span>
              <div class="left-half-clipper">
                <div class="first50-bar"></div>
                <div class="value-bar"></div>
              </div>
            </div>
          </div>
          <div class="giga-image-right-half">
            <div class="giga-image-overview-chart-legend">
              <ul class="giga-image-doughnut-legend">
                <li><span style="background-color:#46b1ce"></span><p>Converted</p></li>
                <li><span style="background-color:#f2e9e1"></span><p>Remain<!-- Unoptimized --></p></li>
                <li><span></span><div id="optimizedText">You have converted <?php esc_html_e( $totalOptimizedImages, 'giga-webp-image-converter' ); ?> images out of <?php esc_html_e( $totalImages, 'giga-webp-image-converter' ); ?> in your media library</div></li>
              </ul>
            </div>
          </div>
        </div>

      </section>
      <!-- font-weight: 600; -->

      <?php if( isset($giga_optimized_images) && !empty($giga_optimized_images) ){ ?>
        <table class="wp-list-table widefat fixed striped table-view-list tags">
          <thead>
            <tr>
              <th class="manage-column column-name column-primary giga-table-border"><b>Total weight of all original images</b></th>
              <th class="manage-column column-name column-primary giga-table-border"><b>Total weight of all converted original images</b></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="name column-name has-row-actions column-primary  giga-table-border"><?php esc_html_e( size_format( $originalTotalImageSizeTotal, 2 ), 'giga-webp-image-converter' ); ?></td>
              <td class="name column-name has-row-actions column-primary  giga-table-border"><?php esc_html_e( size_format( $originalWebpImageSizeTotal, 2 ), 'giga-webp-image-converter' ); ?></td>
            </tr>
          </tbody>
        </table>

        <table class="form-table" role="presentation">
          <tr>
            <th scope="row">Image</th>
            <th scope="row">Total Processed Weight</th>
            <th scope="row">Total Savings</th>
          </tr>

          <tbody>
            <?php 
            $i = 0;
            foreach ($giga_optimized_images as $key => $image) { ?>
              <tr>
                <td>
                  <picture loading="lazy">
                    <?php if(isset($giga_optimized_images[$i]['image_details']['thumbnail']['url'])){ ?>
                      <source srcset="<?php esc_html_e( $giga_optimized_images[$i]['webp_image_details']['thumbnail']['url'], 'giga-webp-image-converter' ); ?>" type="image/webp" width="60" height="60">
                      <img width="60" height="60" class="attachment-60x60 size-60x60" src="<?php esc_html_e( $giga_optimized_images[$i]['image_details']['thumbnail']['url'], 'giga-webp-image-converter' ); ?>" img_id="<?php esc_html_e( $giga_optimized_images[$i]['image_id'], 'giga-webp-image-converter' ); ?>">
                    <?php }else{ ?>
                      <source srcset="<?php esc_html_e( $giga_optimized_images[$i]['webp_image_details']['full']['url'], 'giga-webp-image-converter' ); ?>" type="image/webp" width="60" height="60">
                      <img width="60" height="60" class="attachment-60x60 size-60x60" src="<?php esc_html_e( $giga_optimized_images[$i]['image_details']['full']['url'], 'giga-webp-image-converter' ); ?>" img_id="<?php esc_html_e( $giga_optimized_images[$i]['image_id'], 'giga-webp-image-converter' ); ?>">
                    <?php } ?>
                  </picture>
                </td>
                <td>
                  <table class="wp-list-table widefat fixed striped table-view-list tags">
                    <thead>
                      <tr>
                        <th class="manage-column column-name column-primary sortable desc"></th>
                        <th class="manage-column column-name column-primary sortable desc">Original Size</th>
                        <th class="manage-column column-name column-primary sortable desc">Converted Size</th>
                      </tr>
                    </thead>
                    <tbody>
                      <?php 
                      $totalOriginalSize = 0; $totalOptimizedSize = 0;
                      foreach ($giga_optimized_images[$i]['image_details'] as $details_key => $details_value) { 
                        $totalOriginalSize += $details_value['size_in_bytes']; 
                        $totalOptimizedSize += $giga_optimized_images[$i]['webp_image_details'][$details_key]['size_in_bytes'];
                        ?>
                        <tr>
                          <td class="name column-name has-row-actions column-primary"><?php esc_html_e( ucfirst($details_key), 'giga-webp-image-converter' ); ?></td>
                          <td class="name column-name has-row-actions column-primary"><?php esc_html_e( $details_value['size'], 'giga-webp-image-converter' ); ?></td>
                          <td class="name column-name has-row-actions column-primary"><?php esc_html_e( $giga_optimized_images[$i]['webp_image_details'][$details_key]['size'], 'giga-webp-image-converter' ); ?></td>
                        </tr>
                      <?php } ?>
                    </tbody>
                  </table>
                </td>
                <td>
                  <p>
                    <b>Total Original file size:</b> <?php esc_html_e( size_format($totalOriginalSize), 'giga-webp-image-converter' ); ?>
                  </p>
                  <p>
                    <b>Total Convert file size:</b> <?php esc_html_e( size_format($totalOptimizedSize), 'giga-webp-image-converter' ); ?>
                  </p>
                  <p>
                    <b>Convert total image sizes:</b> <?php esc_html_e( round( ( ($totalOriginalSize - $totalOptimizedSize) / $totalOriginalSize ) * 100 ), 'giga-webp-image-converter' ); ?>%
                  </p>
                </td>
              </tr>
              
            <?php $i++; } ?>
          </tbody>
        </table>
      <?php }else{ ?>
        <h4 class="error"><center>No records found</center></h4>
      <?php } ?>

      <div class="pagination-area">
        <ul class="giga-pagination">
          <?php 
          $previousPage = $pageno - 1;
          if( $previousPage > 0 ) { ?>
            <li>
              <?php if( $pageno > 1 ) { ?>
                <a href="<?php esc_html_e( admin_url('admin.php?page=giga-webp-image-converter&pageno='.$previousPage), 'giga-webp-image-converter' ); ?>" aria-label="Previous" title="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              <?php } ?>
            </li>
          <?php } ?>
          <?php 
          if( !empty($total_pages) ){
            if( $total_pages > 1){
              for($i=1; $i<=$total_pages; $i++){
                if($i == 1){ ?>
                  <li class="giga-pageitem" id="<?php esc_html_e( $i, 'giga-webp-image-converter' ); ?>"><a class="<?php if($i == $pageno){ esc_html_e( 'active', 'giga-webp-image-converter' ); } ?>" href="<?php esc_html_e( admin_url('admin.php?page=giga-webp-image-converter'), 'giga-webp-image-converter' ); ?>" data-id="<?php esc_html_e( $i, 'giga-webp-image-converter' ); ?>" class="page-link" ><?php esc_html_e( $i, 'giga-webp-image-converter' ); ?></a></li>
                <?php }else{ ?>
                  <li class="giga-pageitem" id="<?php esc_html_e( $i, 'giga-webp-image-converter' ); ?>"><a class="<?php if($i == $pageno){ esc_html_e( 'active', 'giga-webp-image-converter' ); } ?>" href="<?php esc_html_e( admin_url('admin.php?page=giga-webp-image-converter&pageno='.$i), 'giga-webp-image-converter' ); ?>" class="page-link" data-id="<?php esc_html_e( $i, 'giga-webp-image-converter' ); ?>"><?php esc_html_e( $i, 'giga-webp-image-converter' ); ?></a></li>
                <?php }
              }
            }
          }
          ?>
          <?php 
          $nextPage = $pageno + 1;
          if( $total_pages >= $nextPage ) { ?>
            <li>
              <a href="<?php esc_html_e( admin_url('admin.php?page=giga-webp-image-converter&pageno='.$nextPage), 'giga-webp-image-converter' ); ?>" aria-label="Next" title="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          <?php } ?>
        </ul>
      </div>
    <?php }
  } ?>
</div>
