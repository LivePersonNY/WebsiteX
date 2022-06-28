import * as React from 'react';
import { useEffect } from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Roi = () => {


  useEffect(() => {
    console.log('Loaded');

    window.onload = (e) => {

    };

  });

 
  return (
    <Layout>
      <Seo title="ROI - LP" description="Give you numbers" />
      <p>Test</p>
    </Layout>
  )
}

export default Roi;
