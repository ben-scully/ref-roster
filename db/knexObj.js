var Knex = require('knex')
var knexConfig = require( '.././knexfile')
var knex = Knex(knexConfig['testing'])

module.exports = knex
