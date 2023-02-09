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

    // TODO see how to make this better
    setTimeout(function () {
        const myCarouselElements = document.querySelectorAll('.carousel');
        myCarouselElements.forEach(function (myCarouselElement) {
            myCarouselElement.classList.add('testing-here4');
            new Carousel(myCarouselElement, {
                ride: 'carousel',
            });
        });
    }, 2000);
    window.locations = window.locations || [document.referrer];
    locations.push(window.location.href);
    window.previousPath = locations[locations.length - 2];

    console.log('onRouteUpdate', pagePath); // this works
};
