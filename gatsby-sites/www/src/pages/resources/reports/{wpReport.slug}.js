import * as React from 'react';
import Parser from 'html-react-parser';

import Layout from '../../../components/Layout';
import Seo from '../../../components/Seo';
import Hero from '../../../components/blocks/Hero';
import Bio from '../../../components/Bio';
import AddThis from '../../../components/AddThis';
import { Helmet } from 'react-helmet';
import MktoForm from '../../../components/blocks/MktoForm';
import Breadcrumb from '../../../components/Breadcrumb';

import { Link, graphql } from 'gatsby';

const Report = ({ data: { post } }) => {
    const featuredImage = {
        data: post.featuredImage?.node?.mediaItemUrl || ``,
        alt: post.featuredImage?.node?.altText || ``,
        width: post.featuredImage?.node?.width || ``,
        height: post.featuredImage?.node?.height || ``,
    };

    let canRoot = process.env.CAN_ROOT;
    let canonical = post.seo.canonical || post.link;
    if (canonical.indexOf('http') < 0) canonical = canRoot + canonical;
    canonical = canonical.replace('/blog/reports/', '/resources/reports/');

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
            content: post.seo.canonical,
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
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/">
                        Resource Library
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/reports/">
                        Reports
                    </a>{' '}
                    /{' '}
                </>
            );
        }
        let divider = '/ ';
        if (breadCrumbs.length - 1 === index) {
            divider = '';
        }
        item.url = item.url.replace('/blog/reports/', '/resources/reports/');
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
            <Seo
                title={post.seo.title}
                description={post.seo.metaDesc}
                meta={meta}
                canonical={canonical}
                robots={robots.join(', ')}
                schema={post.seo.schema.raw}
            />
            {Parser(post.content)}
            <Breadcrumb breadCrumbs={breadCrumbs} />
        </Layout>
    );
};
export default Report;

export const pageQuery = graphql`
    query ReportById($id: String!) {
        post: wpReport(id: { eq: $id }) {
            id
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
                breadcrumbs {
                    text
                    url
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
