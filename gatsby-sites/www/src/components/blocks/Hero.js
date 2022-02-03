import * as React from 'react';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const Hero = (props) => (
  <div className={`pane hero ${props.backgroundColor||"bg-transparent"}`}>
    {props.backgroundImage && 
      <style>
        {`.pane.hero {
          background-image: url(${props.backgroundImage});
        }`}
      </style>
    }
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          {props.kicker && <p className="h6 text-uppercase">{props.kicker}</p>}
          <h1>{props.header}</h1>
          <Paragraph text={props.subHeader} />
          {(props.imgLogoCtl || props.underBodyImg) && (
            <>
              <h6 className="mt-4">TRUSTED BY 100K LEADING BRANDS</h6>
              <div className="body-image">
                {!props.imgLogoCtl && <img src={props.underBodyImg} alt={props.underBodyImgAlt} /> || props.imgLogoCtl}
              </div>
            </>
          )}
          {props.primaryBtnText && (
            <a href={props.primaryBtnLink} className={`btn btn-primary`}>{props.primaryBtnText}</a>
          )}
          {props.secondaryBtnText && (
            <a href={props.secondaryBtnLink} className={`btn btn-outline-secondary`}>{props.secondaryBtnText}</a>
          )}
        </div>
        <div className="col-lg-6 offset-lg-1">
          {!props.imgCtl && <img src={props.heroImage} alt={props.heroImageAlt || ""} /> || props.imgCtl}
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
