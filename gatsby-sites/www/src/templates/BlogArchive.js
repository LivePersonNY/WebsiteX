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
  pageContext: { nextPagePath, previousPagePath, category, pageNumber, postsPerPage, totalPosts, totalPages, categoryLink },
}) => {
  const posts = category ? data.categoryPosts.nodes : data.posts.nodes;
  const categories = data.categories.nodes;
  const sticky = data.sticky;
  
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
  
  let postCounter = 0;
  
  let paginationLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    let pageNumberPath = i > 1 ? i : '';
    let catLink = category ? category.link : "blog/";
    if (i == pageNumber) {
      paginationLinks.push(<li class="page-item active"><a class="page-link" href={`${catLink}${pageNumberPath}`}>{i}</a></li>);
    } else {
      paginationLinks.push(<li class="page-item"><a class="page-link" href={`${catLink}${pageNumberPath}`}>{i}</a></li>);
    }
  }

  return (
    <Layout isHomePage>
      <Helmet
        bodyAttributes={{
          class: 'blog'
        }}
      />
      <Seo title={category ? category.seo.title : `The Conversational, a LivePerson blog | LivePerson`} description={category ? (category.description || category.seo.metaDesc) : null} robots={robots} />
      
      <div className="container blog mt-5">
      
        <div className="row">
          <div className="col-md-4">
            <div className="d-block d-sm-none">{titleElement}</div>
            <p className="h6 text-uppercase desktop-only">Topics</p>
            <ul className="categories desktop-only">
              {categories.map((category, index) => {
                return (<li><a className="link link-mt-small" href={category.link}>{category.name}</a></li>)
              })}
            </ul>
            <div className="dropdown mb-4 mobile-only">
              <button className="btn btn2 btn-outline-secondary dropdown-toggle h6 text-uppercase" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Topics
              </button>
              <ul className="dropdown-menu categories px-3" aria-labelledby="dropdownMenuButton1">
                {categories.map((category, index) => {
                  return (<li><a className="link link-mt-small" href={`${category.link}`}>{category.name}</a></li>)
                })}
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            <div className="d-none d-sm-block">{titleElement}</div>
            <div className="row">
            
              {pageNumber === 1 && !category && (<Post post={sticky} root="/blog" isFeatured={true} />)}
              
              {posts.map((post, index) => {
                
                let tags = [];
                post.tags.nodes.map(function(tag) {
                  tags.push(tag.slug);
                });
                tags = tags.join(' ');
                
                /* {postCounter == 4 && <div className={`col-lg-12 chat-button`}><div id="LP_Embedded_Blog"></div></div>} */
                                
                return (
                    <Post post={post} root="/blog" classes={tags} />
                );
              })}
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                {previousPagePath && (<li class="page-item"><a class="page-link" href={previousPagePath}>Previous</a></li>)}
                
                {paginationLinks.map(function(rawLink) {
                  return rawLink;
                })}
                
                {nextPagePath && (<li class="page-item"><a class="page-link" href={nextPagePath}>Next</a></li>)}
              </ul>
            </nav>
          </div>
        </div>

        
        
        
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!, $categoryLink: String) {
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
    categoryPosts: allWpPost(
      sort: { fields: date, order: DESC }
      limit: $postsPerPage
      skip: $offset
      filter: {
        isSticky: {eq: false}, 
        seo: {metaRobotsNoindex: {eq: "index"}}
        categories: {nodes: {elemMatch: {link: {in: [$categoryLink]}}}}
      }
    ) {
      nodes {
        excerpt
        isSticky
        uri
        slug
        date(formatString: "MMMM DD, YYYY")
        title
        tags {
          nodes {
            slug
          } 
        }
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
    posts: allWpPost(
      sort: { fields: date, order: DESC }
      limit: $postsPerPage
      skip: $offset
      filter: {
        isSticky: {eq: false}, 
        seo: {metaRobotsNoindex: {eq: "index"}}
      }
    ) {
      nodes {
        excerpt
        isSticky
        uri
        slug
        date(formatString: "MMMM DD, YYYY")
        title
        tags {
          nodes {
            slug
          } 
        }
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
    sticky: wpPost(
      isSticky: {eq: true}
    ) {
      excerpt
      isSticky
      uri
      slug
      date(formatString: "MMMM DD, YYYY")
      title
      tags {
        nodes {
          slug
        } 
      }
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
`;
