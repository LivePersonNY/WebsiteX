import * as React from 'react';
import Link from 'gatsby-link';

const Hero = (props) => (
  <div className="pane bg-neutral-84">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          {props.kicker && <p className="h6">{props.kicker}</p>}
          <h1>{props.header}</h1>
          <p>{props.subHeader}</p>
          {props.logoWall && (
            <>
              <h6 className="mt-4">TRUSTED BY 100K LEADING BRANDS</h6>
              <div className="logo-wall">
                <img src="https://placekitten.com/100/40" alt="" />
                <img src="https://placekitten.com/100/40" alt="" />
                <img src="https://placekitten.com/100/40" alt="" />
                <img src="https://placekitten.com/100/40" alt="" />
              </div>
            </>
          )}
        </div>
        <div className="col-lg-6 offset-lg-1">
          <img src={props.heroImage} alt={props.heroImageAlt || ""} />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
