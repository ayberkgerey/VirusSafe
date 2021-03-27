module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  sourceMaps: true,
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js'],
      },
    ],
    '@babel/plugin-transform-modules-commonjs',
  ],
};
