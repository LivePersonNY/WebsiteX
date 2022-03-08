import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from '../components/blocks/Hero';
import { Helmet } from 'react-helmet';
import ResourcesNav from '../components/blocks/ResourcesNav';
import Post from '../components/Post';

const Resources = function( props ) {
	
	
	return (
		<Layout>
			<Helmet 
				bodyAttributes={{
				  class: `resources ${props.active}`
				}}
			/>
			<Seo title="" description="" meta={[]} canonical="" robots="index, follow" />
			<div className="container">
				<Hero header="Everything you need to know to go Conversational" kicker="Resource Library" />
				<ResourcesNav active={props.active || `all`} />
				<div className="index">
					<div class="row">
						{props.items.map(function(item) {
							return (
								<Post post={item} />
							);
						})}
					</div>
				</div>
			</div>
			
		</Layout>
	)
}
export default Resources;