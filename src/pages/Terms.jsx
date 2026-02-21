import React from 'react';
import SEO from '../components/SEO';

const Terms = () => {
    return (
        <div className="page-container">
            <SEO
                canonical="https://precisionimagingus.com/#/terms"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center" style={{ marginBottom: '2.5rem', textAlign: 'center', fontSize: '2.25rem', fontWeight: 'bold' }}>Terms of Service</h1>
            <div className="prose max-w-none text-gray-700 space-y-6">
                <p><strong>Effective Date: Jan 1st, {new Date().getFullYear()}</strong></p>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">SMS Messaging Terms & Compliance</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">1. Program Description</h3>
                            <p>This messaging program sends appointment confirmation and reminder messages to customers who have booked an appointment with PRECISIONIMAGINGUSA LLC through our website or scheduling forms and opted in. Messages include scheduling confirmations, reminders, rescheduling updates, and support.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">2. Cancellation Instructions</h3>
                            <p>You can cancel the SMS service at any time by texting "STOP". We will confirm your unsubscribe status via SMS. Create a new appointment to opt back in.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">3. Support Information</h3>
                            <p>Reply "HELP" for assistance, or contact precisionimageusa@gmail.com or call 630-344-9449.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">4. Messaging Terms</h3>
                            <p>Carriers are not liable for delayed or undelivered messages. Message and data rates may apply. Message frequency varies based on your service usage.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">5. Age Restriction</h3>
                            <p>You must be 18 years or older to participate in our SMS program.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">6. Privacy Policy</h3>
                            <p>For privacy-related inquiries, please refer to our Privacy Policy.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">General Terms</h2>
                    <p>This website (the "Site") is owned and operated by PRECISIONIMAGINGUSA LLC. By using the Site, you agree to be bound by these Terms of Service.</p>
                    <p className="mt-2">Accessing the Site, in any manner, constitutes use of the Site and your agreement to be bound by these Terms.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Intellectual Property Rights</h2>
                    <p>This Site and all materials available on it are the property of PRECISIONIMAGINGUSA LLC and are protected by copyright, trademark, and other intellectual property laws. The Site is provided solely for your personal non-commercial use.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Disclaimers</h2>
                    <p>The information, products, and services offered on or through the Site are provided "as is" and without warranties of any kind. We disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.</p>
                    <p className="mt-2">You agree to indemnify and hold harmless PRECISIONIMAGINGUSA LLC from any claims arising out of your breach of these Terms.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Termination</h2>
                    <p>We reserve the right to terminate or suspend your access to the Site without notice if we determine that you have violated these Terms of Service.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Governing Law</h2>
                    <p>These Terms of Service shall be governed by and construed in accordance with the laws of the state in which PRECISIONIMAGINGUSA LLC operates.</p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h2>
                    <div className="mt-2">
                        <p><strong>PRECISIONIMAGINGUSA LLC</strong></p>
                        <p>Phone: 630-344-9449</p>
                        <p>Email: precisionimageusa@gmail.com</p>
                        <p>Website: precisionimagingus.com</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Terms;
