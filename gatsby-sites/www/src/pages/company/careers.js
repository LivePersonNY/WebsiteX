import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import LeftRight from '../../components/blocks/LeftRight';
import StatsGrid from '../../components/blocks/StatsGrid';
import CardGrid from '../../components/blocks/CardGrid';
import CalloutGrid from '../../components/blocks/CalloutGrid';
import Hero from '../../components/blocks/Hero';
import PlainContent from '../../components/blocks/PlainContent';
import TabsC from '../../components/blocks/TabsC';
import TabsB from '../../components/blocks/TabsB';
import TabsA from '../../components/blocks/TabsA';
import MktoForm from '../../components/blocks/MktoForm';
import IconTextA from '../../components/blocks/IconTextA';
import IconTextB from '../../components/blocks/IconTextB';
import IconTextC from '../../components/blocks/IconTextC';
import LogosUniversal from '../../components/blocks/LogosUniversal';
import QuoteSlider from '../../components/blocks/QuoteSlider';
import ContainedContent from '../../components/blocks/ContainedContent';
import ContentCTA from '../../components/blocks/ContentCTA';
import SideBySide from '../../components/blocks/SideBySide';
import IconTextD from '../../components/blocks/IconTextD';
import ScrollHorizontalText from '../../components/blocks/ScrollHorizontalText';
import Faq from '../../components/blocks/Faq';
import CardGridB from '../../components/blocks/CardGridB';
import ProgramCard from '../../components/blocks/ProgramCard';
import TeamCards from '../../components/blocks/TeamCards';
import HorizontalText from '../../components/blocks/HorizontalText';
import ExecutiveCard from '../../components/blocks/ExecutiveCard';
import BoardCards from '../../components/blocks/BoardCards';
import ScrollContent from '../../components/blocks/ScrollContent';

const IndexPage = () => (
  <Layout>
    <Seo title="Careers - Become a LivePerson AI Native" />

    <div className="pane comp-plain-content bg-neutral-96 text-center pane-with-lead-text">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <h1>Join us in building a more empathetic AI</h1>
            <p>Our Conversational Cloud platform empowers millions of people by allowing them to directly message their favorite brands. Join our team and be a part of the world’s next digital evolution.</p>
            <form id="wf-form-Search-Form" name="wf-form-Search-Form">
              <input id="Job_Search" className="form-control" type="text" placeholder="Search by role or keyword" aria-label="Search by role or keyword">
              </input>
              <a id="Search_Submit_Button" href="http://careers.liveperson.com?source=campaignA&amp;gh_src=" target="_blank" className="search-button-link-a w-inline-block"><img src="https://assets-global.website-files.com/6102c6dcd053e9faffcff877/6152132eb6e1904d491ab3b5_Vector.svg" loading="lazy" alt="Search icon" className="search-image-a" /></a>
            </form>
            <p>OR</p>
            <a href="https://careers.liveperson.com/upload/?source=CampaignA&amp;gh_src=" className="btn btn-primary resume-upload">
              <img src="https://assets-global.website-files.com/6102c6dcd053e9faffcff877/6152211c89e58e8aa1b1ecae_Vector%20(7).svg" alt="Upload icon" className="cloud-image-a" />
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
          "imgSrc":"https://picsum.photos/304/168?random=1",
          "imgAlt":"Alt text",
          "cardTitle":"Most Innovative Companies",
        },
        {
          "imgSrc":"https://picsum.photos/304/168?random=2",
          "imgAlt":"Alt text",
          "cardTitle":"America's Most Loved Workplaces",
        },
        {
          "imgSrc":"https://picsum.photos/304/168?random=3",
          "imgAlt":"Alt text",
          "cardTitle":"Israel: Best Places to Work",
        },
        {
          "imgSrc":"https://picsum.photos/304/168?random=1",
          "imgAlt":"Alt text",
          "cardTitle":"Germany: Great Place to Work",
        },
      ]}
    />

  </Layout>
);

export default IndexPage;
