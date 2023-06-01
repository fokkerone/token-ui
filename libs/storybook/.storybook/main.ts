// .storybook/main.ts

// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-webpack5)
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../**/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
    staticDirs: ['../public'],
    addons: [
        // '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@nrwl/react/plugins/storybook',
        // '@storybook/preset-create-react-app',
        // '@storybook/addon-interactions',
    ],
    docs: {
        autodocs: 'tag',
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    babel: async (options) => ({
        // Update your babel configuration here
        ...options,
    }),

    webpackFinal: async (config, { configType }) => {
        // Make whatever fine-grained changes you need
        // Return the altered config
        return config;
    },
};

export default config;
