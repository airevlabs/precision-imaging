import React from 'react';
import SEO from '../components/SEO';

const Hipaa = () => {
    return (
        <div className="page-container">
            <SEO
                canonical="https://precisionimagingus.com/#/hipaa"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center" style={{ marginBottom: '2.5rem', textAlign: 'center', fontSize: '2.25rem', fontWeight: 'bold' }}>HIPAA Notice of Privacy Practices</h1>
            <div className="prose max-w-none text-gray-700 space-y-6">
                <p><strong>Effective Date: Jan 1st, {new Date().getFullYear()}</strong></p>

                <p className="text-lg font-semibold">THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.</p>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Our Legal Duty</h2>
                    <p>
                        PRECISIONIMAGINGUSA LLC is required by applicable federal and state law to maintain the privacy of your health information. We are also required to give you this Notice about our privacy practices, our legal duties, and your rights concerning your health information. We must follow the privacy practices that are described in this Notice while it is in effect.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Uses and Disclosures of Health Information</h2>
                    <p>We use and disclose health information about you for treatment, payment, and healthcare operations. For example:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Treatment:</strong> We may use or disclose your health information to a physician or other healthcare provider providing treatment to you.</li>
                        <li><strong>Payment:</strong> We may use and disclose your health information to obtain payment for services we provide to you.</li>
                        <li><strong>Healthcare Operations:</strong> We may use and disclose your health information in connection with our healthcare operations, such as quality assessment and improvement activities.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Your Rights</h2>
                    <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li><strong>Access:</strong> You have the right to look at or get copies of your health information, with limited exceptions.</li>
                        <li><strong>Disclosure Accounting:</strong> You have the right to receive a list of instances in which we or our business associates disclosed your health information for purposes, other than treatment, payment, healthcare operations and certain other activities.</li>
                        <li><strong>Restriction:</strong> You have the right to request that we place additional restrictions on our use or disclosure of your health information.</li>
                        <li><strong>Alternative Communication:</strong> You have the right to request that we communicate with you about your health information by alternative means or to alternative locations.</li>
                        <li><strong>Amendment:</strong> You have the right to request that we amend your health information.</li>
                        <li><strong>Electronic Notice:</strong> If you receive this Notice on our Web site or by electronic mail (e-mail), you are entitled to receive this Notice in written form.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Questions and Complaints</h2>
                    <p>
                        If you want more information about our privacy practices or have questions or concerns, please contact us.
                    </p>
                    <div className="mt-4">
                        <p><strong>Privacy Officer</strong></p>
                        <p>PRECISIONIMAGINGUSA LLC</p>
                        <p>Westmont, IL</p>
                        <p>Phone: 630-344-9449</p>
                        <p>Email: precisionimageusa@gmail.com</p>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default Hipaa;
