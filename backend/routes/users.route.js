const express = require("express");
const router = express.Router();

//GET: On récupère tous les users
router.get('/', (req, res) => {
  res.json({ message: 'Voici la route GET'})
})

//GET: On récupère un user par son ID
router.get('/:id', (req, res) => {
  res.json({ message: 'Voici un User par son ID' })
})

//POST: Inscription d'un nouvel user
router.post('/', (req, res) => {
  res.json({ message: 'Bienvenue nouvel utilisateur!' })
})

//PUT: Afin de modifier un user
router.put('/:id', (req, res) => {
  res.json({ message: 'Modification effectuée!' })
})

//DELETE: Supprimer un user par son ID 
router.delete('/:id', (req, res) => {
  res.json({ message: 'Compte supprimé!' })
})

module.exports = router