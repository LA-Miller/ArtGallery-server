const { Sequelize } = require("sequelize/dist");

const sequelize = new Sequelize(process.env.DATABASE_URL, 
    process.env.HOST === "local" ? 
    {
        dialect: 'postgres',
        dialectOptions: {
            supportBigNumbers: true,
            bigNumberStrings: true
        }
    }
    : 
    {
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