let mongoose = require('mongoose')
let Schema = mongoose.Schema

//cat schema definition

let CatSchema = new Schema(
  {
    name: {type: String, required: true},
/*    color: {type: String, required: true},
    gender: {type: String, required: true},
    missingSince: {type: Date, required: true},
    city: {type: String, required: true},
    phone: {type: Number, required: false},
    email: {type: String, required: true},
    pic: {type: String, required: false},*/
    createdAt: { type: Date, default: Date.now }
  }
)

// Sets the createdAt parameter equal to the current time
CatSchema.pre('save', next => {
  now = new Date()
  if(!this.createdAt) {
    this.createdAt = now
  }
  next()
})

//Exports the BookSchema for use elsewhere.
module.exports = mongoose.model('cat', CatSchema);