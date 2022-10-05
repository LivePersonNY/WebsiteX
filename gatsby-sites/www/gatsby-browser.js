import bootstrap from 'bootstrap';
import runRoi from './roi-implemented';

import './liveperson-scripts';

import './src/resources/scss/index.scss';



export const onRouteUpdate = () => {
  
  window.MktoForms2 = undefined;
  
  window.dataLayer = window.dataLayer || [];
  window.runRoi = runRoi;
  
  const pagePath = location ? location.pathname + location.search + location.hash	: undefined;
  window.ga && window.ga('set', 'page', pagePath);
  window.ga && window.ga('send', 'pageview');
  
  if (location && window.Munchkin) {
    window.Munchkin.munchkinFunction('visitWebPage', {
        'url': location.pathname,
        'params': location.search
    });
  }
  
  console.log("onRouteUpdate", pagePath) // this works
  
}