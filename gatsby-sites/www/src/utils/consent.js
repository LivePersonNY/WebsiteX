export const CONSENT_GROUPS = {
    necessary: 'C0001',
    performance: 'C0002',
    functional: 'C0003',
    targeting: 'C0004',
};

export const getActiveConsentGroups = () => {
    if (typeof window === 'undefined') return [];

    const raw = window.OnetrustActiveGroups || window.OptanonActiveGroups || '';

    if (Array.isArray(raw)) {
        return raw;
    }

    if (typeof raw !== 'string') {
        return [];
    }

    return raw
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => item.split(':')[0]);
};

export const hasConsent = (groupId) => getActiveConsentGroups().includes(groupId);

export const onConsentChange = (callback) => {
    if (typeof window === 'undefined' || typeof callback !== 'function') {
        return () => {};
    }

    const handler = () => {
        callback(getActiveConsentGroups());
    };

    window.addEventListener('OneTrustGroupsUpdated', handler);
    window.addEventListener('OTConsentApplied', handler);

    return () => {
        window.removeEventListener('OneTrustGroupsUpdated', handler);
        window.removeEventListener('OTConsentApplied', handler);
    };
};

export const runOnceWhenConsent = (groupId, fn, key) => {
    if (typeof window === 'undefined' || typeof fn !== 'function') {
        return () => {};
    }

    const stateKey = key || `__consent_once__${groupId}`;

    const maybeRun = () => {
        if (!hasConsent(groupId) || window[stateKey]) {
            return;
        }

        window[stateKey] = true;
        fn();
    };

    maybeRun();

    return onConsentChange(maybeRun);
};
