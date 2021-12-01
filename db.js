const Sequelize = require('sequelize');

// localhost DB
const db = new Sequelize(`postgres://postgres:${process.env.PGPASS}@localhost:5432/${process.env.PGDB}`);

// deployment DB - placeholder

module.exports = db;