// Dependencies
const mysql = require('mysql');

// Connections
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'companyDB'
});

connection.connect((err) => {
    err ?  console.log(err) : console.log("Connected to db successfully.")
});

module.exports = connection;

