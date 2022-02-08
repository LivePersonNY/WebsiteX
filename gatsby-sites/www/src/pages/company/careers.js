import * as React from 'react';
import { withPrefix, Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import queryString from 'query-string';
import Helmet from "react-helmet"

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import CardGridB from '../../components/blocks/CardGridB';

const IndexPage = () => (
  <Layout mainClass="company-careers">
    <Helmet>
      <script src={withPrefix('scripts/careers.js')} type="text/javascript" />
    </Helmet>
    <Seo title="Careers - Become a LivePerson AI Native" description="Are you interested in working at LivePerson? Browse through our list of available career opportunities around the globe or contact us for assistance." />

    <div className="pane comp-plain-content bg-neutral-96 text-center pane-with-lead-text">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1>Join us in building a more empathetic AI</h1>
            <p>Our Conversational Cloud platform empowers millions of people by allowing them to directly message their favorite brands. Join our team and be a part of the world’s next digital evolution.</p>
            <form id="wf-form-Search-Form" name="wf-form-Search-Form">
              <input id="Job_Search" className="form-control" type="text" placeholder="Search by role or keyword" aria-label="Search by role or keyword">
              </input>
              <a id="Search_Submit_Button" href="http://careers.liveperson.com?source=campaignA&amp;gh_src=" target="_blank" className="search-button-link-a w-inline-block"><img src="https://static.liveperson.com/static-assets/2022/02/08142542/search_Vector.svg" loading="lazy" alt="Search icon" className="search-image-a" /></a>
            </form>
            <p className="hero-or">OR</p>
            <a href="https://careers.liveperson.com/upload/?source=CampaignA&amp;gh_src=" className="btn btn-primary resume-upload">
              <img src="https://static.liveperson.com/static-assets/2022/02/08142543/upload_Vector.svg" alt="Upload icon" className="cloud-image-a" />
              <div className="upload-button-text text-block-20-a">Match your resume to a role</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="pane comp-icon-text-d bg-primary-light pane-with-lead-text"><div className="container"><div className="row"><div className="col-lg-8 offset-lg-2 text-center"><h2 className="">Fastest growing teams</h2><p></p></div></div><div className="row row-cols-lg-3 row-cols-1 comp-block-grid-container "><div className="col"><div className="comp-body-container bg-neutral-96"><h3>Sales</h3><p></p><a href="https://careers.liveperson.com/?q=Sales&amp;source=campaignA&amp;gh_src=" className="link link-mt-small">See open roles</a></div></div><div className="col"><div className="comp-body-container bg-neutral-96"><h3>Customer Success</h3><p></p><a href="https://careers.liveperson.com/?q=customer%20success&amp;source=campaignA&amp;gh_src=" className="link link-mt-small">See open roles</a></div></div><div className="col"><div className="comp-body-container bg-neutral-96"><h3>Engineering</h3><p></p><a href="https://careers.liveperson.com/?q=engineering&amp;source=campaignA&amp;gh_src=" className="link link-mt-small">See open roles</a></div></div><div className="col"><div className="comp-body-container bg-neutral-96"><h3>Data Science &amp; ML</h3><p></p><a href="https://careers.liveperson.com/?q=data%20science%20%26%20ml&amp;source=campaignA&amp;gh_src=" className="link link-mt-small">See open roles</a></div></div><div className="col"><div className="comp-body-container bg-neutral-96"><h3>Design</h3><p></p><a href="https://careers.liveperson.com/?q=design&amp;source=campaignA&amp;gh_src=" className="link link-mt-small">See open roles</a></div></div><div className="col"><div className="comp-body-container bg-neutral-96"><h3>Marketing &amp; Comms</h3><p></p><a href="https://careers.liveperson.com/?q=marketing%20%26%20comms&amp;source=campaignA&amp;gh_src=" className="link link-mt-small">See open roles</a></div></div></div></div></div>

    <div className="pane comp-plain-content bg-neutral-96 text-center pane-with-lead-text">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <h2>Be anyone, be anywhere</h2>
            <p>We’re an employee-choice company, meaning we fully understand that every individual works best in their own way whether it’s in an office, remotely, or a hybrid. We celebrate different voices because by empowering all, we fuel better ideas. We’re looking for people who will contribute meaningful, innovative work from anywhere in the world — so come join our team.</p>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://static.liveperson.com/static-assets/2022/02/08142544/6179997ca5036bd00a2e35d2_61789882c1c3fbfde655eae0_Image.png" className="d-block w-100" alt="Employee virual meeting" />
                </div>
                <div className="carousel-item">
                  <img src="https://static.liveperson.com/static-assets/2022/02/08142545/617999999e2702beaf6f891f_617898ae88751c7e18f8aeb8_Carousel1.png" className="d-block w-100" alt="Employee pets" />
                </div>
                <div className="carousel-item">
                  <img src="https://static.liveperson.com/static-assets/2022/02/08142546/617999b9e6f9bf7d172724fb_617898cbf7ece017a873b43d_Carousel3.png" className="d-block w-100" alt="Employees outside in London" />
                </div>
                <div className="carousel-item">
                  <img src="https://static.liveperson.com/static-assets/2022/02/08142548/617999dca345b2b1ec6bcce9_617898e1a19f8b8c764e48da_Carousel4.png" className="d-block w-100" alt="Employees in office" />
                </div>
                <div className="carousel-item">
                  <img src="https://static.liveperson.com/static-assets/2022/02/08142549/617999f72b28e197b654541d_617898f89b3d7f6e93647e0c_Carousel5.png" className="d-block w-100" alt="Employees socializing" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <CardGridB
      backgroundColor="bg-neutral-92"
      header="Gratitude going both ways"
      body="We love our people. And it turns out, they love working here. In fact, we were just added to Newsweek’s Most-Loved Workplaces list — the top 100 companies that get recognized for employee happiness and satisfaction at work. We’ve also been awarded the world’s top honors for innovation, artificial intelligence, and customer service and sales technology."
      items={[
        {
          "imgSrc":"https://static.liveperson.com/static-assets/2022/02/08142539/616e08946da83d7049029c84_most_innovative.jpg",
          "imgAlt":"Alt text",
          "cardTitle":"Most Innovative Companies",
        },
        {
          "imgSrc":"https://static.liveperson.com/static-assets/2022/02/08142540/61708951d071150efe0af3f0_AmericaLPWork.png",
          "imgAlt":"Alt text",
          "cardTitle":"America's Most Loved Workplaces",
        },
        {
          "imgSrc":"https://static.liveperson.com/static-assets/2022/02/08142541/61708911126dfaf6f0b16d2c_IsraelBestPlacesToWork.png",
          "imgAlt":"Alt text",
          "cardTitle":"Israel: Best Places to Work",
        },
        {
          "imgSrc":"https://static.liveperson.com/static-assets/2022/02/08142542/616e08d83f886e243d3c7caa_germany_great_place.jpg",
          "imgAlt":"Alt text",
          "cardTitle":"Germany: Great Place to Work",
        },
      ]}
    />

  </Layout>
);

export default IndexPage;
