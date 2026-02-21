import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ canonical }) => {
    return (
        <Helmet>
            {canonical && <link rel="canonical" href={canonical} />}
        </Helmet>
    );
};

export default SEO;
