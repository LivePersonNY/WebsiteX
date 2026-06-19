import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import HubSpotForm from "../components/blocks/HubSpotForm";
import { HUBSPOT_FORMS } from "../utils/hubspotForms";

function rfpUpload() {
  if (
    process.env.BRANCH != "develop" &&
    process.env.GATSBY_IS_PREVIEW !== "true"
  ) {
    // return <NotFoundPage />;
  }

  return (
    <Layout>
      <Seo title="RFP Upload | LivePerson" />

      <div
        id="complete"
        className="pane bg-primary-dark comp-left-right pane-form form-vertical form-vertical-2024-v2"
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-5 offset-lg-1 order-last form-col"
              style="padding:0;"
            >
              <HubSpotForm formId={HUBSPOT_FORMS.rfp} />
            </div>
            <div className="col-lg-6 order-first">
              <h1>
                <span className="h6 text-uppercase">
                  LivePerson RFP submission
                </span>
                Trusted by thousands of the{" "}
                <mark className="has-inline-color has-pale-pink-color">
                  world’s biggest
                </mark>{" "}
                brands
              </h1>

              <div className="rich-container mb-4">
                <p data-tag="new line split">
                  Let LivePerson help you deliver connected experiences
                  orchestrated and personalized by AI. Submit an RFP to our team
                  of experts. Please include the project's goals, scope, budget,
                  timeline, and any specific requirements. We will review your
                  submission and reply to you within 48 hours.
                  <br />
                  <br />
                  With LivePerson, you can be there for every call, chat, and
                  text with the only conversational AI platform built on
                  billions of enterprise conversations. Seamlessly integrate
                  existing systems, connecting fragmented customer interactions
                  into unified, meaningful conversations that result in real
                  outcomes.
                </p>
                <p className="">
                  Join thousands of the world’s most popular brands and realize
                  results from these connected experiences like:
                  <br />
                  &nbsp;
                  <br />
                </p>
                <ul>
                  <li className="">
                    30% reduction in cost per interaction
                    <br />
                    &nbsp;
                    <br />
                  </li>
                  <li className="">
                    91% customer satisfaction score
                    <br />
                    &nbsp;
                    <br />
                  </li>
                  <li className="">50% decrease in agent&nbsp;attrition</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 offset-lg-3 form-logo-strip">
              <h6 className="text-uppercase text-center">
                join thousands of brands worldwide
              </h6>
              <div className="img-container">
                <img
                  src="https://static.liveperson.com/static-assets/2024/09/18142229/Azul-white.svg"
                  loading="lazy"
                />
                <img
                  src="https://static.liveperson.com/static-assets/2024/09/18142230/Bankwest-white.svg"
                  loading="lazy"
                />
                <img
                  src="https://static.liveperson.com/static-assets/2024/09/18142232/Burberry-white.svg"
                  loading="lazy"
                />
                <img
                  src="https://static.liveperson.com/static-assets/2024/09/18142233/HSBC-white.svg"
                  loading="lazy"
                />
                <img
                  src="https://static.liveperson.com/static-assets/2024/09/18142234/OUA-white.svg"
                  loading="lazy"
                />
                <img
                  src="https://static.liveperson.com/static-assets/2024/09/18142235/PNC-white.svg"
                  loading="lazy"
                />
                <img
                  src="https://static.liveperson.com/static-assets/2024/09/18142236/SkyUK-white.svg"
                  loading="lazy"
                />
                <img
                  src="https://static.liveperson.com/static-assets/2024/09/18142237/The-RealReal-white.svg"
                  loading="lazy"
                />
                <img
                  src="https://static.liveperson.com/static-assets/2024/09/18142237/Virgin-Media-O2-white.svg"
                  loading="lazy"
                />
                <img
                  src="https://static.liveperson.com/static-assets/2024/09/18142240/Zurich-Insurance-white.svg"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default rfpUpload;
