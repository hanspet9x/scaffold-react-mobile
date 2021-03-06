module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      ['babel-preset-expo', {targets: {node: 'current'}}],
      '@babel/preset-typescript'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
