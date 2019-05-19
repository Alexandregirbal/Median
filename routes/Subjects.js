const express = require("express");
const subjects = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");


const User = require("../models/User");
const Section = require("../models/Section");
const UE = require("../models/UE");
const Mark = require("../models/Mark");
const Subject = require("../models/Subject");

subjects.use(cors());

process.env.SECRET_KEY = 'secret';

// GET subjects available for an user

Section.hasMany(UE, {foreignKey: 'Section'});
UE.belongsTo(Section, {foreignKey: 'Section'});

UE.hasMany(Subject, {foreignKey: 'IdUE'});
Subject.belongsTo(UE, {foreignKey: 'IdUE'});

/*Subject.hasMany(Mark, {foreignKey: 'IdSubject'})
Mark.belongsTo(Subject, {foreignKey: 'IdSubject'})*/

subjects.post('/subject/add', (req,res) => {
  const subjectData = {
    NameSubject: req.body.NameSubject,
    CoefSubject: req.body.CoefSubject,
    IdUE: req.body.IdUE
  };
  console.log('\n\nCreate a subject:\n/-name/' + subjectData.NameSubject + '/-coef /' + subjectData.CoefSubject + '/-IdUE /' + subjectData.IdUE + '/-section (not used) /' + req.body.Section );
    Subject.create(subjectData).then(sub => {
        res.json(sub)
    })
    .catch(err => {
        res.send('Error in buject: ' + err)
    })
})


subjects.get('/getsubjects/:id', (req, res) => {
    section = req.params.id;
    console.log('On cherche les matieres en ' + section);
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
            console.log('Error in getsubjects');
            res.send('The data base has a problem')
        }

    })
    .catch(err =>{
        res.send('subjects error : ' + err)
    })
});

subjects.put('/subject/update', (req,res) => {
  console.log('On veut mettre à jour un coef.');
  id = req.body.IdSubject;
  newCoef = req.body.Coef;
  Subject.update(
    {CoefSubject: newCoef},
    {where: {IdSubject: id}}
  )
  .then( result => {
    res.json(result)
  })
  .catch( err => {
    res.send('Error update: ' + err)
  })
})

subjects.delete('/subject/delete/:id', (req,res) => {
  console.log('On va supprimer un subject et ses notes(fait dans la database avec un trigger)')
  var userDecoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  const admin = userDecoded.Admin;
  const id = req.params.id
  if (admin) {
    Subject.destroy(
      {where: {IdSubject: id}}
    )
    .then( result => {
      res.json(result)
    })
    .catch( err => {
      res.send('Error delete: ' + err)
    })
  }
})

module.exports = subjects;
