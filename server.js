var mysql = require("mysql");
var mainPrompt = require("./prompts/mainPrompt");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "employee_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  exports.connection = connection;
  mainPrompt.title();
});