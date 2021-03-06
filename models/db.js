const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// open the MySQL connection
connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
