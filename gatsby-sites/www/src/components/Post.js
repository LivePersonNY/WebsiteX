import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Parse from 'html-react-parser';

export default function Post({post}) {
	
	const featuredImage = {
	  data: post.featuredImage?.node?.mediaItemUrl || ``,
	  alt: post.featuredImage?.node?.altText || ``,
	};
	
	const author = post.author.node;
	
	return (
		<div className={`${post.isSticky ? `col-lg-12 featured` : `col-lg-6`} mb-4`}>
		  <Link to={post.uri} itemProp="url" className="post-link">
			<article
			  className="post-list-item shadow-none bg-blue-20 card h-100"
			  itemScope
			  itemType="http://schema.org/Article"
			>
			  <img src={featuredImage.data} alt={featuredImage.alt} />
			  <div class="card-body">
				
				
				<p className="h6 text-uppercase">{post.seo.opengraphType}</p>
				<header>
				  <p className="h3 mb-2" itemProp="headline">
					{Parse(post.title)}
				  </p>
				</header>
				<p className="h5">{author.firstName} {author.lastName} &bull; {post.seo.readingTime} minutes</p>
			  </div>
			</article>
		  </Link>
		</div>
	);
}