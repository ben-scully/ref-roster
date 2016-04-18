var express = require('express')
var router = express.Router()
var db = require('.././db/db')

router.route('/')
  .get(function (req, res) {
    db.getAll('refs').then( function (data) {
      console.log("Harryyy: ", data)
      res.end('xx ' + JSON.stringify(data))
    })
  })

module.exports = router
