import * as React from 'react';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';
import { useEffect } from 'react';


const RoiHeaderWP = (props) => {

return(
    <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container" style={{ position: 'relative' }}>
                <img className="site-logo" src="https://static.liveperson.com/static-assets/2022/08/26160656/logo-light-new-png.png" alt="LivePerson Inc." />
                <img src="https://assets-global.website-files.com/60ad0c09266ca44b71ebb223/6230afaa036ea8139e5cff79_plus-sign.svg" className="brand-logo plus-symbol" />
                <img id="brand-logo" src={props.brandLogo} className="brand-logo" />
            </div>
        </nav>
    </header>
    );
}

export default RoiHeaderWP;