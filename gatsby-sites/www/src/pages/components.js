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
import ScrollHorizontalText from '../components/blocks/ScrollHorizontalText';
import Faq from '../components/blocks/Faq';
import CardGridB from '../components/blocks/CardGridB';
import ProgramCard from '../components/blocks/ProgramCard';
import TeamCards from '../components/blocks/TeamCards';
import HorizontalText from '../components/blocks/HorizontalText';
import ExecutiveCard from '../components/blocks/ExecutiveCard';
import BoardCards from '../components/blocks/BoardCards';
import ScrollContent from '../components/blocks/ScrollContent';
import HeroLottie from '../components/blocks/HeroLottie';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* {Parser(page.content)} */}

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> Hero</p>
          <p><span className="fw-bold">CSS Class Name:</span> hero</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector - bg-primary-light/bg-neutral-96/bg-blue-20/bg-lavendar-20</li>
            <li><span className="fw-bold">header: </span> Text</li>
            <li><span className="fw-bold">subHeader: </span> Text</li>
            <li><span className="fw-bold">heroImage: </span> Image</li>
            <li><span className="fw-bold">heroImageAlt: </span> Text</li>
            <li><span className="fw-bold">heroVariant: </span> Selector - logo-wall/buttons</li>
            <li><span className="fw-bold">underBodyImg: </span> Image (when using logo-wall)</li>
            <li><span className="fw-bold">primaryBtnText: </span> Text</li>
            <li><span className="fw-bold">primaryBtnLink: </span> Url</li>
            <li><span className="fw-bold">secondaryBtnText: </span> Text</li>
            <li><span className="fw-bold">secondaryBtnLink: </span> Url</li>
          </ul>
        </div>
      </div>
    </div>

    <Hero
      backgroundColor="bg-neutral-96"
      header="LivePerson's unique value proposition"
      subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              elementum sollicitudin magna bibendum sit ultricies arcu. Nullam
              tincidunt varius."
      heroImage="https://picsum.photos/640/480?random=1"
      heroImageAlt="test"
      heroVariant="buttons"
      underBodyImg="https://picsum.photos/360/40?random=1"
      underBodyImgAlt="test"
      primaryBtnText="Get Demo"
      primaryBtnLink="#"
      secondaryBtnText="Get Moar Demos"
      secondaryBtnLink="#"
    />

    <HeroLottie
      backgroundColor="bg-neutral-96"
      header="LivePerson's unique value proposition"
      subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
              elementum sollicitudin magna bibendum sit ultricies arcu. Nullam
              tincidunt varius."
      heroVariant="buttons"
      underBodyImg="https://picsum.photos/360/40?random=1"
      underBodyImgAlt="test"
      primaryBtnText="Get Demso"
      primaryBtnLink="#"
      secondaryBtnText="Get Moar Demos"
      secondaryBtnLink="#"
      runFilters={true}
      removePB={true}
    />



    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> PlainContent</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-plain-content</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector - bg-primary-light/bg-neutral-96/bg-blue-20/bg-lavendar-20</li>
            <li><span className="fw-bold">colWidth: </span> Number</li>            
            <li><span className="fw-bold">headerLevel: </span> Selector</li>
            <li><span className="fw-bold">alignmentClass: </span></li>
            <li><span className="fw-bold">header: </span> Text</li>
            <li><span className="fw-bold">body: </span> Text</li>
            <li><span className="fw-bold">linkText: </span> Text</li>
            <li><span className="fw-bold">linkUrl: </span> Url</li>
          </ul>
        </div>
      </div>
    </div>

    <PlainContent
      backgroundColor="bg-primary-light"
      colWidth="8"
      kicker="I kick"
      header="What is LivePerson?"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
              pellentesque a tincidunt dignissim adipiscing blandit eu. Sagittis
              a, lorem eget nulla porttitor vitae ultricies. At aliquet non
              viverra scelerisque enim sagittis."
      linkText="Discover Conversational AI"
      linkUrl="#"
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> LeftRight</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-left-right</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">kicker: </span> Text</li>            
            <li><span className="fw-bold">title: </span> Text</li>
            <li><span className="fw-bold">body: </span> Text</li>
            <li><span className="fw-bold">imgSrc: </span> Image</li>
            <li><span className="fw-bold">repeat: </span> Toggle (Use if there will be another LeftRight underneath this one. It will reduce the padding between them)</li>
            <li><span className="fw-bold">linkText: </span> Text (Secondary Button Styles)</li>
            <li><span className="fw-bold">linkUrl: </span> Url</li>
            <li><span className="fw-bold">linkSecondaryText: </span> Text (Tertiary Button/Link Styles)</li>
            <li><span className="fw-bold">linkSecondaryUrl: </span> Url</li>
            <li><span className="fw-bold">flipColumns: </span> Toggle (flip columns so image is on the right)</li>
          </ul>
        </div>
      </div>
    </div>

    <LeftRight
      backgroundColor="bg-primary-light"
      kicker="UNDERSTAND"
      title="Breathe life into your brand with human centered AI that’s
              anything but artificial."
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imgSrc="https://picsum.photos/640/480?random=2"
      repeat="true"
      linkText="Secondary"
      linkUrl="#"
      linkSecondaryText="Tertiary"
      linkSecondaryUrl="#"
    />

    <LeftRight
      backgroundColor="bg-primary-light"
      kicker="CONNECT"
      title="Deepen your understanding of consumers when they feel seen, heard
      and valued."
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imgSrc="https://picsum.photos/640/480?random=3"
      imgAlt="alt text"
      repeat="true"
      linkSecondaryText="Tertiary"
      linkSecondaryUrl="#"
    />

    <LeftRight
      backgroundColor="bg-primary-light"
      kicker="OUTCOMES"
      title="Manage consumer conversations simply. Like, seriously simply."
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imgSrc="https://picsum.photos/640/480?random=4"
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> StatsGrid</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-stat-grid</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>            
            <li><span className="fw-bold">Stat: </span> Array
              <ul>
                <li><span className="fw-bold">stat: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <StatsGrid
      backgroundColor="bg-primary-light"
      header="The infinite power of conversational AI"
      items={[
        {
          "stat":"2.5x",
          "body":"Increased ad conversions"
        },
        {
          "stat":"20%",
          "body":"Increased sales conversions"
        },
        {
          "stat":"50%",
          "body":"Reduced labor costs"
        },
        {
          "stat":"20%",
          "body":"Increased CSAT score"
        },
        {
          "stat":"20%",
          "body":"Increased CSAT score"
        }
      ]}
    />

    {/* <div className="pane bg-primary-light">
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
    </div> */}

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> TabsA</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-tabs-a</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>            
            <li><span className="fw-bold">Tab: </span> Array
              <ul>
                <li><span className="fw-bold">title: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
                <li><span className="fw-bold">img: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <TabsA
      backgroundColor="bg-primary-light"
      header="How LivePerson can benefit your customers"
      body="Our team can be your experts or support your experts. Together, we’ll co-innovate and help deliver personalized customer experiences at scale"
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

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> TabsB</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-tabs-b</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>            
            <li><span className="fw-bold">Tab: </span> Array
              <ul>
                <li><span className="fw-bold">title: </span> Text (Tab title)</li>
                <li><span className="fw-bold">kicker: </span> Text (Kicker of body area)</li>
                <li><span className="fw-bold">header: </span> Text (Title of body area)</li>
                <li><span className="fw-bold">body: </span> Text</li>
                <li><span className="fw-bold">linkText: </span> Text</li>
                <li><span className="fw-bold">linkUrl: </span> Url</li>
                <li><span className="fw-bold">img: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <TabsB
      backgroundColor="bg-primary-light"
      header="Why LivePerson"
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

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> TabsC</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-tabs-c</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>    
            <li><span className="fw-bold">mobilePillsWidth: </span> Pixels ex. "700px" (I will see if theres a way to automatically set it, but right now its needed to get that scroll/swipe effect for mobile)</li>    
            <li><span className="fw-bold">Tab: </span> Array
              <ul>
                <li><span className="fw-bold">kicker: </span> Text</li>
                <li><span className="fw-bold">title: </span> Text (Tab title)</li>
                <li><span className="fw-bold">icon: </span> Image</li>
                <li><span className="fw-bold">iconAlt: </span> Text</li>
                <li><span className="fw-bold">kicker: </span> Text (Kicker of body area)</li>
                <li><span className="fw-bold">header: </span> Text (Title of body area)</li>
                <li><span className="fw-bold">body: </span> Text</li>
                <li><span className="fw-bold">linkText: </span> Text</li>
                <li><span className="fw-bold">linkUrl: </span> Url</li>
                <li><span className="fw-bold">img: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <TabsC
      backgroundColor="bg-blue-20"
      header="A sentence describing the different products and main value proposition"
      runFilters={true}
      mobilePillsWidth="700px"
      items={[
        {
          "kicker":"kicker",
          "title": "Conversational Cloud",
          "icon": "https://picsum.photos/56/56?random=1",
          "iconAlt": "https://picsum.photos/56/56",
          "header": "A branded line of copy or two about product benefit",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/640/560?random=1",
          "imgAlt": "Image Here"
        },
        {
          "title": "Voice",
          "icon": "https://picsum.photos/56/56?random=2",
          "iconAlt": "https://picsum.photos/56/56",
          "header": "A branded line of copy or two about product benefit",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/640/560?random=2",
          "imgAlt": "Image Here"
        },
        {
          "kicker":"kicker",
          "title": "Managed Services",
          "icon": "https://picsum.photos/56/56?random=3",
          "iconAlt": "https://picsum.photos/56/56",
          "header": "A branded line of copy or two about product benefit",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/640/560?random=3",
          "imgAlt": "Image Here"
        },
        {
          "title": "Bella Health",
          "icon": "https://picsum.photos/56/56?random=4",
          "iconAlt": "https://picsum.photos/56/56",
          "header": "A branded line of copy or two about product benefit",
          "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
          "linkText": "Discover Customer Care",
          "linkUrl" : "#",
          "img": "https://picsum.photos/640/560?random=4",
          "imgAlt": "Image Here"
        }
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> CardGrid</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-card-grid</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>     
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">img: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
                <li><span className="fw-bold">linkText: </span> Text</li>
                <li><span className="fw-bold">linkUrl: </span> Url</li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <CardGrid
      backgroundColor="bg-primary-light"
      header="Headline about our customers"
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
      ]}
    />

    <LeftRight
      backgroundColor="bg-primary-light"
      kicker="WHY LIVEPERSON"
      title="Branded copy that speaks to LivePerson’s values"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris."
      imgSrc="https://picsum.photos/640/480"
      linkText="Discover Commerce Solutions"
      linkUrl="/"
      flipColumns="true"
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> CalloutGrid</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-callout-grid</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>    
            <li><span className="fw-bold">linkText: </span> Text (top right link)</li>
            <li><span className="fw-bold">linkUrl: </span> Url</li> 
            <li><span className="fw-bold">Callout: </span> Array
              <ul>
                <li><span className="fw-bold">imgSrc: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">category: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
                <li><span className="fw-bold">author: </span> Text</li>
                <li><span className="fw-bold">linkUrl: </span> Url</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <CalloutGrid
      backgroundColor="bg-neutral-84"
      header="Related Insights"
      linkText="View All Posts"
      linkUrl="#"
      items={[
        {
          "imgSrc":"https://picsum.photos/416/232?random=1",
          "imgAlt":"Alt text",
          "category":"Category",
          "body":"Blog post title goes right here across two lines",
          "author":"By Name Lastname",
          "linkUrl":"#",
        },
        {
          "imgSrc":"https://picsum.photos/416/232?random=2",
          "imgAlt":"Alt text",
          "category":"Category",
          "body":"Blog post title goes right here across two lines",
          "linkUrl":"#",
        },
        {
          "imgSrc":"https://picsum.photos/416/232?random=3",
          "imgAlt":"Alt text",
          "category":"Category test",
          "body":"Blog post title goes right here across two lines",
          "author":"By Name Lastname",
          "linkUrl":"#",
        },
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> IconTextA</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-icon-text-a</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>    
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">img: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">title: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <IconTextA 
      backgroundColor="bg-neutral-92"
      header="Product Features"
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
      ]}
      cardCTA={true}
      btnText="Primary CTA"
      btnUrl="#"
      cardCTAbody="Call to action goes right here"
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> IconTextB</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-icon-text-b</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>    
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">img: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">title: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
                <li><span className="fw-bold">linkText: </span> Text</li>
                <li><span className="fw-bold">linkUrl: </span> Url</li>
              </ul>
            </li>
          </ul>
          <li><span className="fw-bold">cardCTA:</span> Selector (this will include the CTA card at the end</li>
          <li><span className="fw-bold">cardCTAbody: </span> Text</li>
          <li><span className="fw-bold">btnText: </span> Text</li>
          <li><span className="fw-bold">btnUrl: </span> Url</li>
        </div>
      </div>
    </div>

    <IconTextB
      backgroundColor="bg-neutral-92"
      header="Headline about our customers"
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
        {
          "img":"https://picsum.photos/64/64?random=9",
          "imgAlt":"Alt text",
          "title": "Bella Health",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
      ]}
      cardCTA={true}
      btnText="Primary CTA"
      btnUrl="#"
      cardCTAbody="Call to action goes right here"
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> IconTextC</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-icon-text-a</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>    
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">img: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">title: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
                <li><span className="fw-bold">linkText: </span> Text</li>
                <li><span className="fw-bold">linkUrl: </span> Url</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
    <IconTextC
      backgroundColor="bg-primary-light"
      header="LivePerson for your business"
      items={[
        {
          "img":"https://picsum.photos/64/64?random=10",
          "imgAlt":"Alt text",
          "title":"Commerce",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan arcu dis commodo risus.",
          "linkText":"Discover Commerce Solutions",
          "linkUrl":"#"
        },
      ]}
      cardCTA={true}
      btnText="Primary CTA"
      btnUrl="#"
      cardCTAbody="Call to action goes right here"
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> IconTextD</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-icon-text-d</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>    
            <li><span className="fw-bold">body: </span> Text</li>    
            <li><span className="fw-bold">centerBody: </span> Selector (will center all card body</li>    
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">img: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">title: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <IconTextD
      backgroundColor="bg-primary-light"
      header="How Rapid Testing Can Help IconTextD+E"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra ultrices ac sagittis elit amet id. Justo arcu pharetra et montes, neque nisi. Egestas dictum viverra faucibus."
      centerBody="true"
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
      ]}
      cardCTA={true}
      btnText="Primary CTA"
      btnUrl="#"
      cardCTAbody="Call to action goes right here"
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> LogosUniversal</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-logo-universal</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>    
            <li><span className="fw-bold">Image: </span> Array
              <ul>
                <li><span className="fw-bold">img: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <LogosUniversal 
      backgroundColor="bg-neutral-92"
      header="Trusted by the world's biggest brands"
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

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> QuoteSlider</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-quote-slider</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>    
            <li><span className="fw-bold">Quote: </span> Array
              <ul>
                <li><span className="fw-bold">img: </span> Image (the Big image on left)</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">brandImg: </span> Image (the Small image next to author)</li>
                <li><span className="fw-bold">brandImgAlt: </span> Text</li>
                <li><span className="fw-bold">author: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
                <li><span className="fw-bold">linkText: </span> Text</li>
                <li><span className="fw-bold">linkUrl: </span> Url</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <QuoteSlider
      backgroundColor="bg-neutral-92"
      header="Why customers love Voice"
      items={[
        {
          "img":"https://picsum.photos/304/360",
          "imgAlt":"Alt text",
          "brandImg":"https://picsum.photos/120/28",
          "brandImgAlt":"Alt text",
          "author":"Richard Branson · CEO",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/304/360",
          "imgAlt":"Alt text",
          "brandImg":"https://picsum.photos/120/28",
          "brandImgAlt":"Alt text",
          "author":"Richard Branson · CEO",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "img":"https://picsum.photos/304/360",
          "imgAlt":"Alt text",
          "brandImg":"https://picsum.photos/120/28",
          "brandImgAlt":"Alt text",
          "author":"Richard Branson · CEO",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        }
      ]}
    />

    <QuoteSlider
      backgroundColor="bg-neutral-92"
      header="Why customers love Voice"
      items={[
        {
          "brandImg":"https://picsum.photos/120/28",
          "brandImgAlt":"Alt text",
          "author":"Richard Branson · CEO",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        }
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> ContainedContent</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-contained-content</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>    
            <li><span className="fw-bold">body: </span> Text</li>    
            <li><span className="fw-bold">linkText: </span> Text</li>
            <li><span className="fw-bold">linkUrl: </span> Url</li>
            <li><span className="fw-bold">imgSrc: </span> Image (the Big image on left)</li>
            <li><span className="fw-bold">imgAlt: </span> Text</li>
          </ul>
        </div>
      </div>
    </div>

    <ContainedContent 
      backgroundColor="bg-primary-light"
      header="Call to action goes here"
      body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam dictum neque nunc, morbi. Laoreet nam magna rhoncus rutrum ut condimentum."
      linkText="Primary CTA"
      linkUrl="#"
      imgSrc="https://picsum.photos/1088/544"
      imgAlt="test"
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> ContentCTA</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-content-cta</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li> 
            <li><span className="fw-bold">body: </span> Text</li>    
            <li><span className="fw-bold">linkText: </span> Text</li>
            <li><span className="fw-bold">linkUrl: </span> Url</li>
          </ul>
        </div>
      </div>
    </div>

    <ContentCTA
      backgroundColor="bg-primary-light"
      body="Learn more about Voicebase"
      linkText="Explore Voicebase"
      linkUrl="#"
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> SideBySide</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-side-side</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">imgSrc: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">header: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <SideBySide
      imgLeftSrc="https://picsum.photos/1088/544"
      headerLeft="Header"
      bodyLeft="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum felis ipsum tortor. Blandit nascetur laoreet nisi, donec risus, enim ornare scelerisque. Sagittis cursus commodo purus urna tempus interdum blandit. Et, eget justo mauris posuere cras consectetur mi lectus cum."
      imgRightSrc="https://picsum.photos/1088/544"
      headerRight="Header"
      bodyRight="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum felis ipsum tortor. Blandit nascetur laoreet nisi, donec risus, enim ornare scelerisque. Sagittis cursus commodo purus urna tempus interdum blandit. Et, eget justo mauris posuere cras consectetur mi lectus cum.m ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum felis ipsum tortor. Blandit nascetur laoreet nisi, donec risus, enim ornare scelerisque. Sagittis c"
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> ScrollHorizontalText</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-scroll-horizontal-text</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>
            <li><span className="fw-bold">Text Block: </span> Array
              <ul>
                <li><span className="fw-bold">blockTitle: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ScrollHorizontalText
      backgroundColor="bg-primary-light"
      header="Included Features"
      items={[
        {
          "blockTitle":"AI & Automations",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum felis ipsum tortor. Blandit nascetur laoreet nisi, donec risus, enim ornare scelerisque. Sagittis cursus commodo purus urna tempus interdum blandit. Et, eget justo mauris posuere cras consectetur mi lectus cum.",
        },
        {
          "blockTitle":"Messaging Channels",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum felis ipsum tortor. Blandit nascetur laoreet nisi, donec risus, enim ornare scelerisque. Sagittis cursus commodo purus urna tempus interdum blandit. Et, eget justo mauris posuere cras consectetur mi lectus cum.",
        },
        {
          "blockTitle":"Integration Hub Base",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel fermentum felis ipsum tortor. Blandit nascetur laoreet nisi, donec risus, enim ornare scelerisque. Sagittis cursus commodo purus urna tempus interdum blandit. Et, eget justo mauris posuere cras consectetur mi lectus cum.",
        },
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> Faq</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-faq</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">kicker: </span> Text</li>
            <li><span className="fw-bold">header: </span> Text</li>
            <li><span className="fw-bold">btnText: </span> Text</li>
            <li><span className="fw-bold">btnUrl: </span> URL</li>
            <li><span className="fw-bold">FAQ items: </span> Array
              <ul>
                <li><span className="fw-bold">title: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Faq 
      backgroundColor="bg-primary-light"
      kicker="CONVERSATIONAL cloud"
      header="Pricing FAQs"
      btnText="Primary CTA"
      btnUrl="#"
      items={[
        {
          "title":"A frequently asked question goes right here?",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "title":"A longer frequently asked question goes right here?",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "title":"A frequently asked question goes right here?",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "title":"A longer frequently asked question goes right here?",
          "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> CardGridB</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-card-grid-b</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">backgroundColor:</span> Selector</li>
            <li><span className="fw-bold">header: </span> Text</li>
            <li><span className="fw-bold">body: </span> Text</li>
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">imgSrc: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">cardTitle: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
                <li><span className="fw-bold">linkText: </span> Text</li>
                <li><span className="fw-bold">linkUrl: </span> URL</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <CardGridB
      backgroundColor="bg-neutral-92"
      header="Compliance &amp; Certifications"
      body="Et omnia in potestate nostra esse natura liber, libera, libere valeant; sed illis non est in nostra potestate sunt infirmi, servilis, licet, lex pertinet. Tenete ergo."
      items={[
        {
          "imgSrc":"https://picsum.photos/304/168?random=1",
          "imgAlt":"Alt text",
          "cardTitle":"SSAE 18 SOC2+HIPAA (formerly SAS70)",
          "body":"We conduct yearly data center audits and our reporting is compliant with the American Institute of Certified Public Accountants (AICPA).",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "imgSrc":"https://picsum.photos/304/168?random=2",
          "imgAlt":"Alt text",
          "cardTitle":"ISO 27001",
          "body":"Our Information Security Management System is certified for ISO compliance.",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "imgSrc":"https://picsum.photos/304/168?random=3",
          "imgAlt":"Alt text",
          "cardTitle":"PCI DSS 3.2.1",
          "body":"We handle payment data and secure transactions in compliance with Payment Card Industry Data Security Standards 3.2.1.",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "imgSrc":"https://picsum.photos/304/168?random=1",
          "imgAlt":"Alt text",
          "cardTitle":"SSAE 18 SOC2+HIPAA (formerly SAS70)",
          "body":"We conduct yearly data center audits and our reporting is compliant with the American Institute of Certified Public Accountants (AICPA).",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "imgSrc":"https://picsum.photos/304/168?random=2",
          "imgAlt":"Alt text",
          "cardTitle":"ISO 27001",
          "body":"Our Information Security Management System is certified for ISO compliance.",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
        {
          "imgSrc":"https://picsum.photos/304/168?random=3",
          "imgAlt":"Alt text",
          "cardTitle":"PCI DSS 3.2.1",
          "body":"We handle payment data and secure transactions in compliance with Payment Card Industry Data Security Standards 3.2.1.",
          "linkText":"Read Customer Story",
          "linkUrl":"#"
        },
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> ProgramCard</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-program-card</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">imgSrc: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">kicker: </span> Text</li>
                <li><span className="fw-bold">header: </span> Text</li>
                <li><span className="fw-bold">eventDate: </span> Text</li>
                <li><span className="fw-bold">eventTime: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
                <li><span className="fw-bold">btnText: </span> Text</li>
                <li><span className="fw-bold">btnUrl: </span> URL</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ProgramCard
      backgroundColor="bg-primary-light"
      items={[
        {
          "imgSrc":"https://picsum.photos/304/280?random=1",
          "imgAlt":"Alt text",
          "kicker":"Earnings Call",
          "header":"Q3 2021 LivePerson Inc. Earnings Conference Call",
          "eventDate":"November 10, 2020",
          "eventTime":"9:30am – 10:30am",
          "body":"Supporting Materials: <a href='#'>Q3 earnings press release</a> <a href='#'>Q3 earnings call supplemental slides</a>",
          "btnText":"Listen to webcast",
          "btnUrl":"#"
        },
        {
          "imgSrc":"https://picsum.photos/304/280?random=2",
          "imgAlt":"Alt text",
          "kicker":"Earnings Call",
          "header":"Q3 2021 LivePerson Inc. Earnings Conference Call",
          "eventDate":"November 10, 2020",
          "eventTime":"9:30am – 10:30am",
          "body":"Supporting Materials",
          "btnText":"Listen to webcast",
          "btnUrl":"#"
        },
        {
          "imgSrc":"https://picsum.photos/304/280?random=3",
          "imgAlt":"Alt text",
          "kicker":"Earnings Call",
          "header":"Q3 2021 LivePerson Inc. Earnings Conference Call",
          "eventDate":"November 10, 2020",
          "eventTime":"9:30am – 10:30am",
          "body":"Supporting Materials",
        }
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> TeamCards</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-team-cards</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">imgSrc: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">name: </span> Text</li>
                <li><span className="fw-bold">title: </span> Text</li>
                <li><span className="fw-bold">btnText: </span> Text</li>
                <li><span className="fw-bold">linkedInUrl: </span> URL</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <TeamCards
      backgroundColor="bg-neutral-92"
      header="Meet the Data Science Team"
      items={[
        {
          "imgSrc":"https://picsum.photos/304/280?random=1",
          "imgAlt":"Alt text",
          "name":"Firstname Lastname",
          "title":"Title / Position",
          "btnText":"Connect With Person",
          "linkedInUrl":"#",
        },
        {
          "imgSrc":"https://picsum.photos/304/280?random=2",
          "imgAlt":"Alt text",
          "name":"Firstname Lastname",
          "title":"Title / Position",
          "btnText":"Connect With Person",
          "linkedInUrl":"#",
        },
        {
          "imgSrc":"https://picsum.photos/304/280?random=3",
          "imgAlt":"Alt text",
          "name":"Firstname Lastname",
          "title":"Title / Position",
          "btnText":"Connect With Person",
          "linkedInUrl":"#",
        },
        {
          "imgSrc":"https://picsum.photos/304/280?random=4",
          "imgAlt":"Alt text",
          "name":"Firstname Lastname",
          "title":"Title / Position",
          "btnText":"Connect With Person",
          "linkedInUrl":"#",
        },
        {
          "imgSrc":"https://picsum.photos/304/280?random=5",
          "imgAlt":"Alt text",
          "name":"Firstname Lastname",
          "title":"Title / Position",
          "btnText":"Connect With Person",
          "linkedInUrl":"#",
        },
        {
          "imgSrc":"https://picsum.photos/304/280?random=6",
          "imgAlt":"Alt text",
          "name":"Firstname Lastname",
          "title":"Title / Position",
          "btnText":"Connect With Person",
          "linkedInUrl":"#",
        },
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> HorizontalText</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-scroll-horizontal-text</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">Text Block: </span> Array
              <ul>
                <li><span className="fw-bold">header: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <HorizontalText
      backgroundColor="bg-primary-light"
      items={[
        {
          "header":"System Integrators and Consultants",
          "body":"Customize LivePerson’s robust conversational platform, providing a seamless fit for your customers’ complex back-end systems and added revenue to your transformation...",
        },
        {
          "header":"Agencies",
          "body":"Guide your brands’ marketing and customer engagement growth into the conversational space with the market leader. Work with our experts to enhance or offer new services (bot building...",
        },
        {
          "header":"Tech Channels and Platforms",
          "body":"Leverage our world-class messaging and automation capabilities to meet customer demand without having to develop your own from scratch, including tremendous data collection...",
        },
        {
          "header":"BPOs",
          "body":"Bring LivePerson’s AI-powered messaging to the businesses you serve for higher margins, increased agent concurrency and efficiency, and the ability to pivot from channel to channel with ease.",
        },
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> ExecutiveCard</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-exec-card</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>
          <ul>
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">imgSrc: </span> Image</li>
                <li><span className="fw-bold">imgAlt: </span> Text</li>
                <li><span className="fw-bold">name: </span> Text</li>
                <li><span className="fw-bold">title: </span> Text</li>
                <li><span className="fw-bold">bio: </span> Text</li>
                <li><span className="fw-bold">btnText: </span> Text</li>
                <li><span className="fw-bold">linkedInUrl: </span> Url</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ExecutiveCard
      backgroundColor="bg-primary-light"
      items={[
        {
          "imgSrc":"https://picsum.photos/304/280?random=1",
          "imgAlt":"Alt text",
          "name":"Robert LoCascio",
          "title":"Founder and Chief Executive Officer",
          "bio":"Rob LoCascio is the founder of LivePerson, Inc. and has been its chief executive officer since its inception in 1995, making him one of the longest-standing founding CEOs of a tech company today. As the inventor of online chat for brands, Rob disrupted the way people communicate with companies around the world, removing the need...",
          "btnText":"Connect With Robert",
          "linkedInUrl":"#",
        },
        {
          "imgSrc":"https://picsum.photos/304/280?random=2",
          "imgAlt":"Alt text",
          "name":"Angelo D’Alessandro",
          "title":"SVP, Banking and Consumer Services",
          "bio":"Angelo leads Banking and Consumer Services at LivePerson. With more than 19 years of experience in the banking industry driving technology, marketing and digital transformation programs, he conceived and founded buddybank®, the first conversational bank in the world that offers banking and lifestyle services...",
          "btnText":"Connect With Angelo",
          "linkedInUrl":"#",
        },
        {
          "imgSrc":"https://picsum.photos/304/280?random=3",
          "imgAlt":"Alt text",
          "name":"Manlio Carrelli",
          "title":"EVP, Strategic Initiatives",
          "bio":"Manlio is an integral leader in strategic initiatives across LivePerson's global organization. Previously, he oversaw the company's flagship enterprise software business worldwide. Before joining LivePerson, he served as CEO for multiple consumer and business messaging companies he helped launch...",
          "btnText":"Connect With Manlio",
          "linkedInUrl":"#",
        },
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> BoardCards</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-team-cards</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>          
          <ul>
            <li><span className="fw-bold">header: </span> Text</li>
            <li><span className="fw-bold">Card: </span> Array
              <ul>
                <li><span className="fw-bold">name: </span> Text</li>
                <li><span className="fw-bold">title: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <BoardCards
      backgroundColor="bg-primary-light"
      header="Board of Directors"
      items={[
        {
          "name":"Firstname Lastname",
          "title":"Title / Position",
        },
        {
          "name":"Firstname Lastname",
          "title":"Title / Position",
        },
        {
          "name":"Firstname Lastname",
          "title":"Title / Position",
        },
        {
          "name":"Firstname Lastname",
          "title":"Title / Position",
        },
        {
          "name":"Firstname Lastname",
          "title":"Title / Position",
        },
        {
          "name":"Firstname Lastname",
          "title":"Title / Position",
        },
        {
          "name":"Firstname Lastname",
          "title":"Title / Position",
        },
        
      ]}
    />

    <div className="container component-doc">
      <div className="row">
        <div className="col-lg-6">
          <p><span className="fw-bold">React Component Name:</span> ScrollContent</p>
          <p><span className="fw-bold">CSS Class Name:</span> comp-scroll-horizontal-text</p>
          <p><span className="fw-bold">WordPress Name:</span> </p>
          <p><span className="fw-bold">Properties:</span></p>          
          <ul>
            <li><span className="fw-bold">kicker: </span> Text</li>
            <li><span className="fw-bold">header: </span> Text</li>
            <li><span className="fw-bold">imgSrc: </span> Text</li>
            <li><span className="fw-bold">imgAlt: </span> Text</li>
            <li><span className="fw-bold">Content Block: </span> Array
              <ul>
                <li><span className="fw-bold">blockTitle: </span> Text</li>
                <li><span className="fw-bold">body: </span> Text</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <ScrollContent
      backgroundColor="bg-blue-20"
      kicker="PRE-HEADING TEXT"
      header="A really long title heading goes right here across one or two lines"
      imgSrc="https://picsum.photos/864/651"
      imgAlt="Alt text"
      items={[
        {
          "blockTitle":"Paid time off",
          "body":"Si osculantur puer tuus aut uxorem tuam, osculum, non dico quod omnia quae sunt hominis, et sic non tangetur, si aut ex eis moriatur. Quando ambulabat agendis.",
        },
        {
          "blockTitle":"Paid time off",
          "body":"Si osculantur puer tuus aut uxorem tuam, osculum, non dico quod omnia quae sunt hominis, et sic non tangetur, si aut ex eis moriatur. Quando ambulabat agendis.",
        },
        {
          "blockTitle":"Paid time off",
          "body":"Si osculantur puer tuus aut uxorem tuam, osculum, non dico quod omnia quae sunt hominis, et sic non tangetur, si aut ex eis moriatur. Quando ambulabat agendis.",
        },
        {
          "blockTitle":"Paid time off",
          "body":"Si osculantur puer tuus aut uxorem tuam, osculum, non dico quod omnia quae sunt hominis, et sic non tangetur, si aut ex eis moriatur. Quando ambulabat agendis.",
        },
        {
          "blockTitle":"Paid time off",
          "body":"Si osculantur puer tuus aut uxorem tuam, osculum, non dico quod omnia quae sunt hominis, et sic non tangetur, si aut ex eis moriatur. Quando ambulabat agendis.",
        },
        {
          "blockTitle":"Paid time off",
          "body":"Si osculantur puer tuus aut uxorem tuam, osculum, non dico quod omnia quae sunt hominis, et sic non tangetur, si aut ex eis moriatur. Quando ambulabat agendis.",
        },
      ]}
    />

  </Layout>
);

export default IndexPage;
