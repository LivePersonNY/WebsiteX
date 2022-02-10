import * as React from "react"
import { Link } from "gatsby"

import Layout from '../components/Layout';
import Seo from '../components/Seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404 Error" />

      <div className="pane comp-plain-content bg-neutral-96 text-center pane-with-lead-text">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8">
              <p className="h6">404 ERROR</p>
              <h1>Oops, we can’t seem to find the page you are looking for</h1>
              <p>Our Conversational Cloud platform empowers millions of people by allowing them to directly message their favorite brands. Join our team and be a part of the world’s next digital evolution.</p>
              <a className="link link-mt-large" href="/">Go to Homepage</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
