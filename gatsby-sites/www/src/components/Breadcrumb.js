import * as React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = (props) => (
    <div className="breadcrumbs-container pane">
        <div className="container">
            <div className="row">
                <div className="col-12">{props.breadCrumbs}</div>
            </div>
        </div>
    </div>
);

export default Breadcrumb;
