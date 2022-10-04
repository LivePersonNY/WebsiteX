import * as React from 'react';
import { useEffect } from 'react';
import Hero from '../components/blocks/Hero';
import MktoForm from '../components/blocks/MktoForm';
import RoiCalc from '../components/blocks/RoiCalc';
import RoiCalcContentWP from '../components/blocks/RoiCalcContentWP';
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
      <Seo title="ROI Calculator & Analysis | LivePerson" description="Use LivePerson's custom ROI calculator to estimate the potential impact of Conversational AI on your business." robots="noindex, nofollow" />
      <Hero
        backgroundColor="bg-neutral-96"
        header="The business case for going conversational"
        subHeader="Conversational AI increases revenue growth, improves customer satisfaction, and reduces operating costs. Though a detailed review with one of our experts will shape the impact to your business based on your specific use cases, our calculator, below, will show the potential ROI with LivePerson."
        vimeoUrl="//player.vimeo.com/video/530992337"
      />
      <RoiCalc
        annualWebsiteTraffic="0"
        convRateToSale="0"
        avgOrderValue="0"
        avgCallVolume="0"
        avgCostPerCall="0"
        firstContactResolution="0"
        locale="en-us"
        currency="USD"
      />
      <RoiCalcContentWP
        template="sales"
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
