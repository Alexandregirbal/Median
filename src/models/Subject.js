const Sequelize = require("sequelize");
const db = require("../database/db.js");

module.exports = db.sequelize.define('subject',{
    IdSubject: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NameSubject:{
        type: Sequelize.STRING
    },
    CoefSubject:{
        type: Sequelize.INTEGER
    },
    IdUE: {
        type: Sequelize.INTEGER
    }    
    },
    {timestamps: false}
);
