module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  features: {
    buildStoriesJson: true,
    interactionsDebugger: true,
  },
};
