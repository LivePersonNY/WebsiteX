(function( $ ) {
	'use strict';

	/**
	 * All of the code for your admin-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
  
  var ajax_url = giga_webp_image_optimizer_ajax_object.ajax_url
 	
  /**
   * After click on Convert button ajax call for images change into WEBP file 
   */
  $(document).on("click", ".giga_optimize_image_button", function(event) {
    event.preventDefault()
    const $clickedNavButton = $(event.currentTarget)
    const postId = $clickedNavButton.data('postid')
    const ajax_url = giga_webp_image_optimizer_ajax_object.ajax_url;
    $(".giga-optimize-show-message").html('')
    $("#giga-optimize-loading-message-" + postId).html('')
    $.ajax({
      type: 'POST',
      url: ajax_url,
      data: {
        action: 'gwic_converted_image_ajax',
        'id' : postId,
      },
      beforeSend:() => {
      	$("#giga-optimize-loading-message-" + postId).html('Processing...')
        $clickedNavButton.addClass('loading');
      },
      success:(response) => {
      	$clickedNavButton.removeClass('loading')
        if(response) {
	        $("#giga-optimize-loading-message-" + postId).html('')
	        $("#giga-optimize-show-message-" + postId).html('Image converted successfully')
	        $("#giga_optimize_image_span_" + postId).html('Converted')
	      }
	      else {
	      	$("#giga-optimize-loading-message-" + postId).html('')
	        $("#giga-optimize-show-message-" + postId).html('Error! Image not converted')
	        $clickedNavButton.val('Convert')
	      }	      
      },
      error:(response) => {

      }
    })    
	});

  /**
   * Bulk optimization ajax call
   */
 	$(document).on("click", ".bulk_optimized_button_js", function(event) {
    event.preventDefault()
    const $clickedNavButton = $(event.currentTarget)
    const $bulk_optimized_ids = $('#bulk_optimized_ids').val()
    const ajax_url = giga_webp_image_optimizer_ajax_object.ajax_url
    $(".bulk-optimized-message-js").html('')

    if( $bulk_optimized_ids != "") {
	    $.ajax({
	      type: 'POST',
	      url: ajax_url,
	      data: {
	        action: 'gwic_converted_image_ajax',
	        'id' : $bulk_optimized_ids,
	      },
	      beforeSend:() => {
	      	$('.bulk-optimized-message-js').html('Processing...')
	        $clickedNavButton.addClass('loading');
	      },
	      success:(response) => {
	      	$clickedNavButton.removeClass('loading')
	        if(response) {
		        $('.bulk-optimized-message-js').html('')
		        $(".bulk-optimized-message-js").html('<b>Bulk Image converted successfully</b>')
		        $(".bulk_image_optimized_js").html('Converted')

            $.ajax({
              type: 'POST',
              url: ajax_url,
              data: {
                action: 'gwic_optimize_image_progress'
              },
              dataType: "json",
              beforeSend:() => {

              },
              success:(response) => {
                if(response){
                  $("#progress-circle-js").removeClass();
                  if(response.percentage >= 50) {
                    var percentageClass = 'p'+response.percentage
                    $("#progress-circle-js").addClass('progress-circle over50 '+percentageClass);
                  }
                  if(response.percentage < 50) {
                    $("#progress-circle-js").removeClass();
                    var percentageClass = 'p'+response.percentage
                    $("#progress-circle-js").addClass('progress-circle '+percentageClass);
                  }
                  $("#progress-circle-js span").html(response.percentage + '%')
                  $("#optimizedText").html('You have optimized '+response.optimized_image+' images out of '+response.total_image+' in your media library')
                }

              },
              error:(response) => {

              }
            })
		      }
		      else {
		      	$('.bulk-optimized-message-js').html('')
		        $(".bulk-optimized-message-js").html('<b>Error! Image not converted</b>')
		        $clickedNavButton.html('Convert')
		      }	      
	      },
	      error:(response) => {

	      }
	    })
	  }
	  else{
	  	$(".bulk-optimized-message-js").html('<b>There are no images left to convert</b>')
	  }
  });

  /**
   * Save settings data ajax call
   */
  $(document).on("click", ".settings_submit_button_js", function(event) {
  	// let optimized_percentage = $("#optimized_percentage").val()
  	let optimized_automatically = 0
  	if( $("#optimized_automatically:checkbox:checked").length > 0 ) {
  		optimized_automatically = 1
  	}
  	else{
  		optimized_automatically = 0
  	}
  	const ajax_url = giga_webp_image_optimizer_ajax_object.ajax_url;
  	$(".settings-message-js").html('')

    $.ajax({
      type: 'POST',
      url: ajax_url,
      data: {
        action: 'gwic_settings_data_save',
        // 'percentage' : optimized_percentage,
        'optimized_automatically' : optimized_automatically,
      },
      beforeSend:() => {
      	$('.settings-message-js').html('Processing...')
      },
      success:(response) => {
      	if(response > 0) {
      		$(".settings-message-js").html('<b>Data save successfully</b>')
      	}
      },
      error:(response) => {
      	 
      }
    })
  });

  /**
   * Show email input section to register plugin
   */
  $(document).on("click", ".settings_sign_up_js", function(event) {
  	$('.section_step_1').slideToggle("slow");
  });

  /**
   * Send API Key to the activated user
   */
  $(document).on("click", ".api_key_send_button_js", function(event) {
    let $email = $("#giga_image_optimizer_email").val()
    let $input_captcha_val = $("#giga_image_optimizer_captcha").val()
  	let $captcha_val = $("#captcha").val()
    let $website = $("#website").val()
  	$('.api_key_send_message_error').html("")
    $(".api_key_send_message_success").html('')
    if($email ==""){
      $('.api_key_send_message_error').html("Please enter your email address")
      $(".api_key_send_message_success").html('')
      return false
    }
    if($input_captcha_val ==""){
      $('.api_key_send_message_error').html("Please enter captcha")
      $(".api_key_send_message_success").html('')
      return false
    }
    if($input_captcha_val != $captcha_val){
      $('.api_key_send_message_error').html("Captcha does not match")
      $(".api_key_send_message_success").html('')
      return false
    }
  	if( $email !="" ) {
  		var mailValidRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		  if(!mailValidRegex.test($email)) {
		  	$('.api_key_send_message_error').html("Please enter your valid email address")
		    return false
		  }else{
		    $('.api_key_send_message_error').html("")
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/7335635/da844b56-0043-427e-a563-3c833d6e8691'
        var currentTime = new Date().getTime();
        var returnRes = '';

        var data = {
          "submittedAt": currentTime,
          "fields": [
            {
              "name": "email",
              "value": $email
            },
            {
              "name": "website",
              "value": $website
            }
          ],
          "legalConsentOptions":{ // Include this object when GDPR options are enabled
            "consent":{
              "consentToProcess":true,
              "text":"I agree to allow Example Company to store and process my personal data.",
              "communications":[
                {
                  "value":true,
                  "subscriptionTypeId":999,
                  "text":"I agree to receive marketing communications from Example Company."
                }
              ]
            }
          }
        }

        var final_data = JSON.stringify(data)

        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function() {
          if(xhr.readyState == 4 && xhr.status == 200) { 
            returnRes = 1;

            $.ajax({
              type: 'POST',
              url: ajax_url,
              data: {
                action: 'gwic_settings_api_key_send',
                'email' : $email,
                'website' : $website,
              },
              beforeSend:() => {
                $('.api_key_send_message_success').html('Sending...')
              },
              success:(response) => {
                if(response > 0) {
                  $(".api_key_send_message_error").html('')
                  $(".api_key_send_message_success").html('<b>Activated successfully.</b>')
                  $(".show_activate_email_js").html("<span>"+$email+"</span>")
                  window.setTimeout(function(){ location.reload() },3000)
                }else{
                  $(".api_key_send_message_success").html('')
                  $('.api_key_send_message_error').html('Please try again')
                }
              },
              error:(response) => {
                
              }
            })
            // alert(xhr.responseText); // Returns a 200 response if the submission is successful.
          } else if (xhr.readyState == 4 && xhr.status == 400){ 
            $('.api_key_send_message_error').html("The submission of your email is rejected")
            $(".api_key_send_message_success").html('')
            returnRes = 400;
          } else if (xhr.readyState == 4 && xhr.status == 403){ 
            $('.api_key_send_message_error').html("The portal isn't allowed to post of your email submissions")
            $(".api_key_send_message_success").html('')
            returnRes = 403;
          } else if (xhr.readyState == 4 && xhr.status == 404){ 
            $('.api_key_send_message_error').html("The formGuid isn't found")
            $(".api_key_send_message_success").html('')
            returnRes = 404;
          }
        }
        // Sends the request 
        xhr.send(final_data);

        if(returnRes == 1){
          $(".api_key_send_message_error").html('')
          $(".api_key_send_message_success").html('<b>Activated successfully.</b>')
          $(".show_activate_email_js").html("<span>"+$email+"</span>")
        }
        else if(returnRes == 400){
          $('.api_key_send_message_error').html("The submission of your email is rejected")
          $(".api_key_send_message_success").html('')
          return false
        }
        else if(returnRes == 403){
          $('.api_key_send_message_error').html("The portal isn't allowed to post of your email submissions")
          $(".api_key_send_message_success").html('')
          return false
        }
        else if(returnRes == 404){
          $('.api_key_send_message_error').html("The formGuid isn't found")
          $(".api_key_send_message_success").html('')
          return false
        }
		  }
  	}
  	else{
  		$('.api_key_send_message_error').html("Please enter your email address")
      $(".api_key_send_message_success").html('')
  		return false
  	}
  });
  
  /**
   * Activate plugin after submit API key value Ajax call
   */
  $(document).on("click", ".activate_api_key_button_js", function(event) {
    let $private_api_key = $("#giga_image_optimizer_private_api_key").val()
    if( $private_api_key !="" ) {
      $('.active_message_error').html("")
      $.ajax({
        type: 'POST',
        url: ajax_url,
        data: {
          action: 'gwic_plugin_activate',
          'api_key' : $private_api_key,
        },
        beforeSend:() => {
          $('.active_message_success').html('Processing...')
        },
        success:(response) => {
          if(response > 0) {
            $(".active_message_error").html('')
            $(".active_message_success").html('<b>Plugin activated successfully.</b>')
            location.reload()
          }else{
            $(".active_message_success").html('')
            $('.active_message_error').html('Plugin not activated. Please check you API key')
          }
        },
        error:(response) => {
          
        }
      })
    }
    else{
      $('.active_message_error').html("Please enter your API key")
      return false
    }
  });

})( jQuery );
