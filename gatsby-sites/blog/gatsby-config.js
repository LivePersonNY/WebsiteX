require("dotenv").config({
  path: '../../.env',
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
 plugins: [
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
     url: (process.env.WP_HOST || 'http://3.221.150.34') + '/graphql',
     debug: {
       preview: true,
     },
   },
 },
 {
   resolve: "gatsby-source-wordpress-menus",
   options: {
     wordpressUrl: process.env.WP_HOST || 'http://3.221.150.34',
     languages: ["en"],
     enableWpml: false,
     allowCache: false,
     maxCacheDurationSeconds: 60 * 60 * 24
   },
 },
 `gatsby-transformer-sharp`,
 `gatsby-plugin-sharp`,
 'gatsby-plugin-sass',
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
       safelist: ['show', 'btn', 'btn-primary'], // Don't remove this selector
     }
     // More options defined here https://purgecss.com/configuration.html#options
   },
 },
  ],
}
