import * as React from 'react';
import { useEffect } from 'react';
import CardGridB from '../../components/blocks/CardGridB';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import NotFoundPage from '../404';
//import $ from 'jquery';

// Bootstrap carousel, separate images, opposite directions

const Hero6 = () => {

  if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== "true") {
		return (<NotFoundPage />);
	}


  useEffect(() => {
    
    
  });

 
  return (
    <Layout mainClass="hp-2023">
      <Seo title="Hero6 | LivePerson" description="" robots="noindex, nofollow" />
      
    <div className="pane hero bg-neutral-96 ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <h1>Make 
                        <div id="hp-hero-text-carousel" className="carousel slide carousel-fade vertical" data-bs-ride="carousel" data-bs-pause="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <span> shoppers </span>
                                </div>
                                <div className="carousel-item">
                                    <span> travelers </span>
                                </div>
                                <div className="carousel-item">
                                    <span> guests </span>
                                </div>
                                <div className="carousel-item">
                                    <span> clients </span>
                                </div>
                                <div className="carousel-item">
                                    <span> customers </span>
                                </div>
                                <div className="carousel-item">
                                    <span> members </span>
                                </div>
                            </div>
                        </div>    
                    <br />feel human.</h1>
                    <p data-tag="new line split">Our AI-powered Conversational Cloud makes every user feel seen, heard, and valued</p>
                </div>
                <div className="col-lg-6 offset-lg-1">

                    <div id="hp-hero-img-carousel" className="carousel slide vertical" data-bs-ride="carousel" data-bs-pause="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/1-Retail-avatar.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/2-Airlines-avatar.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/3-Hospitality-avatar.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/4-FinServ-avatar.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/5-Telco-avatar.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/6-Insurance-avatar.png" />
                            </div>
                        </div>
                    </div>

                    <div id="hp-hero-img-carousel-reverse" className="carousel slide vertical vertical-reverse" data-bs-ride="carousel" data-bs-pause="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/1-Retail-ui.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/2-Airlines-ui.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/3-Hospitality-ui.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/4-FinServ-ui.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/5-Telco-ui.png" />
                            </div>
                            <div className="carousel-item">
                                <img src="https://lp-site.s3.amazonaws.com/web2023/img/6-Insurance-ui.png" />
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>

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

export default Hero6;
