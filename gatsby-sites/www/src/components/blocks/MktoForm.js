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
      $('.form--sticky .mktoForm').slideToggle(300);
      $('.span1').toggleClass('swap');
      $('.span2').toggleClass('swap');
    };

    let formId = props.formId;
    
    let mktoFormScript = `
    
      function waitForJquery() {
        if (!window.$ && !window.jQuery) {
          setTimeout(waitForJquery, 100);
        } else {
          let jq = window.$ || window.jQuery;
              
          jq('a.mobileForm').click(function(e) {
            e.preventDefault();
            jq('.form--sticky .mktoForm').slideToggle(300);
            jq('.span1').toggleClass('swap');
            jq('.span2').toggleClass('swap');
          });
        }
      }
      waitForJquery();
      
      function mktoRuntime() {
        if (!window.loadForm) {
          setTimeout(mktoRuntime, 100);
        } else {
          window.loadForm(${formId}, '<p class="thank-you-message">${props.thankyou}</p>');
        }
      }
      mktoRuntime();
    `;
    
    if (props.runFilters) {
      const [isLoaded, setIsLoaded] = useState(false);
      
  
      useEffect(() => {
        if (!document.getElementById(marketoScriptId)) {
          loadScript();
        } else {
          setIsLoaded(true);
        }
      }, []);
    
      useEffect(() => {
        isLoaded &&
          eval(mktoFormScript);
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
    }
  

  return (
    <div className={`pane pane-form ${props.sticky ? 'form--sticky' : ''} ${props.backgroundColor||"bg-rainbow"} ${props.header ? 'pane-with-lead-text' : ''}`} style={{display:'none'}}>
      <div className="container">
        {props.header && !props.sticky &&(
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2>{props.header}</h2>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-lg-12">
                       
              <a className="mobileForm" >
                <span className="span1">Request demo</span>
                <span className="span2">
                  <svg version="1.1" viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg" style={{width:'40px'}}>
                    <g fill="#162036" fillRule="evenodd">
                      <g transform="translate(1 1)" stroke="#fff">
                        <circle cx="30" cy="30" r="30" />
                        <g stroke="#ffffff" transform="translate(15 15)" strokeLinecap="square">
                          <path d="m0.51724 0.51724l29.26 29.26" />
                          <path d="m29.483 0.51724l-29.26 29.26" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              </a>
              <form id={`mktoForm_${formId}`}></form>      
              {!props.runFilters && (
                <script>{mktoFormScript}</script>
              )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default MktoForm;
