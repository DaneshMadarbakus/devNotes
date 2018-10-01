const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const SUMMARY_JSON = require('./content/summary.json')

app.prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const pageId = req.params.id;
      const posts = Object.keys(SUMMARY_JSON.fileMap).map(function (key) {
        return SUMMARY_JSON.fileMap[key];
      });
      const currentPostSummary = posts.filter(function (post) {
        return post.id === pageId;
      })[0];
      const currentPage = require(`./${currentPostSummary.dir}/${currentPostSummary.base}`)
      const queryParams = { content: currentPage }
      
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })