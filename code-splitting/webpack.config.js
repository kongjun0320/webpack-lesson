const { resolve } = require('path')

module.exports = {
  mode: 'development',
  // entry: {
  //   index: {
  //     import: './src/index.js',
  //     dependOn: 'shared'
  //   },
  //   another: {
  //     import: './src/another-bundle.js',
  //     dependOn: 'shared'
  //   },
  //   shared: 'lodash'
  // },
  entry: {
    index: './src/index.js'
    // another: './src/another-bundle.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    clean: true
  }
  //
  // optimization: {
  //   runtimeChunk: 'single'
  // },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
}
