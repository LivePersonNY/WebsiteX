import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';


const LanguageSelector = (props) => {
	return (
		<div className="dropdown d-inline">
		  <a className="dropdown-toggle footer-legal footer-legal-link" type="button" id="languageMenu" data-bs-toggle="dropdown" aria-expanded="false">
			<img className="globe" src="https://static.liveperson.com/static-assets/2022/05/09125956/globe-2-neutral-99.svg"/><span id="languageMenuCurrent" className="languageSelectorText footer-legal ">Loading...</span>
		  </a>
		  <ul className="dropdown-menu" id="languageMenuItems" aria-labelledby="languageMenu">
			
		  </ul>
		</div>
	)
}

export default LanguageSelector;