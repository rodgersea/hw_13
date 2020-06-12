// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "d6vscs19jtah8iwb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "on4ch56631ngwuz1",
  password: "sqtlah7ndnf5bceu",
  database: "bobjb2q2cw1wuplf"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
