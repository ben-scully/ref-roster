
exports.up = function(knex, Promise) {
  console.log('create')
  return Promise.all([

    knex.schema.createTableIfNotExists('grounds', function(table) {
      table.increments().notNullable().unique()
      table.string('gName').notNullable().unique()
      table.integer('gNumFields').notNullable()
    }),

    knex.schema.createTableIfNotExists('competitions', function(table) {
      table.increments().notNullable().unique()
      table.string('cName').notNullable().unique()
      table.date('cDate').notNullable()
      table.time('cStart').notNullable()
      table.integer('cGroundID').notNullable()
    }),

    knex.schema.createTableIfNotExists('games', function(table) {
      table.increments().notNullable().unique()
      table.integer('gmCompID').notNullable()
      table.string('gmTeam1').notNullable()
      table.string('gmTeam2').notNullable()
      table.string('gmDiv').notNullable()

      table.unique(['gmCompID', 'gmTeam1', 'gmTeam2'])
    }),

    knex.schema.createTableIfNotExists('fields', function(table) {
      table.increments().notNullable().unique()
      table.integer('fCompID').notNullable()
      table.integer('fFieldNum').notNullable()
      table.integer('fGameID').notNullable()
      table.time('fGameTime').notNullable()

      table.unique(['fCompID', 'fFieldNum', 'fGameTime'])
    }),

    knex.schema.createTableIfNotExists('refs', function(table) {
      table.increments().unique()
      table.integer('gmCompID').notNullable()
      table.string('rName').notNullable()
      table.integer('level').notNullable()

      table.unique(['gmCompID', 'rName'])
    })

  ])
};

exports.down = function(knex, Promise) {
  console.log('destroy')
  return Promise.all([

    knex.schema.dropTableIfExists('refs'),
    knex.schema.dropTableIfExists('fields'),
    knex.schema.dropTableIfExists('games'),
    knex.schema.dropTableIfExists('competitions'),
    knex.schema.dropTableIfExists('grounds')

  ])
};
