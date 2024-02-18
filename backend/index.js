const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', require('./routes/users.route'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})