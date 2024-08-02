"use strict";

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
    "CREATE TABLE IF NOT EXISTS users (id INT(6) AUTO_INCREMENT PRIMARY KEY, username VARCHAR(60) UNIQUE)";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table users created");
  });

  // Table for Classes
  var sql2 =
    "CREATE TABLE IF NOT EXISTS classes (id INT(6) PRIMARY KEY AUTO_INCREMENT, character_id INT(6), character_class VARCHAR(30), class_level VARCHAR(15), FOREIGN KEY (character_id) REFERENCES classes(id))";
  conn.query(sql2, function (err) {
    if (err) throw err;
    console.log("Table classes created");
  });

  // Table for Characters
  var sql3 =
    "CREATE TABLE IF NOT EXISTS characters (id int(6) AUTO_INCREMENT PRIMARY KEY, username VARCHAR(60), character_name VARCHAR(25), character_race VARCHAR(25), isAlive BOOL, FOREIGN KEY (username) REFERENCES users(username))";
  conn.query(sql3, function (err) {
    if (err) throw err;
    console.log("Table characters created");
  });
});
