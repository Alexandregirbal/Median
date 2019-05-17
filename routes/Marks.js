const express = require("express");
const marks = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");

var User = require("../models/User");
var Section = require("../models/Section");
var UE = require("../models/UE");
var Mark = require("../models/Mark");
var Subject = require("../models/Subject");

marks.use(cors());

process.env.SECRET_KEY = 'secret';

UE.hasMany(Subject, {as: 'Subjects', foreignKey: 'IdUE'});
Subject.belongsTo(UE, {foreignKey: 'IdUE'});

Subject.hasMany(Mark, {as: 'Marks', foreignKey: 'IdSubject'})
Mark.belongsTo(Subject, {foreignKey: 'IdSubject'})

//GET MARKS of an USER
marks.get('/allmarks/:id', (req, res) => {
    console.log(' on est dans allmarks ');
    console.log(req.params.id);
    Mark.findAll({
        where: {
            EmailUser : req.params.id
        }
    })
    .then(marks => {
        res.json(marks)
    })
    .catch(err =>{
        res.send('error marks: ' + err)
    })
});

//POST a new mark,scale,coef,idsubject with emailuser, and
marks.post('/addmark', (req,res) => {
    const markData = {
        MarkM: req.body.MarkM,
        ScaleM: req.body.ScaleM,
        CoefM: req.body.CoefM,
        IdSubject: req.body.IdSubject,
        EmailUser: req.body.EmailUser
    };
    console.log('Create a mark:\n/-mark/' + markData.MarkM + '/-scale /' + markData.ScaleM + '/-coef /' + markData.CoefM + '/-subject /' + markData.IdSubject + '/- email /' + markData.EmailUser);
    Mark.create(markData).then(mark => {
        res.json(mark)
    })
    .catch(err => {
        res.send('error marks: ' + err)
    })
});

/* just to remember:
UE.hasMany(Subject, {as: 'Subjects', foreignKey: 'IdUE'});
Subject.belongsTo(UE, {foreignKey: 'IdUE'});

Subject.hasMany(Mark, {as: 'Marks', foreignKey: 'IdSubject'})
Mark.belongsTo(Subject, {foreignKey: 'IdSubject'})
*/
//GET marks in json nested of SEMESTER 1
marks.get('/orderedMarks1',(req,res) => {
  var userDecoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  var section = userDecoded.Section;
  var email = userDecoded.EmailUser;
  console.log('\nWe are looking for the marks (s1) of: ' + email );

  UE.findAll({
    include: [{
      model: Subject,
      as: 'Subjects',
      include: [{
        model: Mark,
        as: 'Marks',
        where: { EmailUser: email }
      }]
    }],
    where: { Section: section, SemesterUE: 1 }
  }).then(orderMarks => {
    console.log(JSON.stringify(orderMarks))
    res.json(orderMarks)
  })
  .catch(err => {
    res.send('error in marks: ' + err)
  })
});

// and of Semester 2
marks.get('/orderedMarks2',(req,res) => {
  var userDecoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  var section = userDecoded.Section;
  var email = userDecoded.EmailUser;
  console.log('\nWe are looking for the marks (s2) of: ' + email );

  UE.findAll({
    include: [{
      model: Subject,
      as: 'Subjects',
      include: [{
        model: Mark,
        as: 'Marks',
        where: { EmailUser: email }
      }]
    }],
    where: { Section: section, SemesterUE: 2 }
  }).then(orderMarks => {
    console.log(JSON.stringify(orderMarks))
    res.json(orderMarks)
  })
  .catch(err => {
    res.send('error in marks: ' + err)
  })
});

module.exports = marks;
