const mongoose = require('mongoose')
const Cat = require ('../../models/cat')


// Get all the cats
function getCats(req, res) {
  //Query the DB and if no errors, send all the cats
  let query = Cat.find({})
  query.exec((err, cats) => {
    if (err) res.send(err)
    //If no errors send all the cats
    res.json(cats)
  })
}


//Post /cat to save a new cat
function postCat(req, res) {
  //Creates a new cat
  var newCat = new Cat(req.body)
  //Save it into the DB
  newCat.save((err,cat)=> {
    if (err) {
      res.send(err)
    } else {
      //If no errors, send a successfull message to user
      res.status(200)
      res.json({message: "Cat successfully added!"})
    }
  })
}


//GET /cats/:id route to retrieve a cat given its id

function getCat(req,res) {
  Cat.findById(req.params.id, (err, book) => {
    if(err) res.send(err)
    //If no errors send it back to client
    res.json(cat)
  })
}

// Detele cat with given id
function deleteCat(req, res) {
  Cat.remove({_id: req.params.id}, (err, result)=>{
    res.json({message: 'Book successfully deleted!'})
  })
}

// PUT /cats/:id to update a cat given its id
function updateCat(req, res) {
  Cat.findById({_id: req.params.id}, (err, cat) => {
    if(err) res.send(err)
    Object.assign(cat, req.body).save((err, cat) => {
      if(err) res.send(err)
      res.json({ message: 'Cat updated!', cat })
    })
  })
}

module.exports = { getCats, postCat, getCat, deleteCat, updateCat }