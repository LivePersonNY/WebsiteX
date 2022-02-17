import React from 'react';
import { Link, graphql } from 'gatsby';
import Parse from 'html-react-parser';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const BlogIndex = ({
  data,
  pageContext: { nextPagePath, previousPagePath },
}) => {
  const posts = data.posts.nodes.concat(data.postsLegacy.nodes);

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

  return (
    <Layout isHomePage>
      <Seo title="All posts" />
      
      <div className="container blog mt-5">
      
        <div class="row">
          <div className="col-md-4">
            <h1 className="mb-4">Blog</h1>
          </div>
          <div className="col-md-8">
            <div className="row">
              {posts.map((post, index) => {
                const featuredImage = {
                  data: post.featuredImage?.node?.mediaItemUrl || ``,
                  alt: post.featuredImage?.node?.altText || ``,
                };
                const author = post.author.node;
                console.log(author);
                return (
                  <>
                    {index == 3 && <div class="col-lg-12 chat-button"><div id="LP_Embedded_Blog"></div></div>}
                    <div className={`${index === 0 ? `col-lg-12 featured` : `col-lg-6`} mb-4`}>
                      <Link to={post.uri} itemProp="url" className="post-link">
                        <article
                          className="post-list-item shadow-none bg-blue-20 card h-100"
                          itemScope
                          itemType="http://schema.org/Article"
                        >
                          <img src={featuredImage.data} alt={featuredImage.alt} />
                          <div class="card-body">
                            
                            
                            <p className="h6 text-uppercase">{post.seo.opengraphType}</p>
                            <header>
                              <p className="h3 mb-2" itemProp="headline">
                                {Parse(post.title)}
                              </p>
                            </header>
                            <p className="h5">{author.firstName} {author.lastName} &bull; {post.seo.readingTime} minutes</p>
                          </div>
                        </article>
                      </Link>
                    </div>
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
    posts: allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
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
        schema {
          articleType
        }
        }
      }
    }
  }
`;
