import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import { Helmet } from 'react-helmet';
import ResourcesNav from '../components/blocks/ResourcesNav';

const Resources = function( props ) {
	
	
	return (
		<Layout>
			<Helmet />
			<Seo title="" description="" meta={[]} canonical="" robots="index, follow" />
			<div className="container">
				<Hero header="Everything you need to know to go Conversational" kicker="Resource Library" />
				<ResourcesNav active={props.active || `all`} />
				<div className="index">
					{props.children}
				</div>
			</div>
			
		</Layout>
	)
}
export default Resources;