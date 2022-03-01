import React from 'react';
import { Link, graphql } from 'gatsby';
import Parse from 'html-react-parser';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { Helmet } from 'react-helmet';

import Post from '../components/Post';

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath, category },
}) => {
  const posts = data.posts.nodes;
  const categories = data.categories.nodes;
  
  let robots = [
    category ? category.seo.metaRobotsNoindex : `index`,
    category ? category.seo.metaRobotsNofollow : `follow`
  ];
  
  if (!posts.length) {
    return (
      <Layout isHomePage>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add posts to your WordPress site and they'll
          appear here!
        </p>
      </Layout>
    );
  }
  
  let titleElement = (
    <>
      {!category && <h1 className="mb-4">Blog</h1>}
      {category && <h1 className="mb-4">{category.name} <span className="d-block"><a href="/blog" className="return-link link">Blog</a></span></h1>}
    </>
  );

  return (
    <Layout isHomePage>
      <Helmet
        bodyAttributes={{
          class: 'blog'
        }}
      />
      <Seo title={category ? category.seo.title : `The Conversational, a LivePerson blog | LivePerson`} description={category ? (category.description || category.seo.metaDesc) : null} robots={robots} />
      
      <div className="container blog mt-5">
      
        <div class="row">
          <div className="col-md-4">
            <div className="d-block d-sm-none">{titleElement}</div>
            <p class="h6 text-uppercase">Topics</p>
            <ul className="categories">
              {categories.map((category, index) => {
                return (<li><a className="link link-mt-small" href={category.link}>{category.name}</a></li>)
              })}
            </ul>
          </div>
          <div className="col-md-8">
            <div className="d-none d-sm-block">{titleElement}</div>
            <div className="row">
              
              {posts.map((post, index) => {
                
                
                let isInCategory = false || !category;
                
                if (category) {
                  post.categories.nodes.map((_category) => {
                    if (category.id == _category.id) isInCategory = true;
                  });
                }
                
                return isInCategory && post.seo.metaRobotsNoindex == 'index' && (
                  <>
                    {index == 3 && <div class="col-lg-12 chat-button"><div id="LP_Embedded_Blog"></div></div>}
                    <Post post={post} />
                  </>
                );
              })}
            </div>
          </div>
        </div>

        {previousPagePath && (
          <>
            <Link to={previousPagePath}>Previous page</Link>
            <br />
          </>
        )}
        {nextPagePath && <Link to={nextPagePath}>Next page</Link>}
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    categories: allWpCategory {
      nodes {
        id
        name
        link
        seo {
          metaDesc
          metaRobotsNofollow
          metaRobotsNoindex
          metaKeywords
          title
        }
      }
    }
    posts: allWpPost(
      sort: { fields: [isSticky, date], order: [DESC, DESC] }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        isSticky
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        categories {
          nodes {
            name
            id
          }
        }
        excerpt
        featuredImage {
        node {
          altText
          mediaItemUrl
        }
        }
        author {
        node {
          id
          firstName
          lastName
          url
          avatar {
          url
          }
        }
        }
        seo {
        readingTime
        opengraphType
        metaRobotsNoindex
        schema {
          articleType
        }
        }
      }
    }
  }
`;
