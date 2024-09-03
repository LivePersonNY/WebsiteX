import * as React from 'react';
import { Link, graphql } from 'gatsby';
import queryString from 'query-string';

import Parser from 'html-react-parser';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import LeftRight from '../../components/blocks/LeftRight';
import StatsGrid from '../../components/blocks/StatsGrid';
import CardGrid from '../../components/blocks/CardGrid';
import CalloutGrid from '../../components/blocks/CalloutGrid';
import Hero from '../../components/blocks/Hero';
import PlainContent from '../../components/blocks/PlainContent';
import TabsC from '../../components/blocks/TabsC';
import TabsB from '../../components/blocks/TabsB';
import TabsA from '../../components/blocks/TabsA';
import MktoForm from '../../components/blocks/MktoForm';
import IconTextA from '../../components/blocks/IconTextA';
import IconTextB from '../../components/blocks/IconTextB';
import IconTextC from '../../components/blocks/IconTextC';
import LogosUniversal from '../../components/blocks/LogosUniversal';
import QuoteSlider from '../../components/blocks/QuoteSlider';
import ContainedContent from '../../components/blocks/ContainedContent';
import ContentCTA from '../../components/blocks/ContentCTA';
import SideBySide from '../../components/blocks/SideBySide';
import IconTextD from '../../components/blocks/IconTextD';
import ScrollHorizontalText from '../../components/blocks/ScrollHorizontalText';
import Faq from '../../components/blocks/Faq';
import CardGridB from '../../components/blocks/CardGridB';
import ProgramCard from '../../components/blocks/ProgramCard';
import TeamCards from '../../components/blocks/TeamCards';
import HorizontalText from '../../components/blocks/HorizontalText';
import ExecutiveCard from '../../components/blocks/ExecutiveCard';
import BoardCards from '../../components/blocks/BoardCards';
import ScrollContent from '../../components/blocks/ScrollContent';
import QuickLinks from '../../components/blocks/QuickLinks';
import LRForm from '../../components/blocks/LRForm';
import FeaturedSlider from '../../components/blocks/FeaturedSlider';
import PolicyContent from '../../components/blocks/PolicyContent';
import CareerStickyCta from '../../components/blocks/CareerStickyCta';
import NotFoundPage from '../404';

