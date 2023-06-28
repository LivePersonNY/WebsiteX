import * as React from 'react';
import { graphql } from 'gatsby';

import Resources from '../../../templates/Resources';

const ReportsIndex = function (props) {
    const items = props.data.items.nodes;

    console.log(items);

    return <Resources active="reports" items={items} kicker="Report" />;
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
