var redtape = require('redtape')
var knex = require('../../db/knexObj')
var db = require('../../db/db')

var competitions = {
  name: 'competitions',
  row1: {cName: 'TuesdayNight', gNumFields: 2},
  row2: {cName: 'WednesdayNight', gNumFields: 5},
  row3: {cName: 'WednesdayNight'},
  row4: {cName: 'WednesdayNight', gNumFields: 5.3},
  row5: {cName: 'TuesdayNight', gNumFields: 3},
}

var test = redtape({
  beforeEach: function (callback) {
    return knex.migrate.latest()
      .then(function () {
        return knex(competitions.name).insert(competitions.row1)
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

test('it gets all the rows from ' + competitions.name, function (t) {
  db.getAll(competitions.name)
    .then(function (resp) {
      t.ok(resp, "something is returning")
      Object.keys(competitions.row1).forEach(function (key) {
        t.equal(competitions.row1[key], resp[0][key], '' + key + ': ' + competitions.row1[key] + ' is equal')
      })
      t.end()
    })
})

test('it tries to insert NON unique ROW ' + competitions.name, function (t) {
  db.getAll(competitions.name)
    .then(function (resp) {
      t.ok(resp, "something is returning")
      knex(competitions.name).insert(competitions.row1)
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

test('it tries to insert NON unique ROW (same cName but different #fields) ' + competitions.name, function (t) {
  db.getAll(competitions.name)
    .then(function (resp) {
      t.ok(resp, "something is returning")
      knex(competitions.name).insert(competitions.row5)
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

test('it tries to insert invalid ROW (missing column) ' + competitions.name, function (t) {
  db.getAll(competitions.name)
    .then(function (resp) {
      t.ok(resp, "something is returning")
      knex(competitions.name).insert(competitions.row3)
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

test('it tries to insert invalid ROW (string instead of integer) ' + competitions.name, function (t) {
  db.getAll(competitions.name)
    .then(function (resp) {
      t.ok(resp, "something is returning")
      knex(competitions.name).insert(competitions.row4)
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
