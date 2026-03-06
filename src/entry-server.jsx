import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router';
import SSGLayout from './components/SSGLayout.jsx';
import AbdomenUltrasound from './pages/services/AbdomenUltrasound.jsx';

const routes = {
    '/services/abdomen-ultrasound': AbdomenUltrasound
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
