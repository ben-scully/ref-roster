// import Knex from 'knex'
// import knexConfig from '../knexfile'
var Knex = require( 'knex')
var knexConfig = require( '../knexfile')
var knex = Knex(knexConfig['development'])

// export default function getAll () {
//   return knex.select().table('refs')
// }
module.exports =  {
  getAll: function (tableName) {
    return knex.select().table(tableName)
  }
}
