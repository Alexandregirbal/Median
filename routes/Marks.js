const express = require("express");
const marks = express.Router();
const cors = require("cors");
/*const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");*/

const Mark = require("../models/Mark");

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
    console.log('/-mark/' + markData.MarkM + '/-scale /' + markData.ScaleM + '/-coef /' + markData.CoefM + '/-subject /' + markData.IdSubject + '/- email /' + markData.EmailUser);
    Mark.create(markData).then(mark => {
        res.json(mark)
    })
    .catch(err =>{
        res.send('error marks: ' + err)
    })
});

module.exports = marks;
