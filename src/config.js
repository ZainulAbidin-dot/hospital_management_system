const { Sequelize } = require('sequelize');
require('dotenv').config();

// Option 1: Passing a connection URI
// const mainDbInstance = new Sequelize(
//     'oracle://<username>:<password>@<ip>:<port>/<servicename>');

const mainDbInstance = new Sequelize(process.env.DB_NAME || 'main_db', process.env.DB_USER || 'user', process.env.DB_PASSWORD || 'password', {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql'
});
module.exports = { mainDbInstance };
