const express = require("express");
const { getUsers, createUser } = require("../controllers/users.controller");
const router = express.Router();

//GET: On récupère tous les users
router.get('/', getUsers)

//GET: On récupère un user par son ID
router.get('/:id', (req, res) => {
  res.json({ message: 'Voici un User par son ID' })
})

//POST: Création d'un nouvel user
router.post('/', createUser)

//PUT: Afin de modifier un user
router.put('/:id', (req, res) => {
  res.json({ message: 'Modification effectuée!' })
})

//DELETE: Supprimer un user par son ID 
router.delete('/:id', (req, res) => {
  res.json({ message: 'Compte supprimé!' })
})

module.exports = router