const connection = require('../database/db')
const jwt = require('jsonwebtoken')

//On récupère tous les users
module.exports.getUsers = (req, res) => {
  connection.query('SELECT * FROM users',
  (err, results) => {
    if(err)
    return res.status(404).json({ message: '404 error.'})

    res.json({ results})
  })
}

// Création d'un user
module.exports.createUser = (req, res) => {
  const { username, password, email } = req.body

  if(!username || !password || !email)
    return res.status(400).json({ message: 'Veuillez renseigner les champs!'})

  connection.query(`INSERT INTO Users (username, password, email) VALUES ('${username}', '${password}', '${email}')`,
    (err, results) => {
      if(err)
      return res.status(400).json({ message: 'Impossible de créer un utilisateur.'})

      res.json({ message: 'Utilisateur créé!', results})
  });  
};


//On update un user par son ID
module.exports.updateUserById = (req, res) => {
  const { id } = req.params
  const { username, password, email } = req.body

  if(!id)
  return res.status(400).json({ message: 'ID Incorrect'});

  if(!username && !password && !email)
  return res.status(400).json({ message: 'Veuillez renseigner les champs!'})

  connection.query(`SELECT * FROM users WHERE id = ${id}`),
  (err) => {
    return res.status(400).json({ message: 'Utilisateur introuvable.'})
  }

  connection.query(`UPDATE users SET username = ${username}, password = ${password}, email = ${email} WHERE id =${id}`,
  (err, results) => {
    if(err)
    return res.status(400).json({ message: 'Impossible de procéder à la modification.'})

    res.json({ message: 'Utilisateur modifié!', results})
  })

}

// Suppression d'un user par son ID
module.exports.deleteUserById = (req, res ) => {
  const { id } = req.params

  if(!id)
  return res.status(400).json({ message: 'ID Incorrect'});

  connection.query(`DELETE FROM users WHERE id = ${id}`,
  (err, results) => {
    if(err)
    return res.status(400).json({ message: 'Impossible de supprimer l\'utilisateur.'})

    res.json({ message: 'Utilisateur supprimé!', results})
  })
}