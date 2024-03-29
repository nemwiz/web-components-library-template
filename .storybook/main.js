module.exports = {
    stories: [
        '../packages/**/*.stories.mdx',
        '../packages/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-docs',
            options: {
                transcludeMarkdown: true
            }
        },
        'storybook-addon-themes',
        '@storybook/addon-interactions',
    ],
    features: {
        buildStoriesJson: true,
        interactionsDebugger: true
    },
    framework: '@storybook/html',
    core: {
        builder: '@storybook/builder-webpack5'
    }
}