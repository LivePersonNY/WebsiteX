import bootstrap from 'bootstrap';

import './liveperson-scripts';

import './src/resources/scss/index.scss';

export const onRouteUpdate = () => {
  console.log("onRouteUpdate") // this works
  
  window.dataLayer = window.dataLayer || [];
  
}