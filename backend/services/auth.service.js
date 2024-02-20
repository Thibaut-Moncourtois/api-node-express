require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());

const users = {}; // Ceci est un exemple, dans une application réelle, vous stockeriez les utilisateurs dans une base de données
const secretKey = process.env.SECRET_KEY;

app.post('/register', async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users[username] = hashedPassword;
  res.status(201).send('User registered');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = users[username];
  if (hashedPassword && await bcrypt.compare(password, hashedPassword)) {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } else {
    res.status(401).send('Invalid username or password');
  }
});

app.get('/protected', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    res.send('Protected data');
  });
});

app.listen(3000, () => console.log('Server started'));