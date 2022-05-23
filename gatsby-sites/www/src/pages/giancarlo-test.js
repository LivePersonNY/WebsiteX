import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PlainContent from '../components/blocks/PlainContent';
import { Helmet } from 'react-helmet';
import ResourcesNav from '../components/blocks/ResourcesNav';
import Post from '../components/Post';

const GiancarloTest = function( ) {
	
	const userDetails = JSON.parse(localStorage.getItem('_6senseCompanyDetails'));
	console.log(userDetails);

	
	return (
		<Layout>

			<Seo title="" description="" meta={[]} canonical="" robots="noindex, nofollow" />
			
			<div className="pane index">
				<div className="container">
					<div className="row">
						<h1>Giancarlo Test</h1>
						<p>I see you are from {userDetails['company']['name']}, would you like to see how our product can help the {userDetails['company']['industry']} industry?</p>
					</div>
				</div>
			</div>
			
		</Layout>
	)
}
export default GiancarloTest;