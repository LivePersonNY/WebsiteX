import React, { useState, useEffect } from "react";
import axios from "axios";
import NotFoundPage from '../404';
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";
import $ from 'jquery';

function rfpUpload() {

    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    let presignedUrl = '';
    let presignedUrlGenerated = false;

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        console.log(event.target.files[0]);
    };

    // API Gateway url to invoke function to generate presigned url
    const API_ENDPOINT = "https://uyymrut23i.execute-api.us-east-1.amazonaws.com/rfpPresignedUrl";

    // Function to generate the presigned url
    const getPresignedUrl = async () => {
        // GET request: presigned URL
        const response = await axios({
            method: "GET",
            url: API_ENDPOINT,
        });

        presignedUrl = response.data.presignedUrl;
        const presignedUrlKey = response.data.key;
        presignedUrlGenerated = true;
        return [presignedUrl, presignedUrlKey];
    };

    // Function to upload the selected file using the generated presigned url
    const uploadToPresignedUrl = async (presignedUrl) => {
        // Upload file to pre-signed URL
        console.log(`presignedUrl: ${presignedUrl}`);
        return;
        const uploadResponse = await axios.put(presignedUrl, selectedFile, {
            headers: {
                "Content-Type": "application/png",
            },
            onUploadProgress: (progressEvent) => {
                const percentCompleted = Math.round(
                    (progressEvent.loaded * 100) / progressEvent.total
                );
                setUploadProgress(percentCompleted);
                console.log(`Upload Progress: ${percentCompleted}%`);
            },
        });
        console.log(uploadResponse);
    };

    // Function to orchestrate the upload process
    const handleUpload = async (fileElem) => {
        // console.log('starting handleUpload');
        // console.log(`selectedFile: ${selectedFile}`);
        // console.log(`fileElem: ${fileElem}`);
        try {
            // Ensure a file is selected
            if (!fileElem) {
                console.error("No file selected.");
                return;
            }

            if (presignedUrlGenerated) {
                console.log('its already generated');
                return;
            }

            const [presignedUrl, presignedUrlKey] = await getPresignedUrl();
            // uploadToPresignedUrl(presignedUrl);
            return presignedUrlKey;
        } catch (error) {
            // Handle error
            console.error("Error uploading file:", error);
        }
    };

    useEffect(() => {
        $(window).on('load', function () {
            MktoForms2.whenReady(function (form) {
                form.onValidate(async function () {
                    console.log('we are onValidate');
                    const presignedUrlKey = await handleUpload(document.querySelector('.mkto-file-field input').files[0]);
                    if (presignedUrlKey) {
                        form.addHiddenFields({
                            testFileField: `https://us-east-1.console.aws.amazon.com/s3/object/marketing-rfp?region=us-east-1&bucketType=general&prefix=${presignedUrlKey}`,
                        });
                    }

                    console.log('Submitting values from the onValidate:', form.vals());

                });
                form.onSuccess(function () {
                    console.log('we are onSuccess');
                    console.log(`we are onSuccess with ${presignedUrl}`);
                    uploadToPresignedUrl(presignedUrl);
                    // handleUpload(document.querySelector('.mkto-file-field input').files[0]);
                });
                setTimeout(() => {
                    $('.mktoRow-opt-in').before($('.mkto-file-field'));
                }, 2000);
            })
        });
    }, []);

    return (
        <Layout>
            <Seo title="RFP Upload" robots="noindex, nofollow" />

            <div className="pane pane-form form-vertical form-vertical-2024">
                <div className="container">
                    <div className="row bg-blue-20 align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-lg-last">
                            <h2>
                                RFP test
                            </h2>

                            <form id="mktoForm_5133" mkto="5133"></form>
                            <mkto-after mkto="5133">
                                <strong>Thanks for your interest! </strong>One of our experts will contact you shortly.
                            </mkto-after>
                        </div>
                        <div className="col-lg-5 g-lg-0 order-lg-first">
                            <img
                                src="https://static.liveperson.com/static-assets/2024/08/07154231/liveperson-bringing-voice-into-the-digital-fold-image-2_2x.png"
                                alt=""
                                width="528"
                                height="658"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mktoFormRow mkto-file-field">
                <input type="file" onChange={handleFileChange} />
            </div>

            {/* <button onClick={handleUpload}>Upload</button> */}

        </Layout>
    );
}

export default rfpUpload;