jQuery(document).ready(function() {
    //show and hide attribute mapping instructions

    jQuery("#toggle_am_content").click(function() {
        jQuery("#show_am_content").toggle();
    });
    jQuery("#dont_allow_unlisted_user_role").change(function() {
        if (jQuery(this).is(":checked")) {
            jQuery("#saml_am_default_user_role").attr('disabled', true);
        } else {
            jQuery("#saml_am_default_user_role").attr('disabled', false);
        }
    });
    if (jQuery("#dont_allow_unlisted_user_role").is(":checked")) {
        jQuery("#saml_am_default_user_role").attr('disabled', true);
    } else if (!jQuery("#dont_allow_unlisted_user_role").is(":disabled")) {
        jQuery("#saml_am_default_user_role").attr('disabled', false);
    }
    /*
     * Identity Provider help
     
    jQuery("#user_selected_idp").change(function() {
    	var idp = this.value;
    	if(idp == 'adfs') {
    		var content = "<a href='http://miniorange.com/adfs_as_idp_wordpress' target='_blank'>Click here to see the guide</a>"
    	} else if(idp == 'simplesaml') {
    		var content = "<a href='http://miniorange.com/simplesaml_as_idp_wordpress' target='_blank'>Click here to see the guide</a>"
    	} else if(idp == 'salesforce') {
    		var content = "<a href='http://miniorange.com/salesforce_as_idp_wordpress' target='_blank'>Click here to see the guide</a>"
    	} else if(idp == 'okta') {
    		var content = "<a href='http://miniorange.com/okta_as_idp_wordpress' target='_blank'>Click here to see the guide</a>"
    	}else if(idp == 'shibboleth') {
    		var content = "<a href='http://miniorange.com/shibboleth_as_idp_wordpress' target='_blank'>Click here to see the guide</a>"
    	} else {
    		jQuery("#idp_guide_link").html("");
    	}
    	jQuery("#idp_guide_link").html(content);
    });*/

    /*
     * Help & Troubleshooting
     */

    //Enable cURL
    jQuery("#help_curl_enable_title").click(function() {
        jQuery("#help_curl_enable_desc").slideToggle(400);
    });

    //enable openssl
    jQuery("#help_openssl_enable_title").click(function() {
        jQuery("#help_openssl_enable_desc").slideToggle(400);
    });

    //attribute mapping
    jQuery("#attribute_mapping").click(function() {
        jQuery("#attribute_mapping_desc").slideToggle(400);
    });

    //role mapping
    jQuery("#role_mapping").click(function(e) {
        e.preventDefault();
        jQuery("#role_mapping_desc").slideToggle(400);
    });

    //idp details
    jQuery("#idp_details_link").click(function(e) {
        e.preventDefault();
        jQuery("#idp_details_desc").slideToggle(400);
    });

    //add widget
    jQuery("#mo_saml_add_widget").change(function() {
        jQuery("#mo_saml_add_widget_steps").slideToggle(400);
    });

    //add shorcut
    jQuery("#mo_saml_add_shortcode").change(function() {
        jQuery("#mo_saml_add_shortcode_steps").slideToggle(400);
    });

    //registration
    jQuery("#help_register_link").click(function(e) {
        e.preventDefault();
        jQuery("#help_register_desc").slideToggle(400);
    });


    //Widget steps
    jQuery("#help_widget_steps_title").click(function() {
        jQuery("#help_widget_steps_desc").slideToggle(400);
    });

    //redirect to idp
    jQuery("#redirect_to_idp").click(function(e) {
        e.preventDefault;
        jQuery("#redirect_to_idp_desc").slideToggle(400);
    });

    //redirect to idp
    jQuery("#registered_only_access").click(function(e) {
        e.preventDefault;
        jQuery("#registered_only_access_desc").slideToggle(400);
    });

    //redirect to idp
    jQuery("#force_authentication_with_idp").click(function(e) {
        e.preventDefault;
        jQuery("#force_authentication_with_idp_desc").slideToggle(400);
    });

    //Instructions
    jQuery("#help_steps_title").click(function() {
        jQuery("#help_steps_desc").slideToggle(400);
    });

    //Working of plugin
    jQuery("#help_working_title1").click(function() {
        jQuery("#help_working_desc2").hide();
        jQuery("#help_working_desc3").hide();
        jQuery("#help_working_desc1").slideToggle(400);
    });

    jQuery("#help_working_title2").click(function() {
        jQuery("#help_working_desc1").hide();
        jQuery("#help_working_desc3").hide();
        jQuery("#help_working_desc2").slideToggle(400);
    });

    jQuery("#help_working_title3").click(function() {
        jQuery("#help_working_desc1").hide();
        jQuery("#help_working_desc2").hide();
        jQuery("#help_working_desc3").slideToggle(400);
    });

    //What is SAML
    jQuery("#help_saml_title").click(function() {
        jQuery("#help_saml_desc").slideToggle(400);
    });

    //SAML flows
    jQuery("#help_saml_flow_title").click(function() {
        jQuery("#help_saml_flow_desc").slideToggle(400);
    });

    //FAQ - certificate
    jQuery("#help_faq_cert_title").click(function() {
        jQuery("#help_faq_cert_desc").slideToggle(400);
    });

    //FAQ - 404 error
    jQuery("#help_faq_404_title").click(function() {
        jQuery("#help_faq_404_desc").slideToggle(400);
    });

    //FAQ - idp not configured properly issue
    jQuery("#help_faq_idp_config_title").click(function() {
        jQuery("#help_faq_idp_config_desc").slideToggle(400);
    });

    //FAQ - redirect to idp issue
    jQuery("#help_faq_idp_redirect_title").click(function() {
        jQuery("#help_faq_idp_redirect_desc").slideToggle(400);
    });

    //Licensing Plans
    jQuery('.goto-opt a').click(function() {
        jQuery('.goto-active').removeClass('goto-active');
        jQuery(this).addClass('goto-active');
    });
    jQuery('.tab').click(function() {
        jQuery('.handler').hide();
        jQuery('.' + jQuery(this).attr('id')).show();
        jQuery('.active').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.' + jQuery(this).attr('id') + '-rot').css('transform', 'rotateY(0deg)');
        jQuery('.common-rot').not('.' + jQuery(this).attr('id') + '-rot').css({
            'transform': 'rotateY(180deg)',
            'transition': '0.3s'
        });
        jQuery('.cp-single-site, .cp-multi-site').removeClass('show');
        jQuery('.cp-' + jQuery(this).attr('id')).addClass('show');
        jQuery('.' + jQuery(this).attr('id') + ' .clk-icn i').removeClass('fa-expand-alt').addClass('fa-times');
    });
    jQuery('.clk-icn').click(function() {
        jQuery(this).find('i').toggleClass('fa-times fa-expand-alt')
    });
    jQuery('.goto-opt a').click(function(e) {
        var href = jQuery(this).attr("href"),
            offsetTop = href === "#" ? 0 : jQuery(href).offset().top - 180;
        jQuery('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
    });
    const toggles = document.querySelectorAll(".faq-toggle");
    toggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            toggle.parentNode.classList.toggle("active");
        });
    });
    jQuery(".tab-us").css('border-bottom', '1px solid #2f4f4f');
    jQuery(".instances").css('border-bottom', '4px solid #2f4f4f');
    jQuery(".integration-section").css('display', 'none');
    jQuery("#instances").css('display', 'block');
    jQuery(".multi-network").click(function() {
        jQuery(".integration-section").css('display', 'none');
        jQuery("#multi-network").css('display', 'block');
        jQuery(".multi-network").css('border-bottom', '4px solid #2f4f4f');
    });
    jQuery(".instances").click(function() {
        jQuery(".integration-section").css('display', 'none');
        jQuery("#instances").css('display', 'block');
        jQuery(".instances").css('border-bottom', '4px solid #2f4f4f');
    });
    jQuery(".multi-idp").click(function() {
        jQuery(".integration-section").css('display', 'none');
        jQuery("#multi-idp").css('display', 'block');
        jQuery(".multi-idp").css('border-bottom', '4px solid #2f4f4f');
    });
    jQuery(".multi-network,.instances,.multi-idp").hover(function() {
        jQuery(".tabs11,.tab-us").css('border-bottom', '1px solid #2f4f4f');
    });
    jQuery(".intg-tab").click(function() {
        jQuery(".intg-tab").removeClass('active-tab');
        jQuery(this).addClass('active-tab');
    });
    jQuery(window).scroll(function() {
        var scrollDistance = jQuery(window).scrollTop();
        var num = -1;

        jQuery('.saml-scroll').each(function(i) {
            if (jQuery(this).offset().top - 450 <= scrollDistance) {
                num = i;
            }
        });
        if (num != -1) {
            jQuery('.goto-opt a.goto-active').removeClass('goto-active');
            jQuery('.goto-opt a').eq(num).addClass('goto-active');
        } else {
            jQuery('.goto-opt a.goto-active').removeClass('goto-active');
        }
    }).scroll();
});