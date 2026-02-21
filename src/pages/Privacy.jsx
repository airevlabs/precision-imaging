import React from 'react';
import SEO from '../components/SEO';

const Privacy = () => {
    return (
        <div className="page-container">
            <SEO
                canonical="https://precisionimagingus.com/#/privacy"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center" style={{ marginBottom: '2.5rem', textAlign: 'center', fontSize: '2.25rem', fontWeight: 'bold' }}>Privacy Policy</h1>
            <div className="prose max-w-none text-gray-700 space-y-6">
                <p><strong>Effective Date: Jan 1st, {new Date().getFullYear()}</strong></p>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">IMPORTANT NOTICE REGARDING TEXT MESSAGING</h2>
                    <p>
                        PRECISIONIMAGINGUSA LLC ("we," "us," or "our") DOES NOT share customer opt-in information, including phone numbers and consent records, with any affiliates or third parties for marketing, promotional, or any other purposes unrelated to providing our direct services. All text messaging originator opt-in data is kept strictly confidential.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">1. Information We Collect</h2>
                    <p>We collect the following types of information:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, physical address, payment information, opt-in records.</li>
                        <li><strong>Non-Personal Information:</strong> IP address, browser type, device info, analytics, cookies.</li>
                        <li><strong>Customer Communication:</strong> Records of inquiries, appointment details, service history.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">2. How We Use Your Information</h2>
                    <p>We use collected data for:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Providing and improving our services</li>
                        <li>Processing transactions and payments</li>
                        <li>Communicating with you about your inquiries and appointments</li>
                        <li>Ensancing website functionality and security</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">3. SMS Messaging & Compliance</h2>
                    <h3 className="text-lg font-semibold mb-2">Text Message Program Terms & Conditions</h3>
                    <p className="mb-2">By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders and customer support.</p>

                    <h4 className="font-semibold mt-2">Opt-In & Consent:</h4>
                    <ul className="list-disc pl-5 mb-2">
                        <li>You will only receive messages if you have explicitly opted in.</li>
                        <li>We maintain timestamped records of all opt-in actions.</li>
                        <li>We comply with the TCPA and applicable laws.</li>
                    </ul>

                    <h4 className="font-semibold mt-2">Opt-Out Instructions:</h4>
                    <ul className="list-disc pl-5 mb-2">
                        <li>Reply "STOP" to cancel at any time.</li>
                        <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in.</li>
                    </ul>

                    <h4 className="font-semibold mt-2">Message Frequency & Content:</h4>
                    <p>Message frequency varies based on your interactions. Messages will be directly related to requested services. We do not send promotional content without specific consent.</p>

                    <h4 className="font-semibold mt-2">Help & Support:</h4>
                    <p>Reply "HELP" for assistance or contact us at precisionimageusa@gmail.com.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">4. Information Sharing & Disclosure</h2>
                    <p>We do not sell, rent, or trade personal information. We may share information with Service Providers for operations (e.g., payment, scheduling), but strictly excluding text messaging originator opt-in data for marketing purposes.</p>
                    <p className="mt-2"><strong>All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties, excluding aggregators and providers of the Text Message services.</strong></p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">5. Data Security</h2>
                    <p>We implement reasonable security measures (encryption, access controls) to protect your personal information, though no method is 100% secure.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">6. Cookies & Tracking</h2>
                    <p>We use cookies to analyze traffic and improve user experience. You may control cookies through your browser settings.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">7. Your Rights & Choices</h2>
                    <p>You have the right to access, update, or delete your info, opt-out of marketing/SMS, and withdraw consent. Contact us to exercise these rights.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">10. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy, contact us at:</p>
                    <div className="mt-2">
                        <p><strong>PRECISIONIMAGINGUSA LLC</strong></p>
                        <p>Phone: 630-344-9449</p>
                        <p>Email: precisionimageusa@gmail.com</p>
                        <p>Website: precisionimagingus.com</p>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default Privacy;
