const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:Happy2b1@localhost:5432/artGallery");// pg admin database

/*-------------------------------------------------------
    second image database or in new folder possibly
-------------------------------------------------------*/

module.exports= sequelize;