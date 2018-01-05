const express = require('express')
const Router = express.Router()
const cats = require('./cats')

Router.get('/', (req, res, next)=> {
  res.json({message: 'Arrived to /api'})
})

Router.route('/cats')
  .get(cats.getCats)
  .post(cats.postCat)
Router.route('/cats/:id')
  .get(cats.getCat)
  .delete(cats.deleteCat)
  .put(cats.updateCat)

module.exports = Router
