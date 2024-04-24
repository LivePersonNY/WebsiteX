import * as React from 'react';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import NotFoundPage from '../404';

const formSubmit = () => {
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    useEffect(() => {}, []);

    return (
        <Layout mainClass="form">
            <Seo title="form test | LivePerson" description="form test" />

            <div data-localize="false" className="pane bg-transparent">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h2>Form test</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default formSubmit;
