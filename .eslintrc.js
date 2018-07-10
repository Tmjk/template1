module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.dev.conf.js',
      }
    }
  },
  rules: {
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],
    'import/no-extraneous-dependencies': ["error", {
      "devDependencies": ['*.conf.js']
    }],
  }
}
