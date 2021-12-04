const { Sequelize } = require("sequelize/dist");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

// localhost DB
// const db = new Sequelize(`postgres://postgres:${process.env.PGPASS}@localhost:5432/${process.env.PGDB}`);

// deployment DB - placeholder

module.exports = sequelize;