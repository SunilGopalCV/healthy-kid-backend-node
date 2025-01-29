const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12760156", // Replace with your MySQL username
  password: "tUMNpAhZIp", // Replace with your MySQL password
  database: "sql12760156",
  port: 3306,
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database");
});

module.exports = db;
