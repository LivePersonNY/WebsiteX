import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';
import $ from 'jquery'; 
import Parser from 'html-react-parser';

const marketoScriptId = 'mktoForms';

const LRForm = (props) => {
  
  let vFrame = (
    <div className="vimeoContainer">
      <iframe src={props.vimeoUrl} className="vimeoFrame"></iframe>
    </div>
  );

  let formId = props.formId;
    
  // Strictly for WP //  
  
  if (props.runFilters) {
    const [isLoaded, setIsLoaded] = useState(false);
  
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
      s.onload = () => {
        setIsLoaded(true);
  
      }
      document.getElementsByTagName('head')[0].appendChild(s);
      };
  
    useEffect(() => {
  
      if (!document.getElementById(marketoScriptId)) {
        loadScript();
      } else {
        setIsLoaded(true);
      }
  
    }, []);
    
    useEffect(() => {
      if (isLoaded) {
        if ($('#mktoForm_' + formId).children().length == 0 && window.MktoForms2) {
          window.MktoForms2.loadForm('https://info.liveperson.com', '501-BLE-979', formId, function(form) {
            form.onValidate(function() {
              form.submittable(false);
            });
          });
        }
        
      }
    }, [isLoaded, formId]);  
  }

  return (
    <>
      <div data-localize={props.autoApprove && `auto-approve`} autoapprove={props.autoApprove && "true"} id={props.anchor} 
        className={`pane ${props.backgroundColor||"bg-transparent"} comp-left-right ${props.repeat ? 'comp-left-right-repeat' : ''} ${props.formId ? 'pane-form form-vertical' : ''}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className={`col-lg-6 ${props.flipColumns ? 'order-last' : 'order-lg-first order-last'}`}
            >
              
              {props.formId && 

                <>
                  <form id={`mktoForm_${formId}`} mkto={formId}></form>      
                  <mkto-after mkto={formId}>{props.thankyouControl || Parser(props.thankyou)}</mkto-after>
                </>
              }
            </div>
            <div
              className={`col-lg-6 ${
                props.flipColumns ? 'order-first' : 'order-lg-last order-first'
              }`}
            >
              {props.kicker && <p className="h6 text-uppercase">{props.kicker}</p>}
              {props.headLevel == 'h2' && <h2>{props.title}</h2>}
              {props.headLevel == 'h3' && <h3>{props.title}</h3>}
              <Paragraph text={props.body} wrapClass="rich-container" />
              {props.mediaKicker && <h6 className="mt-4">{props.mediaKicker}</h6>}
              {
                !props.imgCtl && (
                  (props.imgSrc && <img src={props.imgSrc} alt={props.imgAlt || ""} />)) || props.imgCtl || props.lottiePlayer
              }
              {props.vimeoUrl && vFrame}

              {props.linkText && (
                <a className="btn btn-outline-secondary" href={props.linkUrl}>
                  {props.linkText}
                </a>
              )}
              {props.linkSecondaryText && (
                <a className="btn btn-link" href={props.linkSecondaryUrl}>
                  {props.linkSecondaryText}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LRForm;
