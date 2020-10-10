var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection= mysql.createConnection({
  host: "localhost",
  port: '3306',
  user: "root",
  password: "r5ri5uhxa5au40ui",
  database: "d5b9e8gwrj7g8ui0"
  })
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
