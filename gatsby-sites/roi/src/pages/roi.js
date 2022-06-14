import * as React from 'react';
import { useEffect } from 'react';

import Layout from '../../../www/src/components/Layout';
import Seo from '../../../www/src/components/Seo';

const Roi = () => {


  useEffect(() => {
    console.log('Loaded');

    window.onload = (e) => {

    };

  });

 
  return (
    <Layout mainClass="roi">
        <Seo title="Roi" />

        <p>test</p>

    </Layout>
  )
}

export default Roi;
