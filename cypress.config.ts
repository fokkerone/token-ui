import { defineConfig } from 'cypress';
import getCompareSnapshotsPlugin from 'cypress-image-diff-js/dist/plugin';

export default defineConfig({
    env: {
        preserveOriginalScreenshot: false,
    },
    e2e: {
        baseUrl: 'http://localhost:4400',
        setupNodeEvents(on, config) {
            getCompareSnapshotsPlugin(on, config);
        },
    },
});
