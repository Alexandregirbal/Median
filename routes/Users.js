const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");

users.use(cors());

process.env.SECRET_KEY = 'secret';

// REGISTER
users.post('/register', (req, res) => {
    const today = new Date();
    const userData = {
        Admin : req.body.Admin,
        EmailUser : req.body.EmailUser,
        NameUser : req.body.NameUser,
        Password : req.body.Password,
        Section : req.body.Section,
        SurnameUser : req.body.SurnameUser,
        created: today
    };

    User.findOne({
        where: {
            EmailUser: req.body.EmailUser
        }
    }).then(user => {
        if (!user) {
            var pwd = userData.Password;
            var salt = bcrypt.genSaltSync(10);
            console.log(' \n----- Email: ' + userData.EmailUser + ' | Password: ' + userData.Password + ' | Surname: '  + userData.SurnameUser + ' | Name: ' + userData.NameUser + ' | Section: ' + userData.Section + ' | Date: ' + today + '------\n');
            const hash = bcrypt.hashSync(userData.Password, salt);
            //const hash = bcrypt.hashSync(pwd, 10)
            userData.Password = hash;
            User.create(userData) // .create() crée les données en question ( voir doc sequelize )
                .then(user => {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 12000
                    });
                    res.json({ token: token})
                })
                .catch(err => {

                    res.send('[ERROR]: création invalide ' + err)
                })
        } else {
            res.send("L'utilisateur existe déjà" + err)
        }
    })
    .catch(err => {
        res.send('[ERROR registration] ' + err)
    })

});

// LOGIN
users.post('/login', (req, res) => {
    User.findOne({
        where: {
            EmailUser: req.body.EmailUser
        }
    })
    .then(user => {
        if (bcrypt.compareSync(req.body.Password, user.Password)) {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                expiresIn: 12000
            });
            res.json({ token: token })
        } else {
            res.send("L'utilisateur n'existe pas ou le mot de passe est faux")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
});

//PROFILE
users.get('/profile', (req, res) => {
    var userDecoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
                //jwt.verify reconverti à l'objet initial que l'on nomme userDecoded
    User.findOne({
        where: {
            EmailUser: userDecoded.EmailUser
        }
    })
    .then (user => {
        if (user) {
            res.json(user)
        } else {
            res.send("L'utilisateur n'existe pas")
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
});


module.exports = users;
