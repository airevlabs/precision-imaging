import React from 'react';
import SEO from '../components/SEO';

const Booking = () => {
    return (
        <div className="page-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SEO
                canonical="https://precisionimagingus.com/#/booking"
            />
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden p-4 md:p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center" style={{ marginBottom: '2rem', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold' }}>Book Your Appointment</h1>
                <div className="booking-iframe-container">
                    <iframe
                        src="https://links.airevlabs.com/widget/booking/ID42mfbX2KQb6dnEDDlZ"
                        title="Book Appointment"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="yes"
                    />
                </div>
            </div>
        </div>
    );
};

export default Booking;
