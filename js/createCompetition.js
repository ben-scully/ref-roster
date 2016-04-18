var Competition = require("./objs/competition")
var Ground = require("./objs/ground")
var Field = require("./objs/field")
var Game = require("./objs/game")
var Team = require("./objs/team")
var Ref = require("./objs/ref")
var knex = require('.././db/knexObj')

var tableName = 'competitions'
// try create a competition Object
//   if its missing obvoiuus stuff reject inspect

var name = 'Tuesday'
var ground = 'Wakefield'
var date = '2016-04-20'
var time = '11:30:00'

var comp = new Competition(name, ground, date, time)

insertCompetition(comp)

function insertCompetition (obj) {
  var row = {
    cName: obj.name,
    cGroundID: obj.ground,
    cDate: obj.date,
    cStart: obj.time
  }
  knex(tableName).insert(row)
    .then(function (data) {
      console.log("Works?: ", data)
    })
    .catch(function (err) {
      console.log("Stringify: ", JSON.stringify(err))
      console.error("Boo!: ", err)
    })
}

// try put it in the database
//   if the database hates if tell the user
