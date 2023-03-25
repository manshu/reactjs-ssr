const express = require('express')
const fs = require('fs')
const path = require('path')
const React = require('react')
const { renderToString } = require('react-dom/server')
import { StaticRouter } from 'react-router-dom/server'
// const { StaticRouter } = require('react-router-dom')
// const { Helmet } = require('react-helmet')
// const React = require('react')
// const App = require('../build/assets/js/App').default

const app = express()
const App = require('../src/App').default

app.get(
  /\.(js|css|map|ico)$/,
  express.static(path.resolve(__dirname, '..', './build'))
)
app.use('*', (req, res) => {
  let indexHtml = fs.readFileSync(
    path.resolve(__dirname, '..', './build/index.html'),
    { encoding: 'utf-8' }
  )

  const context = {}

  const appHTML = renderToString(
    <StaticRouter location={req.originalUrl} context={context}>
      <App />
    </StaticRouter>
  )

  indexHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${appHTML}</div>`
  )

  res.contentType('text/html')
  res.status(200)
  return res.send(indexHtml)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
