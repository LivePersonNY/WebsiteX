import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PlainContent from '../components/blocks/PlainContent';
import { Helmet } from 'react-helmet';
import ResourcesNav from '../components/blocks/ResourcesNav';
import Post from '../components/Post';
import Breadcrumb from '../components/Breadcrumb';

const Resources = function (props) {
    const nodeTypes = {
        News: {
            kicker: 'In the news',
            slug: 'news',
        },
        Success: {
            kicker: 'Case studies',
            slug: 'success-stories',
        },
        Report: {
            kicker: 'Guides & reports',
            slug: 'reports',
        },
        Webinar: {
            kicker: 'Webinar',
            slug: 'webinars',
        },
    };

    let breadCrumbs = () => {
        if (props.active == 'reports') {
            return (
                <>
                    <a className="breadcrumb-link link link-no-arrow" href="https://www.liveperson.com/">
                        Home
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/">
                        Resource Library
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/reports/">
                        Reports
                    </a>
                </>
            );
        } else if (props.active == 'news') {
            return (
                <>
                    <a className="breadcrumb-link link link-no-arrow" href="https://www.liveperson.com/">
                        Home
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/">
                        Resource Library
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/news/">
                        News
                    </a>
                </>
            );
        } else if (props.active == 'success') {
            return (
                <>
                    <a className="breadcrumb-link link link-no-arrow" href="https://www.liveperson.com/">
                        Home
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/">
                        Resource Library
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/success-stories/">
                        Case Studies
                    </a>
                </>
            );
        } else if (props.active == 'webinar') {
            return (
                <>
                    <a className="breadcrumb-link link link-no-arrow" href="https://www.liveperson.com/">
                        Home
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/">
                        Resource Library
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/webinars/">
                        Webinars
                    </a>
                </>
            );
        } else {
            return (
                <>
                    <a className="breadcrumb-link link link-no-arrow" href="https://www.liveperson.com/">
                        Home
                    </a>{' '}
                    /{' '}
                    <a className="breadcrumb-link link link-no-arrow" href="/resources/">
                        Resource Library
                    </a>
                </>
            );
        }
    };

    return (
        <Layout>
            <Helmet
                bodyAttributes={{
                    class: `resources ${props.active}`,
                }}
            />
            <Seo
                title={props.title}
                description={props.description}
                meta={props.meta}
                canonical={props.canonical}
                robots="index, follow"
            />

            <PlainContent
                alignmentClass="text-center"
                headLevel="h1"
                header="Everything you need to know to go Conversational"
                kicker="Resource Library"
                colWidth="6"
            />
            <ResourcesNav active={props.active || `all`} />
            <div className="pane index">
                <div className="container">
                    <div className="row">
                        {props.items.map(function (item) {
                            let tags = [];
                            item.tags.nodes.map(function (tag) {
                                tags.push(tag.slug);
                            });
                            tags = tags.join(' ');

                            return (
                                item.seo.metaRobotsNoindex == 'index' && (
                                    <Post
                                        post={item}
                                        kicker={nodeTypes[item.nodeType].kicker}
                                        root={'/resources/' + nodeTypes[item.nodeType].slug}
                                        classes={tags}
                                    />
                                )
                            );
                        })}
                    </div>
                </div>
            </div>
            <Breadcrumb breadCrumbs={breadCrumbs()} />
        </Layout>
    );
};
export default Resources;
