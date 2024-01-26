import * as React from 'react';
import { graphql } from 'gatsby';

import Resources from '../../templates/Resources';

const ResourceIndex = function (props) {
    const successStories = props.data.successStories.nodes;
    const news = props.data.news.nodes;
    const reports = props.data.reports.nodes;
    const webinars = props.data.webinars.nodes;

    let items = successStories.concat(news).concat(reports).concat(webinars);

    items.sort(function (a, b) {
        return Date.parse(b.date) - Date.parse(a.date);
    });

    // console.log(items);

    let meta = [
        {
            property: `og:title`,
            content: `Conversational AI Resources | LivePerson`,
        },
        {
            property: `og:description`,
            content: `Explore LivePerson's library of conversational AI resources, from in-depth guides to playbooks, case studies, webinars, and more.`,
        },
        {
            name: `type`,
            property: `og:type`,
            content: `website`,
        },
        {
            name: `author`,
            property: `og:author`,
            content: `LivePerson Team`,
        },
    ];

    return (
        <Resources
            active="all"
            items={items}
            title="Conversational AI Resources | LivePerson"
            description="Explore LivePerson's library of conversational AI resources, from in-depth guides to playbooks, case studies, webinars, and more."
            canonical="https://www.liveperson.com/resources/"
            meta={meta}
        />
    );
};
export default ResourceIndex;

export const itemsQuery = graphql`
    query {
        news: allWpNews(sort: { fields: [date], order: [DESC] }) {
            nodes {
                uri
                slug
                title
                nodeType
                date
                tags {
                    nodes {
                        slug
                    }
                }
                featuredImage {
                    node {
                        mediaItemUrl
                        srcSet
                        width
                        height
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
        successStories: allWpSuccess(sort: { fields: [date], order: [DESC] }) {
            nodes {
                uri
                slug
                title
                nodeType
                date
                tags {
                    nodes {
                        slug
                    }
                }
                featuredImage {
                    node {
                        mediaItemUrl
                        srcSet
                        width
                        height
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
        reports: allWpReport(sort: { fields: [date], order: [DESC] }) {
            nodes {
                uri
                slug
                title
                date
                tags {
                    nodes {
                        slug
                    }
                }
                nodeType
                featuredImage {
                    node {
                        mediaItemUrl
                        srcSet
                        width
                        height
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
        webinars: allWpWebinar(sort: { fields: [date], order: [DESC] }) {
            nodes {
                uri
                slug
                title
                date
                tags {
                    nodes {
                        slug
                    }
                }
                nodeType
                featuredImage {
                    node {
                        mediaItemUrl
                        srcSet
                        width
                        height
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
