/**
 * Seo component that queries for data with
 * Gatsby's useStaticQuery React hook
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useState, useEffect } from 'react';
import { MktoForms } from '../../liveperson-attribution';
// import { loadMarketoScript, whenPerformanceConsent } from '../utils/marketo';
import { loadMarketoFormsScript, whenMarketoFormsReady } from '../utils/marketo';

const Seo = ({ description, lang, meta, title, canonical, robots, schema }) => {
    const { wp } = useStaticQuery(
        graphql`
            query {
                wp {
                    generalSettings {
                        title
                        description
                    }
                    allSettings {
                        siteIcon
                    }
                }
            }
        `
    );

    const metaDescription = description || wp.generalSettings?.description || ``;
    const defaultTitle = wp.generalSettings?.title || ``;
    const favicon = wp.allSettings?.siteIcon || ``;

    const [isLoaded, setIsLoaded] = useState(false);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        function waitForDocumentReadyFn() {
            if (!window.documentReadyFn) {
                window.readyTimeout = setTimeout(waitForDocumentReadyFn, 10);
            } else {
                clearTimeout(window.readyTimeout);
                setIsReady(true);
            }
        }

        waitForDocumentReadyFn();

        // const unsubscribe = whenPerformanceConsent(async () => {
        //     const loaded = await loadMarketoScript();
        //     if (loaded) {
        //         setIsLoaded(true);
        //     }
        // });
        const unsubscribe = whenMarketoFormsReady(async () => {
            const loaded = await loadMarketoFormsScript();
            if (loaded) {
                setIsLoaded(true);
            }
        });

        return () => {
            unsubscribe();
            clearTimeout(window.readyTimeout);
        };
    }, []);

    useEffect(() => {
        if (isLoaded && window.MktoForms2) {
            MktoForms.Bind();
        }
    }, [isLoaded]);

    useEffect(() => {
        if (isReady && window.documentReadyFn) {
            window.documentReadyFn();
        }
    }, [isReady]);

    let socialTags = meta.map(function (item, index) {
        return (
            <meta
                name={item.name || item.property.substring(3)}
                property={item.property}
                content={item.content}
                key={index}
            />
        );
    });

    if (process.env.GATSBY_IS_PREVIEW === 'true') {
        robots = 'noindex, nofollow';
    }

    return (
        <Helmet
            defer={false}
            htmlAttributes={{
                lang,
            }}
            title={title || defaultTitle}
            titleTemplate={`%s`}
        >
            {socialTags}
            <link rel="canonical" href={canonical} />
            <meta name="robots" content={robots} />
            <meta name="theme-color" content="#FA772E" />
            <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
            <script type="application/ld+json">{schema}</script>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;600;700&family=Space+Mono:wght@700&display=swap"
                rel="stylesheet"
            />
            <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.js"></script>
            <script src="https://unpkg.com/@lottiefiles/lottie-player@2.0.12/dist/lottie-player.js"></script>
        </Helmet>
    );
};

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

export default Seo;
