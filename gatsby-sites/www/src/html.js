import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  
  const lzScript = `
  
      const Cookie = {
        set: function(name, value, days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          var expires = "; expires=" + date.toGMTString();
          document.cookie = name + "=" + value + expires + "; path=/; domain=liveperson.com;";
        },
        get: function(cname) {
          let name = cname + "=";
          let decodedCookie = decodeURIComponent(document.cookie);
          let ca = decodedCookie.split(';');
          for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
          }
          return "";
        }
      }
  
      !function(a){if(!a.Localize){a.Localize={};for(var e=["translate","untranslate","phrase","initialize","translatePage","setLanguage","getLanguage","detectLanguage","getAvailableLanguages","untranslatePage","bootstrap","prefetch","on","off","hideWidget","showWidget","getSourceLanguage"],t=0;t<e.length;t++)a.Localize[e[t]]=function(){}}}(window);
      
      Localize.on('initialize', function(data) {
        console.log('Localize Init', data);
      });
      
      Localize.initialize({
        key: '${process.env.LOCALIZE_KEY}',
        retranslateOnNewPhrases: true,
        translateMetaTags: true,
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
