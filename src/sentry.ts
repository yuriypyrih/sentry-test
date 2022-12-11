import { BrowserTracing } from '@sentry/tracing';
import { init } from '@sentry/react';
import { Integration } from '@sentry/types';
// import config from 'constants/config';
// import pkg from '../../package.json';

const DSN = 'https://d0d620aa129b4c53a5509fac25047846@o4504169038544896.ingest.sentry.io/4504169040314368';

export const sentryClientStart = () => {
    if (!DSN) {
        return;
    }

    init({
        dsn: DSN,
        autoSessionTracking: false,
        normalizeDepth: 10,
        release: '2.0',
        //release: pkg.version,
        integrations: [new BrowserTracing() as unknown as Integration],
    });
};
