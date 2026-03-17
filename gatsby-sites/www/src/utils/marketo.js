import { CONSENT_GROUPS, hasConsent, onConsentChange } from './consent';

export const MARKETO_SCRIPT_ID = 'mktoForms';
export const MARKETO_SCRIPT_SRC = 'https://info.liveperson.com/js/forms2/js/forms2.min.js';

let marketoPromise = null;

export const canLoadMarketo = () => hasConsent(CONSENT_GROUPS.performance);

export const loadMarketoScript = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return Promise.resolve(false);
    }

    if (!canLoadMarketo()) {
        return Promise.resolve(false);
    }

    if (window.MktoForms2) {
        return Promise.resolve(true);
    }

    if (marketoPromise) {
        return marketoPromise;
    }

    const existingScript = document.getElementById(MARKETO_SCRIPT_ID);
    if (existingScript) {
        marketoPromise = new Promise((resolve) => {
            const markReady = () => resolve(!!window.MktoForms2);

            existingScript.addEventListener('load', markReady, { once: true });
            existingScript.addEventListener('error', () => resolve(false), { once: true });

            setTimeout(() => resolve(!!window.MktoForms2), 250);
        });

        return marketoPromise;
    }

    marketoPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = MARKETO_SCRIPT_ID;
        script.type = 'text/javascript';
        script.async = true;
        script.src = MARKETO_SCRIPT_SRC;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
    });

    return marketoPromise;
};

export const whenPerformanceConsent = (callback) => {
    if (typeof callback !== 'function') return () => {};

    let cancelled = false;

    const tryRun = async () => {
        if (cancelled || !canLoadMarketo()) return;
        const loaded = await loadMarketoScript();
        if (!cancelled && loaded) {
            callback();
        }
    };

    tryRun();

    const unsubscribe = onConsentChange(() => {
        tryRun();
    });

    return () => {
        cancelled = true;
        unsubscribe();
    };
};
