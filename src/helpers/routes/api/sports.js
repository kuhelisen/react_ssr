const express = require('express')
const router = express.Router()


//load Sports model
const Sports = require('../../models/Sports')


// @route   GET /api/sports
// @desc    Get sports Lists
//@access   Public
router.get('/', (req,res) => {
    Sports.find({})
    .then(sports => {
        console.log("These are sports name", sports)
        res.json(sports)
    })
    .catch(err => {
        res.status(404)
    })
})

module.exports =  router
