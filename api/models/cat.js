const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

/**
Define `Cat` schema
*/

const Cat = new mongoose.Schema({
  name: { type: String, maxLength: 120, required: true },
  content: { type: String, required: true }
}, { timestamps: true })

/**
 * Model's Plugin Extensions
 */

Cat.plugin(mongoosePaginate)

/**
 * Expose `Cat` Model
 */

module.exports = mongoose.model('Cat', Cat)