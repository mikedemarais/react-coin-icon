module.exports = {
  plugins: [
    ['lodash'],
    '@babel/plugin-proposal-object-rest-spread',
    'babel-plugin-styled-components'
  ],
  presets: [
    '@babel/env',
    'module:metro-react-native-babel-preset',
  ],
};
