import bootstrap, { Carousel } from 'bootstrap';
import runRoi from './roi-implemented';

import './liveperson-scripts';

import './src/resources/scss/index.scss';

/**
 * Inject a "Reject All" button into the OneTrust banner (loaded async via GTM),
 * placing it directly under the existing "Accept All" button.
 */
function initOneTrustRejectAllInjection() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    if (window.__lpOneTrustRejectAllInit) return;
    window.__lpOneTrustRejectAllInit = true;

    const CUSTOM_ID = 'lp-onetrust-reject-all-btn';

    const tryInject = () => {
        const banner = document.querySelector('#onetrust-banner-sdk');
        if (!banner) return false;

        const acceptBtn = banner.querySelector('#onetrust-accept-btn-handler');
        if (!acceptBtn) return false;

        if (banner.querySelector(`#${CUSTOM_ID}`)) return true;

        const parent = acceptBtn.parentElement;
        if (!parent) return false;

        const rejectBtn = document.createElement('button');
        rejectBtn.type = 'button';
        rejectBtn.id = CUSTOM_ID;

        rejectBtn.className = acceptBtn.className || 'ot-sdk-button ot-sdk-button-primary';
        rejectBtn.textContent = 'Reject All Cookies';

        rejectBtn.style.display = 'block';
        rejectBtn.style.marginTop = '10px';

        rejectBtn.addEventListener('click', () => {
            try {
                if (window.OneTrust && typeof window.OneTrust.RejectAll === 'function') {
                    window.OneTrust.RejectAll();
                } else {
                    const nativeReject = document.querySelector('#onetrust-reject-all-handler');
                    if (nativeReject) nativeReject.click();
                }
            } catch (e) {
                console.warn('RejectAll action failed:', e);
            }

            try {
                if (window.OneTrust && typeof window.OneTrust.Close === 'function') {
                    window.OneTrust.Close();
                } else {
                    const consentRoot = document.querySelector('#onetrust-consent-sdk');
                    if (consentRoot) consentRoot.style.display = 'none';
                    banner.style.display = 'none';
                }
            } catch (e) {
                console.warn('Banner close failed:', e);
            }
        });

        parent.appendChild(rejectBtn);
        return true;
    };

    if (tryInject()) return;

    const observer = new MutationObserver(() => {
        if (tryInject()) observer.disconnect();
    });

    observer.observe(document.documentElement, { childList: true, subtree: true });

    window.setTimeout(() => observer.disconnect(), 30000);
}

export const onRouteUpdate = () => {
    window.dataLayer = window.dataLayer || [];
    window.runRoi = runRoi;

    const pagePath = location ? location.pathname + location.search + location.hash : undefined;

    if (location && window.Munchkin) {
        window.Munchkin.munchkinFunction('visitWebPage', {
            url: location.pathname,
            params: location.search,
        });
    }

    // TODO see how to make this better
    setTimeout(function () {
        const myCarouselElements = document.querySelectorAll('.carousel:not(#carouselExampleFlywheel)');
        myCarouselElements.forEach(function (myCarouselElement) {
            myCarouselElement.classList.add('testing-here4');
            new Carousel(myCarouselElement, {
                ride: 'carousel',
            });
        });
    }, 1000);

    window.locations = window.locations || [document.referrer];
    locations.push(window.location.href);
    window.previousPath = locations[locations.length - 2];

    if (location && window.OneTrust) {
        OneTrust.initializeCookiePolicyHtml();
    }

    initOneTrustRejectAllInjection();

    console.log('onRouteUpdate', pagePath); // this works
};

export const onInitialClientRender = () => {
    initOneTrustRejectAllInjection();
};