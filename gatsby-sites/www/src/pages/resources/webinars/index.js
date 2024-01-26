import * as React from 'react';
import { graphql } from 'gatsby';

import Resources from '../../../templates/Resources';

const WebinarIndex = function (props) {
    const items = props.data.items.nodes;

    // console.log(items);

    let meta = [
        {
            property: `og:title`,
            content: `Conversational AI Webinars | LivePerson`,
        },
        {
            property: `og:description`,
            content: `Pull up a chair & learn from the experts in these conversational AI webinars, where business leaders walk you through challenges & successes.`,
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
            active="webinar"
            items={items}
            kicker="Webinar"
            title="Conversational AI Webinars | LivePerson"
            description="Pull up a chair & learn from the experts in these conversational AI webinars, where business leaders walk you through challenges & successes."
            canonical="https://www.liveperson.com/resources/webinars/"
            meta={meta}
        />
    );
};
export default WebinarIndex;

export const itemsQuery = graphql`
    query {
        items: allWpWebinar(sort: { fields: [date], order: [DESC] }) {
            nodes {
                uri
                title
                slug
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
