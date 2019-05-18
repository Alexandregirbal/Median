const express = require("express");
const ues = express.Router();
const cors = require("cors");

const UE = require("../models/UE");


ues.use(cors());

ues.get('/ue/get/:id', (req,res) => {
  console.log('On cherche les UEs des ' + req.params.id);
  UE.findAll({
    where: { Section: req.params.id }
  })
  .then(ues => {
    res.json(ues)
  })
  .catch(err => {
    res.send('Cannot find UEs of the user. ' + err)
  })
});


ues.post('/ue/add', (req,res) => {
  const UEData = {
      IdUE: req.body.IdUE,
      NameUE: req.body.NameUE,
      Section: req.body.Section,
      SemesterUE: req.body.SemesterUE
  };
  console.log('Create the UE:\n/-idUE/' + UEData.IdUE + '/-NameUE /' + UEData.NameUE + '/-Section /' + UEData.Section + '/-SemesterUE /' + UEData.SemesterUE );
  UE.create(UEData).then(ue => {
      res.json(ue)
  })
  .catch(err => {
      res.send('Error in the UE : ' + err)
  })
});

module.exports = ues;
