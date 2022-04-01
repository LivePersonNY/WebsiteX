import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PlainContent from '../components/blocks/PlainContent';
import { Helmet } from 'react-helmet';
import ResourcesNav from '../components/blocks/ResourcesNav';
import Post from '../components/Post';

const Resources = function( props ) {
	
	const nodeTypes = {
		News: {
			kicker: "In the news",
			slug: "news"
		},
		Success: {
			kicker: "Success Story",
			slug: "success-stories"
		},
		Report: {
			kicker: "Guides & reports",
			slug: "reports"
		},
		Webinar: {
			kicker: "Webinar",
			slug: "webinars"
		}
	}

	
	return (
		<Layout>
			<Helmet 
				bodyAttributes={{
				  class: `resources ${props.active}`
				}}
			/>
			<Seo title="" description="" meta={[]} canonical="" robots="index, follow" />
			
			<PlainContent alignmentClass="text-center" headLevel="h1" header="Everything you need to know to go Conversational" kicker="Resource Library" colWidth="6" />
			<ResourcesNav active={props.active || `all`} />
			<div className="pane index">
				<div className="container">
					<div className="row">
						{props.items.map(function(item) {
							return (item.seo.metaRobotsNoindex == 'index' &&
								<Post post={item} kicker={nodeTypes[item.nodeType].kicker} root={"/resources/" + nodeTypes[item.nodeType].slug} />
							);
						})}
					</div>
				</div>
			</div>
			
		</Layout>
	)
}
export default Resources;