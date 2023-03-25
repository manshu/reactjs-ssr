const path = require('path')
require('@babel/register')({
  configFile: path.resolve(__dirname, '..', './.babelrc'),
})
require('./express')
