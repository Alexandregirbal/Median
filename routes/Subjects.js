const express = require("express")
const subjects = express.Router()
const cors = require("cors")


const User = require("../models/user")
const Section = require("../models/section")
const UE = require("../models/ue")
const Mark = require("../models/mark")
const Subject = require("../models/subject")

subjects.use(cors())

process.env.SECRET_KEY = 'secret'

// GET subjects available for an user

Section.hasMany(UE, {foreignKey: 'Section'})
UE.belongsTo(Section, {foreignKey: 'Section'})

UE.hasMany(Subject, {foreignKey: 'IdUE'})
Subject.belongsTo(UE, {foreignKey: 'IdUE'})

/*Subject.hasMany(Mark, {foreignKey: 'IdSubject'})
Mark.belongsTo(Subject, {foreignKey: 'IdSubject'})*/

subjects.get('/getsubjects/:id', (req, res) => {
    section = req.params.id
    console.log('On cherche les matieres en ' + section)
    Subject.findAll({
        include: [{
            model: UE,
            where: { Section: section }
        }]
    })
    .then (subs => {
        if(subs) {
            //console.log('Subjects of the user found')
            res.json(subs)
        } else {
            console.log('Error in getsubjects')
            res.send('The data base has a problem')
        }
        
    })
    .catch(err =>{
        res.send('subjects error : ' + err)
    })         
})

module.exports = subjects
