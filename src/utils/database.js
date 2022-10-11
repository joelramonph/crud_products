const { config } = require('dotenv')
const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: config.db.host,
    username: config.db.username,
    password: config.db.password,
    database: config.db.dbName
})

module.exports = db