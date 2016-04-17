"use strict"

var Ground = require( "./objs/ground" )
var Field = require( "./objs/field" )
var Game = require( "./objs/game" )
var Team = require( "./objs/team" )
var Ref = require( "./objs/ref" )

var db = require( '.././db/db')

var fields = [
  new Field("Field#1"),
  new Field("Field#2"),
  new Field("Field#3")
]

function fillFields (callback) {
  db.getAll('games').then(function (games) {

    games = games.sort( function (a, b) {
      return a.div > b.div
    })

    var index = 0
    games.forEach( function (gm) {
      var field = fields[index++]
      field.addGame(gm)

      if (index >= fields.length)
        index = 0
    })

    fields.forEach(function (field) {
      console.log("Field Name: ", field.name, " Field Games: ", field.games)
    })

    callback(null, fields)
  })
}

module.exports = fillFields
