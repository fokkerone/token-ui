import { getDefaultOTELInstrumentations } from '@grafana/faro-web-tracing';

export const faro = (async () => {
    if (typeof window === 'undefined') return;

    const { initializeFaro, getWebInstrumentations } = await import(
        '@grafana/faro-react'
    );
    const { TracingInstrumentation } = await import(
        '@grafana/faro-web-tracing'
    );

    const faroInstance = initializeFaro({
        url: 'https://grafana-agent.int.pl.renewables-apps.com/collect',
        apiKey: '5582d7d6-b8ea-11ed-afa1-0242ac120002',
        instrumentations: [
            ...getWebInstrumentations({
                captureConsole: true,
            }),
            new TracingInstrumentation({
                // Optional, if you want to overwrite the default instrumentations or set ignore URLs
                instrumentations: [...getDefaultOTELInstrumentations([])],
            }),
        ],
        app: {
            name: 'digital-solutions-frontend',
            version: '0.0.1', // TODO Configure
            environment: 'debug', // TODO Configure
        },
    });

    faroInstance?.api.pushLog(['Faro was initialized']);

    return faroInstance;
})();
