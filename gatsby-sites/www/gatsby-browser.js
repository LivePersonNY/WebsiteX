import bootstrap from 'bootstrap';
import runRoi from './roi-implemented';

import './liveperson-scripts';

import './src/resources/scss/index.scss';

export const onRouteUpdate = () => {
  console.log("onRouteUpdate") // this works
  
  window.dataLayer = window.dataLayer || [];
  window.runRoi = runRoi;
  
}