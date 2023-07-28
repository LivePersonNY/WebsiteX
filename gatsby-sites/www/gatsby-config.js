require('dotenv').config({
    path: '../../.env',
});

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.liveperson.com/',
        title: 'WebsiteX',
        description: 'New WebsiteX site for all your needs',
        author: 'LivePerson',
    },
    plugins: [
        {
            resolve: `gatsby-plugin-gatsby-cloud`,
            options: {
                generateMatchPathRewrites: false,
                allPageHeaders: ['Strict-Transport-Security: max-age=31536000'],
                headers: {
                    '/*': [
                        // "Cache-Control: public, max-age=31536000, immutable",
                        'cache-control: public, max-age=0, must-revalidate',
                    ],
                },
            },
        },
        `gatsby-plugin-react-helmet`,
        // `gatsby-plugin-image`,
        // `gatsby-plugin-sitemap`,
        // {
        //   resolve: 'gatsby-plugin-robots-txt',
        //   options: {
        //     configFile: 'robots-txt.config.js'
        //   },
        // },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                configFile: 'robots-txt.config.js',
            },
        },
        // {
        //   resolve: `gatsby-source-filesystem`,
        //   options: {
        //     name: `images`,
        //     path: `${__dirname}/src/resources/images`,
        //   },
        // },
        {
            resolve: 'gatsby-plugin-exclude',
            options: { paths: ['{wpStagedPage.link}.js'] },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
                verbose: true,
                schema: {
                    timeout: 1200000,
                    // requestConcurrency: 5,
                },
                url: `${
                    process.env.WP_HOST || 'https://edit.liveperson.com'
                }/graphql`,
                debug: {
                    preview: true,
                    graphql: {
                        showQueryOnError: true,
                    },
                },
                production: {
                    allow404Images: false,
                    hardCacheMediaFiles: false,
                },
                type: {
                    MediaItem: {
                        localFile: {
                            excludeByMimeTypes: [
                                `image/png`,
                                `image/jpeg`,
                                `image/jpg`,
                                `application/json`,
                                `application/zip`,
                                `image/svg+xml`,
                                `image/gif`,
                                `application/pdf`,
                            ],
                            maxFileSizeBytes: 0,
                            // requestConcurrency: 50,
                        },
                    },
                },
                html: {
                    useGatsbyImage: false,
                },
            },
        },
        {
            resolve: 'gatsby-source-wordpress-menus',
            options: {
                wordpressUrl:
                    process.env.WP_HOST || 'https://edit.liveperson.com',
                enableWpml: false,
                allowCache: false,
                // maxCacheDurationSeconds: 60 * 60 * 24,
                maxCacheDurationSeconds: 60,
            },
        },
        //`gatsby-transformer-sharp`,
        //`gatsby-plugin-sharp`,
        'gatsby-plugin-sass',
        // `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                excludes: [
                    '/ai/',
                    '/apac/auto/',
                    '/autofi-partnership-migration/',
                    '/campaigns/apac-auto/',
                    '/campaigns/voice/',
                    '/channels/gbm-registration-form/',
                    '/channels/line-registration-form/',
                    '/channels/rcs-registration-form/',
                    '/deck/delta-dental/',
                    '/events/**', // Exclude all pages starting with '/events/'
                    '/gai-launch/',
                    '/one/',
                    '/partners/portals/',
                    '/partners/services/foundations-cso/',
                    '/policies/**', // Exclude all pages starting with '/policies/'
                    '/resources/reports/ai-search-product-guide/',
                    '/resources/reports/apac-cio-outlook/',
                    '/resources/reports/conversational-banking-video-on-demand/',
                    '/resources/reports/conversational-travel-jp/',
                    '/resources/reports/gartner-whatsapp-business/',
                    '/resources/reports/improve-airline-customer-service/',
                    '/resources/reports/improve-airline-customer-service-emea/',
                    '/resources/reports/proactive-playbook/',
                    '/resources/reports/salesforce-integration-apac/',
                    '/resources/reports/salesforce-integration-emea/',
                    '/resources/reports/salesforce-integration-na/',
                    '/resources/reports/salesforce-integration-overview/',
                    '/resources/webinars/conversational-ai-is-more-than-just-chatbots-ja/',
                    '/resources/webinars/design-and-build-faster-time-to-value/',
                    '/resources/webinars/generative-ai-apac/',
                    '/resources/webinars/voicebase-early-adopter-enablement/',
                    '/resources/webinars/voicebase-early-adopter-enablement-apac/',
                    '/roadster-partnership-migration/',
                    '/roi-cms/**',
                    '/services/cso-terms-and-conditions/',
                    '/staged/**',
                    '/testing/**',
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true, // Print removed selectors and processed file names
                develop: true, // Enable while using `gatsby develop`
                // tailwind: true, // Enable tailwindcss support
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
                purgeCSSOptions: {
                    // https://purgecss.com/configuration.html#options
                    safelist: [
                        'row',
                        /col*/,
                        /container*/,
                        'show',
                        'btn',
                        'btn-primary',
                        /btn-*/,
                        /bg-*/,
                        /w-*/,
                        /p-*/,
                        /m-*/,
                        /ml-*/,
                        /mr-*/,
                        /d-*/,
                        /nav-*/,
                        /dropdown-*/,
                        'dropdown',
                        'solutions',
                        'success-services',
                        'about',
                        'curiously-human-ai',
                        'resources',
                        'voice',
                        'cloud',
                        'health',
                        'success',
                    ], // Don't remove this selector
                },
                // More options defined here https://purgecss.com/configuration.html#options
            },
        },
        {
            resolve: `gatsby-plugin-env-variables`,
            options: {
                allowList: [
                    'CAN_ROOT',
                    'NODE_ENV',
                    'BRANCH',
                    'GATSBY_IS_PREVIEW',
                    'LOCALIZE_KEY',
                    'GA_ID',
                    'GTM_ID',
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-K85P2PM',

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: true,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                // defaultDataLayer: { platform: "gatsby" },

                // Specify optional GTM environment details.
                gtmAuth: process.env.GTM_AUTH || '',
                gtmPreview: process.env.GTM_ENV || '',
                // dataLayerName: "YOUR_DATA_LAYER_NAME",

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                routeChangeEventName: 'pageview',
                // Defaults to false
                enableWebVitalsTracking: true,
                // Defaults to https://www.googletagmanager.com
                // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
            },
        },
    ],
};
