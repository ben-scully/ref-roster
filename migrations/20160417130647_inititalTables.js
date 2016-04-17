
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTableIfNotExists('grounds', function(table) {
      table.increments().primary()
      table.string('name')
    }),

    knex.schema.createTableIfNotExists('fields', function(table) {
      table.increments().primary()
      table.string('fName')
      table.string('gName').references('name').inTable('grounds')
    }),

    knex.schema.createTableIfNotExists('games', function(table) {
      table.increments().primary()
      table.string('team1')
      table.string('team2')
      table.string('div')
    }),

    knex.schema.createTableIfNotExists('teams', function(table) {
      table.increments().primary()
      table.string('name')
    }),

    knex.schema.createTableIfNotExists('refs', function(table) {
      table.increments().primary()
      table.string('name')
      table.integer('level')
    })
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([

    knex.schema.dropTableIfExists('refs'),
    knex.schema.dropTableIfExists('teams'),
    knex.schema.dropTableIfExists('games'),
    knex.schema.dropTableIfExists('fields'),
    knex.schema.dropTableIfExists('grounds')

  ])
}
