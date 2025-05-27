import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import NotFoundPage from '../404';

const formSubmit2 = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        // return <NotFoundPage />;
    }

    useEffect(() => { }, []);

    return (
        <Layout mainClass="form">
            <Seo title="form test | LivePerson" description="form test" robots="noindex, nofollow" />

            <div data-localize="false" className="pane bg-transparent">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3">
                            <form
                                className="form-gcpSiteTesting"
                                name="gcpSiteTesting"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                action="/"
                                method="post"
                            >
                                <input type="hidden" name="form-name" value="gcpSiteTesting" />
                                <input type="hidden" name="bot-field" />
                                <p>
                                    <label>
                                        Email:<br /><input type="email" name="email" />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Brand Name:<br /><input type="text" name="name" />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Site ID (Account Number):<br /><input type="text" name="siteId" />
                                    </label>
                                </p>
                                <p>
                                    <button class="form-btn" type="submit">Submit</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default formSubmit2;
