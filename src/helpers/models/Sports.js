const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create schema
const SportsSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
 })

// module.exports = Sports = mongoose.model('sports', SportsSchema)
module.exports = mongoose.model('Sports', SportsSchema)