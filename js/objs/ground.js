"use strict"

class Ground {
  constructor(name, numFields) {
    this.name = name
    this.numFields = numFields
    this.fields = []
  }

  addField (field) {
    this.fields.push(field)
  }
}

module.exports = Ground
