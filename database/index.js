// https://www.npmjs.com/package/mysql

// TODO: Establish database connection

var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ShopDB'
});

db.connect((err) => {
  if (err) {
    console.log('Connection to MySQL Unsuccessful', err);
    return;
  } else {
    console.log('Successfully Connected to MySQL');
  }
})

module.exports = db;