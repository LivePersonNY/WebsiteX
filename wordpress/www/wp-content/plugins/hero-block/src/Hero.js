import * as React from 'react';

import Video from '../Video';
import HeroImage from '../HeroImage';

const Hero = ({ left, right, heading, subheading }) => {
  
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className={left || 'col-md-6'}>
            <h1>{heading}</h1>
            <p className="h3">{subheading}</p>
          </div>
          <div className={right || 'col-md-6'}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
