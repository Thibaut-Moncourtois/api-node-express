const express = require('express')
const bodyParser = require('body-parser');  // Importation du module body-parser  
const app = express()
const port = 3001

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { tilte: 'Accueil'})
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use (bodyParser.json());
app.use('/users', require('./routes/users.route'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})