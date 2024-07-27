import { con, conn } from "./server-operator.js";

// Database for Users, Characters
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  
    con.query("CREATE DATABASE if not exists test", function (err) {
      if (err) throw err;
      console.log("Database created");
    });
  });
  
  //Table for Users
  conn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql =
      "CREATE TABLE IF NOT EXISTS users (id INT(6) unsigned AUTO_INCREMENT PRIMARY KEY, username VARCHAR(60), character_id int(6) NOT NULL UNIQUE)";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  
    // Table for Characters
    var sql2 =
      "CREATE TABLE IF NOT EXISTS characters (id int(6) NOT NULL PRIMARY KEY, character_name VARCHAR(25), character_class VARCHAR(80), class_level VARCHAR(15), character_race VARCHAR(25), FOREIGN KEY (id) REFERENCES users(character_id))";
    conn.query(sql2, function (err) {
      if (err) throw err;
      console.log("Table created");
    });
  });