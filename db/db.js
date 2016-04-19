var knex = require('./knexObj')

module.exports = {
  getAll: function (tableName) {
    return knex.select().table(tableName)
  },

  isCompNameUnique: function (isDuplicate) {
    return knex('competitions').select('cName').where(isDuplicate)
  }
}
