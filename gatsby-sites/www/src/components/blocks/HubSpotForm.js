import * as React from 'react';
import { useEffect } from 'react';

const HubSpotForm = ({ formId, portalId = '51256494', region = 'na1', className = '' }) => {
    useEffect(() => {
        if (window.lpHydrateHubSpotForms) {
            window.lpHydrateHubSpotForms();
        }
    }, [formId, portalId]);

    return (
        <div
            className={`hs-form-frame ${className}`}
            data-region={region}
            data-form-id={formId}
            data-portal-id={portalId}
        ></div>
    );
};

export default HubSpotForm;
