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
import QuoteSlider from '../components/blocks/QuoteSlider';
import ContainedContent from '../components/blocks/ContainedContent';
import ContentCTA from '../components/blocks/ContentCTA';
import SideBySide from '../components/blocks/SideBySide';
import IconTextD from '../components/blocks/IconTextD';
import IconTextCardStack from '../components/blocks/IconTextCardStack';
import ScrollHorizontalText from '../components/blocks/ScrollHorizontalText';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* {Parser(page.content)} */}

    <Hero
      header="LivePerson's unique value proposition"
      subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              elementum sollicitudin magna bibendum sit ultricies arcu. Nullam
              tincidunt varius."
      heroImage="https://picsum.photos/640/480?random=1"
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
      imgSrc="https://picsum.photos/640/480?random=2"
      repeat="true"
    />

    <LeftRight
      preHeading="CONNECT"
      title="Deepen your understanding of consumers when they feel seen, heard
      and valued."
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imgSrc="https://picsum.photos/640/480?random=3"
      imgAlt="alt text"
      repeat="true"
    />

    <LeftRight
      preHeading="OUTCOMES"
      title="Manage consumer conversations simply. Like, seriously simply."
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imgSrc="https://picsum.photos/640/480?random=4"
    />

    <StatsGrid
      heading="The infinite power of conversational AI"
      items={[
        {
          "stat":"2.5x",
          "content":"Increased ad conversions"
        },
        {
          "stat":"20%",
          "content":"Increased sales conversions"
        },
        {
          "stat":"50%",
          "content":"Reduced labor costs"
        },
        {
          "stat":"20%",
          "content":"Increased CSAT score"
        },
        {
          "stat":"20%",
          "content":"Increased CSAT score"
        }
      ]}
    />

    <div className="pane bg-primary-light">
      <div className="container comp-left-right">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h6>PRE-HEADER TEXT</h6>
            <h2>LivePerson for your business</h2>
            <img src="https://picsum.photos/18/18" alt="" />
            <h3>Commerce</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              eros, est dolor ullamcorper dui tellus eleifend.
            </p>
            <a className="link link-mt-small" href="#">
              Discover Commerce Solutions
            </a>
            <img src="https://picsum.photos/18/18" alt="" />
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
            <img src="https://picsum.photos/640/720" alt="" />
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
          "img": "https://picsum.photos/752/568?random=1",
          "imgAlt": "Image Here"
        },
        {
          "title": "Understand customer sentiment",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices.",
          "img": "https://picsum.photos/752/568?random=2",
          "imgAlt": "Image Here"
        },
        {
          "title": "Connect with your customers",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices.",
          "img": "https://picsum.photos/752/568?random=3",
          "imgAlt": "Image Here"
        },
        {
          "title": "Another benefit goes here",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ultrices orci morbi elit platea vel nec varius. Augue tortor ac cursus id fermentum. Odio libero a, posuere ultrices.",
          "img": "https://picsum.photos/752/568?random=4",
          "imgAlt": "Image Here"
        }
      ]}
    />

    <TabsB
      heading="Why LivePerson"
      items={[
        {
          "title": "Curiously Human AI",
          "kicker": "CURIOUSLY HUMAN AI",
          "header": "Some branded language about Curiously Human AI",
          "body": "Tanta peter igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima. Instead, oportet omnino quieti de rebus dialecticis differam, et ad certera munera.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/752/568?random=5",
          "imgAlt": "Image Here"
        },
        {
          "title": "Data that counts",
          "kicker": "TWO",
          "header": "This is two",
          "body": "Tanta peter igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima. Instead, oportet omnino quieti de rebus dialecticis differam, et ad certera munera.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/752/568?random=6",
          "imgAlt": "Image Here"
        },
        {
          "title": "Values that matter",
          "kicker": "THREE",
          "header": "Three",
          "body": "Tanta peter igitur, ne sineres memini fieri etiam aliquam inclinationem ad consequendum minima. Instead, oportet omnino quieti de rebus dialecticis differam, et ad certera munera.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/752/568?random=7",
          "imgAlt": "Image Here"
        }
      ]}
    />

    <TabsC
      heading="A sentence describing the different products and main value proposition"
      items={[
        {
          "pill": "Conversational Cloud",
          "icon": "https://picsum.photos/56/56?random=1",
          "iconAlt": "https://picsum.photos/56/56",
          "header": "A branded line of copy or two about product benefit",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/640/560?random=1",
          "imgAlt": "Image Here"
        },
        {
          "pill": "Voice",
          "icon": "https://picsum.photos/56/56?random=2",
          "iconAlt": "https://picsum.photos/56/56",
          "header": "A branded line of copy or two about product benefit",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/640/560?random=2",
          "imgAlt": "Image Here"
        },
        {
          "pill": "Managed Services",
          "icon": "https://picsum.photos/56/56?random=3",
          "iconAlt": "https://picsum.photos/56/56",
          "header": "A branded line of copy or two about product benefit",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/640/560?random=3",
          "imgAlt": "Image Here"
        },
        {
          "pill": "Bella Health",
          "icon": "https://picsum.photos/56/56?random=4",
          "iconAlt": "https://picsum.photos/56/56",
          "header": "A branded line of copy or two about product benefit",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/640/560?random=4",
          "imgAlt": "Image Here"
        }
      ]}
    />

    <CardGrid
      heading="Headline about our customers"
      items={[
        {
          "img":"https://picsum.photos/224/30?random=1",
          "imgAlt":"Alt text",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/224/30?random=2",
          "imgAlt":"Alt text",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/224/30?random=3",
          "imgAlt":"Alt text",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
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
      imgSrc="https://picsum.photos/640/480"
      linkText="Discover Commerce Solutions"
      linkUrl="/"
      flipColumns="true"
    />

    <CalloutGrid
      heading="Related Insights"
      linkText="View All Posts"
      linkUrl="#"
      img1Src="https://picsum.photos/416/232?random=1"
      img1Alt="Alt text"
      callout1Category="CATEGORY"
      callout1Content="Blog post title goes right here across two lines"
      callout1Author="By Name Lastname"
      callout1LinkUrl="#"
      img2Src="https://picsum.photos/416/232?random=2"
      img2Alt="Alt text"
      callout2Category="CATEGORY"
      callout2Content="Blog post title goes right here across two lines"
      callout2Author="By Name Lastname"
      callout2LinkUrl="#"
      img3Src="https://picsum.photos/416/232?random=3"
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
          "img":"https://picsum.photos/64/64?random=1",
          "imgAlt":"Alt text",
          "title":"Intent Manager",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://picsum.photos/64/64?random=2",
          "imgAlt":"Alt text",
          "title":"Conversation Manager",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://picsum.photos/64/64?random=3",
          "imgAlt":"Alt text",
          "title":"Conversation Channels",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://picsum.photos/64/64?random=4",
          "imgAlt":"Alt text",
          "title":"Conversation Builder",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://picsum.photos/64/64?random=5",
          "imgAlt":"Conversation Orchestrator",
          "title":"Conversation Orchestrator",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://picsum.photos/64/64?random=6",
          "imgAlt":"Conversation Analytics",
          "title":"Conversation Analytics",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
      ]}
    />

    <IconTextB
      heading="Headline about our customers"
      items={[
        {
          "img":"https://picsum.photos/64/64?random=7",
          "imgAlt":"Alt text",
          "title": "Voice",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/64/64?random=8",
          "imgAlt":"Alt text",
          "title": "Managed Service",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/64/64?random=9",
          "imgAlt":"Alt text",
          "title": "Bella Health",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
      ]}
    />
    
    <IconTextC
      heading="LivePerson for your business"
      items={[
        {
          "img":"https://picsum.photos/64/64?random=10",
          "imgAlt":"Alt text",
          "title":"Commerce",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
          "linkText":"Discover Commerce Solutions",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/64/64?random=11",
          "imgAlt":"Alt text",
          "title":"Customer Care",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
          "linkText":"Discover Customer Care",
          "linkUrl":"#"
        },
      ]}
    />

    <IconTextD
      header="How Rapid Testing Can Help IconTextD"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices ac sagittis elit amet id. Justo arcu pharetra et montes, neque nisi. Egestas dictum viverra faucibus."
      items={[
        {
          "img":"https://picsum.photos/56/56?random=10",
          "imgAlt":"Alt text",
          "title":"Highly Accurate",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://picsum.photos/56/56?random=11",
          "imgAlt":"Alt text",
          "title":"Low Cost",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://picsum.photos/56/56?random=12",
          "imgAlt":"Alt text",
          "title":"Fast Results",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
        {
          "img":"https://picsum.photos/56/56?random=13",
          "imgAlt":"Alt text",
          "title":"Self-administrable",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
        },
      ]}
    />

    <IconTextCardStack
      items={[
        {
          "img":"https://picsum.photos/64/64?random=7",
          "imgAlt":"Alt text",
          "title": "Voice",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/64/64?random=8",
          "imgAlt":"Alt text",
          "title": "Managed Service",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/64/64?random=9",
          "imgAlt":"Alt text",
          "title": "Bella Health",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/64/64?random=10",
          "imgAlt":"Alt text",
          "title": "Bella Health",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/64/64?random=11",
          "imgAlt":"Alt text",
          "title": "Bella Health",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "cardCTA":true,
          "content":"Call to action goes right here across two lines",
          "btnText":"Primary CTA",
          "btnUrl":"#"
        },
      ]}
    />

    <LogosUniversal 
      heading="Trusted by the world's biggest brands"
      items={[
        {
          "img":"https://picsum.photos/80/80",
          "imgAlt":"Alt text",
        },
        {
          "img":"https://picsum.photos/241/56",
          "imgAlt":"Alt text",
        },
        {
          "img":"https://picsum.photos/100/40",
          "imgAlt":"Alt text",
        },
        {
          "img":"https://picsum.photos/185/48",
          "imgAlt":"Alt text",
        },
        {
          "img":"https://picsum.photos/135/40",
          "imgAlt":"Alt text",
        },
      ]}
    />

    <QuoteSlider
      header="Why customers love Voice"
      items={[
        {
          "img":"https://picsum.photos/304/360",
          "imgAlt":"Alt text",
          "brandImg":"https://picsum.photos/120/28",
          "brandImgAlt":"Alt text",
          "author":"Richard Branson · CEO",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        }
      ]}
    />

    <ContainedContent 
      header="Call to action goes here"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dictum neque nunc, morbi. Laoreet nam magna rhoncus rutrum ut condimentum."
      linkText="Primary CTA"
      linkUrl="#"
    />

    <ContentCTA
      content="Learn more about Voicebase"
      linkText="Explore Voicebase"
      linkUrl="#"
    />

    <SideBySide
      items={[
        {
          "imgSrc":"https://picsum.photos/640/428",
          "imgAlt":"test",
          "header":"Transform voice networks",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sagittis senectus iaculis sem nisi, purus dignissim maecenas. Imperdiet eget scelerisque iaculis ut aliquam nisl, auctor. Euismod turpis mauris in."
        },
        {
          "imgSrc":"https://picsum.photos/640/428?random=1",
          "imgAlt":"test",
          "header":"Work with any voice vendor",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sagittis senectus iaculis sem nisi, purus dignissim maecenas. Imperdiet eget scelerisque iaculis ut aliquam nisl, auctor. Euismod turpis mauris in."
        },
      ]}
    />

    <ScrollHorizontalText
      header="Included Features"
      items={[
        {
          "blockTitle":"AI & Automations",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum felis ipsum tortor. Blandit nascetur laoreet nisi, donec risus, enim ornare scelerisque. Sagittis cursus commodo purus urna tempus interdum blandit. Et, eget justo mauris posuere cras consectetur mi lectus cum.",
        },
        {
          "blockTitle":"Messaging Channels",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum felis ipsum tortor. Blandit nascetur laoreet nisi, donec risus, enim ornare scelerisque. Sagittis cursus commodo purus urna tempus interdum blandit. Et, eget justo mauris posuere cras consectetur mi lectus cum.",
        },
        {
          "blockTitle":"Integration Hub Base",
          "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum felis ipsum tortor. Blandit nascetur laoreet nisi, donec risus, enim ornare scelerisque. Sagittis cursus commodo purus urna tempus interdum blandit. Et, eget justo mauris posuere cras consectetur mi lectus cum.",
        },
      ]}
    />

  </Layout>
);

export default IndexPage;
