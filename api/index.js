const express = require('express')
const router = express.Router()
const { Types: { ObjectId } } = require('mongoose')
const Cat = require('./models/cat')

router.route('/')
  // POST route
  .post(async (req, res, next) => {
    console.log('/api POST')
    try {
      const newCat = await (new Cat(req.body)).save()
      res.status(200).json({
       newCat
      })
    } catch (err) {
      res.status(500)
    }
  })
  // GET ALL posts
  .get(async (req, res, next) => {
    console.log('/api GET')
    try {
      const results = await Cat.paginate({})
      // Sends the given results with status 200
      res.status(200).json({
        results: results.docs,
        pagination: {
          count: results.total,
          page: results.page,
          limit: results.limit
        }
      })
    } catch (err) {
      res.status(500)
    }
  })

router.route('/:id')
  console.log('/api/:id GET')
  // GET a post with a given ID
  .get(async (req, res, next) => {
    try {
      const cat = await Cat.findOne({ _id: ObjectId(req.params.id) })
      res.status(OK).json(cat)
    } catch (err) {
      res.status(500)
    }
  })
  // // UPDATE a post with a given ID
  // .put(async (req, res, next) => {
  //   try {
  //     const updatedPost = await Post.update({ id: req.params.id, post: req.body })
  //     res.status(OK).json(updatedPost)
  //   } catch (err) {
  //     res.status(500)
  //   }
  // })
  // // DELETE  a post with a given ID
  // .delete(async (req, res, next) => {
  //   try {
  //     await Post.remove(req.params.id)
  //     res.status(OK).json({ id: req.params.id })
  //   } catch (err) {
  //     res.status(500)
  //   }
  // })

// Exports all the functions
module.exports = router