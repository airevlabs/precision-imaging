import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router';
import SSGLayout from './components/SSGLayout.jsx';
import AbdomenUltrasound from './pages/services/AbdomenUltrasound.jsx';
import AortaScreening from './pages/services/AortaScreening.jsx';
import BreastUltrasound from './pages/services/BreastUltrasound.jsx';
import CarotidScreening from './pages/services/CarotidScreening.jsx';
import Echocardiogram from './pages/services/Echocardiogram.jsx';
import KidneysBladderUltrasound from './pages/services/KidneysBladderUltrasound.jsx';
import ObUltrasound from './pages/services/ObUltrasound.jsx';
import PediatricImaging from './pages/services/PediatricImaging.jsx';
import PelvicUltrasound from './pages/services/PelvicUltrasound.jsx';
import SoftTissueUltrasound from './pages/services/SoftTissueUltrasound.jsx';
import ThyroidUltrasound from './pages/services/ThyroidUltrasound.jsx';
import VascularUltrasound from './pages/services/VascularUltrasound.jsx';
import FollowUpSurveillance from './pages/services/FollowUpSurveillance.jsx';

const routes = {
    '/services/abdomen-ultrasound': AbdomenUltrasound,
    '/services/aorta-screening': AortaScreening,
    '/services/breast-ultrasound': BreastUltrasound,
    '/services/carotid-screening': CarotidScreening,
    '/services/echocardiogram': Echocardiogram,
    '/services/kidneys-bladder-ultrasound': KidneysBladderUltrasound,
    '/services/ob-ultrasound': ObUltrasound,
    '/services/pediatric-imaging': PediatricImaging,
    '/services/pelvic-ultrasound': PelvicUltrasound,
    '/services/soft-tissue-ultrasound': SoftTissueUltrasound,
    '/services/thyroid-ultrasound': ThyroidUltrasound,
    '/services/vascular-ultrasound': VascularUltrasound,
    '/services/follow-up-surveillance': FollowUpSurveillance
};

export function render(url, helmetContext) {
    const Component = routes[url];
    if (!Component) return '';

    const html = renderToString(
        <React.StrictMode>
            <HelmetProvider context={helmetContext}>
                <StaticRouter location={url}>
                    <SSGLayout>
                        <Component />
                    </SSGLayout>
                </StaticRouter>
            </HelmetProvider>
        </React.StrictMode>
    );
    return html;
}