const IndexPage = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    return (
        <Layout>
            <Seo title="Staging" robots="noindex, nofollow" />
            {/* {Parser(page.content)} */}

            <PlainContent
                backgroundColor=""
                colWidth="10"
                headLevel="h1"
                header="Descriptions of and Usage Charges for the Conversational Cloud Products, Messaging
                                    Channels and Features"
            />

            <div className="pane pane-blocks bg-transparent ">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10">
                            <p>
                                The unit of bot usage for billing purposes is the “Bot Conversation” which occurs via a
                                messaging bot or a voice bot, begins when an end-user first interacts with a messaging
                                or voice related bot, and concludes upon the earliest of:
                            </p>
                            <ol>
                                <li>brand-configured auto close;</li>
                                <li>closure of the interaction by the consumer or the bot;</li>
                                <li>transfer of the interaction to a human agent;</li>
                                <li>
                                    24 hours after the interaction begins for messaging bots, or 10 minutes after the
                                    interaction begins for voice bots.
                                </li>
                            </ol>

                            <p>
                                Interactions with bots that continue for more than 24 hours with a messaging bot or for
                                more than 10 minutes with a voice bot will consume an additional Bot Conversation(s).
                            </p>

                            <p>
                                Example 1: End-user interacts with a voice bot for 9 minutes, is then transferred to a
                                messaging bot and interacts for 25 hours. In this case, 2 Bot Conversations are consumed
                                - 1 voice, 1 messaging. The Voicebot deflected to Messaging is counted as one bot
                                conversation. The message bot conversation exceeds 24 hours, so one additional messaging
                                bot conversation will be charged.
                            </p>

                            <p>
                                Example 2: End-user interacts with a human agent for 3 hours, never interacts with a
                                voice or messaging bot. In this case, 0 Bot Conversations consumed.
                            </p>

                            <p>
                                Example 3: End-user interacts with a messaging bot for 23 hours. In this case, 1 Bot
                                Conversation consumed.
                            </p>
                            <p>&nbsp;</p>

                            <table>
                                <colgroup>
                                    <col width="35%" />
                                    <col width="35%" />
                                    <col width="10%" />
                                    <col width="10%" />
                                    <col width="10%" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>
                                            <strong>Product Group</strong>
                                        </th>
                                        <th>
                                            <strong>Product Name</strong>
                                        </th>
                                        <th>
                                            <strong>Bronze</strong>
                                        </th>
                                        <th>
                                            <strong>Silver</strong>
                                        </th>
                                        <th>
                                            <strong>Gold</strong>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>Agent & Supervisor Experience</td>
                                        <td>Agent & Supervisor Experience</td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Administrative Experience</td>
                                        <td>Administrative Experience</td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Communication Channels</td>
                                        <td>Communication Channels</td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="4">Integrations & Developer Experience</td>
                                        <td>Integration Hub</td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Access to 50+ Data, Connect & Customize APIs</td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>CRM Connectors</td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Functions</td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="7">Automations & AI</td>
                                        <td>Intent Manager (Build, Optimize, Analyze and Discover Features)</td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Conversation Builder</td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>KnowledgeAI</td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Conversation Assist</td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Conversation Orchestrator</td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>AI Annotator</td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3rd Party Bot Connectors</td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3">Conversational Intelligence</td>
                                        <td>Data Transporter</td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Report Center</td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            LivePerson Analytics Studio <sup>1</sup>
                                        </td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Proactive</td>
                                        <td>
                                            Proactive Messaging <sup>2</sup>
                                        </td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="12">
                                            Generative AI <sup>3</sup>
                                        </td>
                                        <td>Generative Intent Training</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Copilot Summary</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Copilot Assist</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Copilot Rewrite</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>AI Agent: Messaging Bot</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>AI Agent: Voice Bot</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>AI Agents: KnowledgeAI Agent</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>AI Agents: Routing AI Agent</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hallucination Detection</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Prompt Library</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bring your own LLM</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Generative Insights (early access)</td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <img src="https://static.liveperson.com/static-assets/2023/04/25145620/pricing-checkmark.svg" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3">
                                            Reporting & Analytics <sup>4</sup>
                                        </td>
                                        <td>Analytics Builder</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Bot Analytics</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Meaningful Conversation Score (MCS)</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3">
                                            Advanced AI & Analytics <sup>4</sup>
                                        </td>
                                        <td>Meaningful Automated Conversation Score (MACS)</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Performance Optimizer</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Custom Analytics Builder</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>&nbsp;</p>
                            <p>
                                <em>
                                    <ol>
                                        <li>
                                            Analytics Studio <br />
                                            a. Silver = total of 1,300 Units per user per year with out-of-box
                                            dashboards A Unit is per minute or per messaging conversation. <br />
                                            b. Gold = 10,000 Unit per user per year for data from third-parties and
                                            unlimited for data from LivePerson. A Unit is per minute or per messaging
                                            conversation.
                                            <br />
                                            c. Overages exceeding the above limits, will be billed arrears as $0.024 per
                                            Unit (or local equivalent)
                                        </li>
                                        <li>
                                            Proactive Messaging
                                            <br />
                                            a. Silver = 18,000 proactive messages per Unit per user per year <br />
                                            b. Gold = 36,000 proactive messages per Unit per user per year
                                            <br />
                                            c. Overages exceeding the above limits, will be billed arrears as $0.01 per
                                            message sent (or local equivalent)
                                        </li>
                                        <li>
                                            Generative AI <br />
                                            a. Gold = 65 Generative AI credits per user per year. 1 Generative AI credit
                                            is USD 1, and can be used to select any version of Generative AI available
                                            in the Liveperson LLM Gateway.
                                            <br />
                                            b. Overages exceeding the above limits , will be billed at passthrough costs
                                        </li>
                                        <li>
                                            Renewing customers may continue to use these entitlements until deprecation,
                                            which will begin by October 1, 2024. These features are unavailable to any
                                            Customers who have not launched these features as of May 1, 2024.
                                        </li>
                                    </ol>
                                </em>
                            </p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>
                                <strong>Feature Descriptions</strong>
                            </p>
                            <p>
                                Some features may be in an early access stage and use of such features are subject to
                                the <a href="/policies/earlyadopterterms/">early adopter terms</a>.
                            </p>

                            <p>&nbsp;</p>
                            <table>
                                <colgroup>
                                    <col width="25%" />
                                    <col width="25%" />
                                    <col width="50%" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>
                                            <strong>Product Group</strong>
                                        </th>
                                        <th>
                                            <strong>Product Name</strong>
                                        </th>
                                        <th>
                                            <strong>Description and Special Considerations</strong>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td rowspan="7">Agent & Supervisor Experience</td>
                                        <td>Multi-channel agent workspace</td>
                                        <td>
                                            Handle multiple conversation channels asynchronously at scale, streamlining
                                            agent operations and enhancing agent focus and efficiency. Includes
                                            conversation history, out-of-the-box and custom agent widgets, and
                                            predefined content.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Agent manager workspace</td>
                                        <td>
                                            Centralized hub for data and agent information needed to manage a shift,
                                            offering insight into tracked metrics' causes and enabling private messaging
                                            to agents in live conversations.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Chat</td>
                                        <td>
                                            Usage is incurred when an end user enters at least one line during a bot
                                            chat session and submits it. Pre-post chat survey is included in the chat
                                            session credit usage.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Co-Browse</td>
                                        <td>
                                            Co-Browse enables agents and consumers to access and navigate web pages
                                            collaboratively, making complex tasks quick and easy to complete.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Content</td>
                                        <td>
                                            Predefined contents allow agents to select the relevant, ready-made
                                            responses in messaging, instead of retyping repeatedly.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Secure Forms </td>
                                        <td>
                                            Secure Forms provide the additional security layer that enables consumers to
                                            be able to, in full confidence, provide their sensitive information (such as
                                            Cardholder Data /CHD, social security number, and other Personal
                                            Identifiable Information/PII) in a highly secure environment.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Voice/Video</td>
                                        <td>
                                            Web Messaging Voice and Video Connections service allows Customer to use
                                            voice and video capabilities in a Web Messaging conversation.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3">Administrative Experience</td>
                                        <td>Management Console</td>
                                        <td>
                                            Explore, configure and enable platform capabilities in a self-serve manner.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Create and Manage Users and Skills</td>
                                        <td>
                                            Add users, control permissions, establish agent groups, and create and
                                            assign skills for routing. Includes ability to control Dynamic Capacity
                                            settings for agent load balancing.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Campaign Builder</td>
                                        <td>
                                            Customizable library of messaging buttons, also known as engagements which
                                            determine where the messaging buttons will display, who they will display to
                                            and how they will behave. Includes Engagement Controller to control the
                                            incoming flow of conversations in Web Messaging by showing and hiding
                                            engagements from the website according to a defined threshold for a skill.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="16">Communication Channels</td>
                                        <td>Web Messaging</td>
                                        <td>
                                            If an authenticated end user starts a conversation in App Messaging and
                                            continues it in Web Messaging (and vice versa), and this conversation
                                            involves LP bots, the bot conversation will be counted as a 1 Bot
                                            Conversation
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>App Messaging</td>
                                        <td>
                                            If an authenticated end user starts a conversation in App Messaging and
                                            continues it in Web Messaging (and vice versa), and this conversation
                                            involves LP bots, the conversation will be counted as a 1 Bot Conversation.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>SMS</td>
                                        <td>
                                            SMS gateway and phone number costs are not included. Customer may bring its
                                            own gateway provider or purchase use of LivePerson’s provided gateway
                                            separately. Use of LivePerson’s provided SMS gateway will be invoiced
                                            monthly in arrears at the list price rate of the SMS Provider and with a
                                            handling fee of 15%.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email Connect</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>WhatsApp </td>
                                        <td>
                                            Use of WhatsApp messaging may incur additional cost and LivePerson shall
                                            invoice Customer monthly in arrears in accordance with the{' '}
                                            <a
                                                href="https://developers.facebook.com/docs/whatsapp/pricing"
                                                target="_blank"
                                            >
                                                WhatsApp rate card
                                            </a>{' '}
                                            and with a handling fee of 15%.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Apple Messaging for Business </td>
                                        <td>None. </td>
                                    </tr>
                                    <tr>
                                        <td>Meta (formerly Facebook)</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Instagram</td>
                                        <td>Currently available for direct messages only. </td>
                                    </tr>
                                    <tr>
                                        <td>Google RCS Messaging (GRBM)</td>
                                        <td>None. </td>
                                    </tr>
                                    <tr>
                                        <td>Google Business Messaging</td>
                                        <td>
                                            None.
                                            <br />
                                            <br />
                                            Will no longer be available after July 31, 2024.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>KakaoTalk</td>
                                        <td>None. </td>
                                    </tr>
                                    <tr>
                                        <td>Line</td>
                                        <td>None. </td>
                                    </tr>
                                    <tr>
                                        <td>Viber</td>
                                        <td>None. </td>
                                    </tr>
                                    <tr>
                                        <td>WeChat</td>
                                        <td>None. </td>
                                    </tr>
                                    <tr>
                                        <td>Workato</td>
                                        <td>None. </td>
                                    </tr>
                                    <tr>
                                        <td>Connect to Messaging</td>
                                        <td>
                                            LivePerson Connect to Messaging (C2M) is an IVR deflection solution that
                                            lets brands move voice calls to messages through the Conversational Cloud
                                            platform.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="4">Integrations & Developer Experience</td>
                                        <td>Integration Hub</td>
                                        <td>
                                            Explore, configure and enable integrations in a self-serve manner. Includes
                                            workflows (powered by Workato), integrations for 3rd party APIs (including
                                            Medallia), and a widget marketplace for added functionality into the agent
                                            workspace.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Access to 50+ Data, Connect & Customize APIs</td>
                                        <td>
                                            Integrate with 3rd party technologies, including any NLU provider, as well
                                            as integrate conversational data with enterprise systems for insights and
                                            decision-making across the enterprise and configure and manipulate
                                            Conversational Cloud features and capabilities.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>CRM Connectors</td>
                                        <td>
                                            Embedded agent workspace within the most common CRM systems (Salesforce).
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Functions</td>
                                        <td>
                                            Enables brands to develop custom behaviors to better tailor the system to
                                            their specific needs. By offering these capabilities, developers can write a
                                            simple function, deploy it to LivePerson's infrastructure and make it
                                            available to their LivePerson account in minutes.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="7">Automations & AI</td>
                                        <td>Intent Manager (Build, Optimize, (Analyze and Discover Features)</td>
                                        <td>
                                            Create, manage, test, and activate intent domain models using LivePerson
                                            NLU. Includes pre-built domain and starter pack access for top verticals and
                                            use cases.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Conversation Builder</td>
                                        <td>
                                            Build bots that connect to all consumer messaging channels and everyday
                                            systems with an easy-to-use bot builder that allows non-technical staff to
                                            create, optimize and visualize bots. Includes post-conversation survey bots,
                                            voice enabled bots, and templates for common use cases.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>KnowledgeAI</td>
                                        <td>
                                            Unify and leverage curated content to provide fast answers (for bot and
                                            human agents) to common questions and issues. Includes access to knowledge
                                            created within the Conversational Cloud as well as API access to external
                                            CMS.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Conversation Assist</td>
                                        <td>
                                            Conversation Assist offers recommended bots and answers to your agents
                                            inline in their conversations with consumers, and on-demand within a
                                            dedicated widget.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Conversation Orchestrator</td>
                                        <td>
                                            Create highly personalized conversational experiences for consumers with
                                            Dynamic Routing, Conversation Context Service, and the Next Actions API.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>AI Annotator</td>
                                        <td>
                                            Simplify identification, flagging, and correction of automation issues for
                                            agents and QA teams. Includes agent annotations, false responses, and Intent
                                            Manager Optimize tab access for annotation management.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3rd Party Bot Connectors</td>
                                        <td>
                                            Out-Of-The-Box integration includes IBM Watson, Google Dialog Flow, Amazon
                                            Lex, Microsoft bots. Access to LivePerson Functions to build custom
                                            integrations with other 3rd party bot providers.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3">Conversational Intelligence</td>
                                        <td>Data Transporter</td>
                                        <td>
                                            Connects brands with Conversational Cloud report exports from the suite of
                                            Conversational Cloud Data APIs, enabling users to benefit from the power and
                                            agility of the Conversational Cloud open platform without the need to
                                            develop on top of our API based sources. Maximum 15 tasks for the file
                                            transfer subscriptions per site ID.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Report Center</td>
                                        <td>
                                            Consolidates metrics for sentiments, intents, operations, bots, generative
                                            AI, and voice analytics in one dashboard
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>LivePerson Analytics Studio</td>
                                        <td>
                                            Analytics Studio analyzes data from various speech and text conversations,
                                            such as a phone (VoIP telephony), SMS texting, email, web chat, social
                                            media, video conferencing. Analytics Studio can be used to discover intents
                                            and uncover customer insights.
                                            <br />
                                            <br /> Additional terms regarding LivePerson Analytics Studio can be found{' '}
                                            <a href="/policies/analytics-studio-terms-of-use/">here</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="1">Proactive</td>
                                        <td>Proactive Messaging </td>
                                        <td>
                                            Enables Customer to proactively send messages on WhatsApp, SMS and InApp.
                                            SMS gateway and phone number costs are not included. Customer may use its
                                            own gateway or purchase use of LivePerson’s provided gateway separately.
                                            <br />
                                            <br />
                                            Messaging channels are charged at the following rates, plus a handling fee
                                            of 15%.
                                            <ul>
                                                <li>SMS outbound - list price rate of the SMS Provider</li>
                                                <li>
                                                    WhatsApp rate card can be found{' '}
                                                    <a
                                                        href="https://developers.facebook.com/docs/whatsapp/pricing"
                                                        target="_blank"
                                                    >
                                                        here
                                                    </a>
                                                    .
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="10">Generative AI</td>
                                        <td>Generative Intent Training</td>
                                        <td>Maximum 1,000 training phrases per intent</td>
                                    </tr>
                                    <tr>
                                        <td>Copilot Summary</td>
                                        <td>
                                            Provide focused summaries across bot and agent conversations for quicker
                                            context to reduce consumer repetition, and for faster agent wrap-up times.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Copilot Assist</td>
                                        <td>Generative AI-powered Conversation Assist</td>
                                    </tr>
                                    <tr>
                                        <td>Copilot Rewrite</td>
                                        <td>
                                            Copilot Rewrite, part of Conversation Copilot, enhances agent communication
                                            in the workspace. It interprets and refines messages for clarity and
                                            professionalism within the agent workspace, setting the bar for high
                                            customer and agent experiences.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Prompt Library</td>
                                        <td>
                                            Allow for customization of prompts for more tailored & controlled AI
                                            conversations.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bring your own LLM</td>
                                        <td>
                                            Integrate existing LLM models to be used in agent and consumer-facing
                                            capabilities for enhanced control, compliance, and cost.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            AI Agents: KnowledgeAI Agent (formerly known as AI Agent: Messaging Bot and
                                            AI Agent: Voice Bot)
                                        </td>
                                        <td>
                                            Utilize existing knowledge bases, CRMs, and CMSs to inform AI interactions
                                            for increased self-service.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>AI Agents: Routing AI Agent </td>
                                        <td>
                                            Accurately route consumers to the best-suited agent or bot based on their
                                            intent, without needing to build manual routing rules, for reduced
                                            mis-routes and faster deployment.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Hallucination Detection</td>
                                        <td>
                                            Transform and unifies existing (or new) KB, CRM, and CMS content into
                                            accurate, engaging conversations for full automation or faster agent handle
                                            times. Hallucination Detection ensures that responses are reliable and
                                            consistent with your business data.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Generative Insights (Early Access)</td>
                                        <td>
                                            Conversational interface to query data using plain language and open-ended
                                            questions for accelerated data-driven decision making.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3">Reporting & Analytics</td>
                                        <td>Analytics Builder</td>
                                        <td>
                                            Provide business insights for data-driven decision-making, optimizing
                                            contact center operations, and tracking and increasing revenues.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bot Analytics</td>
                                        <td>Offer real-time data on bot activity to gauge effectiveness.</td>
                                    </tr>
                                    <tr>
                                        <td>Meaningful Conversation Score (MCS)</td>
                                        <td>
                                            An automatic, unbiased method to measure the relationship between consumers
                                            and brands.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowspan="3">Advanced AI & Analytics </td>
                                        <td>Meaningful Automated Conversation Score (MACS)</td>
                                        <td>
                                            A proprietary metric that measures the quality of your bot conversations.
                                            Understand consumer sentiment and bot effectiveness to create feedback loops
                                            to self-learn and train your AI.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Performance Optimizer</td>
                                        <td>
                                            A live management analytics dashboard that measures the health of a brand’s
                                            conversational operations.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Custom Analytics Builder</td>
                                        <td>
                                            Create custom reports offering vital business insights for data-driven
                                            decision-making, optimizing contact center operations, and tracking and
                                            increasing revenues.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>&nbsp;</p>
                            <p>
                                <em>
                                    *May be subject to additional implementation fees. Customer may be able to access or
                                    use connectors that integrate third party applications or services with the
                                    Conversational Cloud channel. Customer’s use of any third party applications and
                                    services (e.g., Apple, Google) are and will remain governed by Customer’s separate
                                    agreement with such third party provider.
                                </em>
                            </p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p>
                            <p>
                                <strong>III. Add on Features: </strong>
                            </p>
                            <p>
                                The below Add on Features are available for Customer’s use with Conversational Cloud, if
                                set forth in Customer’s existing Order Form.
                            </p>
                            <p>&nbsp;</p>

                            <table>
                                <colgroup>
                                    <col width="25%" />
                                    <col width="75%" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>
                                            <strong>Feature Name</strong>
                                        </th>
                                        <th>
                                            <strong>Description and Special Considerations</strong>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>LivePerson Connector for Salesforce</td>
                                        <td>None.</td>
                                    </tr>
                                    <tr>
                                        <td>Sandbox with Generative AI</td>
                                        <td>
                                            Access to sandbox, testing, and/or development environments will incur a
                                            charge as set forth in the Customer’s Order Form. Support SLAs and Downtime
                                            Credits, if any, will not apply to such usage. The version and vendor of
                                            Large Language Model would be determined by Liveperson.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Twitter</td>
                                        <td>None.</td>
                                    </tr>
                                    <tr>
                                        <td>Analytics Studio for Voice and Messaging</td>
                                        <td>Measure in Units. A Unit is a voice minute or a messaging conversation.</td>
                                    </tr>
                                    <tr>
                                        <td>Generative AI Credits</td>
                                        <td>None.</td>
                                    </tr>
                                    <tr>
                                        <td>Proactive Messaging</td>
                                        <td>
                                            Enables Customer to proactively send messages on WhatsApp, SMS and InApp.
                                            SMS gateway and phone number costs are not included. Customer may use its
                                            own gateway or purchase use of LivePerson’s provided gateway separately.
                                            <br />
                                            <br />
                                            Messaging channels are charged at the following rates, plus a handling fee
                                            of 15%.
                                            <ul>
                                                <li>SMS outbound – list price rate of the SMS Provider</li>
                                                <li>
                                                    WhatsApp rate card can be found{' '}
                                                    <a
                                                        href="https://developers.facebook.com/docs/whatsapp/pricing"
                                                        target="_blank"
                                                    >
                                                        here
                                                    </a>
                                                </li>
                                            </ul>
                                            Proactive Messaging charges are incurred per proactive message sent. If the
                                            end-user responds to this proactive message and this message interacts with
                                            a bot, then th conversation be counted as a bot conversation on top of the
                                            proactive messaging sent.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Generative AI Copilot</td>
                                        <td>
                                            Include Generative AI Intent Training, Copilot Summary, Copilot Assist,
                                            Copilot Rewrite, Prompt Library, Bring your own LLM. Generative AI Copilot
                                            provides 20 Generative AI Credits per user per year.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>&nbsp;</p>
                            <p>
                                <strong>Updated on September 3, 2024</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
