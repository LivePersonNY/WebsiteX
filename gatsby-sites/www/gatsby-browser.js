import bootstrap, { Carousel } from 'bootstrap';
import runRoi from './roi-implemented';

import './liveperson-scripts';

import './src/resources/scss/index.scss';

export const onRouteUpdate = () => {
    window.dataLayer = window.dataLayer || [];
    window.runRoi = runRoi;

    const pagePath = location
        ? location.pathname + location.search + location.hash
        : undefined;
    window.ga && window.ga('set', 'page', pagePath);
    window.ga && window.ga('send', 'pageview');

    if (location && window.Munchkin) {
        window.Munchkin.munchkinFunction('visitWebPage', {
            url: location.pathname,
            params: location.search,
        });
    }

    console.log('onRouteUpdate', pagePath); // this works

    // TODO see how to make this better
    setTimeout(function () {
        const myCarouselElements = document.querySelectorAll('.carousel');
        myCarouselElements.forEach(function (myCarouselElement) {
            myCarouselElement.classList.add('testing-here');
            new Carousel(myCarouselElement, {
                ride: 'carousel',
            });
        });
    }, 2000);
};
