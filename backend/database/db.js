const mysql = require('mysql');
const connection  = mysql.createPool({
  host            : 'localhost',
  user            : 'root',
  password        : 'root',
  database        : 'API-node-express1',
  port: 3306
});

module.exports = connection;