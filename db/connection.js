// Dependencies
const mysql = require('mysql');

// Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'companyDB'
});

connection.connect((err) => {
    if (err) {console.log(err)}
});

module.exports = connection;