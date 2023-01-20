import React, { useRef, forwardRef, useEffect } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ScrollFeatures({ items = [], minBreakpoint = '1200px', scrollHeight = '350vh' }) {

  useEffect(() => {

    const observeHandler = (entries, observer) => {
      const mq = window.matchMedia(`screen and (min-width: ${minBreakpoint})`);
      if(!mq.matches){
        entries.forEach(entry => {
          entry.target.classList.remove('active')
        })
      } else {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          } else {
            entry.target.classList.remove('active')
          }
        })
      }
    }

    const targets = document.querySelectorAll('[data-sticky-boxes] > *')
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0
    }
    const observer = new IntersectionObserver(observeHandler, observerOptions)

    targets.forEach(target => {
      observer.observe(target)
    })
    
    return () => {
      targets.forEach(target => {
        observer.unobserve(target)
      })
      observer.disconnect()      
    }

  }, []);

  return (
    <>     
        <div className="sticky-boxes-wrapper container">
            <div className="row py-5">
                <div className="col-12-lg" data-sticky-boxes="1">
                    {items.map((item, i) => (
                        <div key={i} className={`${scrollHeight} sticky-box`}>
                            <div className="content-box">
                                <div className="content">
                                    <div>
                                        <h2 className="fs-6 text-uppercase">{item.cardTitle}</h2>
                                        <h3 className="display-4">
                                            <span>{item.cardHeading}</span>
                                        </h3>
                                        <p>{item.cardContent}</p>
                                        <p><a className="link" href={item.linkHref}>{item.linkText}</a></p>
                                    </div>
                                </div>
                                <img className="img-fluid" src={item.imgSrc} alt={item.imgAlt} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}
