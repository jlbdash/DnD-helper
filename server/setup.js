// Database for Users, Characters
import { con, conn } from "server-operator.js";

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE if not exists test", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

//Table for Users
conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE IF NOT EXISTS users (id INT(6) unsigned AUTO_INCREMENT PRIMARY KEY, username VARCHAR(60), 'character name' VARCHAR(25)";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
