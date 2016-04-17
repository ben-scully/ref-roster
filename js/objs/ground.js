"use strict"

class Ground {
  constructor(name) {
    this.name = name
    this.fields = []
  }

  addField (field) {
    this.fields.push(field)
  }
}

module.exports = Ground
