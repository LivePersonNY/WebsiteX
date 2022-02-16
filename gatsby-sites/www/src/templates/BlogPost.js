import * as React from 'react';
import Parser from 'html-react-parser';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';

const BlogPost = ({ pageContext }) => {
	const { post } = pageContext;
	let meta = [
		{
		  name: `twitter:title`,
		  content: post[`meta-title`] || ``,
		},
		{
		  name: `twitter:description`,
		  content: ``,
		},
		{
		  property: `og:title`,
		  content: post[`meta-title`] || ``,
		},
		{
		  property: `og:description`,
		  content: ``,
		},
		{
		  property: `og:image`,
		  content: ``,
		},
		{
		  property: `twitter:image`,
		  content: ``,
		},
		{
		  property: `og:type`,
		  content: `website`,
		},
		{
		  property: `og:url`,
		  content: ``,
		}
	];
	
  return (<Layout>
	<Seo title={post[`meta-title`]} description={post[`meta-description`]} meta={meta} />
	<div className="container">
		<div className="row justify-content-md-center">
			<div className="col-lg-9">
				<div className="post-container">
					<p className="h6 text-uppercase">{post.kicker}</p>
					<h1>{post.title}</h1>
					<img className="my-4 rounded-3" src={post[`resource-image`].url} alt={post[`resource-image-alt-text`]} />
					<hr className="mb-4" />
					{Parser(post[`blog-content`])}
				</div>
			</div>
		</div>
	</div>
  </Layout>)
	
};
export default BlogPost;