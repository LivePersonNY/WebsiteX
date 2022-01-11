import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Video from '../Video';
import HeroImage from '../HeroImage';

const HeroRob = ({ left, right, heading, subheading, pageData }) => {
  let heroAsset = <HeroImage url={pageData.featuredImage?.node.mediaItemUrl} />;
  if (pageData.vimeoVideo !== null) {
    heroAsset = <Video url={pageData.vimeoVideo} />;
  }
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className={left || 'col-md-6'}>
            <h1>{heading}</h1>
            <p className="h3">{subheading}</p>
          </div>
          <div className={right || 'col-md-6'}>{heroAsset}</div>
        </div>
      </div>
    </div>
  );
};

export default HeroRob;
