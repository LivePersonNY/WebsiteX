import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import NotFoundPage from '../pages/404';

import LayoutRoi from '../components/LayoutRoi';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import Parser from 'html-react-parser';

const PageTemplate = ({ pageContext: {page}}) => {

	if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== "true") {
		return (<NotFoundPage />);
	}

	useEffect(() => {
    
		window.runRoi();
		
	});
	
	let canRoot = process.env.CAN_ROOT;
	let canonical = page.seo.canonical || page.link;
	if (canonical.indexOf('http') < 0) canonical = canRoot + canonical;
	
	if (!page) return "The slug does not exist in the CMS";
  return (
  <LayoutRoi mainClass="biz-case">
	<Seo title={page.seo.title} description={page.seo.metaDesc} canonical={canonical} robots="noindex, nofollow" />
	{Parser(page.content)}
  </LayoutRoi>)
};

export default PageTemplate;