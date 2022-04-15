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
  
  const { wp } = useStaticQuery(
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
      }
    `
  );

  const metaDescription = description || wp.generalSettings?.description || ``;
  const defaultTitle = wp.generalSettings?.title || ``;
  const favicon = wp.allSettings?.siteIcon || ``;
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [lzLoaded, setLzLoaded] = useState(false);
  
  useEffect(() => {
      
      function waitForDocumentReadyFn() {
        if (!window.documentReadyFn) {
          window.readyTimeout = setTimeout(waitForDocumentReadyFn, 10);
        } else {
          clearTimeout(window.readyTimeout);
          //window.documentReadyFn();
          setIsReady(true);
        }
      }
      waitForDocumentReadyFn();
      
      if (!document.getElementById(marketoScriptId)) {
        loadFormScript();
      } else {
        setIsLoaded(true);
      }
      
      if (isLoaded) {
        MktoForms.Bind();
      }
      
      if (isReady) {
        window.documentReadyFn();
        const pagePath = location ? location.pathname + location.search + location.hash	: undefined;
        window.ga && window.ga('set', 'page', pagePath);
        window.ga && window.ga('send', 'pageview');
      }
      
      if (!document.getElementById('localize_js')) {
        loadLocalizeScript();
      } else {
        setLzLoaded(true);
      }

      if (lzLoaded) {
        
        !function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","detectLanguage","getAvailableLanguages","untranslatePage","bootstrap","prefetch","on","off","hideWidget","showWidget","getSourceLanguage"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}}(window);
        
        Localize.initialize({
          key: `${process.env.LOCALIZE_KEY}`,
          saveNewPhrasesFromSource: true,
          blockedClasses: [
            'lp-window-root',
            'microMode'
          ],
        });
        
        console.log('Initialize localize.');
      }
          
  }, [isLoaded]);
  
  const loadFormScript = () => {
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
  
  const loadLocalizeScript = () => {
    var s = document.createElement('script');
    s.id = 'localize_js';
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://global.localizecdn.com/localize.js';
    s.onreadystatechange = function() {
      if (this.readyState === 'complete' || this.readyState === 'loaded') {
        setLzLoaded(true);
      }
    };
    s.onload = () => setLzLoaded(true);
    document.getElementsByTagName('head')[0].appendChild(s);
  }
  
  let socialTags = meta.map(function(item) {
    return (
      <meta name={item.name || item.property.substring(3)} property={item.property} content={item.content} />
    );
  });
  
  return (
    <Helmet
      defer={false}
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      titleTemplate={`%s`}
    >
      {socialTags}
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
      
      <script src="https://unpkg.com/@dotlottie/player-component@1.0.0/dist/dotlottie-player.js"></script>
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
