const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Cat = require ('../../models/cat')


// Get all the cats
function getCats(req, res, next) {
  const options =  {
    page: parseInt(req.query.page),
    limit: parseInt(req.query.limit),
    sort: {
      [JSON.parse(req.query.sort)[0]] : JSON.parse(req.query.sort)[1].toLowerCase()
    }
  }
  //Query the DB and if no errors, send all the cats
  Cat.paginate({}, options , (err, result)=> {
    if (err) res.send(err)
    res.json(result)
  })
}


//Post /cat to save a new cat
function postCat(req, res, next) {
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

function getCat(req,res, next) {
  Cat.findById(req.params.id, (err, book) => {
    if(err) res.send(err)
    //If no errors send it back to client
    res.json(cat)
  })
}

// Detele cat with given id
function deleteCat(req, res, next) {
  Cat.remove({_id: req.params.id}, (err, result)=>{
    res.json({message: 'Cat successfully deleted!'})
  })
}

// PUT /cats/:id to update a cat given its id
function updateCat(req, res, next) {
  Cat.findById({_id: req.params.id}, (err, cat) => {
    if(err) res.send(err)
    Object.assign(cat, req.body).save((err, cat) => {
      if(err) res.send(err)
      res.json({ message: 'Cat updated!', cat })
    })
  })
}

module.exports = { getCats, postCat, getCat, deleteCat, updateCat }