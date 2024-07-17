import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Parse from 'html-react-parser';

export default function Post({ post, kicker, root, classes, isFeatured, index }) {
    const featuredImage = {
        data: post?.featuredImage?.node?.mediaItemUrl || ``,
        alt: post?.featuredImage?.node?.altText || ``,
        width: post.featuredImage?.node?.width || ``,
        height: post.featuredImage?.node?.height || ``,
    };

    const featured = isFeatured;

    const author = post?.author?.node;
    const slugRoot = root ? root + '/' : '';

    let imgLoading = index <= 5 ? 'eager' : featured ? 'eager' : 'lazy';

    return (
        <div className={`${featured ? `col-lg-12 featured` : `col-xl-6`} mb-5 ${classes}`}>
            <a href={slugRoot + post.slug + '/'} className="post-link">
                <article
                    className="post-list-item card card-resource h-100"
                    itemScope
                    itemType="http://schema.org/Article"
                >
                    <img
                        src={featuredImage.data}
                        alt={featuredImage.alt}
                        width={featuredImage.width}
                        height={featuredImage.height}
                        loading={imgLoading}
                    />
                    <div className="card-body">
                        <p className="h6 text-uppercase">{post.blogContentType || kicker || post.seo.opengraphType}</p>
                        <h3 className="card1" itemProp="headline">
                            {Parse(post.title)}
                        </h3>
                        {author && (
                            <p className="h5">
                                {author.firstName} {author.lastName} &bull; {post.seo.readingTime} minutes
                            </p>
                        )}
                    </div>
                </article>
            </a>
        </div>
    );
}
