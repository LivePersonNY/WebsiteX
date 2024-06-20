import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../../components/Layout';
import Seo from '../../../components/Seo';
import Parser from 'html-react-parser';
import Breadcrumb from '../../../components/Breadcrumb';

const Webinar = ({ data: { page } }) => {
    let canRoot = process.env.CAN_ROOT;
    let canonical = page.seo.canonical || page.link;
    canonical = canRoot + canonical;
    canonical = canonical.replace('/blog/webinars/', '/resources/webinars/');

    let meta = [
        {
            name: `twitter:title`,
            content: page.seo.title || ``,
        },
        {
            name: `twitter:description`,
            content: page.seo.twitterDescription || page.seo.metaDesc || ``,
        },
        {
            property: `og:title`,
            content: page.seo.title || ``,
        },
        {
            property: `og:description`,
            content: page.seo.opengraphDescription || page.seo.metaDesc || ``,
        },
        {
            property: `og:image`,
            content: page.seo.opengraphImage ? page.seo.opengraphImage.mediaItemUrl : ``,
        },
        {
            property: `twitter:image`,
            content:
                (page.seo.twitterImage ? page.seo.twitterImage.mediaItemUrl : ``) ||
                (page.seo.opengraphImage ? page.seo.opengraphImage.mediaItemUrl : ``) ||
                ``,
        },
        {
            property: `og:type`,
            content: page.seo.opengraphType || `website`,
        },
        {
            property: `og:url`,
            content: canonical,
        },
    ];

    let robots = [page.seo.metaRobotsNoindex, page.seo.metaRobotsNofollow];

    let breadCrumbs = page.seo.breadcrumbs;
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
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/webinars/">
                        Webinars
                    </a>{' '}
                    /{' '}
                </>
            );
        }
        let divider = '/ ';
        if (breadCrumbs.length - 1 === index) {
            divider = '';
        }
        item.url = item.url.replace('/blog/webinars/', '/resources/webinars/');
        return (
            <>
                <a className="breadcrumb-link link link-no-arrow" key={index} href={item.url}>
                    {item.text}
                </a>{' '}
                {divider}
            </>
        );
    });

    if (!page) return 'The slug does not exist in the CMS';
    return (
        <Layout>
            <Seo
                title={page.seo.title}
                description={page.seo.metaDesc}
                meta={meta}
                canonical={canonical}
                robots={robots.join(', ')}
                schema={page.seo.schema.raw}
            />
            {Parser(page.content)}
            <Breadcrumb breadCrumbs={breadCrumbs} />
        </Layout>
    );
};

export default Webinar;

export const pageQuery = graphql`
    query ($id: String!) {
        page: wpWebinar(id: { eq: $id }) {
            id
            content
            title
            link
            seo {
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
                readingTime
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
        }
    }
`;
