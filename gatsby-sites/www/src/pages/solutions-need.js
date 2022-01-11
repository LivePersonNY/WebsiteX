import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import LeftRight from '../components/blocks/LeftRight';
import StatsGrid from '../components/blocks/StatsGrid';
import CardGrid from '../components/blocks/CardGrid';
import CalloutGrid from '../components/blocks/CalloutGrid';
import Hero from '../components/blocks/Hero';

const SolutionsNeed = (props) => (
  <Layout>
    <Seo title="Home" />
    {/* {Parser(page.content)} */}

    <Hero
      kicker="LIVEPERSON FOR COMMERCE"
      header="Most compelling benefit for commerce"
      subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              elementum sollicitudin magna bibendum sit ultricies arcu. Nullam
              tincidunt varius."
      heroImage="https://placekitten.com/640/480"
      heroImageAlt="test"
    />

    <LeftRight
      title="Why Conversational AI for Commerce"
      content="Tenete ergo quod si servitus quae natura liber, et aliena tua tunc impeditur. Dolebis, et turbabuntur, et invenietis, cum culpa tam dis hominibusque. Quod si tibi tantum sit."
      imgSrc="https://placekitten.com/640/480"
      repeat="true"
      flip="true"
    />

    <StatsGrid
      stat1="2.5x"
      content1="Increased ad conversions"
      stat2="20%"
      content2="Increased sales conversions"
      stat3="50%"
      content3="Reduced labor costs"
      stat4="20%"
      content4="Increased CSAT score"
    />

    <div className="pane bg-primary-light">
      <div className="container comp-left-right">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h6>PRE-HEADER TEXT</h6>
            <h2>LivePerson for your business</h2>
            <img src="https://placekitten.com/18/18" alt="" />
            <h3>Commerce</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eros, est dolor ullamcorper dui tellus eleifend.
            </p>
            <Link className="link link-mt-small" href="#">
              Discover Commerce Solutions
            </Link>
            <img src="https://placekitten.com/18/18" alt="" />
            <h3>Customer Care</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eros, est dolor ullamcorper dui tellus eleifend.
            </p>
            <Link className="link link-mt-small" href="#">
              Discover Customer Care
            </Link>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <img src="https://placekitten.com/640/720" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div className="pane bg-neutral-92">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="text-center">
              A sentence describing the different products and main value
              proposition
            </h2>
          </div>
        </div>
        <div className="row bg-primary-light align-items-center">
          <div className="col-lg-4 offset-lg-1">
            <img src="https://placekitten.com/56/56" alt="" />
            <h3>A branded line of copy or two about product benefit</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </p>
            <Link className="btn btn-outline-secondary" href="#">
              Discover Customer Care
            </Link>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <img src="https://placekitten.com/640/560" alt="" />
          </div>
        </div>
      </div>
    </div>

    <CardGrid
      heading="Headline about our customers"
      img1Src="https://placekitten.com/224/30"
      img1Alt="Alt text"
      card1Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor"
      card1LinkUrl="#"
      card1LinkText="Read Customer Story"
      img2Src="https://placekitten.com/224/30"
      img2Alt="Alt text"
      card2Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor"
      card2LinkUrl="#"
      card2LinkText="Read Customer Story"
      img3Src="https://placekitten.com/224/30"
      img3Alt="Alt text"
      card3Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor sed do eiusmod tempor incididunt ut labor"
      card3LinkUrl="#"
      card3LinkText="Read Customer Story"
    />

    <LeftRight
      preHeading="WHY LIVEPERSON"
      title="Branded copy that speaks to LivePerson’s values"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imgSrc="https://placekitten.com/640/480"
      linkText="Discover Commerce Solutions"
      linkUrl="/"
      flipColumns="true"
    />

    <CalloutGrid
      heading="Related Insights"
      linkText="View All Posts"
      linkUrl="#"
      img1Src="https://placekitten.com/416/232"
      img1Alt="Alt text"
      callout1Category="CATEGORY"
      callout1Content="Blog post title goes right here across two lines"
      callout1Author="By Name Lastname"
      callout1LinkUrl="#"
      img2Src="https://placekitten.com/416/232"
      img2Alt="Alt text"
      callout2Category="CATEGORY"
      callout2Content="Blog post title goes right here across two lines"
      callout2Author="By Name Lastname"
      callout2LinkUrl="#"
      img3Src="https://placekitten.com/416/232"
      img3Alt="Alt text"
      callout3Category="CATEGORY"
      callout3Content="Blog post title goes right here across two lines"
      callout3Author="By Name Lastname"
      callout3LinkUrl="#"
    />
  </Layout>
);

export default SolutionsNeed;
