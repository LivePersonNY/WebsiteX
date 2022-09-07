import * as React from 'react';
import { useEffect } from 'react';
import Hero from '../components/blocks/Hero';
import MktoForm from '../components/blocks/MktoForm';
import RoiCalc from '../components/blocks/RoiCalc';
import RoiCalcContent from '../components/blocks/RoiCalcContent';
import RoiCalcTable from '../components/blocks/RoiCalcTable';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
//import runRoi from '../../roi-implemented';
import NotFoundPage from './404';
//import $ from 'jquery';

const Roi = () => {
  
  if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== "true") {
    return (<NotFoundPage />);
  }


  useEffect(() => {
    
    window.runRoi();
    
  });

 
  return (
    <Layout mainClass="biz-case">
      <Seo title="ROI - LP" description="Give you numbers" />
      <Hero
        backgroundColor="bg-neutral-96"
        header="The business case for going conversational"
        subHeader="Conversational AI increases revenue growth, improves customer satisfaction, and reduces operating costs. Use our custom ROI calculator to see the potential impact to your business, detailed below."
        vimeoUrl="//player.vimeo.com/video/530992337"
      />
      <RoiCalc
        annualWebsiteTraffic="1562400000"
        convRateToSale="0.05"
        avgOrderValue="250"
        avgCallVolume="33000000"
        avgCostPerCall="4.50"
        firstContactResolution="70.00"
        locale="en-us"
        currency="USD"
      />
      <RoiCalcContent
        execSummaryTitle="Enormous opportunities for both cost savings and revenue growth"
        execSummaryText="LivePerson experts across the globe have led some of the world's largest enterprise brands through this transformation, leveraging our industry-recognized Conversational AI product suite to create customer engagement that runs on AI, but feels Curiously Human™."
      />
      <RoiCalcTable />
      <MktoForm
        backgroundColor="bg-blue-20"
        header="Ready to turn these estimations into reality? Schedule a demo to see our Conversational solutions in action"
        formId="2580"
        thankyou="Thank you! One of our experts will contact you shortly"
      />
    </Layout>
  )
}

export default Roi;
