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
                        uri
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

    const renderAuthor = function (author) {
        let authorOrder;
        if (id === author.id) {
            authorOrder = 'order-1';
        } else {
            authorOrder = 'order-2';
        }

        const avatarUrl = author?.avatar?.url;

        return (
            <div className={`bio col-lg-5 mb-4 ${authorOrder}`} key={author.id}>
                <div className="row">
                    <div className="col-lg-10">
                        <div className="bio-img">
                            <a href={author.uri}>
                                <img src={avatarUrl} className="rounded-circle" width="52" height="52" loading="eager" />
                            </a>
                        </div>
                        <div className="bio-body">
                            <p className="h5">
                                <a href={author.uri}>
                                    {author.firstName} {author.lastName}
                                </a>
                                {author.seo.social.mySpace && (
                                    <>
                                        <br />
                                        <span className="bio-company">
                                            {author.seo.social.mySpace}, {author.seo.social.soundCloud}
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
    };

    let matchedAuthors = [];

    authors.forEach(function ({ info }) {
        multiAuthors.forEach(function (authorId) {
            if (authorId.uri && authorId.uri.indexOf(`/${info.slug}/`) >= 0) {
                matchedAuthors.push(info);
            }
        });
    });

    if (id) {
        const primaryAuthor = authors.find(function ({ info }) {
            return info.id === id;
        });

        const hasPrimaryAuthor = matchedAuthors.some(function (author) {
            return author.id === id;
        });

        if (primaryAuthor && !hasPrimaryAuthor) {
            matchedAuthors.push(primaryAuthor.info);
        }
    }

    let authorBox = matchedAuthors.map(renderAuthor);

    return <div className="row">{authorBox}</div>;
};

export default Bio;
