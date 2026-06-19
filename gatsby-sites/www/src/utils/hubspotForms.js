import * as React from 'react';
import HubSpotForm from '../components/blocks/HubSpotForm';

export const HUBSPOT_FORMS = {
    webinar: '287fe112-21bc-4422-b28e-e0c1ff7d72a1',
    rfp: '80f057dc-0b30-49bd-80e8-23de8e2210eb',
    download: '4eaf69fa-e0a7-486f-bf63-4d2cfad787f0',
};

const MARKETO_DOWNLOAD_FORM_IDS = ['3524', '3458', '2581', '4067', '5104', '5041'];

const getAttributeFromEmbed = (embedCode, attribute) => {
    if (!embedCode || typeof embedCode !== 'string') {
        return undefined;
    }

    const pattern = new RegExp(`${attribute}=["']?([^"'\\s>]+)`, 'i');
    const match = embedCode.match(pattern);
    return match?.[1];
};

export const getHubSpotConfigFromEmbed = (embedCode) => {
    const formId = getAttributeFromEmbed(embedCode, 'data-form-id');

    if (!formId) {
        return undefined;
    }

    return {
        formId,
        portalId: getAttributeFromEmbed(embedCode, 'data-portal-id') || '51256494',
        region: getAttributeFromEmbed(embedCode, 'data-region') || 'na1',
    };
};

export const getHubSpotConfigFromDelimitedValue = (value) => {
    if (!value || typeof value !== 'string') {
        return undefined;
    }

    const match = value
        .trim()
        .match(/^([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})_(\d+)$/i);

    if (!match) {
        return undefined;
    }

    return {
        formId: match[1],
        portalId: match[2],
        region: 'na1',
    };
};

export const replaceMarketoWithHubSpot = (defaultFormId, formMap = {}) => {
    const getHubSpotConfig = (marketoFormId) => {
        const directHubSpotConfig =
            getHubSpotConfigFromDelimitedValue(marketoFormId) || getHubSpotConfigFromEmbed(marketoFormId);
        if (directHubSpotConfig) {
            return directHubSpotConfig;
        }

        const formId =
            formMap[marketoFormId] ||
            (MARKETO_DOWNLOAD_FORM_IDS.includes(marketoFormId) ? HUBSPOT_FORMS.download : defaultFormId);

        return formId ? { formId, portalId: '51256494', region: 'na1' } : undefined;
    };

    return {
        replace: (domNode) => {
            if (
                (domNode.type === 'script' || (domNode.type === 'tag' && domNode.name === 'script')) &&
                domNode.attribs?.src?.includes('js.hsforms.net/forms/embed')
            ) {
                return <></>;
            }

            if (domNode.type === 'tag' && domNode.name === 'form' && domNode.attribs?.mkto) {
                const marketoFormId = domNode.attribs.mkto;
                const hubSpotConfig = getHubSpotConfig(marketoFormId);

                if (!hubSpotConfig) {
                    return undefined;
                }

                return <HubSpotForm {...hubSpotConfig} />;
            }

            if (domNode.type === 'tag' && domNode.name === 'mkto-after') {
                const marketoFormId = domNode.attribs?.mkto;
                if (!marketoFormId || !getHubSpotConfig(marketoFormId)) {
                    return undefined;
                }

                return <></>;
            }

            return undefined;
        },
    };
};
