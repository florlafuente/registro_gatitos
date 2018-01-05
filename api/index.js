const express = require('express')
const router = express.Router()
const cats = require('./cats')

module.exports = router

router.get('/', (req, res, next)=> {
  res.json({message: 'Arrived to /api'})
})

router.route('/cats')
  .get(cats.getCats)
  .post(cats.postCat)
router.route('/cats/:id')
  .get(cats.getCat)
  .delete(cats.deleteCat)
  .put(cats.updateCat)
