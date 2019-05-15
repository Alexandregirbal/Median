const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define('section',{
    Section: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    SchoolSubject: {
        type: Sequelize.STRING
    },
    Year:{
        type: Sequelize.INTEGER
    }
},
{timestamps: false});
