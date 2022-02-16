import * as React from 'react';
import Parser from 'html-react-parser';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import { Link, graphql } from 'gatsby';

const BlogPost = ({ data: { previous, next, post } }) => {

	
	const featuredImage = {
		data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
		alt: post.featuredImage?.node?.alt || ``,
	  };
	
	let meta = [
		{
		  name: `twitter:title`,
		  content: post.title || ``,
		},
		{
		  name: `twitter:description`,
		  content: ``,
		},
		{
		  property: `og:title`,
		  content: post.title || ``,
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
	<Seo title={post.title} description={post.excerpt} meta={meta} />
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

export const pageQuery = graphql`
  query BlogPostById(
	$id: String!
	$previousPostId: String
	$nextPostId: String
  ) {
	post: wpPost(id: { eq: $id }) {
	  id
	  excerpt
	  content
	  title
	  date(formatString: "MMMM DD, YYYY")
	  featuredImage {
		node {
		  altText
		  localFile {
			childImageSharp {
			  gatsbyImageData(
				quality: 100
				placeholder: TRACED_SVG
				layout: FULL_WIDTH
			  )
			}
		  }
		}
	  }
	}
	previous: wpPost(id: { eq: $previousPostId }) {
	  uri
	  title
	}
	next: wpPost(id: { eq: $nextPostId }) {
	  uri
	  title
	}
  }
`;
