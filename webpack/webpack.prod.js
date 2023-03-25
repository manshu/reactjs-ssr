const path = require('path')
const webpack = require('webpack')

const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '..', './src/index.prod.jsx'),
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Himanshu Prod'),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [`...`, new TerserPlugin(), new CssMinimizerPlugin()],
  },
}
