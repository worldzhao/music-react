module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    },
    'postcss-plugin-px2rem': {
      rootValue: 75, // 根节点fontSize，二倍图为75 一倍图为37.5
      unitPrecision: 5,
      propWhiteList: [],
      propBlackList: [],
      exclude: /(node_module)/,
      selectorBlackList: [],
      ignoreIdentifier: false,
      replace: true,
      mediaQuery: false,
      minPixelValue: 1
    }
  }
};
