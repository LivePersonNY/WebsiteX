import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  
  const lzScript = `
  
      !function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","detectLanguage","getAvailableLanguages","untranslatePage","bootstrap","prefetch","on","off","hideWidget","showWidget","getSourceLanguage"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}}(window);
      
      Localize.initialize({
        key: '${process.env.LOCALIZE_KEY}',
        retranslateOnNewPhrases: true,
        translateMetaTags: true,
        rememberLanguage: true,
        autodetectLanguage: true,
        blockedClasses: [
          'lp-window-root',
          'microMode'
        ],
      });
      
  `;
  
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

        {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css" />
        <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
        <script src="https://heuristic-pare-8a14b1.netlify.app/assets/js/roi-calc.js"></script>
        <script src="https://heuristic-pare-8a14b1.netlify.app/assets/js/roi-implemented.js"></script> */}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
