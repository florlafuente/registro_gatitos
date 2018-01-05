const mongoose = require('mongoose')
const Cat = require ('../../models/cat')

function getCats(req, res) {
   res.json({message: 'Arrived to get cats'})
}

function postCat(req, res) {
   res.json({message: 'Arrived to post cats'})
}

function getCat(req, res) {
   res.json({message: 'Arrived to get cat'})
}

function deleteCat(req, res) {
   res.json({message: 'Arrived to delete cat'})
}

function updateCat(req, res) {
   res.json({message: 'Arrived to update cats'})
}

module.exports = { getCats, postCat, getCat, deleteCat, updateCat }