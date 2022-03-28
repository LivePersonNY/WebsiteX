import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Parse from 'html-react-parser';

export default function Post({post, kicker, root}) {
	
	const featuredImage = {
	  data: post?.featuredImage?.node?.mediaItemUrl || ``,
	  alt: post?.featuredImage?.node?.altText || ``,
	};
	
	const author = post?.author?.node;
	const slugRoot = root ? root + "/" : "";
	
	return (
		<div className={`${post.isSticky ? `col-lg-12 featured` : `col-xl-6`} mb-4`}>
		  <a href={slugRoot + post.slug} className="post-link">
			<article
			  className="post-list-item card card-resource h-100"
			  itemScope
			  itemType="http://schema.org/Article"
			>
			  <img src={featuredImage.data} alt={featuredImage.alt} />
			  <div class="card-body">
				<p className="h6 text-uppercase">{kicker || post.seo.opengraphType}</p>
				<h3 class="card1" itemProp="headline">
					{Parse(post.title)}
				</h3>
				{author && (<p className="h5">{author.firstName} {author.lastName} &bull; {post.seo.readingTime} minutes</p>)}
			  </div>
			</article>
		  </a>
		</div>
	);
}