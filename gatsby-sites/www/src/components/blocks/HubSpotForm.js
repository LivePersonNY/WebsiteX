import * as React from 'react';
import { useEffect, useRef } from 'react';

let hubSpotFormInstance = 0;

const getNextInstanceId = () => {
    hubSpotFormInstance += 1;
    return `lp-hubspot-form-${hubSpotFormInstance}`;
};

const HubSpotForm = ({ formId, portalId = '51256494', region = 'na1', className = '' }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container || !formId || !portalId || !window.lpLoadHubSpotFormsScript) {
            return undefined;
        }

        const instanceId = getNextInstanceId();
        let cancelled = false;

        container.id = instanceId;
        container.setAttribute('data-lp-hubspot-instance', instanceId);
        container.setAttribute('data-lp-hubspot-queued', 'true');

        window
            .lpLoadHubSpotFormsScript()
            .then(function (forms) {
                if (
                    cancelled ||
                    !container.isConnected ||
                    container.getAttribute('data-lp-hubspot-rendered') ||
                    container.querySelector('form, iframe')
                ) {
                    return;
                }

                container.setAttribute('data-lp-hubspot-rendered', 'true');

                forms.create({
                    region,
                    portalId,
                    formId,
                    formInstanceId: instanceId,
                    target: `#${instanceId}`,
                    onFormReady: function () {
                        if (!cancelled && container.isConnected) {
                            container.removeAttribute('data-lp-hubspot-queued');
                            container.setAttribute('data-lp-hubspot-ready', 'true');
                        }
                    },
                    onFormSubmitted: function ($form, data) {
                        if (!cancelled && container.isConnected) {
                            container.setAttribute('data-lp-hubspot-submitted', 'true');
                        }

                        const submissionValues = data?.submissionValues || {};

                        if (window.lpPushHubSpotFormSuccess) {
                            window.lpPushHubSpotFormSuccess(
                                formId,
                                submissionValues.email,
                                submissionValues.phone
                            );
                        }
                    },
                });
            })
            .catch(function (error) {
                if (!cancelled) {
                    container.removeAttribute('data-lp-hubspot-queued');
                    container.removeAttribute('data-lp-hubspot-rendered');
                    console.error('Unable to render HubSpot form', error);
                }
            });

        return () => {
            cancelled = true;
            container.innerHTML = '';
            container.removeAttribute('data-hs-forms-root');
            container.removeAttribute('data-lp-hubspot-queued');
            container.removeAttribute('data-lp-hubspot-ready');
            container.removeAttribute('data-lp-hubspot-rendered');
            container.removeAttribute('data-lp-hubspot-submitted');
            container.style.removeProperty('height');
        };
    }, [formId, portalId, region]);

    return (
        <div
            ref={containerRef}
            className={`lp-hubspot-form ${className}`.trim()}
            data-region={region}
            data-form-id={formId}
            data-portal-id={portalId}
        />
    );
};

export default HubSpotForm;
