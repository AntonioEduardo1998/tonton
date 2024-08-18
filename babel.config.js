module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@theme': './src/theme',
            '@components': './src/components',
            '@routes': './src/routes',
            '@store': './src/store',
            '@utils': './src/utils',
            '@modules': './src/modules',
            '@hooks/*': ['./src/hooks/*'],
            '@tests': './src/tests',
            '@services': './src/services',
          },
        },
      ],
    ],
  };
};
