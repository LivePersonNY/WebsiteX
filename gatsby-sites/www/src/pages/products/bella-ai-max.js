import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Parser from 'html-react-parser';
import LayoutRoi from '../../components/LayoutRoi';
//import $ from 'jquery';

const htmlHack1 = `

<style>
footer{
	display:none;
}

main{
	background:#000000;
}

#backgroundVideo {
    -o-object-fit: cover;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
}

.pane{
	position:relative;
	z-index:10;
}

.bella-header{

	padding: 30px 0 68px 0;
}

.pane.hero h1{
	font-family: 'Rubik';
	font-style: normal;
	font-weight: 300;
	font-size: 48px;
	line-height: 60px;
}

.pane.hero .btn-primary{
    font-family: 'Rubik';
    font-size:24px;
    line-height:32px;
    color:#ffffff;
    border:1px solid #ffffff;
    background:transparent;
    padding:15px 40px;
    font-weight:600;
    border-radius:32px;
}

.pane.hero .btn-primary:hover{
    color:#000000;
    background:#ffffff;
}
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap" rel="stylesheet">

<video autoplay="" loop="" playsinline="" id="backgroundVideo" poster="https://getbella.ai/_next/static/media/background.d04b6df6.png">
	<source src="https://getbella.ai/_next/static/media/background.705bf0f2cb1f61604b71ce227d9a3836.mp4" type="video/mp4">
</video>

<div class="pane bella-header">
	<div class="container" style="opacity:1">
		<div class="row">
			<div class="col">
				<img src="https://static.liveperson.com/static-assets/2023/05/01140253/Bella_EAI_White.svg" style="margin-right:30px" />
				<img src="https://getbella.ai/_next/static/media/logo_lv.9834c697.svg" />
			</div>
		</div>
	</div>
</div>

<div class="pane hero">
	<div class="container" style="opacity:1">
		<div class="row text-center">
			<div class="col-lg-8 offset-lg-2">
				<h1 class="text-neutral-99">Wow! Due to overwhelming demand, Bella AI is at capacity. Please check back later to give it a try.</h1>
                <a class="btn btn-primary" href="https://app.smartsheet.com/b/form/9ad9f95e1f8248c892d8e681f5db7995" target="_blank" rel="noopener noreferrer">Join the waitlist</a>
			</div>
		</div>
	</div>
</div>

`;

const PricingPage = () => {
    useEffect(() => {
        return () => {};
    });

    let meta = [
        {
            property: `og:title`,
            content: 'Bella AI | LivePerson' || ``,
        },
        {
            property: `og:image`,
            content: `https://static.liveperson.com/static-assets/2023/04/26161111/Pricing_Meta-Tag_JV_0426.png`,
        },
        {
            property: `og:description`,
            content: '' || ``,
        },
        {
            property: `og:url`,
            content: 'https://www.liveperson.com/pricing',
        },
        {
            name: `type`,
            property: `og:type`,
            content: `website`,
        },
        {
            name: `image`,
            property: `twitter:image`,
            content: `https://static.liveperson.com/static-assets/2023/04/26161111/Pricing_Meta-Tag_JV_0426.png`,
        },
        {
            name: `author`,
            property: `og:author`,
            content: `LivePerson Team`,
        },
    ];

    return (
        <LayoutRoi>
            <Seo
                title="Bella AI | LivePerson"
                description=""
                meta={meta}
                canonical="https://www.liveperson.com/products/bella-ai-max"
                robots="noindex, nofollow"
            />

            {Parser(htmlHack1)}
        </LayoutRoi>
    );
};

export default PricingPage;
