import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import PlainContent from '../components/blocks/PlainContent';

const JpHomepage = () => {

    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    useEffect(() => {



    });

    let meta = [
        {
            property: `og:title`,
            content:
                'ビジネスに最適な会話型 AI プラットフォーム | LivePerson' ||
                ``,
        },
        {
            property: `og:image`,
            content: `https://static.liveperson.com/static-assets/2023/07/19141456/Homepage_Meta-Tag_JV_0719.png`,
        },
        {
            property: `og:description`,
            content:
                `Liveperson の会話 AI プラットフォームは、ブランドがデジタル ファーストの顧客との会話を取り入れて、規模、エンゲージメント、結果を向上させるのに役立ちます。` ||
                ``,
        },
        {
            property: `og:url`,
            content: 'https://jp.liveperson.com/',
        },
        {
            name: `type`,
            property: `og:type`,
            content: `website`,
        },
        {
            name: `image`,
            property: `twitter:image`,
            content: `https://static.liveperson.com/static-assets/2023/07/19141456/Homepage_Meta-Tag_JV_0719.png`,
        },
        {
            name: `author`,
            property: `og:author`,
            content: `LivePerson Team`,
        },
    ];

    return (
        <Layout>
            <Seo
                title="ビジネスに最適な会話型 AI プラットフォーム | LivePerson"
                description="Liveperson の会話 AI プラットフォームは、ブランドがデジタル ファーストの顧客との会話を取り入れて、規模、エンゲージメント、結果を向上させるのに役立ちます。"
                meta={meta}
                canonical="https://jp.liveperson.com/"
                robots=""
            />

            <div className="pane comp-plain-content bg-primary-dark text-center pane-with-lead-text styles-2023 july-2023"
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10">
                            <h1>
                                <span className="h6 text-uppercase">LivePerson Conversational Cloud® プラットフォーム</span>会話をビジネスの中心に据える
                            </h1>
                            <p data-tag="new line split">
                                デジタル顧客との会話における企業リーダーとともに、コンタクト センターの変革を加速し、エージェントの生産性を向上させ、よりパーソナライズされた顧客エクスペリエンスを提供します。
                            </p>
                            <a className="btn btn-primary" href="/request-demo/">デモを入手する</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pane comp-overlay-slider undefined">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="comp-slider-container">
                                <div id="overlay-slider" className="carousel slide testing-here4" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="col-lg-12">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-3 offset-lg-1">
                                                        <img
                                                            src="https://static.liveperson.com/static-assets/2024/09/10153040/liveperson-spark-virtual-contact-center-solutions-img-opt.png"
                                                            alt="会話型AIプラットフォームを活用したスーパーエージェント"
                                                            width="224"
                                                            height="130"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h3 className="h3">
                                                            最高のROIを実現するコンタクトセンターへの変革
                                                        </h3>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <a target="_blank"
                                                            className="btn btn-outline-secondary"
                                                            href="https://www.liveperson.com/resources/webinars/contact-center-transformation/?utm_source=home_page&amp;utm_medium=direct&amp;utm_campaign=spark_virtual_q4_2024"
                                                        >今すぐチェックしてください</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div data-localize="false" className="pane comp-plain-content bg-blue-20 text-left undefined">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10">
                            <div className="vimeoContainer">
                                <iframe
                                    src="https://www.youtube.com/embed/3BUbC8OgQ1w?si=ZvKhkXkXyDw9yDoW"
                                    className="vimeoFrame"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-localize="false" id="horizontal1" className="pane comp-tabs-c bg-blue-20 pane-with-lead-text undefined">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h2 className="text-center">初日からデジタルファースト</h2>
                            <p className="text-center" data-tag="br split">
                                最新の非同期メッセージングは​​、コミュニケーションの方法を変えました。 <strong>10 人中 8 人</strong>の消費者は、オムニチャネル アプローチを採用し、音声チャネルやメッセージング チャネル全体で会話を結びつける企業から購入する可能性が高くなりますが、顧客の会話の <strong>70%</strong> は依然としてコールセンターに留まります。
                            </p>
                            <p className="text-center" data-tag="br split">
                                LivePerson は従来のコールセンターと、デジタル ファーストで AI を活用した未来の顧客エクスペリエンスとの間のギャップを埋めます。受賞歴のある当社のテクノロジーとチームは、次のことをお手伝いします。
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10 pills-mobile-scroll">
                            <div className="pills-container">
                                <a className="btn pill pill-active" data-tab="0">デジタルへのシフト
                                </a
                                ><a className="btn pill" data-tab="1">従業員に力を与える
                                </a
                                ><a className="btn pill" data-tab="2">自動化を採用する
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="row bg-primary-light align-items-center comp-tabs-content"
                        data-tab-content="0"
                        style={{ display: 'flex' }}
                    >
                        <div className="col-lg-4 offset-lg-1">
                            <img
                                src="https://static.liveperson.com/static-assets/2022/02/09101952/cursor-click_circle-orange.svg"
                                alt=""
                                width="56"
                                height="56"
                                loading="lazy"
                            />
                            <p className="h6 text-uppercase">終わらない電話自動応対サービス</p>
                            <h3>デジタルへのシフト</h3>
                            <p data-tag="new line split">
                                音声通話をメッセージングやその他のデジタル チャネルにルーティングすることで、コストを削減し、顧客のニーズと期待に応えます。
                            </p>

                            <p className="h6">結果</p>
                            <div className="row align-items-center row-cols-lg row-cols-2 tab-stats-grid">
                                <div className="col">
                                    <p className="h2">30%+</p>
                                    <p className="subtitle3">運用コストの削減</p>
                                </div>
                                <div className="col">
                                    <p className="h2">10%+</p>
                                    <p className="subtitle3">CSATの増加</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/07/19141441/Homepage_Action.2_Shift_JV_0717%402x.png"
                                alt="会話型 AI プラットフォームのインテリジェンス ダッシュボード。自然言語理解によって収集された意図について人間のエージェントに洞察を提供します。これは会話型 AI ツールで自動化できます。"
                                width="1280"
                                height="1120"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div
                        className="row bg-primary-light align-items-center comp-tabs-content"
                        data-tab-content="1"
                        style={{ display: 'none' }}
                    >
                        <div className="col-lg-4 offset-lg-1">
                            <img
                                src="https://static.liveperson.com/static-assets/2022/02/09101809/bicep-flexing_circle-orange.svg"
                                alt=""
                                width="56"
                                height="56"
                                loading="lazy"
                            />
                            <p className="h6 text-uppercase">長い間、会話はサイロ化されている</p>
                            <h3>従業員に力を与える</h3>
                            <p data-tag="new line split">
                                チーム全体に会話型 AI プラットフォーム、ツール、インテリジェンスを提供し、28 年分の会話データを活用して、 顧客<em>と</em> ビジネスへのサービスを向上させます。
                            </p>

                            <p className="h6">結果</p>
                            <div className="row align-items-center row-cols-lg row-cols-2 tab-stats-grid">
                                <div className="col">
                                    <p className="h2">50%+</p>
                                    <p className="subtitle3">エージェントの離職率の減少</p>
                                </div>
                                <div className="col">
                                    <p className="h2">25%+</p>
                                    <p className="subtitle3">生産性の向上</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/07/21130747/Homepage_Action.1_Empower_JV_0721%402x.png"
                                alt="会話型 AI プラットフォームのインテリジェンス ダッシュボード。自然言語理解によって収集された意図について人間のエージェントに洞察を提供します。これは会話型 AI ツールで自動化できます。"
                                width="1280"
                                height="1120"
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div
                        className="row bg-primary-light align-items-center comp-tabs-content"
                        data-tab-content="2"
                        style={{ display: 'none' }}
                    >
                        <div className="col-lg-4 offset-lg-1">
                            <img
                                src="https://static.liveperson.com/static-assets/2022/02/09103000/robot-arm_circle-orange.svg"
                                alt=""
                                width="56"
                                height="56"
                                loading="lazy"
                            />
                            <p className="h6 text-uppercase">チャットボットは長い間ループします</p>
                            <h3>自動化を採用する</h3>
                            <p data-tag="new line split">
                                最も一般的かつ複雑な顧客の意図を自動化することで、会話を拡大し人間のエージェントを解放し、誰もが必要なものをより早く入手できるようにします。
                            </p>

                            <p className="h6">結果</p>
                            <div className="row align-items-center row-cols-lg row-cols-2 tab-stats-grid">
                                <div className="col">
                                    <p className="h2">50%+</p>
                                    <p className="subtitle3">運用コストの削減</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/07/19141449/Homepage_Action.3_Embrace_JV_0717%402x.png"
                                alt="自然言語処理を使用した会話型 AI テクノロジーにより、銀行顧客の住宅購入のニーズを理解し、会話型インターフェイスを介して住宅ローンのオプションを提供します"
                                width="1280"
                                height="1120"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pane comp-logo-strip bg-transparent">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="comp-logo-strip-logos">
                                <h2>
                                    何千もの世界最大のブランドから信頼されています
                                </h2>
                                <p>
                                    エンタープライズ規模のセキュリティ・ニーズに応えられるよう構築された LivePerson の Conversational Cloud® プラットフォームは、最も愛される世界的ブランドのデジタル トランスフォーメーションを支援してきました。銀行、保険から通信、旅行に至るまで、複雑さとコンプライアンスは当社の専門分野です。
                                </p>
                                <div className="comp-logo-strip-logos-container d-flex justify-content-around flex-wrap">
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170203/Azul-Sm%403x.svg"
                                        alt="Azul logo"
                                        width="74"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170204/Bankwest-sm%403x.svg"
                                        alt="Bankwest logo"
                                        width="93"
                                        height="25"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170205/Burberry-sm%403x.svg"
                                        alt="Burberry logo"
                                        width="88"
                                        height="15"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170206/hsbc-sm%403x.svg"
                                        alt="HSBC logo"
                                        width="83"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170207/OUA-sm%403x.svg"
                                        alt="OUA logo"
                                        width="103"
                                        height="35"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170209/PNC-sm%403x.svg"
                                        alt="PNC logo"
                                        width="76"
                                        height="27"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170210/Sky-sm%403x.svg"
                                        alt="Sky logo"
                                        width="47"
                                        height="29"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170211/Sweetwater-sm%403x.svg"
                                        alt="Sweetwater logo"
                                        width="115"
                                        height="27"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170212/TRR-sm%403x.svg"
                                        alt="TheRealReal logo"
                                        width="97"
                                        height="23"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170213/Virgin-o2-sm%403x.svg"
                                        alt="Virgin logo"
                                        width="70"
                                        height="37"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170215/Wayfair-sm%403x.svg"
                                        alt="Wayfair logo"
                                        width="89"
                                        height="21"
                                        loading="lazy"
                                    />
                                    <img
                                        src="https://static.liveperson.com/static-assets/2024/07/31170217/Zurich-sm%403x.svg"
                                        alt="Zurich logo"
                                        width="94"
                                        height="27"
                                        loading="lazy"
                                    />
                                </div>
                                <a className="link" href="https://www.liveperson.com/resources/customers/" target="_blank">彼らのストーリーを読む</a>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="comp-logo-strip-carousel">
                                <div id="ls-carousel" className="">
                                    <div className="carousel-inner">
                                        <div className="">
                                            <p className="quote2">
                                                「LivePerson は信頼性が高く拡張性の高いデジタル変革パートナーを求めている従来の企業に最適です。」
                                            </p>
                                            <p>— “The Forrester Wave™: Digital Customer Interaction Solutions, Q2&nbsp;2024″</p>
                                            <p>
                                                <a className="link" href="https://www.liveperson.com/resources/news/digital-customer-interaction-solutions/" target="_blank">
                                                    続きを読む</a
                                                >
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pane comp-stat-grid bg-lavendar-20 pane-with-lead-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="text-center">
                                業界のベンチマークを上回る実際のビジネス成果
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="comp-4col-grid text-center">
                                <div className="row align-items-center row-cols-lg-5 row-cols-2">
                                    <div className="col">
                                        <p className="h1">30%</p>
                                        <p className="subtitle2">運用コストの削減</p>
                                    </div>
                                    <div className="col">
                                        <p className="h1">90%</p>
                                        <p className="subtitle2">自動化率</p>
                                    </div>
                                    <div className="col">
                                        <p className="h1">25%</p>
                                        <p className="subtitle2">顧客満足度の向上</p>
                                    </div>
                                    <div className="col">
                                        <p className="h1">10x</p>
                                        <p className="subtitle2">コンバージョンと従来のデジタル</p>
                                    </div>
                                    <div className="col">
                                        <p className="h1">50%</p>
                                        <p className="subtitle2">エージェントの離職率の減少</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row"><div className="col-lg-12"></div></div>
                </div>
            </div>

            <div data-localize="false" className="pane comp-content-cta bg-transparent pane-with-lead-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="comp-content-cta-container bg-neutral-96">
                                <div className="row align-items-center text-center text-lg-start">
                                    <div className="col-lg-6 offset-lg-1">
                                        <h2>LP 360 で会話の旅を加速しましょう</h2>
                                        <p data-tag="new line split">
                                            私たちは、エージェントから自動化、 そして<strong>保証された結果</strong>に至るまで、エンドツーエンドの会話戦略を構築および管理します。
                                        </p>
                                    </div>
                                    <div className="col-lg-3 offset-lg-1 text-lg-end">
                                        <a className="btn btn-primary" href="https://www.liveperson.com/services/lp-360/" target="_blank">始めましょう</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-localize="false" className="pane comp-plain-content bg-transparent text-center pane-with-lead-text undefined">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-10">
                            <h2>
                                Conversational Flywheel™ で AI のギャップを埋める</h2>
                            <p data-tag="new line split">
                                LivePerson のエンタープライズ ソリューションは、コンタクト センターの変革を加速することが実証されている 4 段階のフレームワークを中心に構築されています。
                            </p>
                            <div className="vimeoContainer">
                                <iframe
                                    src="https://player.vimeo.com/video/880643218?h=050389172a"
                                    className="vimeoFrame"
                                    data-ready="true"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-localize="false" className="pane bg-transparent comp-left-right comp-left-right-repeat main-header-half">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/07/19141503/Homepage_Value.1_Understand_JV_0717%402x.png"
                                alt="当社の会話型 AI プラットフォームが自然言語処理と機械学習を使用して人間の会話への応答を自動化する方法の例"
                                width="1280"
                                height="960"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3>理解する</h3>
                            <div className="rich-container">
                                <p data-tag="new line split">
                                    オムニチャネルの会話データを分析して、顧客の要望やニーズを明らかにします。顧客の主な意図を特定し、カスタマー ジャーニーを継続的に改善する機会を明らかにします。
                                </p>
                            </div>
                            <a className="btn btn-link" href="/products/conversational-intelligence/"
                            >会話型インテリジェンスについて詳しく見る</a
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div data-localize="false" className="pane bg-transparent comp-left-right comp-left-right-repeat undefined">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-last">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/07/19141510/Homepage_Value.2_Connect_JV_0717%402x.png"
                                alt="会話型 AI ソリューションで音声を介して入ってくる会話の自動化を支援する音声アシスタントの図"
                                width="1280"
                                height="960"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <h3>接続する</h3>
                            <div className="rich-container">
                                <p data-tag="new line split">
                                    音声通話から Web、モバイル、ソーシャル メッセージングまで、顧客が選択したチャネルで顧客と関わり、エンタープライズ システムを統合して、真につながった顧客エクスペリエンスを実現します。
                                </p>
                            </div>
                            <a className="btn btn-link" href="https://www.liveperson.com/products/messaging-channels/" target="_blank"
                            >接続の可能性を探る
                            </a
                            >
                        </div>
                    </div>
                </div>
            </div>

            <div data-localize="false" className="pane bg-transparent comp-left-right undefined">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/07/19141526/Homepage_Value.4_Assist_JV_0717%402x.png"
                                alt="最高の会話型 AI プラットフォームが顧客の問題を解決する例 (オンライン ショッピングのスタイル ガイドとしての仮想アシスタントの作成など)"
                                width="1280"
                                height="960"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3>アシスト</h3>
                            <div className="rich-container">
                                <p data-tag="new line split">
                                    カスタマイズ可能なワークスペースと最新の生成 AI テクノロジーをエージェントに提供します。エージェント対応 AI は、正確性を確保し効率を高めながら、人間が会話を制御できるようにします。
                                </p>
                            </div>
                            <a className="btn btn-link" href="https://www.liveperson.com/products/conversation-manager/" target="_blank">エージェントとマネージャーのツールを確認する</a>
                        </div>
                    </div>
                </div>
            </div>

            <div data-localize="false" className="pane bg-transparent comp-left-right undefined">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-lg-last">
                            <img
                                src="https://static.liveperson.com/static-assets/2023/07/19141517/Homepage_Value.3_Automate_JV_0717%402x.png"
                                alt="当社の会話型 AI プラットフォーム上に構築された機械学習仮想アシスタントは、旅行者のフライト変更を支援し、カスタマー サポート チームの一員のような優れたカスタマー サービスを提供します"
                                width="1280"
                                height="960"
                                loading="lazy"
                            />
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <h3>自動化する</h3>
                            <div className="rich-container">
                                <p data-tag="new line split">
                                    インテリジェントな自動化と LLM を活用した専門的な AI エージェントを通じて、セルフサービスとより迅速な解決を推進します。
                                </p>
                            </div>
                            <a className="btn btn-link" href="/products/generative-ai/">当社の生成 AI をご紹介します</a>
                        </div>
                    </div>
                </div>
            </div>

            <div data-localize="false" className="pane comp-content-cta bg-transparent pane-with-lead-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="comp-content-cta-container bg-neutral-96">
                                <div className="row align-items-center text-center text-lg-start">
                                    <div className="col-lg-6 offset-lg-1">
                                        <h2>当社のデジタル顧客会話プラットフォームを詳しく見てみましょう</h2>
                                    </div>
                                    <div className="col-lg-3 offset-lg-1 text-lg-end">
                                        <a className="btn btn-primary" href="/products/conversational-cloud/"
                                        >
                                            探検する Conversational Cloud</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-localize="false" className="pane comp-card-grid bg-neutral-96 pane-with-lead-text undefined">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <h2 className="">
                                あなたのようなリーダーの成功事例をご覧ください
                            </h2>
                        </div>
                    </div>
                    <div className="row comp-card-grid-container">
                        <div className="col-lg" id="0">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img
                                        className="card-image-internal"
                                        src="https://static.liveperson.com/static-assets/2023/07/19144906/Homepage_Testimonial-1_TalkTalk_JV_0426.svg"
                                        alt="TalkTalk customer quote"
                                        width="336"
                                        height="49"
                                        loading="lazy"
                                    />
                                    <p className="card-text quote1">
                                        「LivePerson の会話型 AI とプラットフォームによるこれまでの成功に加えて、LLM と生成 AI は、シームレスでパーソナライズされた会話をさらに拡大するのに役立つ大きな可能性を秘めています。」
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a
                                        href="https://pr.liveperson.com/2023-04-25-LivePerson-upgrades-its-Conversational-Cloud-platform-with-trustworthy-AI-capabilities-to-redefine-how-businesses-put-Generative-AI-and-LLMs-to-work"
                                        className="card-link link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >プレスリリースを読む</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div className="col-lg" id="1">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img
                                        className="card-image-internal"
                                        src="https://static.liveperson.com/static-assets/2023/07/19162233/Homepage_Testimonial-2_CarGurus_JV_0424.svg"
                                        alt="CarGurus customer quote"
                                        width="336"
                                        height="49"
                                        loading="lazy"
                                    />
                                    <p className="card-text quote1">
                                        「LivePerson のオムニチャネル コミュニケーション機能は、顧客エクスペリエンスを向上させると同時に、エージェントの効率も向上させます。これを LivePerson の分析ツールとユーザーフレンドリーなプラットフォームと組み合わせることで、ドライバーにパーソナライズされた便利で透明性の高いエクスペリエンスを提供するという CarGurus の使命がサポートされます。」
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a target="_blank" href="https://www.liveperson.com/resources/customers/" className="card-link link">このような他の引用文を参照してください</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg" id="2">
                            <div className="card h-100">
                                <div className="card-body">
                                    <img
                                        className="card-image-internal"
                                        src="https://static.liveperson.com/static-assets/2023/01/19141426/Homepage_Testimonial-3_Chipotle_JV_0119.svg"
                                        alt="Nicole West, VP Digital Strategy &amp; Product at Chipotle"
                                        width="336"
                                        height="33"
                                        loading="lazy"
                                    />
                                    <p className="card-text quote1">
                                        「この変革の旅で私たちが行ってきたすべてのことは、優れたデジタル体験をお客様とスタッフに提供し、より良い世界を築くという私たちの目的に沿った便利で摩擦のない魅力的な体験を厳選することでした。」
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a
                                        href="https://pr.liveperson.com/index.php?s=43&amp;item=620"
                                        className="card-link link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        プレスリリースを読む</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-localize="false" className="pane comp-card-grid-b bg-transparent pane-with-lead-text undefined">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-lg-8 offset-lg-2"><h2 className="">推奨リソース</h2></div>
                    </div>
                    <div className="row comp-card-grid-container">
                        <div className="col-12 col-lg">
                            <div className="card card-b h-100">
                                <img
                                    className="card-img-top"
                                    src="https://static.liveperson.com/static-assets/2024/03/25171951/liveperson-ai-chatbot-on-demand-demos-resource-1_2x.png"
                                    alt="Flywheel illustration of how our conversational AI platform works in digital transformation"
                                    width="832"
                                    height="417"
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <p className="card-title card2">オンデマンドのデモ</p>
                                    <p className="card-text subtitle1">強力な AI ツールをすぐに体験してください
                                    </p>
                                </div>
                                <div className="card-footer"><a href="https://www.liveperson.com/guided-demo/" target="_blank" className="card-link link">ツアーに参加する
                                </a></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg">
                            <div className="card card-b h-100">
                                <img
                                    className="card-img-top"
                                    src="https://static.liveperson.com/static-assets/2024/03/25172127/liveperson-digital-transformation-more-resources-resource-2%402x.png"
                                    alt="cover of State of Customer Conversations 2024 report"
                                    width="832"
                                    height="417"
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <p className="card-title card2">より多くのリソースを入手する</p>
                                    <p className="card-text subtitle1">
                                        よく読まれているブログや業界ガイドなどをご覧ください。

                                    </p>
                                </div>
                                <div className="card-footer"><a href="https://www.liveperson.com/resources/" target="_blank" className="card-link link">そこに連れて行って
                                </a></div>
                            </div>
                        </div>
                        <div className="col-12 col-lg">
                            <div className="card card-b h-100">
                                <img
                                    className="card-img-top"
                                    src="https://static.liveperson.com/static-assets/2024/03/25172130/liveperson-omnichannel-messaging-news-resource-3%402x.png"
                                    alt="会話型 AI ソリューションのイベントを表す、ライトの LivePerson ロゴ"
                                    width="832"
                                    height="417"
                                    loading="lazy"
                                />
                                <div className="card-body">
                                    <p className="card-title card2">
                                        ニュースのライブパーソン</p>
                                    <p className="card-text subtitle1">
                                        最新のプレス情報や特集記事などの最新情報を入手してください。
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <a traget="_blank" href="https://www.liveperson.com/company/news/" className="card-link link">最新情報を入手</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </Layout >
    );
};

export default JpHomepage;
