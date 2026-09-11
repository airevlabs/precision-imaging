import React from 'react';
import { Helmet } from 'react-helmet-async';

const defaultLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "DiagnosticLab", "LocalBusiness"],
    "name": "Precision Imaging",
    "legalName": "PRECISIONIMAGINGUSA LLC",
    "description": "Reliable diagnostic ultrasound services in Downers Grove, IL. Serving Chicago western suburbs with transparent self-pay pricing, fast scheduling, and immediate results.",
    "url": "https://precisionimagingus.com/",
    "telephone": "+1-630-344-9449",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "4121 Fairview Ave",
        "addressLocality": "Downers Grove",
        "addressRegion": "IL",
        "postalCode": "60515",
        "addressCountry": "US"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 41.7925,
        "longitude": -87.9942
    },
    "areaServed": [
        { "@type": "AdministrativeArea", "name": "Downers Grove" },
        { "@type": "AdministrativeArea", "name": "Lombard" },
        { "@type": "AdministrativeArea", "name": "Villa Park" },
        { "@type": "AdministrativeArea", "name": "Glen Ellyn" },
        { "@type": "AdministrativeArea", "name": "Westmont" },
        { "@type": "AdministrativeArea", "name": "Clarendon Hills" },
        { "@type": "AdministrativeArea", "name": "Lisle" },
        { "@type": "AdministrativeArea", "name": "Hinsdale" },
        { "@type": "AdministrativeArea", "name": "Darien" },
        { "@type": "AdministrativeArea", "name": "Oak Brook" },
        { "@type": "AdministrativeArea", "name": "Willowbrook" },
        { "@type": "AdministrativeArea", "name": "Woodridge" },
        { "@type": "AdministrativeArea", "name": "Naperville" },
        { "@type": "AdministrativeArea", "name": "Elmhurst" },
        { "@type": "AdministrativeArea", "name": "Wheaton" },
        { "@type": "AdministrativeArea", "name": "Burr Ridge" },
        { "@type": "AdministrativeArea", "name": "Chicago Metropolitan Area" }
    ],
    "medicalSpecialty": "Diagnostic Ultrasound",
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Diagnostic Ultrasound Services",
        "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Abdominal Ultrasound" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Pelvic Ultrasound" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Obstetric (OB) Ultrasound & Gender Reveal" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Breast Ultrasound" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Echocardiogram (Cardiac Ultrasound)" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Vascular Ultrasound & Doppler" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Thyroid Ultrasound & Screening" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Kidneys & Bladder Ultrasound" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Pediatric Ultrasound" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Carotid Artery & Stroke Screening" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Abdominal Aortic Aneurysm (AAA) Screening" } },
            { "@type": "Offer", "itemOffered": { "@type": "MedicalService", "name": "Soft Tissue Ultrasound" } }
        ]
    }
};

const SEO = ({
    title = "Reliable Diagnostic Ultrasound in Downers Grove, IL | Precision Imaging",
    description = "Reliable diagnostic ultrasound in Downers Grove & Chicago suburbs including Lombard, Villa Park, and Glen Ellyn. Transparent self-pay pricing, fast scheduling, immediate results. Call 630-344-9449.",
    canonical = "https://precisionimagingus.com/",
    schema = defaultLocalBusinessSchema
}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
