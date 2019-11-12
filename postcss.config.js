module.exports = {
  plugins: {
    autoprefixer: {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-px2rem': {
      selectorBlackList: ['node_modules', 'ignore'],
      propList: ['*'],
      rootValue: 37.5
    }
  }
}
