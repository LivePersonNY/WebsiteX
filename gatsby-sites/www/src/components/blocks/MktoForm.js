import * as React from 'react';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 

const marketoScriptId = 'mktoForms';

const MktoForm = (props) => {

    let tabClickA = function(e) {
      $('.comp-tabs-a .accordion-item').removeClass('accordion-item-active');
      $(e.target).parents('.accordion-item').addClass('accordion-item-active');
      let tabIndex = $(e.target).data('tab');
      $(`.comp-tabs-a .comp-tabs-img[data-tab-content="${tabIndex}"]`).fadeIn();
      $(`.comp-tabs-a .comp-tabs-img:not([data-tab-content="${tabIndex}"])`).hide();
    };

    const [isLoaded, setIsLoaded] = useState(false);
    let formId = props.formId;

    useEffect(() => {
      if (!document.getElementById(marketoScriptId)) {
        loadScript();
      } else {
        setIsLoaded(true);
      }
    }, []);
  
    useEffect(() => {
      isLoaded &&
        window.MktoForms2.loadForm(
          '//info.liveperson.com',
          '501-BLE-979',
          formId,
          function(form){
            console.log('its loaded');
            form.onSuccess(function(values, followUpUrl) {
              $('#NumberOfEmployees').parents('.mktoFieldDescriptor.mktoFormCol').addClass('mkto-dd-field');
              $('#NumberOfEmployees').addClass('select-placeholder'); 
              $('#NumberOfEmployees').on('change', function(){ 
                if ($(this).val() === ""){ 
                  $(this).addClass('select-placeholder'); 
                } else {                   
                  $(this).removeClass('select-placeholder');
                }
              });
              $('form').html('<p class="thank-you-message">Thank you! One of our experts will contact you shortly. <img style="display: inline;width: 30px;top: -3px;position: relative;left: 5px;padding:0;" src="https://d1hryyr5hiabsc.cloudfront.net/web2020/img/intents/thumbs-up_1f44d.png" /></p>');
              formSubmissionComplete('request a demo');
              dataLayer.push({'event' : 'request-demo-form'});

              return false;
            });
          }
        );
    }, [isLoaded, formId]);
  
    const loadScript = () => {
      var s = document.createElement('script');
      s.id = marketoScriptId;
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://info.liveperson.com/js/forms2/js/forms2.min.js';
      s.onreadystatechange = function() {
        if (this.readyState === 'complete' || this.readyState === 'loaded') {
          setIsLoaded(true);
        }
      };
      s.onload = () => setIsLoaded(true);
      document.getElementsByTagName('head')[0].appendChild(s);
    };
  

  return (
  <>
    <div className="pane pane-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <form id={`mktoForm_${formId}`}></form>      
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

export default MktoForm;
