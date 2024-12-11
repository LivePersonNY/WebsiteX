import * as React from 'react';
import { graphql } from 'gatsby';

import Resources from '../../../templates/Resources';

const WorkshopIndex = function (props) {

    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    const items = props.data.items.nodes;

    // console.log(items);

    let meta = [
        {
            property: `og:title`,
            content: `Conversational AI Workshops | LivePerson`,
        },
        {
            property: `og:description`,
            content: ``,
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
            active="workshop"
            items={items}
            kicker="Workshop"
            title="Conversational AI Workshops | LivePerson"
            description=""
            canonical="https://www.liveperson.com/resources/workshops/"
            meta={meta}
        />
    );
};
export default WorkshopIndex;

export const itemsQuery = graphql`
    query {
        items: allWpWorkshop(sort: { fields: [date], order: [DESC] }) {
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
