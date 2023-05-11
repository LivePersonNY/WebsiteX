import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Bio = ({ id, date, readingTime, multiAuthors }) => {
    multiAuthors = multiAuthors || [];

    const {
        users: { authors },
    } = useStaticQuery(graphql`
        query BioQuery {
            # if there was more than one user, this would need to be filtered
            users: allWpUser {
                authors: edges {
                    info: node {
                        slug
                        firstName
                        lastName
                        id
                        databaseId
                        seo {
                            social {
                                linkedIn
                                mySpace
                                soundCloud
                            }
                        }
                        description
                        avatar {
                            url
                        }
                    }
                }
            }
        }
    `);

    let authorBox = authors.map(function ({ info }) {
        return multiAuthors.map(function (authorId) {
            console.log(info, authorId);

            let authorOrder;
            if (id === info.id) {
                authorOrder = 'order-1';
            } else {
                authorOrder = 'order-2';
            }

            if (authorId.uri.indexOf(`/${info.slug}/`) >= 0) {
                console.log(info);

                const author = info;
                const avatarUrl = author?.avatar?.url;

                return (
                    <div
                        className={`bio col-lg-5 mb-4 ${authorOrder}`}
                        key={author.firstName}
                    >
                        {console.log(`${author.firstName} ${author.lastName}`)}
                        <div className="row">
                            <div className="col-lg-10">
                                <div className="bio-img">
                                    <a href={author.seo.social.linkedIn}>
                                        <img
                                            src={avatarUrl}
                                            className="rounded-circle"
                                        />
                                    </a>
                                </div>
                                <div className="bio-body">
                                    <p className="h5">
                                        {author.firstName} {author.lastName}
                                        {author.seo.social.mySpace && (
                                            <>
                                                <br />
                                                <span className="bio-company">
                                                    {author.seo.social.mySpace},{' '}
                                                    {
                                                        author.seo.social
                                                            .soundCloud
                                                    }
                                                </span>
                                            </>
                                        )}
                                    </p>
                                    <p className="h6 date">
                                        {date} &bull; {readingTime} minutes
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        });
    });

    return <div className="row">{authorBox}</div>;
};

export default Bio;
