const express = require("express");
const cvCtrl = require("../controllers/cv");
const router = express.Router();

const isAuth = require("../middelware/is-auth");

// récupérer la liste de toutes les personnes
router.get('/persons', cvCtrl.getAllPersons);

//récupérer les infos sur une SEULE personne
router.get('/persons/:id', cvCtrl.getPerson);

//création d'une nouvelle personne sans token
router.post('/persons/free', cvCtrl.createPerson);

//Update d'une personne sans token
router.put('/persons/free/:id', cvCtrl.updatePerson);

//suppression d'une personne sans token
router.delete('/persons/free/:id', cvCtrl.deletePerson);

//création d'une nouvelle personne
router.post('/persons', isAuth, cvCtrl.createPerson);

//Update d'une personne
router.put('/persons/:id', isAuth, cvCtrl.updatePerson);

//suppression d'une personne
router.delete('/persons/:id', isAuth, cvCtrl.deletePerson);

module.exports = router;