import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 
import Paragraph from '../Paragraph';


const TabsC = (props) => {

    let tabScript = `
      document.querySelectorAll('.comp-tabs-c .comp-tabs-content').forEach(function(item){
        item.style.display = 'none';
        
      });
      var e = document.querySelector('.comp-tabs-c .comp-tabs-content[data-tab-content="0"]');
      if (e) {
        e.style.display = 'flex';
        
      }
    `;

    if (props.runFilters) {
      useEffect(() => {
        eval(tabScript);
      });
    }
  
    let pillListOutput = props.items.map((item ,index)=>{
      return <a className={`btn pill ${index === 0 ? 'pill-active' : ''}`} data-tab={index} key={index}>{item.title}</a>
    });

    let tabsContent = props.items.map((item, index)=>{
      return (
          <div className={`row bg-primary-light align-items-center comp-tabs-content `} data-tab-content={index} key={index}>
            <div className="col-lg-4 offset-lg-1">
              {!item.iconCtl && <img src={item.icon} alt={item.iconAlt} /> || item.iconCtl}
              {item.kicker && (
                <p className="h6 text-uppercase">{item.kicker}</p>
              )}
              <h3>{item.header}</h3>
              <Paragraph text={item.body} />
              {item.linkText && (
                <a className="btn btn-outline-secondary" href={item.linkUrl} target={item.linkExternal && `_blank`} rel={item.linkExternal && `noopener noreferrer`}>
                  {item.linkText}
                </a>
              )}
            </div>
            <div className="col-lg-6 offset-lg-1">
              {!item.imgCtl && <img src={item.img} alt={item.imgAlt} /> || item.imgCtl}
            </div>
          </div>
      )
    });
    
    
   

  return (
  <>
    <div data-localize={props.autoApprove && `auto-approve`} autoapprove={props.autoApprove && "true"} id={props.anchor} className={`pane comp-tabs-c ${props.backgroundColor||"bg-transparent"} ${props.header ? 'pane-with-lead-text' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="text-center">{props.header}</h2>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10 pills-mobile-scroll">
            <div className="pills-container" style={{width:props.mobilePillsWidth}}>
              {pillListOutput}
            </div>
          </div>
        </div>
          {tabsContent}
          
      </div>
      {!props.runFilters && (
        <script data-type="pageScript">{tabScript}</script>
      )}
    </div>
    
  </>
  )
};

export default TabsC;
