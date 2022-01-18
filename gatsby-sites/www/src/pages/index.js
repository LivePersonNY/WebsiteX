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
import PlainContent from '../components/blocks/PlainContent';
import TabsC from '../components/blocks/TabsC';
import TabsB from '../components/blocks/TabsB';
import TabsA from '../components/blocks/TabsA';
import MktoForm from '../components/blocks/MktoForm';
import IconTextA from '../components/blocks/IconTextA';
import IconTextB from '../components/blocks/IconTextB';
import IconTextC from '../components/blocks/IconTextC';
import LogosUniversal from '../components/blocks/LogosUniversal';

const IndexPage = ({ data: { page, setting } }) => (
  <Layout>
    <Seo title="Home" />
    {/* {Parser(page.content)} */}

    <Hero
      header="LivePerson's unique value proposition"
      subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              elementum sollicitudin magna bibendum sit ultricies arcu. Nullam
              tincidunt varius."
      heroImage="https://placekitten.com/640/480"
      heroImageAlt="test"
      logoWall="true"
    />

    <MktoForm formId="2580" runFilters={true} />

    <PlainContent
      colWidth="8"
      heading="What is LivePerson?"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
              pellentesque a tincidunt dignissim adipiscing blandit eu. Sagittis
              a, lorem eget nulla porttitor vitae ultricies. At aliquet non
              viverra scelerisque enim sagittis."
      linkText="Discover Conversational AI"
      linkUrl="#"
    />

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
            <a className="link link-mt-small" href="#">
              Discover Commerce Solutions
            </a>
            <img src="https://placekitten.com/18/18" alt="" />
            <h3>Customer Care</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eros, est dolor ullamcorper dui tellus eleifend.
            </p>
            <a className="link link-mt-small" href="#">
              Discover Customer Care
            </a>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <img src="https://placekitten.com/640/720" alt="" />
          </div>
        </div>
      </div>
    </div>

    <TabsA
      heading="How LivePerson can benefit your customers"
      items={[
        {
          "title": "Ennhance the customer journey",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices.",
          "img": "https://placekitten.com/752/568",
          "imgAlt": "Image Here"
        },
        {
          "title": "Understand customer sentiment",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices.",
          "img": "https://placekitten.com/752/568",
          "imgAlt": "Image Here"
        },
        {
          "title": "Connect with your customers",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices.",
          "img": "https://placekitten.com/752/568",
          "imgAlt": "Image Here"
        },
        {
          "title": "Another benefit goes here",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices.",
          "img": "https://placekitten.com/752/568",
          "imgAlt": "Image Here"
        }
      ]}
    />

    <TabsB
      heading="Why LivePerson"
      items={[
        {
          "tab": "Curiously Human AI",
          "kicker": "CURIOUSLY HUMAN AI",
          "header": "Some branded language about Curiously Human AI",
          "content": "Tanta peter igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima. Instead, oportet omnino quieti de rebus dialecticis differam, et ad certera munera.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://placekitten.com/752/568",
          "imgAlt": "Image Here"
        },
        {
          "tab": "Data that counts",
          "kicker": "TWO",
          "header": "This is two",
          "content": "Tanta peter igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima. Instead, oportet omnino quieti de rebus dialecticis differam, et ad certera munera.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://placekitten.com/752/568",
          "imgAlt": "Image Here"
        },
        {
          "tab": "Values that matter",
          "kicker": "THREE",
          "header": "Three",
          "content": "Tanta peter igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima. Instead, oportet omnino quieti de rebus dialecticis differam, et ad certera munera.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://placekitten.com/752/568",
          "imgAlt": "Image Here"
        }
      ]}
    />

    <TabsC
      heading="A sentence describing the different products and main value proposition"
      items={[
        {
          "pill": "Conversational Cloud",
          "icon": "https://placekitten.com/56/56",
          "iconAlt": "https://placekitten.com/56/56",
          "header": "A branded line of copy or two about product benefit",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://placekitten.com/640/560",
          "imgAlt": "Image Here"
        },
        {
          "pill": "Voice",
          "icon": "https://placekitten.com/56/56",
          "iconAlt": "https://placekitten.com/56/56",
          "header": "A branded line of copy or two about product benefit",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://placekitten.com/640/560",
          "imgAlt": "Image Here"
        },
        {
          "pill": "Managed Services",
          "icon": "https://placekitten.com/56/56",
          "iconAlt": "https://placekitten.com/56/56",
          "header": "A branded line of copy or two about product benefit",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://placekitten.com/640/560",
          "imgAlt": "Image Here"
        },
        {
          "pill": "Bella Health",
          "icon": "https://placekitten.com/56/56",
          "iconAlt": "https://placekitten.com/56/56",
          "header": "A branded line of copy or two about product benefit",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://placekitten.com/640/560",
          "imgAlt": "Image Here"
        }
      ]}
    />

    <CardGrid
      heading="Headline about our customers"
      items={[
        {
          "img":"https://placekitten.com/224/30",
          "imgAlt":"Alt text",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://placekitten.com/224/30",
          "imgAlt":"Alt text",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://placekitten.com/224/30",
          "imgAlt":"Alt text",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
      ]}
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

    <IconTextA 
      heading="Product Features"
      items={[
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Alt text",
          "title":"Intent Manager",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Alt text",
          "title":"Conversation Manager",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Alt text",
          "title":"Conversation Channels",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Alt text",
          "title":"Conversation Builder",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Conversation Orchestrator",
          "title":"Conversation Orchestrator",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Conversation Analytics",
          "title":"Conversation Analytics",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
      ]}
    />

    <IconTextB
      heading="Headline about our customers"
      items={[
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Alt text",
          "title": "Voice",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Alt text",
          "title": "Managed Service",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Alt text",
          "title": "Bella Health",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
      ]}
    />
    
    <IconTextC
      heading="LivePerson for your business"
      items={[
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Alt text",
          "title":"Commerce",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
          "linkText":"Discover Commerce Solutions",
          "linkUrl":"#"
        },
        {
          "img":"https://placekitten.com/64/64",
          "imgAlt":"Alt text",
          "title":"Customer Care",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
          "linkText":"Discover Customer Care",
          "linkUrl":"#"
        },
      ]}
    />

    <LogosUniversal 
      heading="Trusted by the world's biggest brands"
      items={[
        {
          "img":"https://placekitten.com/80/80",
          "imgAlt":"Alt text",
        },
        {
          "img":"https://placekitten.com/241/56",
          "imgAlt":"Alt text",
        },
        {
          "img":"https://placekitten.com/100/40",
          "imgAlt":"Alt text",
        },
        {
          "img":"https://placekitten.com/185/48",
          "imgAlt":"Alt text",
        },
        {
          "img":"https://placekitten.com/135/40",
          "imgAlt":"Alt text",
        },
      ]}
    />

  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query HomepageId {
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
