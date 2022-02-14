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
        MktoForms.Bind();
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
      titleTemplate={`%s`}
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
