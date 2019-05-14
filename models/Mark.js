const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define('mark',{
    IdMark: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    MarkM:{
        type: Sequelize.FLOAT
    },
    ScaleM:{
        type: Sequelize.INTEGER
    },
    CoefM:{
        type: Sequelize.INTEGER
    },
    IdSubject: {
        type: Sequelize.INTEGER
    },
    EmailUser:{
        type: Sequelize.STRING
    }
    },
    {timestamps: false}
)