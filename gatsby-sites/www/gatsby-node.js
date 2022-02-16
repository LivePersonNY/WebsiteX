const path = require(`path`);
const chunk = require(`lodash/chunk`);

const redirectManifest = require("./redirects.json");
const oldPages = require("./old-pages.json");

const fetch = require(`node-fetch`);

const fs = require('fs');

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// This is a simple debugging tool
// dd() will prettily dump to the terminal and kill the process
// const { dd } = require(`dumper.js`)

/**
 * exports.createPages is a built-in Gatsby Node API.
 * It's purpose is to allow you to create pages for your site! 💡
 *
 * See https://www.gatsbyjs.com/docs/node-apis/#createPages for more info.
 */
exports.createPages = async (props) => {
  const { createRedirect, createPage } = props.actions;
  const { data: wpSettings } = await props.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
        seo {
          redirects {
            format
            origin
            target
            type
          }
        }
      }
    }
  `);
    
  Object.keys(oldPages).forEach(function(domain) {
    oldPages[domain].forEach(function(item) {
      fs.exists(`./${item}/index.html`, async function(exists) {
        if (!exists) return;
        const pageData = await fetch(`https://${domain}/${item}`);
        fs.mkdir(`./static/${item}`, { recursive: true }, async function(err) {
          if (err) console.log(err);
          else {
            fs.writeFile(`./static/${item}/index.html`, await pageData.text(), function(e) {
              if (e) {
                console.log("Error writing file", e);
              }
            });
          }
        });
      });
    });
  });
  
  /*const webFlowPostRequest = await fetch(`https://api.webflow.com/collections/61e8954616f792b504940141/items`, {
    headers: {
      "Authorization": "Bearer ab169568a95cb58067d4c936d6e932e805122c5296dbf7c75aa6d2b032611b23",
      "accept-version": "1.0.0"
    }
  });
  
  const webFlowPosts = await webFlowPostRequest.json();
  //console.log(webFlowPosts);
  webFlowPosts.items.forEach(function(post) {
    createPage({
      path: `blog/${post.slug}`,
      component: path.resolve('./src/templates/BlogPost.js'),
      context: {
        post: post
      }
    });
  });*/
  
  
  /*fs.rm(`./static/`, {
    recursive: true
  }, function(err) {
    if (err) console.log(err);
    fs.mkdir(`./static`, function(err) {
      if (err) console.log(err);
      Object.keys(oldPages).forEach(function(domain) {
        oldPages[domain].forEach(async function(item) {
          const pageData = await fetch(`https://lpsn-staging.webflow.io/${item}`);
          fs.mkdir(`./static/${item}`, { recursive: true }, function(err) {
            if (err) console.log(err);
          });
          fs.writeFile(`./static/${item}/index.html`, await pageData.text(), function(e) {
            if (e) {
              console.log("Error writing file", e);
            }
          });
        });
      });
    });
  });*/
  
 
  
  const { redirects } = JSON.parse(JSON.stringify(wpSettings.wp.seo));
  if (redirects) {
      redirects.forEach((redirect) => {
      createRedirect({
        fromPath: '/'+redirect.origin,
        toPath: redirect.target == '/' ? '/' : (redirect.target.indexOf("http") >= 0 ? redirect.target : '/'+redirect.target),
        redirectInBrowser: true,
        isPermanent: redirect.type == 301,
      });
      console.log("redirecting " + '/'+redirect.origin + " --> " + (redirect.target == '/' ? '/' : (redirect.target.indexOf("http") >= 0 ? redirect.target : '/'+redirect.target)));
    });
  }
  
  Object.keys(redirectManifest.redirects).forEach(function(item) {
    //console.log("redirecting " + item + " --> " + redirectManifest.redirects[item]);
    let target = redirectManifest.redirects[item];
    if (target.indexOf("http") < 0) target = "https://www.liveperson.com" + target;
    createRedirect({
      fromPath: item,
      toPath: target,
      redirectInBrowser: true,
      isPermanent: true
    });
  });
  
  const posts = await getPosts(props);
  
  if (!posts.length) {
    return;
  }
  
  await createIndividualBlogPostPages({ posts, props });
  
}

/**
 * This function creates all the individual blog pages in this site
 */
const createIndividualBlogPostPages = async ({ posts, props }) =>
  Promise.all(
    
    
    
    posts.map(({ previous, post, next }) =>
      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      props.actions.createPage({
        // Use the WordPress uri as the Gatsby page path
        // This is a good idea so that internal links and menus work 👍
        path: post.uri,

        // use the blog post template as the page component
        component: path.resolve(`./src/templates/BlogPost.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // we need to add the post id here
          // so our blog post template knows which blog post
          // the current page is (when you open it in a browser)
          id: post.id,

          // We also use the next and previous id's to query them and add links!
          previousPostId: previous ? previous.id : null,
          nextPostId: next ? next.id : null,
        },
      })
    )
  );

/**
 * This function creates all the individual blog pages in this site
 */
async function createBlogPostArchive({ posts, props }) {
  const graphqlResult = await props.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `);

  const { postsPerPage } = graphqlResult.data.wp.readingSettings;

  const postsChunkedIntoArchivePages = chunk(posts, postsPerPage);
  const totalPages = postsChunkedIntoArchivePages.length;

  return Promise.all(
    postsChunkedIntoArchivePages.map(async (_posts, index) => {
      const pageNumber = index + 1;

      const getPagePath = (page) => {
        if (page > 0 && page <= totalPages) {
          // Since our homepage is our blog page
          // we want the first page to be "/" and any additional pages
          // to be numbered.
          // "/blog/2" for example
          return page === 1 ? `/blog/` : `/blog/${page}`;
        }

        return null;
      };

      // createPage is an action passed to createPages
      // See https://www.gatsbyjs.com/docs/actions#createPage for more info
      await props.actions.createPage({
        path: getPagePath(pageNumber),

        // use the blog post archive template as the page component
        component: path.resolve(`./src/templates/blog-post-archive.js`),

        // `context` is available in the template as a prop and
        // as a variable in GraphQL.
        context: {
          // the index of our loop is the offset of which posts we want to display
          // so for page 1, 0 * 10 = 0 offset, for page 2, 1 * 10 = 10 posts offset,
          // etc
          offset: index * postsPerPage,

          // We need to tell the template how many posts to display too
          postsPerPage,

          nextPagePath: getPagePath(pageNumber + 1),
          previousPagePath: getPagePath(pageNumber - 1),
        },
      });
    })
  );
}

/**
 * This function queries Gatsby's GraphQL server and asks for
 * All WordPress blog posts. If there are any GraphQL error it throws an error
 * Otherwise it will return the posts 🙌
 *
 * We're passing in the utilities we got from createPages.
 * So see https://www.gatsbyjs.com/docs/node-apis/#createPages for more info!
 */
async function getPosts({ graphql, reporter }) {
  const graphqlResult = await graphql(/* GraphQL */ `
    query WpPosts {
      # Query all WordPress blog posts sorted by date
      allWpPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }

          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
          }

          next {
            id
          }
        }
      },
      allWpLegacyPost(sort: { fields: [date], order: DESC }) {
        edges {
          previous {
            id
          }
      
          # note: this is a GraphQL alias. It renames "node" to "post" for this query
          # We're doing this because this "node" is a post! It makes our code more readable further down the line.
          post: node {
            id
            uri
          }
      
          next {
            id
          }
        }
      }
    }
  `);

  if (graphqlResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      graphqlResult.errors
    );
    return;
  }

  return graphqlResult.data.allWpPost.edges.concat(graphqlResult.data.allWpLegacyPost.edges);
}


