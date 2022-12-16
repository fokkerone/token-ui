//const rootMain = require('../../../.storybook/main');

module.exports = {
  core: { builder: 'webpack5' },

  stories: ['../../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials', '@nrwl/react/plugins/storybook'],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    // if (rootMain.webpackFinal) {
    //   config = await rootMain.webpackFinal(config, { configType });
    // }

    // add your own webpack tweaks if needed
    //console.log(config);
    return config;
  },

  staticDirs: ['../public'],
};
