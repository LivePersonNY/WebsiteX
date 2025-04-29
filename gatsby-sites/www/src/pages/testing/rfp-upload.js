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
    let fileToUpload = null;

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
        console.log(`selectedFile: ${fileToUpload}`);
        const uploadResponse = await axios.put(presignedUrl, fileToUpload, {
            headers: {
                "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
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

                form.onSuccess(async function () {
                    console.log('we are onSuccess');
                    await uploadToPresignedUrl(presignedUrl);
                    return false;
                });

                setTimeout(() => {
                    $('.mktoRow-opt-in').before($('.mkto-file-field'));
                }, 2000);

                document.querySelector('.mkto-file-field input').addEventListener('change', async function () {
                    console.log('file changed');
                    fileToUpload = this.files[0];
                    const presignedUrlKey = await handleUpload(fileToUpload);
                    if (presignedUrlKey) {
                        form.addHiddenFields({
                            testFileField: `https://us-east-1.console.aws.amazon.com/s3/object/marketing-rfp?region=us-east-1&bucketType=general&prefix=${presignedUrlKey}`,
                        });
                    }
                    console.log('vals on file change:', form.vals());
                })

            })
        });
    }, []);

    return (
        <Layout>
            <Seo title="RFP Upload" robots="noindex, nofollow" />



            <div id="complete" className="pane bg-primary-dark comp-left-right pane-form form-vertical form-vertical-2024-v2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-1 order-last form-col">
                            <form id="mktoForm_5133" mkto="5133"></form>
                            <mkto-after mkto="5133">
                                <strong>Thanks for your interest! </strong>One of our experts will contact you shortly.
                            </mkto-after>
                        </div>
                        <div className="col-lg-6 order-first">
                            <h1>
                                <span className="h6 text-uppercase">LivePerson RFP submission</span>Trusted by thousands of the <mark className="has-inline-color has-pale-pink-color">world’s biggest</mark> brands
                            </h1>

                            <div className="rich-container mb-4">
                                <p data-tag="new line split">
                                    Let LivePerson help you deliver connected experiences orchestrated and personalized by AI. Submit an RFP to our team of experts. Please include the project's goals, scope, budget, timeline, and any specific requirements. We will review your submission and reply to you within 48 hours.<br /><br />
                                    With LivePerson, you can be there for every call, chat, and text with the only conversational AI platform built on billions of enterprise conversations. Seamlessly integrate existing systems, connecting fragmented customer interactions into unified, meaningful conversations that result in real outcomes.
                                </p>
                                <p className="">
                                    Join thousands of the world’s most popular brands and realize results from these connected
                                    experiences like:
                                    <br />
                                    &nbsp;<br />
                                </p>
                                <ul>
                                    <li className="">
                                        30% reduction in cost per interaction
                                        <br />
                                        &nbsp;<br />
                                    </li>
                                    <li className="">
                                        91% customer satisfaction score
                                        <br />
                                        &nbsp;<br />
                                    </li>
                                    <li className="">50% decrease in agent&nbsp;attrition</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 offset-lg-3 form-logo-strip">
                            <h6 className="text-uppercase text-center">join thousands of brands worldwide</h6>
                            <div className="img-container">
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142229/Azul-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142230/Bankwest-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142232/Burberry-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142233/HSBC-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142234/OUA-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142235/PNC-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142236/SkyUK-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142237/The-RealReal-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142237/Virgin-Media-O2-white.svg"
                                    loading="lazy"
                                />
                                <img
                                    src="https://static.liveperson.com/static-assets/2024/09/18142240/Zurich-Insurance-white.svg"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="mktoFormRow mkto-file-field">
                Please upload any required documentation here. Max file size, 500MB.<br />
                <input type="file" onChange={handleFileChange} />
                <br /><br />
            </div>

            {/* <button onClick={handleUpload}>Upload</button> */}

        </Layout>
    );
}

export default rfpUpload;