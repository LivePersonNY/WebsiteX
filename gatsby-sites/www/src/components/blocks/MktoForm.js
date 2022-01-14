import * as React from 'react';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 

const marketoScriptId = 'mktoForms';

const MktoForm = (props) => {

  
    let mktoFormMobile = function(e) {
      // $('body').toggleClass('locked');
      // $('.form--sticky').toggleClass('swapPosition');
      $('.form--sticky .container').slideToggle(300);
      $(this).parents('.flip-card').toggleClass('mobile-expanded');
      $('.span1').toggleClass('swap');
      $('.span2').toggleClass('swap');
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
              $('form').html('<p class="thank-you-message">Thank you! One of our experts will contact you shortly. <img style="display: inline;width: 30px;top: -3px;position: relative;left: 5px;padding:0;" src="https://d1hryyr5hiabsc.cloudfront.net/web2020/img/intents/thumbs-up_1f44d.png" /></p>');
              // formSubmissionComplete('request a demo');
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
    <div className="pane pane-form form--sticky" style={{display:'none'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
                       
              <a className="mobileForm" onClick={mktoFormMobile}>
                <span className="span1">Request demo</span>
                <span className="span2">
                  <svg version="1.1" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg" style={{width:'40px'}}>
                    <g fill="#162036" fill-rule="evenodd">
                      <g transform="translate(1 1)" stroke="#fff">
                        <circle cx="30" cy="30" r="30" />
                        <g stroke="#ffffff" transform="translate(15 15)" stroke-linecap="square">
                          <path d="m0.51724 0.51724l29.26 29.26" />
                          <path d="m29.483 0.51724l-29.26 29.26" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
              <form id={`mktoForm_${formId}`}></form>      
          
          </div>
        </div>
      </div>
    </div>
  )
};

export default MktoForm;
