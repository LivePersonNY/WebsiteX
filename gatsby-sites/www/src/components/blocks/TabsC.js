import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery'; 

const TabsC = (props) => {

    let tabScript = `
      document.querySelectorAll('.comp-tabs-c .comp-tabs-content').forEach(function(item){
        item.style.display = 'none';
        console.log(item);
      });
      var e = document.querySelector('.comp-tabs-c .comp-tabs-content[data-tab-content="0"]');
      if (e) {
        e.style.display = 'flex';
        console.log(e);
      }
    `;

    if (props.runFilters) {
      useEffect(() => {
        eval(tabScript);
      });
    }
  
    let pillListOutput = props.items.map((item ,index)=>{
      return <a className="btn pill" data-tab={index} key={index}>{item.title}</a>
    });

    let tabsContent = props.items.map((item, index)=>{
      return (
          <div className={`row bg-primary-light align-items-center comp-tabs-content `} data-tab-content={index} key={index}>
            <div className="col-lg-4 offset-lg-1">
              <img src={item.icon} alt={item.iconAlt} />
              <h3>{item.header}</h3>
              <p>{item.body}</p>
              {item.linkText && (
                <a className="btn btn-outline-secondary" href={item.linkUrl}>
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
    <div className="pane bg-neutral-92 comp-tabs-c">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="text-center">{props.heading}</h2>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-lg-10">
            <div className="pills-container">
              {pillListOutput}
            </div>
          </div>
        </div>
          {tabsContent}
          
      </div>
      {!props.runFilters && (
        <script>{tabScript}</script>
      )}
    </div>
    
  </>
  )
};

export default TabsC;
