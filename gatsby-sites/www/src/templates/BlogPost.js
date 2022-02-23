import * as React from 'react';
import Parser from 'html-react-parser';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import Bio from '../components/Bio';
import AddThis from '../components/AddThis';

import { Link, graphql } from 'gatsby';

const BlogPost = ({ data: { previous, next, post } }) => {
	
	const featuredImage = {
		data: post.featuredImage?.node?.mediaItemUrl || ``,
		alt: post.featuredImage?.node?.altText || ``,
	  };
	  
	console.log(featuredImage);
	
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
	<div className="container blog">
		
		<div className="row justify-content-md-center">
			<div className="col-lg-9">
				<a href="javascript:history.back()" className="return-link link link-mt-large">Blog</a>
				<div className="post-container">
					<p className="h6 text-uppercase">{post.seo.opengraphType}</p>
					<h1>{post.title}</h1>
					<Bio id={post.author.node.id} date={post.date} readingTime={post.seo.readingTime} />
					<img className="my-4 rounded-3 w-100" src={featuredImage.data} alt={featuredImage.alt} />
					<AddThis />
					<hr className="mb-4" />
					{Parser(post.content)}
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
	  excerpt
	  author {
		node {
		  id
		  firstName
		  lastName
		  url
		  avatar {
			url
		  }
		}
	  }
	  seo {
		readingTime
		opengraphType
		schema {
			articleType
		}
	  }
	  date(formatString: "MMMM DD, YYYY")
	  featuredImage {
		node {
		  altText
		  mediaItemUrl
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
