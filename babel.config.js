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
            '@components': './src/components',
            '@routes': './src/routes',
            '@store': './src/store',
            '@utils': './src/utils',
            '@modules': './src/modules',
            '@hooks/*': ['./src/hooks/*'],
          },
        },
      ],
    ],
  };
};
