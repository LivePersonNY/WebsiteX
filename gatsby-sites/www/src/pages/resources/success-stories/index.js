import * as React from 'react';
import { graphql } from 'gatsby';

import Resources from '../../../templates/Resources';

const SuccessIndex = function (props) {
    const items = props.data.items.nodes;

    // console.log(items);

    let meta = [
        {
            property: `og:title`,
            content: `Conversational AI Case Studies | LivePerson`,
        },
        {
            property: `og:description`,
            content: `Browse conversational AI case studies on how businesses have worked with LivePerson to boost CSAT, streamline operations, & scale engagement.`,
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
            active="success"
            items={items}
            kicker="Case study"
            slug="success-stories"
            title="Conversational AI Case Studies | LivePerson"
            description="Browse conversational AI case studies on how businesses have worked with LivePerson to boost CSAT, streamline operations, & scale engagement."
            canonical="https://www.liveperson.com/resources/success-stories/"
            meta={meta}
        />
    );
};
export default SuccessIndex;

export const itemsQuery = graphql`
    query {
        items: allWpSuccess(sort: { fields: [date], order: [DESC] }) {
            nodes {
                uri
                title
                nodeType
                slug
                blogContentType
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
