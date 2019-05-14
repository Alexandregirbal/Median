const Sequelize = require("sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define('user',{
        EmailUser: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        NameUser: {
            type: Sequelize.STRING
        },
        SurnameUser:{
            type: Sequelize.STRING
        },
        Section: {
            type: Sequelize.STRING
        },
        Admin:{
            type: Sequelize.BOOLEAN
        },
        Password:{
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)