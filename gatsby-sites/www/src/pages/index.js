import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import LeftRight from '../components/blocks/LeftRight';
import StatsGrid from '../components/blocks/StatsGrid';

const IndexPage = ({ data: { page, setting } }) => (
  <Layout>
    <Seo title="Home" />
    {/* {Parser(page.content)} */}

    <div className="pane bg-neutral-84">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h1>LivePerson’s unique value proposition</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              elementum sollicitudin magna bibendum sit ultricies arcu. Nullam
              tincidunt varius.
            </p>
            <h6 className="mt-4">TRUSTED BY 100K LEADING BRANDS</h6>
            <div className="logo-wall">
              <img src="https://placekitten.com/100/40" alt="" />
              <img src="https://placekitten.com/100/40" alt="" />
              <img src="https://placekitten.com/100/40" alt="" />
              <img src="https://placekitten.com/100/40" alt="" />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <img src="https://placekitten.com/640/480" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div className="pane bg-primary-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h2>What is LivePerson?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
              pellentesque a tincidunt dignissim adipiscing blandit eu. Sagittis
              a, lorem eget nulla porttitor vitae ultricies. At aliquet non
              viverra scelerisque enim sagittis.
            </p>
            <Link className="link link-mt-large" href="#">
              Discover Conversational AI
            </Link>
          </div>
        </div>
      </div>
    </div>

    <LeftRight
      preHeading="UNDERSTAND"
      title="Breathe life into your brand with human centered AI that’s
              anything but artificial."
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imgSrc="https://placekitten.com/640/480"
      repeat="true"
    />

    <LeftRight
      preHeading="CONNECT"
      title="Deepen your understanding of consumers when they feel seen, heard
      and valued."
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imgSrc="https://placekitten.com/640/480"
      imgAlt="alt text"
      repeat="true"
    />

    <LeftRight
      preHeading="OUTCOMES"
      title="Manage consumer conversations simply. Like, seriously simply."
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imgSrc="https://placekitten.com/640/480"
    />

    <StatsGrid
      heading="The infinite power of conversational AI"
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

    <div className="pane bg-primary-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <h2 className="">Headline about our customers</h2>
          </div>
        </div>
        <div className="row row-cols-lg-3 comp-card-grid">
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="card-image-internal"
                  src="https://placekitten.com/224/30"
                  alt=""
                />
                <p className="card-text quote1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labor
                </p>
              </div>
              <div className="card-footer">
                <Link href="#" className="card-link link">
                  Read Customer Story
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="card-image-internal"
                  src="https://placekitten.com/224/30"
                  alt=""
                />
                <p className="card-text quote1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div className="card-footer">
                <Link href="#" className="card-link link">
                  Read Customer Story
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body">
                <img
                  className="card-image-internal"
                  src="https://placekitten.com/224/30"
                  alt=""
                />
                <p className="card-text quote1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div className="card-footer">
                <Link href="#" className="card-link link">
                  Read Customer Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query HomepageId {
    setting: wp {
      allSettings {
        ipAddress
      }
    }
    page: wpPage(isFrontPage: { eq: true }) {
      id
      content
      title
      vimeoVideo
      featuredImage {
        node {
          id
          mediaItemUrl
          mediaType
        }
      }
    }
  }
`;
