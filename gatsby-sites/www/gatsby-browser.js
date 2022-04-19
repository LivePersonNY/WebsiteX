import bootstrap from 'bootstrap';
import './liveperson-scripts';

import './src/resources/scss/index.scss';

export const onRouteUpdate = () => {
  console.log("onRouteUpdate") // this works
  
  window.Localize.initialize({
    key: `${process.env.LOCALIZE_KEY}`,
    saveNewPhrasesFromSource: true,
    retranslateOnNewPhrases: true,
    translateMetaTags: true,
    blockedClasses: [
      'lp-window-root',
      'microMode'
    ],
  });
}