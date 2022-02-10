import * as React from 'react';
import { useEffect } from 'react';
import Link from 'gatsby-link';
import Paragraph from '../Paragraph';

const HeroLottie = (props) => {

 
  let lottieScript = `
    function loadLottieAnim() {
      if (!window.lottie) {
        setTimeout(loadLottieAnim, 100);
      } else {
        window.lottie.loadAnimation({
          container: document.querySelector('.lottie-container'),
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: 'https://static.liveperson.com/static-assets/2022/02/10151018/iPhone-Convo_rm_4.json'
        });
      }
    } 
    loadLottieAnim();
  `;

  if (props.runFilters) {
    useEffect(() => {
      eval(lottieScript);
    });
  }

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector('.lottie-container'),
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: 'iPhone-Convo_rm_4.json'
  //     // path: 'https://static.liveperson.com/static-assets/2022/02/10151018/iPhone-Convo_rm_4.json'
  //   })
  // })

return (
  <div className={`pane hero ${props.backgroundColor||"bg-transparent"} ${props.removePB ? 'pb-0' : ''}`}>
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
              <h6 className="mt-4">{props.logoHeader}</h6>
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
        <div className="col-lg-6 offset-lg-1 lottie-container">
          {!props.imgCtl && <img src={props.heroImage} alt={props.heroImageAlt || ""} /> || props.imgCtl}
        </div>
      </div>
    </div>
    {!props.runFilters && (
      <script data-type="pageScript">{lottieScript}</script>
    )}
  </div>
  );
}

export default HeroLottie;