module.exports = (api) => {
  api.cache(true);

  return {
    presets: ['@babel/preset-env'],
    plugins: [
      '@babel/plugin-transform-runtime',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
    ],
    env: {
      testing: {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
      },
    },
  };
};
