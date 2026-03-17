const CONSENT_GROUPS = {
  strictlyNecessary: 'C0001',
  performance: 'C0002',
  functional: 'C0003',
  targeting: 'C0004',
};

const normalizeGroups = (groups) => {
  if (!groups) return '';
  if (Array.isArray(groups)) return groups.join(',');
  return String(groups);
};

export const getActiveConsentGroups = () => {
  if (typeof window === 'undefined') return '';
  return normalizeGroups(window.OnetrustActiveGroups || window.OptanonActiveGroups || '');
};

export const hasConsent = (groupId) => {
  if (!groupId) return false;
  const groups = getActiveConsentGroups();
  return groups.indexOf(groupId) > -1;
};

export const onConsentChange = (callback) => {
  if (typeof window === 'undefined' || typeof callback !== 'function') return () => {};

  const handler = () => callback(getActiveConsentGroups());

  window.addEventListener('OneTrustGroupsUpdated', handler);
  document.addEventListener('OneTrustGroupsUpdated', handler);

  if (window.OneTrust || window.OnetrustActiveGroups) {
    handler();
  }

  return () => {
    window.removeEventListener('OneTrustGroupsUpdated', handler);
    document.removeEventListener('OneTrustGroupsUpdated', handler);
  };
};

export const runOnceWhenConsent = (groupId, fn, key) => {
  if (typeof window === 'undefined' || typeof fn !== 'function') return () => {};

  const stateKey = key || `__consent_once__${groupId}`;

  const tryRun = () => {
    if (window[stateKey] || !hasConsent(groupId)) return;
    window[stateKey] = true;
    fn();
  };

  tryRun();
  return onConsentChange(tryRun);
};

export { CONSENT_GROUPS };
