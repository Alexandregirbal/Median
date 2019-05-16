const express = require("express");
const marks = express.Router();
const cors = require("cors");
/*const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");*/

const User = require("../models/User");
const Section = require("../models/Section");
const UE = require("../models/UE");
const Mark = require("../models/Mark");
const Subject = require("../models/Subject");

marks.use(cors());

process.env.SECRET_KEY = 'secret';

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

marks.get('/orderedMarks',(req,res) => {
  console.log('Lancement de la requete des ')
  console.log(req.params.Section + ': ' + req.body.EmailUser);

  UE.findAll({
    where: {Section: req.body.Section},
    include: [{ model: 'Subjects', as: 'Subjects',
        include: [{model: 'Marks', as: 'Marks', where: EmailUser=req.body.EmailUser}]
    }]
  }).then(function(jsonmarks) {
    console.log(JSON.stringify(jsonmarks))
  })
  .catch(err => {
    res.send('error in marks: ' + err)
  })
});

module.exports = marks;
