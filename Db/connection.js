const mysql = require("mysql");
const util = require("util");
require('dotenv').config();

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

connection.query = util.promisify(connection.query)
module.exports = connection