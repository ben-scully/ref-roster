"use strict"

class Field {
  constructor(name) {
    this.name = name
    this.games = []
  }

  addGame (game) {
    this.games.push(game)
  }
}

module.exports = Field
