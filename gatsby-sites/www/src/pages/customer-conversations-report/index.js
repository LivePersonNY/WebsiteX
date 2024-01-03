import * as React from 'react';
import Parser from 'html-react-parser';

const htmlHack1 = `

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Liveperson</title>
        <meta name="description" content="State of Customer Conversations 2024" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
            rel="preload"
            as="style"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@600&display=swap"
        />
        <link
            media="print"
            onload="this.onload=null;this.removeAttribute('media');"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@600&display=swap"
            rel="stylesheet"
        />
        <noscript
            ><link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@600&display=swap"
        /></noscript>
        <link rel="icon" href="favicon.ico" />
        <script defer="defer" src="js/app.js"></script>
        <link href="css/app.css" rel="stylesheet" />
    </head>
    <body class="home">
        <header>
            <div class="container">
                <div class="row middle-xs">
                    <div class="col">
                        <a href="/" class="logo-main"><div class="sr-only">Liveperson Logo</div></a
                        ><a href="#" class="btn download-btn btn-light icn-btn btn-download"
                            ><span class="icn"></span> <span class="txt">Download the full report</span> </a
                        ><a href="#" class="hamburger-button"
                            ><span></span> <span></span> <span></span> <span></span
                        ></a>
                    </div>
                </div>
            </div>
            <div class="overlay">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="nav-content">
                                <p class="h3">
                                    The Conversational Flywheel™ is comprised of four phases for improving engagement
                                    and operational efficiency.
                                </p>
                                <p class="p-sm">Explore the report by clicking a phase to begin.</p>
                                <nav class="menu">
                                    <div class="tablet-illo">
                                        <img width="303" height="303" src="images/content/mobile-flywheel.svg" alt="" />
                                    </div>
                                    <ul>
                                        <li>
                                            <a href="chapter-one.html"
                                                ><div class="link-item">
                                                    <div class="link-icn">
                                                        <img
                                                            width="40"
                                                            height="40"
                                                            src="images/content/nav-1-icn.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="link-text">
                                                        <p>Understand <span>what customers want</span></p>
                                                    </div>
                                                    <div class="link-arrow"></div></div
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="chapter-two.html"
                                                ><div class="link-item">
                                                    <div class="link-icn">
                                                        <img
                                                            width="40"
                                                            height="40"
                                                            src="images/content/nav-2-icn.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="link-text">
                                                        <p>Connect <span>channels & systems</span></p>
                                                    </div>
                                                    <div class="link-arrow"></div></div
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="chapter-three.html"
                                                ><div class="link-item">
                                                    <div class="link-icn">
                                                        <img
                                                            width="40"
                                                            height="40"
                                                            src="images/content/nav-3-icn.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="link-text">
                                                        <p>Assist <span>agents & boost productivity</span></p>
                                                    </div>
                                                    <div class="link-arrow"></div></div
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="chapter-four.html"
                                                ><div class="link-item">
                                                    <div class="link-icn">
                                                        <img
                                                            width="40"
                                                            height="40"
                                                            src="images/content/nav-4-icn.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="link-text">
                                                        <p>Automate <span>for continuous improvement</span></p>
                                                    </div>
                                                    <div class="link-arrow"></div></div
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="takeaways.html"
                                                ><div class="link-item">
                                                    <div class="link-icn">
                                                        <img
                                                            width="40"
                                                            height="40"
                                                            src="images/content/nav-5-icn.svg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="link-text"><p>Key Takeaways</p></div>
                                                    <div class="link-arrow"></div></div
                                            ></a>
                                        </li>
                                    </ul>
                                </nav>
                                <div class="nav-ctas">
                                    <ul>
                                        <li>
                                            <a href="#" class="btn download-btn icn-btn btn-download"
                                                ><span class="icn"></span>
                                                <span class="txt">Download the full report</span></a
                                            >
                                        </li>
                                        <li>
                                            <a href="/" class="btn icn-btn btn-home"
                                                ><span class="icn"></span> <span class="txt">Home</span></a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <section class="hero">
                <div class="container">
                    <div class="row center-xs">
                        <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6">
                            <div class="text-center">
                                <h1 class="display">State of Customer Conversations 2024</h1>
                                <h2>Bridging <span class="text-orange-1">the AI Gap</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row center-xs">
                        <div class="col-xs-12 col-md-10 col-lg-8">
                            <div class="text-center">
                                <img width="854" height="699" src="images/content/home-hero.webp" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="row center-xs">
                        <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6">
                            <p class="p-md fade-in">
                                Nearly a quarter into the 21st century, we've seen digital shifts that at one time could
                                only be imagined in science fiction. Within the past few years, we've seen AI accelerate
                                this shift even more. That's why it comes as no surprise to see AI transform one of the
                                most important skills humans have — <span class="text-orange-1">conversation.</span>
                            </p>
                            <p class="fade-in">
                                CIOs, leading the charge on digital transformation and consolidation, are tasked with
                                finding opportunities for AI to have lasting impact and ROI. Integrating AI in customer
                                conversations influences more than just the contact center —
                                <span class="text-orange-1"
                                    >conversation data holds insights that fuel operational improvements and growth
                                    across the enterprise.</span
                                >
                            </p>
                            <p class="fade-in">
                                In our surveys of consumers and business leaders, we found both sides agree that
                                convenient, accurate, and personalized conversations drive positive customer experiences
                                — but there are significant differences in opinion when it comes to using AI to provide
                                them.
                            </p>
                            <p class="fade-in">
                                Digging a little deeper led us to a conclusion we weren't exactly searching for —
                                <span class="text-orange-1">The AI Gap.</span> There's a clear divide between consumers
                                and business leaders when it comes to adoption, enthusiasm, and education around AI.
                                Keep reading to learn more about the State of Customer Conversations in 2024 — and what
                                it will take to bridge the AI gap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="flywheel">
                <div class="container">
                    <div class="row center-xs">
                        <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6">
                            <div class="content">
                                <h2 class="fade-in">
                                    Propelling change through
                                    <span class="text-orange-1">The Conversational Flywheel™</span>
                                </h2>
                                <p class="fade-in">
                                    The ongoing shift away from the legacy call center to a conversational, digital
                                    customer service approach can be understood in terms of a flywheel that powers
                                    improvement over time. To get a holistic view, we've placed our survey results in
                                    this context — showing how data feeds into customer conversations, providing better
                                    data, resulting in better conversations, and so on.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="site-menu">
                                <div class="main-menu">
                                    <div class="nav-content">
                                        <p class="h3">
                                            The Conversational Flywheel™ is comprised of four phases for improving
                                            engagement and operational efficiency.
                                        </p>
                                        <p class="p-sm">Explore the report by clicking a phase to begin.</p>
                                        <nav class="menu">
                                            <div class="tablet-illo">
                                                <img
                                                    width="311"
                                                    height="311"
                                                    src="images/content/mobile-flywheel.svg"
                                                    alt=""
                                                />
                                            </div>
                                            <ul>
                                                <li>
                                                    <a
                                                        class="highlight understandSlice"
                                                        data-menu-item="understandSlice"
                                                        href="chapter-one.html"
                                                        ><div class="link-item">
                                                            <div class="link-icn">
                                                                <img
                                                                    width="40"
                                                                    height="40"
                                                                    src="images/content/nav-1-icn.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="link-text">
                                                                <p>Understand <span>what customers want</span></p>
                                                            </div>
                                                            <div class="link-arrow"></div></div
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="highlight connectSlice"
                                                        data-menu-item="connectSlice"
                                                        href="chapter-two.html"
                                                        ><div class="link-item">
                                                            <div class="link-icn">
                                                                <img
                                                                    width="40"
                                                                    height="40"
                                                                    src="images/content/nav-2-icn.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="link-text">
                                                                <p>Connect <span>channels & systems</span></p>
                                                            </div>
                                                            <div class="link-arrow"></div></div
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="highlight assistSlice"
                                                        data-menu-item="assistSlice"
                                                        href="chapter-three.html"
                                                        ><div class="link-item">
                                                            <div class="link-icn">
                                                                <img
                                                                    width="40"
                                                                    height="40"
                                                                    src="images/content/nav-3-icn.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="link-text">
                                                                <p>Assist <span>agents & boost productivity</span></p>
                                                            </div>
                                                            <div class="link-arrow"></div></div
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="highlight automateSlice"
                                                        data-menu-item="automateSlice"
                                                        href="chapter-four.html"
                                                        ><div class="link-item">
                                                            <div class="link-icn">
                                                                <img
                                                                    width="40"
                                                                    height="40"
                                                                    src="images/content/nav-4-icn.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="link-text">
                                                                <p>Automate <span>for continuous improvement</span></p>
                                                            </div>
                                                            <div class="link-arrow"></div></div
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a
                                                        class="highlight centerCircle"
                                                        data-menu-item="centerCircle"
                                                        href="takeaways.html"
                                                        ><div class="link-item">
                                                            <div class="link-icn">
                                                                <img
                                                                    width="40"
                                                                    height="40"
                                                                    src="images/content/nav-5-icn.svg"
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div class="link-text"><p>Key Takeaways</p></div>
                                                            <div class="link-arrow"></div></div
                                                    ></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div class="nav-illo">
                                        <svg
                                            id="flywheelIllo"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 727.24 563.65"
                                        >
                                            <g
                                                class="highlight slice understandSlice"
                                                data-menu-item="understandSlice"
                                                id="understandSlice"
                                            >
                                                <g id="understandArrow">
                                                    <path
                                                        class="disabled-dark"
                                                        d="m547.43,164.02c-35.66-59.12-102.25-88.57-129.62-94.43l-2.93,42.82c49.27,15.25,65.1,32.85,96.78,70.38l-14.08,8.8,49.86,14.66,15.84-49.85-15.84,7.62Z"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                    <path
                                                        class="disabled-light"
                                                        d="m544.5,161.08c-35.66-59.12-99.32-85.63-126.69-91.5l-1.76,40.47c49.86,15.25,80.35,49.86,93.84,69.8l-15.25,8.8,49.85,14.66,15.84-49.85-15.84,7.62Z"
                                                        fill="#ffc700"
                                                        stroke="#1c1d22"
                                                    />
                                                </g>
                                                <circle
                                                    class="disabled-dark"
                                                    cx="371.11"
                                                    cy="86.04"
                                                    r="52.58"
                                                    fill="#1c1d22"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="disabled-stroke"
                                                    cx="367.6"
                                                    cy="82.53"
                                                    r="52.08"
                                                    fill="#fff"
                                                    stroke="#1c1d22"
                                                />
                                                <circle
                                                    class="hover-ring outter"
                                                    cx="367.6"
                                                    cy="82.53"
                                                    r="37.11"
                                                    fill="#ffcd1a"
                                                    isolation="isolate"
                                                    opacity=".2"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="hover-ring"
                                                    cx="367.6"
                                                    cy="82.53"
                                                    r="31.96"
                                                    fill="#ffcd1a"
                                                    isolation="isolate"
                                                    opacity=".3"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="disabled-med"
                                                    cx="367.6"
                                                    cy="82.53"
                                                    r="24.74"
                                                    fill="#ffcd1a"
                                                    stroke-width="0"
                                                />
                                                <g class="icon-lines">
                                                    <circle
                                                        cx="367.7"
                                                        cy="80.97"
                                                        r="6.98"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        d="m366.45,87.21v-4.47c0-.33-.13-.65-.37-.88l-1.5-1.5"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        d="m368.94,87.21v-4.47c0-.33.13-.65.36-.88l1.51-1.5"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        d="m364.46,92.19v-4.35c2.13.47,4.35.47,6.48,0v4.35c0,1.79-1.45,3.24-3.24,3.24s-3.24-1.45-3.24-3.24Z"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path d="m367.7,71.62v-2.49" fill="none" stroke="#1c1d22" />
                                                    <path d="m359.49,74.01l-1.76-1.76" fill="none" stroke="#1c1d22" />
                                                    <path d="m376.42,74.01l1.76-1.76" fill="none" stroke="#1c1d22" />
                                                    <path d="m357.72,81.86h-2.49" fill="none" stroke="#1c1d22" />
                                                    <path d="m380.16,81.86h-2.49" fill="none" stroke="#1c1d22" />
                                                    <path
                                                        class="disabled-dark"
                                                        d="m315.49,11.65c-1.31,0-2.36-.37-3.15-1.1-.79-.74-1.18-1.85-1.18-3.33v-2.78c0-1.45.39-2.55,1.18-3.3.79-.76,1.84-1.14,3.15-1.14s2.37.38,3.15,1.14c.79.75,1.18,1.85,1.18,3.3v2.78c0,1.48-.39,2.59-1.18,3.33-.78.74-1.83,1.1-3.15,1.1Zm0-1.66c.84,0,1.46-.23,1.86-.7.4-.47.61-1.14.61-2v-2.93c0-.87-.22-1.54-.66-2-.44-.46-1.04-.69-1.81-.69s-1.4.23-1.82.7c-.43.47-.64,1.13-.64,1.98v2.93c0,.89.2,1.56.61,2.02.42.46,1.03.69,1.86.69Zm9.3,1.44V1.57h-.27l-1.68,3.66h-1.97l2.38-5.01h3.39v11.2h-1.86Zm5.29.22c-.41,0-.75-.13-1.02-.4-.27-.27-.4-.61-.4-1.02s.13-.74.4-1.01c.28-.27.62-.4,1.02-.4s.74.13,1.01.4c.27.27.4.61.4,1.02s-.13.76-.4,1.02c-.27.26-.6.38-1.01.38Zm11.23,0c-.9,0-1.67-.16-2.32-.48-.64-.33-1.14-.81-1.49-1.42-.34-.62-.51-1.35-.51-2.21V.22h1.92v7.36c0,.75.21,1.32.62,1.73.42.41,1.01.61,1.78.61s1.37-.2,1.78-.61c.42-.41.62-.98.62-1.73V.22h1.92v7.31c0,.85-.17,1.59-.51,2.21-.34.62-.84,1.09-1.49,1.42-.65.32-1.42.48-2.32.48Zm6.54-.22V3.52h1.81v1.1h.27c.14-.3.39-.58.75-.85s.91-.4,1.65-.4c.61,0,1.15.14,1.62.42s.83.66,1.09,1.15c.27.49.4,1.07.4,1.74v4.74h-1.84v-4.59c0-.64-.16-1.11-.48-1.42-.31-.32-.75-.48-1.33-.48-.65,0-1.16.22-1.54.66-.37.43-.56,1.04-.56,1.84v4h-1.84Zm13.08.22c-.64,0-1.24-.15-1.79-.46-.55-.32-1-.78-1.33-1.39-.33-.61-.5-1.34-.5-2.19v-.26c0-.85.17-1.58.5-2.19.33-.61.77-1.07,1.31-1.38.55-.32,1.16-.48,1.81-.48.49,0,.91.06,1.25.18.34.12.61.27.82.45.21.18.38.38.5.59h.27V.22h1.82v11.2h-1.79v-1.04h-.27c-.19.32-.49.61-.88.88-.39.26-.97.38-1.71.38Zm.54-1.6c.66,0,1.21-.21,1.65-.64.44-.44.66-1.06.66-1.86v-.16c0-.81-.22-1.43-.66-1.86-.43-.43-.98-.64-1.65-.64s-1.22.21-1.66.64c-.44.43-.66,1.05-.66,1.86v.16c0,.8.22,1.42.66,1.86.45.43,1,.64,1.66.64Zm10.06,1.6c-.79,0-1.49-.17-2.1-.5-.6-.34-1.07-.82-1.41-1.42-.33-.62-.5-1.34-.5-2.16v-.19c0-.83.17-1.55.5-2.16.33-.61.79-1.08,1.39-1.41.6-.34,1.29-.51,2.06-.51s1.44.17,2.02.51c.58.33,1.02.8,1.34,1.41s.48,1.32.48,2.13v.66h-5.94c.02.62.24,1.11.66,1.49.42.37.93.56,1.54.56s1.04-.13,1.33-.38c.29-.27.51-.57.66-.9l1.52.78c-.15.29-.37.6-.66.93-.28.32-.65.6-1.12.83-.47.22-1.06.34-1.78.34Zm-2.13-5.04h4.05c-.04-.52-.25-.94-.61-1.25-.35-.31-.81-.46-1.38-.46s-1.06.15-1.41.46c-.35.31-.57.73-.66,1.25Zm7.81,4.82V3.52h1.81v.91h.27c.12-.33.32-.57.59-.72.28-.15.61-.22.99-.22h.96v1.63h-.99c-.53,0-.96.14-1.3.43-.33.28-.5.71-.5,1.3v4.58h-1.84Zm9.34.22c-1.02,0-1.87-.22-2.53-.67-.66-.45-1.06-1.1-1.2-1.97l1.7-.43c.07.41.21.73.4.96.19.23.43.4.7.5.29.1.6.14.93.14.5,0,.87-.09,1.12-.27.26-.18.38-.41.38-.69s-.12-.5-.37-.64c-.24-.14-.6-.26-1.09-.35l-.5-.08c-.54-.11-1.04-.25-1.49-.43-.45-.19-.81-.45-1.09-.77-.27-.33-.4-.75-.4-1.25,0-.77.28-1.36.85-1.78.58-.42,1.33-.62,2.26-.62s1.62.2,2.19.59c.58.39.95.92,1.12,1.58l-1.7.51c-.09-.45-.27-.76-.56-.94-.29-.19-.64-.29-1.06-.29s-.76.07-.99.22c-.22.15-.34.36-.34.64s.12.49.35.62c.23.14.55.24.94.3l.5.1c.59.11,1.11.25,1.58.42.48.17.86.42,1.14.74.28.32.42.75.42,1.3,0,.82-.3,1.46-.9,1.9-.59.44-1.38.66-2.38.66Zm7.99-.22c-.51,0-.92-.15-1.23-.45-.3-.31-.45-.73-.45-1.25v-4.69h-2.06v-1.52h2.06V.98h1.84v2.54h2.27v1.52h-2.27v4.38c0,.32.15.48.45.48h1.58v1.52h-2.19Zm6.74.22c-.55,0-1.06-.1-1.5-.29-.45-.2-.81-.49-1.07-.86-.26-.37-.38-.83-.38-1.38s.13-.98.38-1.34c.27-.36.63-.63,1.09-.82.46-.19.98-.29,1.57-.29h2.29v-.48c0-.42-.13-.75-.38-1.01-.26-.27-.66-.4-1.2-.4s-.94.13-1.22.38c-.27.25-.44.57-.53.96l-1.7-.56c.13-.42.33-.79.61-1.14.29-.34.67-.61,1.14-.82.47-.21,1.05-.32,1.73-.32,1.04,0,1.85.26,2.43.78.6.51.9,1.26.9,2.24v3.1c0,.32.15.48.45.48h.67v1.52h-1.3c-.38,0-.7-.1-.94-.29-.24-.19-.37-.45-.37-.78v-.03h-.27c-.06.15-.18.33-.34.54-.16.21-.4.4-.74.56-.32.15-.76.22-1.31.22Zm.3-1.5c.61,0,1.1-.17,1.49-.51.38-.35.58-.82.58-1.41v-.16h-2.18c-.39,0-.71.09-.96.26-.24.17-.37.42-.37.75s.13.58.38.78c.26.19.61.29,1.06.29Zm6.48,1.28V3.52h1.81v1.1h.27c.14-.3.39-.58.75-.85.36-.27.91-.4,1.65-.4.61,0,1.15.14,1.62.42.47.28.83.66,1.09,1.15.27.49.4,1.07.4,1.74v4.74h-1.84v-4.59c0-.64-.16-1.11-.48-1.42-.31-.32-.75-.48-1.33-.48-.65,0-1.16.22-1.54.66-.37.43-.56,1.04-.56,1.84v4h-1.84Zm13.08.22c-.64,0-1.24-.15-1.79-.46-.55-.32-1-.78-1.33-1.39-.33-.61-.5-1.34-.5-2.19v-.26c0-.85.17-1.58.5-2.19.33-.61.77-1.07,1.31-1.38.55-.32,1.16-.48,1.81-.48.49,0,.91.06,1.25.18.34.12.61.27.82.45.21.18.38.38.5.59h.27V.22h1.82v11.2h-1.79v-1.04h-.27c-.19.32-.49.61-.88.88-.39.26-.97.38-1.71.38Zm.54-1.6c.66,0,1.21-.21,1.65-.64.44-.44.66-1.06.66-1.86v-.16c0-.81-.22-1.43-.66-1.86-.43-.43-.98-.64-1.65-.64s-1.22.21-1.66.64c-.44.43-.66,1.05-.66,1.86v.16c0,.8.22,1.42.66,1.86.45.43,1,.64,1.66.64Z"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                </g>
                                            </g>
                                            <g
                                                class="highlight slice connectSlice"
                                                data-menu-item="connectSlice"
                                                id="connectSlice"
                                            >
                                                <g id="connectArrow">
                                                    <path
                                                        class="disabled-dark"
                                                        d="m484.05,459.42c59.12-35.66,88.57-102.25,94.43-129.62l-42.82-2.93c-15.25,49.27-32.85,65.11-70.38,96.78l-8.8-14.08-14.66,49.85,49.86,15.84-7.62-15.84Z"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                    <path
                                                        class="disabled-light"
                                                        d="m483.89,456.49c59.12-35.66,85.63-99.32,91.5-126.69l-39.75-9.64c-16.49,56.19-50.57,88.23-70.51,101.72l-8.8-15.25-14.66,49.85,49.86,15.84-7.62-15.84Z"
                                                        fill="#f25741"
                                                        stroke="#1c1d22"
                                                    />
                                                </g>
                                                <circle
                                                    class="disabled-dark"
                                                    cx="565.95"
                                                    cy="280.88"
                                                    r="52.58"
                                                    fill="#1c1d22"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="disabled-stroke"
                                                    cx="562.44"
                                                    cy="277.38"
                                                    r="52.08"
                                                    transform="translate(198.56 788.13) rotate(-80.78)"
                                                    fill="#fff"
                                                    stroke="#1c1d22"
                                                />
                                                <circle
                                                    class="hover-ring outter"
                                                    cx="562.6"
                                                    cy="277.53"
                                                    r="37.11"
                                                    fill="#ff8775"
                                                    isolation="isolate"
                                                    opacity=".2"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="hover-ring"
                                                    cx="562.6"
                                                    cy="277.53"
                                                    r="31.96"
                                                    fill="#ff8775"
                                                    isolation="isolate"
                                                    opacity=".3"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="disabled-med"
                                                    cx="562.45"
                                                    cy="277.38"
                                                    r="24.74"
                                                    fill="#ff8775"
                                                    stroke-width="0"
                                                />
                                                <g class="icon-lines">
                                                    <path
                                                        d="m549.63,269.86h0c1.3,0,2.35,1.05,2.35,2.35v8.24c0,1.3-1.05,2.35-2.35,2.35h-.59"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        d="m575.52,282.81h0c-1.3,0-2.35-1.05-2.35-2.35v-8.24c0-1.3,1.05-2.35,2.35-2.35h.59"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        d="m551.98,272.8l4.35-2.61c.91-.54,2.06-.42,2.83.31l7.86,7.44c1.06,1,.96,2.72-.21,3.59l-5.55,4.16c-.94.7-2.25.61-3.08-.22l-3.16-3.16c-.44-.44-1.04-.69-1.66-.69h-1.97"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        d="m567.78,268.79l4.29,2.73c.68.43,1.09,1.18,1.09,1.99v5.97c0,1.22-.93,2.23-2.14,2.34l-2.41.22c-.84.08-1.43-.8-1.06-1.55.19-.38.14-.84-.14-1.17l-3.66-4.36-.59.2-1.48.49c-1.16.39-2.43-.2-2.91-1.32-.5-1.17,0-2.54,1.16-3.08l5.59-2.61c.73-.34,1.58-.29,2.26.15Z"
                                                        fill="#ff8775"
                                                        stroke-width="0"
                                                    />
                                                    <path
                                                        d="m566.69,273.98l-2.94.98m0,0l-.59.2-1.48.49c-1.16.39-2.43-.2-2.91-1.32h0c-.5-1.17,0-2.54,1.16-3.08l5.59-2.61c.73-.34,1.58-.29,2.26.15l4.29,2.73c.68.43,1.09,1.18,1.09,1.99v5.97c0,1.22-.93,2.23-2.14,2.34l-2.41.22c-.84.08-1.43-.8-1.06-1.55h0c.19-.38.14-.84-.14-1.17l-3.66-4.36Z"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        class="disabled-dark"
                                                        d="m639.52,287.65c-1.31,0-2.36-.37-3.15-1.1s-1.18-1.85-1.18-3.33v-2.78c0-1.45.4-2.55,1.18-3.3.79-.76,1.84-1.14,3.15-1.14s2.37.38,3.15,1.14c.79.75,1.18,1.85,1.18,3.3v2.78c0,1.48-.39,2.59-1.18,3.33-.78.74-1.83,1.1-3.15,1.1Zm0-1.66c.84,0,1.46-.23,1.86-.7.41-.47.61-1.14.61-2v-2.93c0-.88-.22-1.54-.66-2-.44-.46-1.04-.69-1.81-.69s-1.4.24-1.82.7-.64,1.13-.64,1.98v2.93c0,.89.2,1.56.61,2.02.42.46,1.03.69,1.86.69Zm5.9,1.44v-1.3c0-.79.13-1.43.38-1.94.27-.51.65-.93,1.14-1.25.49-.33,1.09-.6,1.79-.82l1.02-.32c.42-.14.77-.3,1.06-.5s.51-.43.67-.7c.16-.29.24-.62.24-1.01v-.06c0-.58-.2-1.03-.59-1.36-.4-.34-.92-.51-1.58-.51s-1.2.18-1.62.54c-.42.35-.62.88-.62,1.57v.27h-1.86v-.24c0-.81.18-1.5.54-2.06.36-.57.85-1,1.47-1.3.62-.3,1.31-.45,2.08-.45s1.46.15,2.06.45c.62.29,1.1.69,1.44,1.22.35.52.53,1.14.53,1.84v.16c0,.71-.14,1.32-.43,1.81s-.69.9-1.2,1.22c-.5.31-1.07.57-1.71.77l-.99.3c-.48.15-.86.31-1.15.48-.28.17-.48.37-.59.59-.12.21-.18.49-.18.82v.11h6.16v1.66h-8.06Zm11.11.22c-.41,0-.75-.13-1.02-.4-.27-.27-.4-.61-.4-1.02s.13-.74.4-1.01c.28-.27.62-.4,1.02-.4s.74.13,1.01.4c.27.27.4.61.4,1.02s-.13.76-.4,1.02c-.27.26-.6.38-1.01.38Zm11.18,0c-1.36,0-2.45-.38-3.26-1.15-.81-.78-1.22-1.89-1.22-3.34v-2.66c0-1.45.41-2.56,1.22-3.33.81-.78,1.9-1.17,3.26-1.17s2.42.37,3.15,1.12c.75.75,1.12,1.77,1.12,3.07v.1h-1.89v-.14c0-.7-.2-1.28-.59-1.73-.38-.46-.98-.69-1.79-.69s-1.41.25-1.87.74c-.45.48-.67,1.15-.67,2v2.72c0,.84.22,1.51.67,2,.46.49,1.08.74,1.87.74s1.41-.22,1.79-.67c.4-.46.59-1.04.59-1.74v-.27h1.89v.22c0,1.3-.37,2.32-1.12,3.07-.74.75-1.79,1.12-3.15,1.12Zm9.88,0c-.79,0-1.5-.16-2.13-.48-.62-.33-1.11-.79-1.47-1.39-.35-.61-.53-1.33-.53-2.18v-.26c0-.84.18-1.57.53-2.18.36-.61.85-1.07,1.47-1.39.63-.32,1.34-.48,2.13-.48s1.49.16,2.11.48c.62.32,1.1.78,1.46,1.39.36.61.54,1.33.54,2.18v.26c0,.84-.18,1.57-.54,2.18-.35.6-.84,1.06-1.46,1.39-.62.32-1.32.48-2.11.48Zm0-1.63c.67,0,1.22-.21,1.65-.64.43-.44.64-1.04.64-1.82v-.16c0-.78-.21-1.38-.64-1.81-.43-.44-.98-.66-1.65-.66s-1.22.22-1.65.66c-.43.43-.64,1.03-.64,1.81v.16c0,.78.21,1.39.64,1.82.43.43.98.64,1.65.64Zm6.07,1.41v-7.9h1.81v1.1h.27c.14-.3.39-.58.75-.85.36-.27.91-.4,1.65-.4.61,0,1.15.14,1.62.42.47.28.83.66,1.09,1.15.27.49.4,1.07.4,1.74v4.74h-1.84v-4.59c0-.64-.16-1.11-.48-1.42-.31-.32-.75-.48-1.33-.48-.65,0-1.16.22-1.54.66-.37.43-.56,1.04-.56,1.84v4h-1.84Zm9.84,0v-7.9h1.81v1.1h.27c.14-.3.39-.58.75-.85.36-.27.91-.4,1.65-.4.61,0,1.15.14,1.62.42.47.28.83.66,1.09,1.15.27.49.4,1.07.4,1.74v4.74h-1.84v-4.59c0-.64-.16-1.11-.48-1.42-.31-.32-.75-.48-1.33-.48-.65,0-1.16.22-1.54.66-.37.43-.56,1.04-.56,1.84v4h-1.84Zm13.46.22c-.79,0-1.49-.17-2.1-.5-.6-.34-1.07-.82-1.41-1.42-.33-.62-.5-1.34-.5-2.16v-.19c0-.83.17-1.55.5-2.16.33-.61.8-1.08,1.39-1.41.6-.34,1.29-.51,2.06-.51s1.44.17,2.02.51c.58.33,1.02.8,1.34,1.41s.48,1.32.48,2.13v.66h-5.94c.02.62.24,1.12.66,1.49.42.37.93.56,1.54.56s1.04-.13,1.33-.38c.29-.27.51-.57.66-.9l1.52.78c-.15.29-.37.6-.66.93-.28.32-.65.6-1.12.83-.47.22-1.06.34-1.78.34Zm-2.13-5.04h4.05c-.04-.52-.24-.94-.61-1.25-.35-.31-.81-.46-1.38-.46s-1.06.16-1.41.46-.57.73-.66,1.25Zm11.51,5.04c-.77,0-1.46-.16-2.08-.48-.62-.32-1.11-.78-1.47-1.39-.35-.61-.53-1.34-.53-2.19v-.22c0-.85.18-1.58.53-2.19.36-.61.85-1.07,1.47-1.39.62-.32,1.31-.48,2.08-.48s1.4.13,1.94.4c.54.27.98.64,1.31,1.1.33.46.54.98.64,1.55l-1.78.37c-.04-.33-.14-.63-.3-.9-.16-.28-.39-.5-.69-.66-.29-.16-.65-.24-1.07-.24s-.83.1-1.18.29c-.34.18-.61.46-.82.83-.19.37-.29.82-.29,1.34v.16c0,.52.1.97.29,1.34.2.36.48.64.82.83.35.19.75.29,1.18.29.65,0,1.14-.17,1.47-.5s.56-.78.64-1.31l1.78.42c-.13.55-.36,1.06-.69,1.52-.33.46-.77.83-1.31,1.1-.53.27-1.18.4-1.94.4Zm8.47-.22c-.51,0-.92-.15-1.23-.45-.3-.31-.45-.73-.45-1.25v-4.69h-2.06v-1.52h2.06v-2.54h1.84v2.54h2.27v1.52h-2.27v4.38c0,.32.15.48.45.48h1.58v1.52h-2.19Z"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                </g>
                                            </g>
                                            <g
                                                class="highlight slice assistSlice"
                                                data-menu-item="assistSlice"
                                                id="assistSlice"
                                            >
                                                <g id="assistArrow">
                                                    <path
                                                        class="disabled-dark"
                                                        d="m187.56,398.99c35.66,59.12,105.18,89.53,132.55,95.4v-43.79c-49.27-15.25-65.1-32.85-96.78-70.38l14.08-8.8-49.85-14.66-15.84,49.86,15.84-7.62Z"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                    <path
                                                        class="disabled-light"
                                                        d="m185.34,395.74c35.66,59.12,105.92,87.63,133.29,93.5l3.03-41.75c-56.19-16.49-88.23-50.57-101.72-70.51l15.25-8.8-49.85-14.66-15.84,49.86,15.84-7.62Z"
                                                        fill="#00cc76"
                                                        stroke="#1c1d22"
                                                    />
                                                </g>
                                                <circle
                                                    class="disabled-dark"
                                                    cx="371.11"
                                                    cy="475.73"
                                                    r="52.58"
                                                    fill="#1c1d22"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="disabled-stroke"
                                                    cx="367.6"
                                                    cy="472.22"
                                                    r="52.08"
                                                    fill="#fff"
                                                    stroke="#1c1d22"
                                                />
                                                <circle
                                                    class="hover-ring outter"
                                                    cx="367.6"
                                                    cy="472.53"
                                                    r="37.11"
                                                    fill="#07e98a"
                                                    isolation="isolate"
                                                    opacity=".2"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="hover-ring"
                                                    cx="367.6"
                                                    cy="472.53"
                                                    r="31.96"
                                                    fill="#07e98a"
                                                    isolation="isolate"
                                                    opacity=".3"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="disabled-med"
                                                    cx="367.6"
                                                    cy="472.22"
                                                    r="24.74"
                                                    fill="#07e98a"
                                                    stroke-width="0"
                                                />
                                                <g class="icon-lines">
                                                    <circle
                                                        cx="367.6"
                                                        cy="472.22"
                                                        r="11.87"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <circle
                                                        class="disabled-ignore"
                                                        cx="363.83"
                                                        cy="468.46"
                                                        r="1.08"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                    <circle
                                                        class="disabled-ignore"
                                                        cx="371.36"
                                                        cy="468.46"
                                                        r="1.08"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                    <path
                                                        d="m374.22,474.28c-.65,1.18-1.6,2.16-2.76,2.84-1.16.69-2.48,1.05-3.82,1.06-1.35,0-2.67-.34-3.83-1.02-1.16-.67-2.13-1.65-2.79-2.82"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        class="disabled-dark"
                                                        d="m337.45,563.65c-1.31,0-2.36-.37-3.15-1.1-.79-.74-1.18-1.84-1.18-3.33v-2.78c0-1.45.39-2.55,1.18-3.3.79-.76,1.84-1.14,3.15-1.14s2.37.38,3.15,1.14c.79.75,1.18,1.85,1.18,3.3v2.78c0,1.48-.39,2.59-1.18,3.33-.78.74-1.83,1.1-3.15,1.1Zm0-1.66c.84,0,1.46-.23,1.86-.7.4-.47.61-1.14.61-2v-2.93c0-.88-.22-1.54-.66-2-.44-.46-1.04-.69-1.81-.69s-1.4.23-1.82.7c-.43.47-.64,1.13-.64,1.98v2.93c0,.89.2,1.56.61,2.02.42.46,1.03.69,1.86.69Zm10.04,1.66c-.83,0-1.57-.15-2.22-.45-.64-.3-1.14-.72-1.5-1.28-.36-.56-.54-1.24-.54-2.02v-.29h1.86v.24c0,.65.22,1.17.66,1.55.45.38,1.03.58,1.76.58s1.29-.18,1.7-.53c.41-.36.61-.82.61-1.36v-.14c0-.38-.1-.69-.29-.93-.18-.23-.43-.4-.75-.51-.31-.12-.66-.18-1.06-.18h-2.14v-2.08l3.79-2.13v-.24h-5.86v-1.66h7.9v2.5l-3.58,2.02v.24h.66c.53,0,1.04.11,1.52.32.49.2.89.52,1.2.94.31.43.46.98.46,1.66v.18c0,.72-.18,1.35-.53,1.89-.34.53-.83.95-1.46,1.25-.62.29-1.34.43-2.18.43Zm7.16,0c-.4,0-.75-.13-1.02-.4-.27-.27-.4-.61-.4-1.02s.13-.74.4-1.01c.28-.27.62-.4,1.02-.4s.74.13,1.01.4c.27.27.4.61.4,1.02s-.13.76-.4,1.02c-.27.26-.6.38-1.01.38Zm6-.22l3.07-11.2h3.34l3.07,11.2h-1.98l-.67-2.56h-4.18l-.67,2.56h-1.98Zm3.1-4.32h3.28l-1.5-5.68h-.27l-1.5,5.68Zm11.13,4.54c-1.02,0-1.87-.22-2.53-.67-.66-.45-1.06-1.1-1.2-1.97l1.7-.43c.07.41.21.73.4.96.19.23.43.4.7.5.29.1.6.14.93.14.5,0,.87-.09,1.12-.27.26-.18.38-.41.38-.69s-.12-.5-.37-.64c-.24-.14-.6-.26-1.09-.35l-.5-.08c-.54-.11-1.04-.25-1.49-.43-.45-.19-.81-.45-1.09-.77-.27-.33-.4-.75-.4-1.25,0-.77.28-1.36.85-1.78.58-.42,1.33-.62,2.26-.62s1.62.2,2.19.59c.58.4.95.92,1.12,1.58l-1.7.51c-.09-.45-.27-.76-.56-.94-.29-.19-.64-.29-1.06-.29s-.76.08-.99.22c-.22.15-.34.36-.34.64s.12.48.35.62c.23.14.55.24.94.3l.5.1c.59.11,1.11.24,1.58.42.48.17.86.42,1.14.74.28.32.42.75.42,1.3,0,.82-.3,1.46-.9,1.9-.59.44-1.38.66-2.38.66Zm8.41,0c-1.02,0-1.87-.22-2.53-.67-.66-.45-1.06-1.1-1.2-1.97l1.7-.43c.07.41.21.73.4.96.19.23.43.4.7.5.29.1.6.14.93.14.5,0,.87-.09,1.12-.27.26-.18.38-.41.38-.69s-.12-.5-.37-.64c-.23-.14-.6-.26-1.09-.35l-.5-.08c-.54-.11-1.04-.25-1.49-.43-.45-.19-.81-.45-1.09-.77-.27-.33-.4-.75-.4-1.25,0-.77.28-1.36.85-1.78.58-.42,1.33-.62,2.26-.62s1.62.2,2.19.59c.58.4.95.92,1.12,1.58l-1.7.51c-.09-.45-.27-.76-.56-.94-.29-.19-.64-.29-1.06-.29s-.76.08-.99.22c-.22.15-.34.36-.34.64s.12.48.35.62c.23.14.55.24.94.3l.5.1c.59.11,1.11.24,1.58.42.48.17.86.42,1.14.74.28.32.42.75.42,1.3,0,.82-.3,1.46-.9,1.9-.59.44-1.38.66-2.38.66Zm5.14-.22v-7.9h1.84v7.9h-1.84Zm.91-8.91c-.33,0-.62-.11-.86-.32-.24-.22-.35-.52-.35-.88s.12-.65.35-.86c.24-.22.53-.34.86-.34.35,0,.64.11.86.34.23.21.35.5.35.86s-.12.66-.35.88c-.22.21-.51.32-.86.32Zm6.52,9.14c-1.02,0-1.87-.22-2.53-.67-.66-.45-1.06-1.1-1.2-1.97l1.7-.43c.08.41.21.73.4.96.19.23.43.4.7.5.29.1.6.14.93.14.5,0,.88-.09,1.12-.27.26-.18.38-.41.38-.69s-.12-.5-.37-.64c-.23-.14-.6-.26-1.09-.35l-.5-.08c-.54-.11-1.04-.25-1.49-.43-.45-.19-.81-.45-1.09-.77-.27-.33-.4-.75-.4-1.25,0-.77.28-1.36.85-1.78.58-.42,1.33-.62,2.26-.62s1.62.2,2.19.59c.58.4.95.92,1.12,1.58l-1.7.51c-.08-.45-.27-.76-.56-.94-.29-.19-.64-.29-1.06-.29s-.76.08-.99.22c-.22.15-.34.36-.34.64s.12.48.35.62c.23.14.55.24.94.3l.5.1c.59.11,1.12.24,1.58.42.48.17.86.42,1.14.74.28.32.42.75.42,1.3,0,.82-.3,1.46-.9,1.9-.59.44-1.38.66-2.38.66Zm7.99-.22c-.51,0-.92-.15-1.23-.45-.3-.31-.45-.72-.45-1.25v-4.69h-2.06v-1.52h2.06v-2.54h1.84v2.54h2.27v1.52h-2.27v4.38c0,.32.15.48.45.48h1.58v1.52h-2.19Z"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                </g>
                                            </g>
                                            <g
                                                class="highlight slice automateSlice"
                                                data-menu-item="automateSlice"
                                                id="automateSlice"
                                            >
                                                <g id="automateArrow">
                                                    <path
                                                        class="disabled-dark"
                                                        d="m250.69,101.46c-59.12,35.66-88.57,102.25-94.43,129.62l42.82,2.93c15.25-49.27,31.5-65.69,69.04-97.36l10.14,14.66,14.66-49.85-49.85-15.84,7.62,15.84Z"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                    <path
                                                        class="disabled-light"
                                                        d="m246.72,98.21c-59.12,35.66-79.13,92.57-91.5,130.2l39.69,2.58c19.07-62.89,50.63-84.68,70.58-98.17l8.8,15.25,14.66-49.86-49.85-15.84,7.62,15.84Z"
                                                        fill="#8086ff"
                                                        stroke="#1c1d22"
                                                    />
                                                </g>
                                                <circle
                                                    class="disabled-dark"
                                                    cx="175.23"
                                                    cy="280.88"
                                                    r="52.58"
                                                    fill="#1c1d22"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="disabled-stroke"
                                                    cx="171.72"
                                                    cy="277.38"
                                                    r="52.08"
                                                    fill="#fff"
                                                    stroke="#1c1d22"
                                                />
                                                <circle
                                                    class="hover-ring outter"
                                                    cx="171.6"
                                                    cy="277.53"
                                                    r="37.11"
                                                    fill="#9ea3fa"
                                                    isolation="isolate"
                                                    opacity=".2"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="hover-ring"
                                                    cx="171.6"
                                                    cy="277.53"
                                                    r="31.96"
                                                    fill="#9ea3fa"
                                                    isolation="isolate"
                                                    opacity=".3"
                                                    stroke-width="0"
                                                />
                                                <circle
                                                    class="disabled-med"
                                                    cx="171.72"
                                                    cy="277.38"
                                                    r="24.74"
                                                    fill="#9ea3fa"
                                                    stroke-width="0"
                                                />
                                                <g class="icon-lines">
                                                    <path d="m158.08,289.17h26.53" fill="none" stroke="#1c1d22" />
                                                    <path
                                                        d="m166.29,289.17l1.95-5.85c.34-1.03,1.31-1.73,2.4-1.73h3.31c1.09,0,2.05.7,2.4,1.73l1.95,5.85"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <circle
                                                        cx="172.36"
                                                        cy="284.8"
                                                        r=".85"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                    <circle
                                                        cx="162.5"
                                                        cy="270.85"
                                                        r="4.29"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <circle
                                                        cx="175.77"
                                                        cy="270.22"
                                                        r="3.66"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path d="m166.29,268.33h6.32" fill="none" stroke="#1c1d22" />
                                                    <path d="m166.29,272.12h6.32" fill="none" stroke="#1c1d22" />
                                                    <path d="m161.87,275.28l6.32,8.21" fill="none" stroke="#1c1d22" />
                                                    <path d="m166.29,272.12l6.95,9.48" fill="none" stroke="#1c1d22" />
                                                    <path
                                                        d="m185.88,268.01h0c0-1.22-.99-2.21-2.21-2.21h-1.58c-1.4,0-2.53,1.13-2.53,2.53v3.79c0,1.4,1.13,2.53,2.53,2.53h1.58c1.22,0,2.21-.99,2.21-2.21h0"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        class="disabled-dark"
                                                        d="m4.34,287.65c-1.31,0-2.36-.37-3.15-1.1-.79-.74-1.18-1.85-1.18-3.33v-2.78c0-1.45.39-2.55,1.18-3.3.79-.76,1.84-1.14,3.15-1.14s2.37.38,3.15,1.14c.79.75,1.18,1.85,1.18,3.3v2.78c0,1.48-.39,2.59-1.18,3.33-.78.74-1.83,1.1-3.15,1.1Zm0-1.66c.84,0,1.46-.23,1.86-.7.41-.47.61-1.14.61-2v-2.93c0-.88-.22-1.54-.66-2-.44-.46-1.04-.69-1.81-.69s-1.4.24-1.82.7c-.43.47-.64,1.13-.64,1.98v2.93c0,.89.2,1.56.61,2.02.42.46,1.03.69,1.86.69Zm11.21,1.44v-2.27h-5.6v-2.16l4.08-6.77h3.38v7.26h1.87v1.66h-1.87v2.27h-1.86Zm-3.81-3.94h3.81v-6.08h-.27l-3.54,5.84v.24Zm10.2,4.16c-.41,0-.75-.13-1.02-.4-.27-.27-.4-.61-.4-1.02s.13-.74.4-1.01c.28-.27.62-.4,1.02-.4s.74.13,1.01.4c.27.27.4.61.4,1.02s-.13.76-.4,1.02c-.27.26-.6.38-1.01.38Zm6-.22l3.07-11.2h3.34l3.07,11.2h-1.98l-.67-2.56h-4.18l-.67,2.56h-1.98Zm3.1-4.32h3.28l-1.5-5.68h-.27l-1.5,5.68Zm10.89,4.45c-.61,0-1.15-.13-1.62-.4-.47-.28-.83-.66-1.09-1.15-.26-.5-.38-1.08-.38-1.74v-4.74h1.82v4.59c0,.64.15,1.12.46,1.42.32.31.77.46,1.34.46.65,0,1.16-.21,1.54-.64.38-.43.58-1.04.58-1.84v-4h1.82v7.9h-1.79v-1.1h-.27c-.14.29-.39.57-.77.83-.36.27-.91.4-1.65.4Zm9.83-.13c-.51,0-.92-.15-1.23-.45-.3-.31-.45-.73-.45-1.25v-4.69h-2.06v-1.52h2.06v-2.54h1.84v2.54h2.27v1.52h-2.27v4.38c0,.32.15.48.45.48h1.58v1.52h-2.19Zm7.77.22c-.79,0-1.5-.16-2.13-.48-.62-.33-1.11-.79-1.47-1.39-.35-.61-.53-1.33-.53-2.18v-.26c0-.84.18-1.57.53-2.18.36-.61.85-1.07,1.47-1.39.63-.32,1.34-.48,2.13-.48s1.49.16,2.11.48c.62.32,1.1.78,1.46,1.39.36.61.54,1.33.54,2.18v.26c0,.84-.18,1.57-.54,2.18-.35.6-.84,1.06-1.46,1.39-.62.32-1.32.48-2.11.48Zm0-1.63c.67,0,1.22-.21,1.65-.64.43-.44.64-1.04.64-1.82v-.16c0-.78-.21-1.38-.64-1.81-.43-.44-.98-.66-1.65-.66s-1.22.22-1.65.66c-.43.43-.64,1.03-.64,1.81v.16c0,.78.21,1.39.64,1.82.43.43.98.64,1.65.64Zm6.07,1.41v-7.9h1.81v.88h.27c.14-.27.37-.5.69-.7.33-.21.77-.32,1.31-.32.58,0,1.04.12,1.39.35.35.24.62.53.8.9h.26c.18-.36.44-.66.78-.9.34-.23.83-.35,1.46-.35.49,0,.93.11,1.33.32.41.21.73.53.96.94.25.42.37.93.37,1.55v5.23h-1.84v-5.1c0-.46-.12-.8-.37-1.04-.25-.24-.59-.37-1.02-.37-.48,0-.86.16-1.15.48-.28.31-.42.76-.42,1.34v4.69h-1.82v-5.1c0-.46-.12-.8-.37-1.04-.25-.24-.59-.37-1.02-.37-.49,0-.87.16-1.15.48-.28.31-.42.76-.42,1.34v4.69h-1.84Zm16.14.22c-.55,0-1.06-.1-1.5-.29-.45-.2-.81-.49-1.07-.86-.26-.37-.38-.83-.38-1.38s.13-.98.38-1.34c.27-.36.63-.63,1.09-.82.46-.19.98-.29,1.57-.29h2.29v-.48c0-.42-.13-.75-.38-1.01-.26-.27-.66-.4-1.2-.4s-.94.13-1.22.38c-.27.25-.44.57-.53.96l-1.7-.56c.13-.42.33-.8.61-1.14.29-.34.67-.61,1.14-.82.47-.21,1.05-.32,1.73-.32,1.03,0,1.85.26,2.43.78.6.51.9,1.26.9,2.24v3.1c0,.32.15.48.45.48h.67v1.52h-1.3c-.38,0-.7-.1-.94-.29-.25-.19-.37-.45-.37-.78v-.03h-.27c-.06.15-.18.33-.34.54-.16.21-.41.4-.74.56-.32.15-.76.22-1.31.22Zm.3-1.5c.61,0,1.1-.17,1.49-.51.38-.35.58-.82.58-1.41v-.16h-2.18c-.39,0-.71.08-.96.26-.25.17-.37.42-.37.75s.13.58.38.78c.26.19.61.29,1.06.29Zm8.93,1.28c-.51,0-.92-.15-1.23-.45-.3-.31-.45-.73-.45-1.25v-4.69h-2.06v-1.52h2.06v-2.54h1.84v2.54h2.27v1.52h-2.27v4.38c0,.32.15.48.45.48h1.58v1.52h-2.19Zm7.64.22c-.79,0-1.49-.17-2.1-.5-.6-.34-1.07-.82-1.41-1.42-.33-.62-.5-1.34-.5-2.16v-.19c0-.83.17-1.55.5-2.16.33-.61.79-1.08,1.39-1.41.6-.34,1.29-.51,2.06-.51s1.44.17,2.02.51c.58.33,1.02.8,1.34,1.41s.48,1.32.48,2.13v.66h-5.94c.02.62.24,1.12.66,1.49.42.37.93.56,1.54.56s1.04-.13,1.33-.38c.29-.27.51-.57.66-.9l1.52.78c-.15.29-.37.6-.66.93-.28.32-.65.6-1.12.83-.47.22-1.06.34-1.78.34Zm-2.13-5.04h4.05c-.04-.52-.25-.94-.61-1.25-.35-.31-.81-.46-1.38-.46s-1.06.16-1.41.46-.57.73-.66,1.25Z"
                                                        fill="#1c1d22"
                                                        stroke-width="0"
                                                    />
                                                </g>
                                            </g>
                                            <g
                                                class="slice centerCircle"
                                                data-menu-item="centerCircle"
                                                id="centerCircle"
                                            >
                                                <path
                                                    d="m369.01,200.56h0c43.28,0,78.37,35.09,78.37,78.37h0c0,43.28-35.09,78.37-78.37,78.37h0c-43.28,0-78.37-35.09-78.37-78.37h0c0-43.28,35.09-78.37,78.37-78.37Z"
                                                    fill="#fff"
                                                    stroke-width="0"
                                                />
                                                <path
                                                    class="disabled-stroke"
                                                    d="m369.01,200.56h0c43.28,0,78.37,35.09,78.37,78.37h0c0,43.28-35.09,78.37-78.37,78.37h0c-43.28,0-78.37-35.09-78.37-78.37h0c0-43.28,35.09-78.37,78.37-78.37Z"
                                                    fill="none"
                                                    stroke="#1c1d22"
                                                />
                                                <circle
                                                    class="disabled-med"
                                                    cx="369.01"
                                                    cy="278.92"
                                                    r="42.78"
                                                    fill="#fb8747"
                                                    stroke-width="0"
                                                />
                                                <g class="icon-lines">
                                                    <path
                                                        d="m366.89,299.26h18.94c1.02,0,1.53-1.23.81-1.95l-2.86-2.86c-.21-.21-.33-.51-.33-.81v-12.66c0-.63-.51-1.14-1.14-1.14h-15.42c-.63,0-1.14.51-1.14,1.14v17.13c0,.63.51,1.14,1.14,1.14Z"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        d="m360.56,289.05c-2.74-.01-5.42-.81-7.73-2.29-2.3-1.49-4.13-3.6-5.27-6.1-1.14-2.49-1.54-5.26-1.15-7.98.39-2.71,1.54-5.26,3.33-7.34s4.14-3.6,6.76-4.39c2.63-.79,5.42-.8,8.06-.05,2.64.75,5,2.25,6.82,4.3,1.81,2.06,3,4.59,3.42,7.3"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                    <path
                                                        d="m374.4,272.72c1.25-1.08,2.79-1.77,4.43-2,1.64-.23,3.3.01,4.81.7,1.5.69,2.77,1.8,3.67,3.19.89,1.39,1.37,3.01,1.37,4.66"
                                                        fill="none"
                                                        stroke="#1c1d22"
                                                    />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div class="nav-ctas">
                                        <ul>
                                            <li>
                                                <a href="#" class="btn icn-btn btn-download download-btn"
                                                    ><span class="icn"></span>
                                                    <span class="txt">Download the full report</span></a
                                                >
                                            </li>
                                            <li>
                                                <a href="/" class="btn icn-btn btn-home"
                                                    ><span class="icn"></span> <span class="txt">Home</span></a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <ul class="footer-legal">
                            <li><p class="p-legal">© 2023 LivePerson. All rights reserved.</p></li>
                            <li><p class="p-legal">Legal lorem aliquet adipiscing vestibulum gravida.</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div id="overlay"></div>
        <div id="modalForm">
            <button class="close-modal"></button>
            <div class="modal-wrap">
                <p class="h1">Need more time to explore the report?</p>
                <div class="modal-content">
                    <div class="modal-copy">
                        <p>Download now. Read later.</p>
                        <p>Maybe during your morning coffee? Or on the plane to your next conference?</p>
                        <p>
                            You can even go old school and print it out. But, please recycle — share it with a friend.
                        </p>
                    </div>
                    <div class="modal-form">
                        <script src="//info.liveperson.com/js/forms2/js/forms2.min.js"></script>
                        <form id="mktoForm_4999"></form>
                        <script>
                            MktoForms2.loadForm('//info.liveperson.com', '501-BLE-979', 4999);
                        </script>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
`;

const CustomerReport = () => {
    return <>{Parser(htmlHack1)}</>;
};

export default CustomerReport;
