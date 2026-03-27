import { CONSENT_GROUPS, hasConsent, onConsentChange } from './consent';

export const MARKETO_FORMS_SCRIPT_ID = 'mktoForms';
export const MARKETO_FORMS_SCRIPT_SRC = 'https://info.liveperson.com/js/forms2/js/forms2.min.js';

let formsPromise = null;

export const loadMarketoFormsScript = () => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return Promise.resolve(false);
    }

    if (window.MktoForms2) {
        return Promise.resolve(true);
    }

    if (formsPromise) {
        return formsPromise;
    }

    const existingScript = document.getElementById(MARKETO_FORMS_SCRIPT_ID);
    if (existingScript) {
        formsPromise = new Promise((resolve) => {
            const markReady = () => resolve(!!window.MktoForms2);

            existingScript.addEventListener('load', markReady, { once: true });
            existingScript.addEventListener('error', () => resolve(false), { once: true });

            setTimeout(() => resolve(!!window.MktoForms2), 250);
        });

        return formsPromise;
    }

    formsPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = MARKETO_FORMS_SCRIPT_ID;
        script.type = 'text/javascript';
        script.async = true;
        script.src = MARKETO_FORMS_SCRIPT_SRC;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
    });

    return formsPromise;
};

export const whenMarketoFormsReady = (callback) => {
    if (typeof callback !== 'function') return () => {};

    let cancelled = false;

    loadMarketoFormsScript().then((loaded) => {
        if (!cancelled && loaded) {
            callback();
        }
    });

    return () => {
        cancelled = true;
    };
};

export const hasTrackingConsent = () => hasConsent(CONSENT_GROUPS.performance);

export const whenTrackingConsent = (callback) => {
    if (typeof callback !== 'function') return () => {};

    const run = () => {
        if (hasTrackingConsent()) {
            callback();
        }
    };

    run();
    return onConsentChange(run);
};