import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import Parser from 'html-react-parser';

const PageTemplate = ({ pageContext: {page}}) => {
	
	let canRoot = process.env.CAN_ROOT;
	let canonical = page.seo.canonical || page.link;
	if (canonical.indexOf('http') < 0) canonical = canRoot + canonical;
	
	let robots = [
		page.seo.metaRobotsNoindex,
		page.seo.metaRobotsNofollow
	];
	
	if (!page) return "The slug does not exist in the CMS";
  return (<Layout>
	<Seo title={page.seo.title} description={page.seo.metaDesc} canonical={canonical} robots="noindex,nofollow" />
	{Parser(page.content)}
  </Layout>)
};

export default PageTemplate;