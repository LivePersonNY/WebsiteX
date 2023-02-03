import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
    const gtm_id = process.env.GTM_ID;
    const lzScript = `

      !function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","detectLanguage","getAvailableLanguages","untranslatePage","bootstrap","prefetch","on","off","hideWidget","showWidget","getSourceLanguage"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}}(window);

      Localize.initialize({
        key: '${process.env.LOCALIZE_KEY}',
        retranslateOnNewPhrases: true,
        saveNewPhrasesFromSource: true,
        translateMetaTags: true,
        rememberLanguage: true,
        autodetectLanguage: true,
        blockedClasses: [
          'lp-window-root',
          'microMode'
        ],
        blockedIds: [
          'gatsby-announcer'
        ]
      });

  `;

    const gtmScript = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtm_id}');
  `;

    const frameStyle = {
        display: 'none',
        visibility: 'hidden',
    };

    let windowCssFile =
        'https://lp-site.s3.amazonaws.com/web2020/css/window.css';

    if (
        process.env.BRANCH != 'develop' &&
        process.env.GATSBY_IS_PREVIEW !== 'true'
    ) {
        windowCssFile =
            'https://lp-site.s3.amazonaws.com/web2020/css/window.min.css';
    }

    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                <script src="https://global.localizecdn.com/localize.js"></script>
                <script dangerouslySetInnerHTML={{ __html: lzScript }}></script>
                <link href={windowCssFile} />

                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
