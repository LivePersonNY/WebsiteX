import * as React from 'react';
import { useEffect } from 'react';
import Hero from '../components/blocks/Hero';
import RoiCalcWP from '../components/blocks/RoiCalcWP';
import RoiCalcContentWP from '../components/blocks/RoiCalcContentWP';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
//import runRoi from '../../roi-implemented';
import NotFoundPage from './404';
//import $ from 'jquery';

const Sales = () => {
  
  if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== "true") {
    return (<NotFoundPage />);
  }

  useEffect(() => {
    
    window.runRoi();
    
  }); 

 
  return (
    <Layout mainClass="biz-case">
      <Seo title="ROI Sales - LP" description="Give you numbers" />
      <Hero
        backgroundColor="bg-neutral-96"
        header="The business case for going conversational"
        subHeader="Conversational AI increases revenue growth, improves customers satisfaction, and reduces operating costs. Use our ROI calculator to see the potential impact to your business."
        vimeoUrl="//player.vimeo.com/video/530992337"
      />
      <RoiCalcWP
        template="sales"
        header="How much could you improve revenue growth or reduce operating costs with Conversational AI and messaging?"
        annualWebsiteTraffic="156000000"
        convRateToSale="0.01"
        avgOrderValue="28000"
        avgCallVolume="33000000"
        avgCostPerCall="4.50"
        firstContactResolution="70.00"
        locale="en-us"
        currency="USD"
      />
      <RoiCalcContentWP
        template="sales"
        execSummaryTitle="Enormous opportunities for both cost savings and revenue growth"
        execSummaryText="LivePerson experts across the globe have led some of the world’s largest enterprise brands through the transformation to becoming an intent-driven business, leveraging our industry-recognized conversational AI product suite."
        imgSrcLeft="https://assets-global.website-files.com/60ad0c09266ca4208cebb222/61f0301dae93b757991c75d6_IVR%20Deflection%20-%20Yorokobi.png"
        imgSrcRight="https://assets-global.website-files.com/60ad0c09266ca4208cebb222/61f030259e1249babbeed9fd_Apple%20Business%20Chat%20-%20Yorokobi.png"
      />
    </Layout>
  )
}

export default Sales;