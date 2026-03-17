const React = require('react');

const GTM_IDS = ['GTM-K85P2PM', 'GTM-MSGVMLVN'];

exports.onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <script
      key="gtm-datalayer"
      dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];`,
      }}
    />,
    ...GTM_IDS.map((id) => (
      <script
        key={`gtm-head-${id}`}
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer' ? '&l='+l : '';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${id}');
          `,
        }}
      />
    )),
  ]);

  setPreBodyComponents(
    GTM_IDS.map((id) => (
      <noscript key={`gtm-body-${id}`}>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${id}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    ))
  );
};