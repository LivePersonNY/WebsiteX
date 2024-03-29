import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
    const gtm_id = process.env.GTM_ID;

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

    let windowCssFile = 'https://lp-site.s3.amazonaws.com/web2020/css/window.css';

    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        windowCssFile = 'https://lp-site.s3.amazonaws.com/web2020/css/window.min.css';
    }

    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link href={windowCssFile} rel="stylesheet" />

                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
                {props.postBodyComponents}
                <div id="elpi_2023_html"></div>
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
