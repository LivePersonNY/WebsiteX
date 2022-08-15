import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const PolicyContent = (props) => {

  let vFrame = (
    <div className="vimeoContainer">
      <iframe src={props.vimeoUrl} className="vimeoFrame"></iframe>
    </div>
  );

  return (
    <>
      <div autoapprove={props.autoApprove && "true"} id={props.anchor} 
        className={`pane ${props.backgroundColor||"bg-transparent"} comp-policy-content`}
      >
        <div className="container">
          <div className="row">
            <div className={`col-lg-4`}>
              <div className="policy-toc">

              </div>
            </div>
            <div className={`col-lg-7 offset-lg-1`}>
              {props.body}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyContent;
