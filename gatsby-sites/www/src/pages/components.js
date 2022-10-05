import * as React from 'react';
import { Link, graphql } from 'gatsby';
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
import QuickLinks from '../components/blocks/QuickLinks';
import LRForm from '../components/blocks/LRForm';
import FeaturedSlider from '../components/blocks/FeaturedSlider';
import PolicyContent from '../components/blocks/PolicyContent';
import CareerStickyCta from '../components/blocks/CareerStickyCta';
import NotFoundPage from './404';

const IndexPage = () => {

  if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== "true") {
		return (<NotFoundPage />);
	}

  return (
    <Layout>
      <Seo title="Home" robots="noindex, nofollow" />
      {/* {Parser(page.content)} */}

      <Hero
        backgroundColor="bg-neutral-96"
        header="LivePerson's unique value proposition"
        subHeader="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Netus
                elementum sollicitudin magna bibendum sit ultricies arcu. Nullam
                tincidunt varius."
        heroImage="https://picsum.photos/640/480?random=1"
        heroImageAlt="test"
        heroVariant="buttons"
        logoHeader="TRUSTED BY 100K LEADING BRANDSsssss"
        underBodyImg="https://picsum.photos/360/40?random=1"
        underBodyImgAlt="test"
        primaryBtnText="Get Demo"
        primaryBtnLink="#"
        secondaryBtnText="Get Moar Demos"
        secondaryBtnLink="#"
      />

      <MktoForm
        backgroundColor="bg-blue-20"
        formId="2581"
        thankyou="Thank you! One of our experts will contact you shortly"
        resourceasset="testassetname"
      />

      <CareerStickyCta
        runFilters="true"
      />

      <CardGridB
        backgroundColor="bg-neutral-92"
        header="Gratitude going both ways"
        body="We love our people. And it turns out, they love working here. In fact, we were just added to Newsweek’s Most-Loved Workplaces list — the top 100 companies that get recognized for employee happiness and satisfaction at work. We’ve also been awarded the world’s top honors for innovation, artificial intelligence, and customer service and sales technology."
        items={[
          {
            "imgSrc":"https://static.liveperson.com/static-assets/2022/06/06133936/FC-2022_Careers-2x.png",
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
  )
}

export default IndexPage;
