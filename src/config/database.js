const Sequelize=require('sequelize')

const dbConfig = {
    database: 'elearning',
    username: 'root',
    password: '',
    host: '127.0.0.1',
    dialect: 'mysql'
}

const {database, username, password, host, dialect} = dbConfig

console.log(`[DB]: Connecting to the database ${database}.`)

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
    port: 3306,
    dialectOptions: {
      multipleStatements: true,
    },
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false
  })

  module.exports.dbConfig = dbConfig;
module.exports.connection = sequelize