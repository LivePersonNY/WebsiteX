import * as React from 'react';
import { graphql } from 'gatsby';

import Resources from '../../../templates/Resources';

const WebinarIndex = function (props) {
    const items = props.data.items.nodes;

    console.log(items);

    return <Resources active="webinar" items={items} kicker="Webinar" />;
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
