const express = require("express");
const router = express.Router();

//GET: On récupère tous les users
router.get('/', (req, res) => {
  res.json({ message: 'Voici la route GET'})
})

//GET: On récupère un user par son ID
router.get('/:id', (req, res) => {
  res.json({ message: 'Voici un User par son ID'})
})

//POST: Inscription d'un nouvel user



module.exports = router