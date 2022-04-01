import * as React from 'react';

const ResourceNav = function ( { active } ) {
	
	const activeAll = active == `all` ? `pill-active` : ``;
	const activeSuccess = active == `success` ? `pill-active` : ``;
	const activeReports = active == `reports` ? `pill-active` : ``;
	const activeNews = active == `news` ? `pill-active` : ``;
	const activeWebinars = active == `webinars` ? `pill-active` : ``;
	
	return (
		<div className="pane pills-container text-center bg-neutral-96 py-4">
			<a href="/resources" className={`btn pill mx-2 ${activeAll}`}>All Items</a>
			<a href="/resources/success-stories" className={`btn pill mx-2 ${activeSuccess}`}>Success stories</a>
			<a href="/resources/reports" className={`btn pill mx-2 ${activeReports}`}>Guides and reports</a>
			<a href="/resources/news" className={`btn pill mx-2 ${activeNews}`}>In the news</a>
			<a href="/resources/webinars" className={`btn pill mx-2 ${activeWebinars}`}>Webinars</a>
		</div>
	)
}
export default ResourceNav;