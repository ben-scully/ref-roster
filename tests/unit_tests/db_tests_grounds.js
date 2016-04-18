var redtape = require('redtape')
var knex = require('../../db/knexObj')
var db = require('../../db/db')

var grounds = {
  name: 'grounds',
  row1: {gName: 'Alex Moore', gNumFields: 2},
  row2: {gName: 'Wakefield Park', gNumFields: 5},
  row3: {gName: 'Wakefield Park'},
  row4: {gName: 'Wakefield', gNumFields: 5.3},
  row5: {gName: 'Alex Moore', gNumFields: 3},
}

var test = redtape({
  beforeEach: function (callback) {
    return knex.migrate.latest()
      .then(function () {
        return knex(grounds.name).insert(grounds.row1)
      })
      .then(function () {
        callback()
      })
  },

  afterEach: function (callback) {
    knex.migrate.rollback()
      .then(function () {
        callback()
      })
  }
})

test('setup', function (t) {
  knex.migrate.rollback()
    .then(function () {
      t.end()
    })
})

test('it gets all the rows from ' + grounds.name, function (t) {
  db.getAll(grounds.name)
    .then(function (resp) {
      t.ok(resp, "something is returning")
      Object.keys(grounds.row1).forEach(function (key) {
        t.equal(grounds.row1[key], resp[0][key], '' + key + ': ' + grounds.row1[key] + ' is equal')
      })
      t.end()
    })
})

test('it tries to insert NON unique ROW ' + grounds.name, function (t) {
  db.getAll(grounds.name)
    .then(function (resp) {
      t.ok(resp, "something is returning")
      knex(grounds.name).insert(grounds.row1)
        .then(function (data) {
          t.false(data, 'nothing should come here, instead error should go to catch')
          t.end()
        })
        .catch(function (err) {
          t.true(err, 'expecting an error to be thrown. NON unique insert')
          t.end()
        })
    })
})

test('it tries to insert NON unique ROW (same gName but different #fields) ' + grounds.name, function (t) {
  db.getAll(grounds.name)
    .then(function (resp) {
      t.ok(resp, "something is returning")
      knex(grounds.name).insert(grounds.row5)
        .then(function (data) {
          t.false(data, 'nothing should come here, instead error should go to catch')
          t.end()
        })
        .catch(function (err) {
          t.true(err, 'expecting an error to be thrown. NON unique insert')
          t.end()
        })
    })
})

test('it tries to insert invalid ROW (missing column) ' + grounds.name, function (t) {
  db.getAll(grounds.name)
    .then(function (resp) {
      t.ok(resp, "something is returning")
      knex(grounds.name).insert(grounds.row3)
        .then(function (data) {
          t.false(data, 'nothing should come here, instead error should go to catch')
          t.end()
        })
        .catch(function (err) {
          t.true(err, 'expecting an error to be thrown')
          t.end()
        })
    })
})

test('it tries to insert invalid ROW (string instead of integer) ' + grounds.name, function (t) {
  db.getAll(grounds.name)
    .then(function (resp) {
      t.ok(resp, "something is returning")
      knex(grounds.name).insert(grounds.row4)
        .then(function (data) {
          t.false(data, 'row was added BUT should fail because string column instead of integer')
          t.end()
        })
        .catch(function (err) {
          t.true(err, 'expecting an error to be thrown QQ')
          t.end()
        })
    })
})
