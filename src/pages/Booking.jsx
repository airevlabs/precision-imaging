import React, { useEffect } from 'react';
import SEO from '../components/SEO';

const Booking = () => {
    useEffect(() => {
        // Load the form embed script
        const script = document.createElement('script');
        script.src = "https://links.airevlabs.com/js/form_embed.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Clean up the script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="page-container booking-page-container">
            <SEO
                canonical="https://precisionimagingus.com/#/booking"
            />
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden p-4 md:p-8">
                <h1 className="booking-header-title">Book Your Appointment</h1>
                <div className="booking-iframe-container">
                    <iframe
                        src="https://links.airevlabs.com/booking/precision-imaging-lk69quimwkl?heightMode=full&showHeader=false"
                        loading="lazy"
                        className="booking-iframe"
                        scrolling="no"
                        id="GuXeu5l7u85zbTGI5UHS_1782970475338"
                        title="Book Appointment"
                    />
                </div>
            </div>
        </div>
    );
};

export default Booking;

