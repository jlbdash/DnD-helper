import express from "express";
import mysql from "mysql";
import { conn } from "./server-operator.js";
import bodyParser from "body-parser";
const fs = require('fs');

const port = 4000;

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Create an endpoint called /read that responds with a list of characters
app.get("/read", (req, res) => {
  var sql = "SELECT * FROM characters, users";
  const list = conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Selected");
    res.send(result);
  });
});

// Create an endpoint called /create that responds with nothing but updates the database
app.post("/create", urlencodedParser, (req, res) => {
  var response = {
    character: req.body.character,
  };

  var sql =
    'SELECT Count(*) FROM character WHERE name = "' + response["name"] + '" ';

  function insert() {
    var sql2 =
      'INSERT INTO character (id, name, genre, date,rating) VALUES ("NULL","' +
      response["cName"] +
      '","' +
      response["cClass"] +
      '",' +
      response["cLevel"] +
      "," +
      response["cRace"] +
      ")";

    conn.query(sql2, function (err, result) {
      if (err) throw err;
      else {
        console.log("Entry Created");
        res.redirect("http://localhost:3000/");
      }
    });
  }

  conn.query(sql, function (err, results) {
    if (results[0]["Count(*)"] != 0) {
      console.log(results[0]["Count(*)"] + "Already there");
    } else {
      console.log(results.affectedRows);
      insert();
    }
  });
});

// Create an endpoint called /character/{ID} that deletes a movie entry
app.get("/delete/:id", (req, res) => {
  var sql = "DELETE FROM character WHERE `id` = " + req.params.id;
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Entry Deleted");
  });
});

app.listen(port, () =>
  console.log("Server is running on port 4000 and ready to accept requests! ")
);


fs.open('CharacterFiles.json', 'w', function(err, data) {
  if (err) throw err;
  console.log(data);
});