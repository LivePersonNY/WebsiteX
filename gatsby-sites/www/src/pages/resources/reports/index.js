import * as React from 'react';
import { graphql } from 'gatsby';

import Resources from '../../../templates/Resources';

const ReportsIndex = function (props) {
    const items = props.data.items.nodes;

    // console.log(items);

    let meta = [
        {
            property: `og:title`,
            content: `Conversational AI Reports | LivePerson`,
        },
        {
            property: `og:description`,
            content: `Discover in-depth conversational AI reports and guides on how to use AI-powered engagement tools to your benefit in business.`,
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
            active="reports"
            items={items}
            kicker="Report"
            title="Conversational AI Reports | LivePerson"
            description="Discover in-depth conversational AI reports and guides on how to use AI-powered engagement tools to your benefit in business."
            canonical="https://www.liveperson.com/resources/reports/"
            meta={meta}
        />
    );
};
export default ReportsIndex;

export const itemsQuery = graphql`
    query {
        items: allWpReport(sort: { fields: [date], order: [DESC] }) {
            nodes {
                uri
                slug
                title
                nodeType
                date(formatString: "MMMM DD, YYYY")
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
    }
`;
