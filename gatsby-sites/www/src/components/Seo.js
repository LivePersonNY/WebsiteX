/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useState, useEffect } from 'react';
import { LivePerson, MktoForms } from '../../liveperson-attribution';

const marketoScriptId = 'mktoForms';

const Seo = ({ description, lang, meta, title, canonical, robots }) => {
  const { wp, wpUser } = useStaticQuery(
    graphql`
      query {
        wp {
          generalSettings {
            title
            description
          }
          allSettings {
            siteIcon
          }
        }

        # if there's more than one user this would need to be filtered to the main user
        wpUser {
          twitter: name
        }
      }
    `
  );

  const metaDescription = description || wp.generalSettings?.description;
  const defaultTitle = wp.generalSettings?.title;
  const favicon = wp.allSettings?.siteIcon;
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  /*MktoForms.Bind(function(MktoForms2, $) {
    MktoForms2.whenReady(function(form) {
      // TODO Address form directly, not all labels.
      
      form.onSuccess(function(values, followUpUrl) {
        console.log(values);
        //form.getFormElem().replace('<p class="thank-you-message">' + afterMessage + '</p>');
      
        //dataLayer.push({'event' : 'request-demo-form'});
         return false;
      });
      
      form.onValidate(function () {
            
              
        if (form.getValues().wholeName !== undefined && form.getValues().wholeName !== '') {
          LivePerson.SetFullName("FirstName", "LastName", "wholeName", form);
        }
    
        var formID = form.getId();
        var emailField = form.getFormElem().find('#Email').first();
        var emailVal = emailField.val();
    
        //Hotjar recording tag
        LivePerson.HotJar('Form fill - Attempt');
    
        if (!LivePerson.EmailGood(emailVal)) {
          window.testform = form;
          console.log("Email Invalid " + emailVal, form.vals());
          form.showErrorMessage("Must be Business email.", emailField);
          form.submittable(false);
         
        } else { 			
          //continueDemandbase(formID);
          form.vals({
            'GCLID__c': window.lp_attr.gclid,
            'MSCLIKID__c': window.lp_attr.msclkid,
            'LeadSource': window.lp_attr.leadSource,
            'Referring_URL__c': window.lp_attr.referringUrl,
            'campaignSearchKeywords__c': window.lp_attr.searchTearms,
            'campaignID__c': window.lp_attr.campaign,
            'campaignSource__c': window.lp_attr.campaignSource,
            'campaignMedium__c': window.lp_attr.campaignMedium,
            'campaignCreative__c': window.lp_attr.campaignContent
          });
          
        	form.submittable(true);
        }

      }).getFormElem().find('label').each(function() {
        $(this).attr('aria-label', $(this).attr('for'));
      });
    });
    
  });*/
  
  useEffect(() => {
      
      function waitForDocumentReadyFn() {
        if (!window.documentReadyFn) {
          window.readyTimeout = setTimeout(waitForDocumentReadyFn, 50);
        } else {
          clearTimeout(window.readyTimeout);
          window.documentReadyFn();
        }
      }
      waitForDocumentReadyFn();
      
      if (!document.getElementById(marketoScriptId)) {
        loadScript();
      } else {
        setIsLoaded(true);
      }
      
      if (isLoaded) {
        MktoForms2.loadForm(
          'https://info.liveperson.com',
          '501-BLE-979',
          2580
        )
      }
          
  });
  
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
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: wpUser?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={robots} />
      <meta name="theme-color" content="#FA772E" />
      <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      
      <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
      
    </Helmet>
  );
};

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
