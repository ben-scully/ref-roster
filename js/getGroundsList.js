var Competition = require("./objs/competition")
var Ground = require("./objs/ground")
var Field = require("./objs/field")
var Game = require("./objs/game")
var Team = require("./objs/team")
var Ref = require("./objs/ref")
var knex = require('.././db/knexObj')

var tableName = 'grounds'

var row1 = {
  gName: 'Anderson Park',
  gNumFields: 4
}

var row2 = {
  gName: 'Boyd Wilson Park',
  gNumFields: 5
}

getGroundsList(function (err, data) {
  console.log(data)
})

function getGroundsList (callback) {

  knex(tableName).insert(row1)
    .then(function (resp) {
      return knex(tableName).insert(row2)
    })
    .then(function (resp) {
      return knex.select('gName').table(tableName)
    })
    .then(function (resp) {
      callback(null, resp)
    })
    .catch(function (err) {
      console.log("Stringify: ", JSON.stringify(err))
      console.error("Boo!: ", err)
    })
}

module.exports = getGroundsList
