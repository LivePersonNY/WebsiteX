import * as React from 'react';
import { graphql } from 'gatsby';

import Resources from '../../../templates/Resources';

const NewsIndex = function (props) {
    const items = props.data.items.nodes;

    // console.log(items);

    let meta = [
        {
            property: `og:title`,
            content: `Conversational AI News | LivePerson`,
        },
        {
            property: `og:description`,
            content: `Watch how LivePerson consistently makes the conversational AI news with it's industry-leading conversational AI platform and tools.`,
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
            active="news"
            items={items}
            kicker="In the News"
            title="Conversational AI News | LivePerson"
            description="Watch how LivePerson consistently makes the conversational AI news with it's industry-leading conversational AI platform and tools."
            canonical="https://www.liveperson.com/resources/news/"
            meta={meta}
        />
    );
};
export default NewsIndex;

export const itemsQuery = graphql`
    query {
        items: allWpNews(sort: { fields: [date], order: [DESC] }) {
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
