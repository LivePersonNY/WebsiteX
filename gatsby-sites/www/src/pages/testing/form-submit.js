import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import NotFoundPage from '../404';

const formSubmit = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        // return <NotFoundPage />;
    }

    useEffect(() => {}, []);

    return (
        <Layout mainClass="form">
            <Seo title="form test | LivePerson" description="form test" robots="noindex, nofollow" />

            <div data-localize="false" className="pane bg-transparent">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h2>Form test</h2>
                            <br />
                            <br />
                            <form
                                className="form-netlify"
                                name="contact"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                action="/"
                                method="post"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />
                                <p>
                                    <label>
                                        Name <input type="text" name="name" />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        Email <input type="email" name="email" />
                                    </label>
                                </p>
                                <p>
                                    <button type="submit">Send</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default formSubmit;
