import * as React from 'react';
import Parser from 'html-react-parser';

import Layout from '../../../components/Layout';
import Seo from '../../../components/Seo';
import Hero from '../../../components/blocks/Hero';
import Bio from '../../../components/Bio';
import AddThis from '../../../components/AddThis';
import { Helmet } from 'react-helmet';
import MktoForm from '../../../components/blocks/MktoForm';

import { Link, graphql } from 'gatsby';

const News = ({ data: { post } }) => {
    const featuredImage = {
        data: post.featuredImage?.node?.mediaItemUrl || ``,
        alt: post.featuredImage?.node?.altText || ``,
        width: post.featuredImage?.node?.width || ``,
        height: post.featuredImage?.node?.height || ``,
    };

    let canRoot = process.env.CAN_ROOT;
    let canonical = post.seo.canonical || post.link;
    if (canonical.indexOf('http') < 0) canonical = canRoot + canonical;
    canonical = canonical.replace('/blog/news/', '/resources/news/');

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
            content: post.seo.opengraphImage
                ? post.seo.opengraphImage.mediaItemUrl
                : featuredImage.data,
        },
        {
            property: `twitter:image`,
            content:
                (post.seo.twitterImage
                    ? post.seo.twitterImage.mediaItemUrl
                    : ``) ||
                (post.seo.opengraphImage
                    ? post.seo.opengraphImage.mediaItemUrl
                    : featuredImage.data) ||
                ``,
        },
        {
            property: `og:type`,
            content:
                post.seo.opengraphType ||
                post.seo.schema.articleType ||
                `website`,
        },
        {
            property: `og:url`,
            content: post.seo.canonical,
        },
    ];

    let robots = [post.seo.metaRobotsNoindex, post.seo.metaRobotsNofollow];

    return (
        <Layout>
            <Helmet
                bodyAttributes={{
                    class: 'resources news item',
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
                        <div className="post-container">
                            <p className="h6 text-uppercase">In the News</p>
                            <h1>{post.title}</h1>
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
                            {Parser(post.content)}
                            <hr className="mb-4" />
                            <AddThis url={canonical} type="related" />
                        </div>
                    </div>
                </div>
            </div>
            <div id="form">
                <MktoForm
                    formId="3733"
                    backgroundColor="bg-neutral-96"
                    header="Let's put LivePerson to work for you"
                    thankyou="Thanks! Someone from our team will get back to you soon."
                />
            </div>
        </Layout>
    );
};
export default News;

export const pageQuery = graphql`
    query NewsById($id: String!) {
        post: wpNews(id: { eq: $id }) {
            id
            excerpt
            content
            title
            link
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
            }
            featuredImage {
                node {
                    altText
                    mediaItemUrl
                    width
                    height
                }
            }
        }
    }
`;
