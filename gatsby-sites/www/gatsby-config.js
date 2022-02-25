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
        generateMatchPathRewrites: false
      }
    },
    // process.env.NO_INDEX,
    // `gatsby-plugin-no-index`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/resources/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `${process.env.WP_HOST || 'https://edit.liveperson.com'}/graphql`,
        debug: {
          preview: true,
        },
        production: {
          allow404Images: true
        },
        type: {
          MediaItem: {
            localFile: {
              excludeByMimeTypes: [`image/png`, `image/jpeg`, `application/json`, `image/svg`, `image/jpg`]
            },
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-wordpress-menus',
      options: {
        wordpressUrl: process.env.WP_HOST || 'https://edit.liveperson.com',
        languages: ['en'],
        enableWpml: false,
        allowCache: false,
        maxCacheDurationSeconds: 120,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
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
            /d-*/,
            /nav-*/,
            'solutions',
            'success-services',
            'about',
            'curiously-human-ai',
            'resources',
            'voice',
            'cloud',
            'health',
            'success'
          ], // Don't remove this selector
        },
        // More options defined here https://purgecss.com/configuration.html#options
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["CAN_ROOT"]
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-K85P2PM",
    
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: true,
    
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
    
        // Specify optional GTM environment details.
        gtmAuth: process.env.GTM_AUTH || "",
        gtmPreview: process.env.GTM_ENV || "",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
    
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "pageview",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
  ],
};
