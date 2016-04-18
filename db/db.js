var knex = require('./knexObj')

module.exports = {
  getAll: function (tableName) {
    return knex.select().table(tableName)
  }
}
