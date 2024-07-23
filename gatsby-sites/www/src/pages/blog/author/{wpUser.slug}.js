import * as React from 'react';
import Parser from 'html-react-parser';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';
import Layout from '../../../components/Layout';
import NotFoundPage from '../../404';
import Seo from '../../../components/Seo';

const Author = ({ data: { wpUser } }) => {
    let canRoot = process.env.CAN_ROOT;
    let canonical = wpUser.seo.canonical;
    if (canonical.indexOf('http') < 0) canonical = canRoot + canonical;

    let schemaJson = JSON.parse(wpUser.seo.schema.raw);
    let jobTitle = schemaJson['@graph'][4]['jobTitle'];

    let meta = [
        {
            name: `twitter:title`,
            content: wpUser.seo.title || ``,
        },
        {
            name: `twitter:description`,
            content: wpUser.seo.metaDesc || ``,
        },
        {
            property: `og:title`,
            content: wpUser.seo.title || ``,
        },
        {
            property: `og:description`,
            content: wpUser.seo.metaDesc || ``,
        },
        {
            property: `og:image`,
            content: wpUser.avatar.url || ``,
        },
        {
            property: `twitter:image`,
            content: wpUser.avatar.url || ``,
        },
        {
            property: `og:type`,
            content: `article`,
        },
        {
            property: `og:url`,
            content: wpUser.seo.canonical,
        },
    ];

    return (
        <Layout>
            <Seo
                title={wpUser.seo.title}
                description={wpUser.seo.metaDesc}
                meta={meta}
                canonical={canonical}
                robots=""
                schema={wpUser.seo.schema.raw}
            />
            <div data-localize="false" className="pane comp-exec-card undefined">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="comp-exec-card-container bg-neutral-96">
                                <div className="row">
                                    <div className="col-lg-3 offset-lg-1 text-center">
                                        <img src={wpUser.avatar.url} alt="" loading="eager" style={{ width: '100%' }} />
                                    </div>
                                    <div className="col-lg-6 offset-lg-1">
                                        <h2 className="card1">{wpUser.name}</h2>
                                        <p className="body2">{jobTitle}</p>
                                        <a
                                            href={wpUser.seo.social.linkedIn}
                                            className="btn btn2 btn-outline-secondary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Connect with {wpUser.firstName}
                                        </a>
                                        <p className="subtitle1" data-tag="br split">
                                            {wpUser.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default Author;

export const pageQuery = graphql`
    query MyQuery($id: String!) {
        wpUser(id: { eq: $id }) {
            id
            uri
            slug
            name
            firstName
            description
            avatar {
                url
            }
            seo {
                schema {
                    raw
                }
                canonical
                metaDesc
                title
                social {
                    linkedIn
                }
            }
        }
    }
`;
