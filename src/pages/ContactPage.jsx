import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

const ContactPage = () => {
    return (
        <div className="pt-24">
            <SEO 
                title="Contact Us | Precision Imaging"
                description="Get in touch with Precision Imaging for professional diagnostic ultrasound services. Book your appointment or ask us any questions."
                canonical="https://precisionimagingus.com/#/contact"
            />
            <Contact />
            <div className="container" style={{ marginTop: '4rem', paddingBottom: '2rem' }}>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af', lineHeight: '1.5', textAlign: 'justify' }}>
                    Proudly serving patients in: Downers Grove, Westmont, Clarendon Hills, Lisle, Oak Brook, Hinsdale, Darien, Willowbrook, Woodridge, Lombard, Glen Ellyn, Western Springs, Villa Park, Wheaton, Burr Ridge, Indian Head Park, Naperville, Elmhurst, Westchester, La Grange, Countryside, Carol Stream, Northlake, Oakbrook Terrace, Bolingbrook, Addison, Aurora, Brookfield, Berkeley, Hillside, Broadview, Roselle, Itasca, Bensenville, Lemont, Franklin Park, Schiller Park, River Forest, Forest Park, Maywood, Bellwood, Oak Park, Oak Forest, Tinley Park, Rolling Meadows, Ridgewood, Sauganash, Crest Hill, Mount Prospect, Niles, Crystal Lawns, Edgebrook, Mayfair, Joliet, Ingalls Park, East Joliet, South Elgin, Plum Grove Village, Winthrop Village, Fernway, Hoffman Estates, Albany Park, Creekside, Valley View, Raynor Park, Arlington Heights, Forest River, Lidice, Fernway Park, Lincolnwood, Morton Grove, Cherry Hill, Gougars, Fairfax Village, Sherwood Oaks, Clintonville, Coleman, and Schaumburg.
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
