const path = require('path');

module.exports = {
  entry: './dev/bootstrap.main.ts',
  output: {
    path: path.resolve(__dirname, '../dev'),
    filename: 'bootstrap.main.js',
    library: 'bootstrap',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  externals: {
    BSDeviceInfo : 'BSDeviceInfo',
    '@brightsign/registry': 'commonjs @brightsign/registry',
    '@brightsign/systemtime': 'commonjs @brightsign/systemtime',
    '@brightsign/networkconfiguration': 'commonjs @brightsign/networkconfiguration',
    '@brightsign/videooutput': 'commonjs @brightsign/videooutput',
    '@brightsign/screenshot': 'commonjs @brightsign/screenshot',

    '@brightsign/videomodeconfiguration': 'commonjs @brightsign/videomodeconfiguration',
    '@brightsign/videoinput': 'commonjs @brightsign/videoinput',
    '@brightsign/system': 'commonjs @brightsign/system',

    '@brightsign/hostconfiguration': 'commonjs @brightsign/hostconfiguration',
    '@brightsign/networkdiagnostics': 'commonjs @brightsign/networkdiagnostics',
    'core-js/fn/object/assign' : 'commonjs core-js/fn/object/assign',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  target: 'electron',
  node: {
    __dirname: false
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `awesome-typescript-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
};
