import * as React from 'react';
import Parser from 'html-react-parser';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import Bio from '../components/Bio';
import AddThis from '../components/AddThis';
import { Helmet } from 'react-helmet';
import MktoForm from '../components/blocks/MktoForm';
import NotFoundPage from '../pages/404';

import { Link, graphql } from 'gatsby';
import Breadcrumb from '../components/Breadcrumb';

const BlogPost = ({ data: { previous, next, post, staged } }) => {
    if (staged && process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    post = post || staged;

    const featuredImage = {
        data: post.featuredImage?.node?.mediaItemUrl || ``,
        alt: post.featuredImage?.node?.altText || ``,
        width: post.featuredImage?.node?.width || ``,
        height: post.featuredImage?.node?.height || ``,
    };

    let canRoot = process.env.CAN_ROOT;
    let canonical = post.seo.canonical || post.link;
    if (canonical.indexOf('http') < 0) canonical = canRoot + canonical;

    let meta = [
        {
            name: `twitter:title`,
            content: post.seo.title || ``,
        },
        {
            name: `twitter:description`,
            content: post.seo.twitterDescription || post.seo.metaDesc || ``,
        },
        {
            property: `og:title`,
            content: post.seo.title || ``,
        },
        {
            property: `og:description`,
            content: post.seo.opengraphDescription || post.seo.metaDesc || ``,
        },
        {
            property: `og:image`,
            content: post.seo.opengraphImage ? post.seo.opengraphImage.mediaItemUrl : featuredImage.data,
        },
        {
            property: `twitter:image`,
            content:
                (post.seo.twitterImage ? post.seo.twitterImage.mediaItemUrl : ``) ||
                (post.seo.opengraphImage ? post.seo.opengraphImage.mediaItemUrl : featuredImage.data) ||
                ``,
        },
        {
            property: `og:type`,
            content: post.seo.opengraphType || post.seo.schema.articleType || `website`,
        },
        {
            property: `og:url`,
            content: canonical,
        },
    ];

    let robots = [post.seo.metaRobotsNoindex, post.seo.metaRobotsNofollow];

    let breadCrumbs = post.seo.breadcrumbs;
    breadCrumbs = breadCrumbs.map((item, index) => {
        if (index === 0) {
            return (
                <>
                    <a className="breadcrumb-link link link-no-arrow" href="https://www.liveperson.com/">
                        Home
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/blog/">
                        Blog
                    </a>{' '}
                    /{' '}
                </>
            );
        }
        let divider = '/';
        if (breadCrumbs.length - 1 === index) {
            divider = '';
        }
        return (
            <>
                <a className="breadcrumb-link link link-no-arrow" key={index} href={item.url}>
                    {item.text}
                </a>{' '}
                {divider}
            </>
        );
    });

    return (
        <Layout>
            <Helmet
                bodyAttributes={{
                    class: 'blog blog-post',
                }}
            />
            <Seo
                title={post.title}
                description={post.seo.metaDesc}
                meta={meta}
                canonical={canonical}
                robots={robots.join(', ')}
                schema={post.seo.schema.raw}
            />
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-xl-10">
                        <a href="/blog/" className="return-link link link-mt-large">
                            Blog
                        </a>
                        <div className="post-container">
                            <p className="h6 text-uppercase">{post.blogContentType || post.seo.opengraphType}</p>
                            <h1>{post.title}</h1>
                            <p className="h3 mb-4">{Parser(post.excerpt)}</p>
                            <Bio
                                id={post.author.node.id}
                                date={post.date}
                                readingTime={post.seo.readingTime}
                                multiAuthors={post.postAuthors.nodes}
                            />
                            <img
                                className="my-4 rounded-3 w-100"
                                src={featuredImage.data}
                                alt={featuredImage.alt}
                                width={featuredImage.width}
                                height={featuredImage.height}
                                loading="lazy"
                            />
                            <AddThis url={canonical} type="share" />
                            <hr className="mb-4" />
                            {post.content && Parser(post.content)}
                            <hr className="mb-4" />
                            <AddThis url={canonical} type="related" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="form">
                <MktoForm
                    formId={post.blogFormId || '3733'}
                    backgroundColor="bg-neutral-96"
                    header={post.blogFormHeader || "Let's put LivePerson to work for you"}
                    thankyou={post.blogFormThankYou || 'Thanks! Someone from our team will get back to you soon.'}
                />
            </div>
            <Breadcrumb breadCrumbs={breadCrumbs} />
        </Layout>
    );
};
export default BlogPost;

export const pageQuery = graphql`
    query BlogPostById($id: String!, $previousPostId: String, $nextPostId: String) {
        post: wpPost(id: { eq: $id }) {
            id
            excerpt
            content
            title
            link
            slug
            blogContentType
            postAuthors {
                nodes {
                    uri
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
                canonical
                cornerstone
                focuskw
                fullHead
                metaDesc
                metaKeywords
                metaRobotsNofollow
                metaRobotsNoindex
                opengraphAuthor
                opengraphDescription
                opengraphModifiedTime
                opengraphPublishedTime
                opengraphPublisher
                opengraphSiteName
                opengraphTitle
                opengraphType
                opengraphUrl
                title
                twitterDescription
                twitterTitle
                opengraphImage {
                    mediaItemUrl
                }
                schema {
                    articleType
                    raw
                }
                breadcrumbs {
                    text
                    url
                }
            }
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
                node {
                    altText
                    mediaItemUrl
                    width
                    height
                }
            }
        }
        staged: wpStagedPost(id: { eq: $id }) {
            id
            excerpt
            content
            title
            link
            slug
            blogFormHeader
            blogFormId
            blogFormThankYou
            postAuthors {
                nodes {
                    uri
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
                canonical
                cornerstone
                focuskw
                fullHead
                metaDesc
                metaKeywords
                metaRobotsNofollow
                metaRobotsNoindex
                opengraphAuthor
                opengraphDescription
                opengraphModifiedTime
                opengraphPublishedTime
                opengraphPublisher
                opengraphSiteName
                opengraphTitle
                opengraphType
                opengraphUrl
                title
                twitterDescription
                twitterTitle
                opengraphImage {
                    mediaItemUrl
                }
                schema {
                    articleType
                    raw
                }
                breadcrumbs {
                    text
                    url
                }
            }
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
                node {
                    altText
                    mediaItemUrl
                    width
                    height
                }
            }
        }
        previous: wpPost(id: { eq: $previousPostId }) {
            uri
            title
        }
        next: wpPost(id: { eq: $nextPostId }) {
            uri
            title
        }
    }
`;
