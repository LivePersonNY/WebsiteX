import * as React from 'react';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import $ from 'jquery';
import Parser from 'html-react-parser';
import { Query } from '../../../liveperson-attribution';

const CareerStickyCta = (props) => {
    if (props.runFilters) {
        useEffect(() => {
            // console.log('Start Careers Script');
            // let ghsrc = Query.get('gh_src');
            // console.log('ghsrc is: ' + ghsrc);
            // document.querySelectorAll('.comp-body-container a').forEach(function(lnk) {
            //     var href = lnk.href.concat("&gh_src=").concat(ghsrc ?? "");
            //       lnk.href = href;
            // });
            // document.querySelectorAll('resume-upload').forEach(function(lnk) {
            //     var href = lnk.href.concat("&gh_src=").concat(ghsrc ?? "");
            //       lnk.href = href;
            // });
            // let searchURL = 'https://careers.liveperson.com?source=campaignA'
            // .concat("&gh_src=").concat(ghsrc ?? "");
            // let keyWordQuery = document.getElementById('Job_Search').value;
            // if (keyWordQuery !== '') {
            //     searchURL = searchURL.concat("&q=").concat(encodeURIComponent(keyWordQuery))
            // }
            // let submit = document.getElementById('Search_Submit_Button');
            // submit.href = searchURL;
            // function handleKey(e) {
            //   e.preventDefault()
            //   e.stopPropagation()
            //   if (e.keyCode === 13) {
            //     let searchURL = 'https://careers.liveperson.com?source=campaignA'.concat("&gh_src=")
            //         .concat(ghsrc ?? "");
            //     let keyWordQuery = document.getElementById('Job_Search').value;
            //     if (keyWordQuery !== '') {
            //       sendGA();
            //       searchURL = searchURL.concat("&q=")
            //           .concat(encodeURIComponent(keyWordQuery))
            //     }
            //     location.href = searchURL
            //   }
            // }
            // function sendGA() {
            //   if (window.ga && window.navigator) {
            //     window.ga('send', 'event', 'careers', 'click', 'Job search');
            //   }
            // }
            // function setURLParams(e) {
            //   let keyWordQuery = document.getElementById('Job_Search').value;
            //   let searchURLParams = "https://careers.liveperson.com/?source=campaignA&q=";
            //   searchURLParams = searchURLParams.concat(encodeURIComponent(keyWordQuery))
            //       .concat("&gh_src=").concat(ghsrc ?? "");
            //   let a = document.getElementById('Search_Submit_Button');
            //       let b = document.getElementById('wf-form-Search-Form');
            //   a.href = searchURLParams;
            //   b.setAttribute('action', searchURLParams);
            // }
            // document.getElementById('Job_Search').addEventListener('keyup', handleKey);
            // document.getElementById('wf-form-Search-Form').addEventListener('keyup', handleKey);
            // document.getElementById('Job_Search').addEventListener('input', setURLParams);
            // document.querySelector('.resume-upload').addEventListener('click',function(){
            //   if (window.ga && window.navigator) {
            //     window.ga('send', 'event', 'careers', 'click', 'Match resume');
            //   }
            // })
            // document.querySelector('.hero-or').addEventListener('click',function(){
            //   console.log('click test');
            // })
            // console.log('End Careers Script');
        });
    }

    return (
        <div
            className={`${props.cssClasses} pane pane-form form--sticky pane-careers-cta bg-grad-image gctestclass`}
            style={{ display: 'none' }}
        >
            <div className="container">
                {props.header && !props.sticky && (
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h2>{props.header}</h2>
                        </div>
                    </div>
                )}
                <div className="row">
                    <div className="col-lg-12">
                        <a
                            href="https://careers.liveperson.com/upload/?source=CampaignA"
                            className="btn resume-upload"
                        >
                            <img
                                src="https://static.liveperson.com/static-assets/2022/07/20171713/Upload-Blue-Vector.svg"
                                alt="Upload icon"
                                className="cloud-image-a"
                            />
                            <div className="upload-button-text text-block-20-a">
                                Match your resume to a role
                            </div>
                        </a>
                        <p className="hero-or h6">OR</p>
                        <form
                            id="wf-form-Search-Form"
                            name="wf-form-Search-Form"
                        >
                            <input
                                id="Job_Search"
                                className="form-control"
                                type="text"
                                placeholder="Search by role or keyword"
                                aria-label="Search by role or keyword"
                            ></input>
                            <a
                                id="Search_Submit_Button"
                                href="https://careers.liveperson.com?source=campaignA"
                                target="_blank"
                                className="search-button-link-a w-inline-block"
                            >
                                <img
                                    src="https://static.liveperson.com/static-assets/2022/02/08142542/search_Vector.svg"
                                    loading="lazy"
                                    alt="Search icon"
                                    className="search-image-a"
                                />
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerStickyCta;
