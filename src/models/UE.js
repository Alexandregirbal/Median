const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define('ue',{
    IdUE: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NameUE:{
        type: Sequelize.STRING
    },
    Section: {
        type: Sequelize.STRING
    },
    SemesterUE:{
        type: Sequelize.STRING
    }
    },
    {timestamps: false}
);
