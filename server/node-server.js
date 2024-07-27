import express from "express";
import cors from "cors";
import { conn } from "./server-operator.js";
import bodyParser from "body-parser";
import fs from "fs";
const path = "../ui/src/CharacterFiles.json";
const port = 4000;

const app = express();
app.use(cors());

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Create an endpoint called /read that responds with a list of characters
app.get("/reader", (req, res) => {
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
});

// making sure the port is free
app.listen(port, () =>
  console.log("Server is running on port 4000 and ready to accept requests! ")
);

// endpoint for updating JSON character file
app.post("/write", jsonParser, (req, res) => {
  var file = JSON.stringify(req.body);
  console.log(file.username);

  // rewrite character file JSON
  fs.writeFile(path, file, function (err) {
    if (err) throw err;
    console.log("Replaced");
  });

  var found = conn.query(finding, function (err, result) {
    if (err) throw err;
    else {
      console.log("Username found");
    }
  });

  var id = conn.query(finding, function (err, result) {
    if (err) throw err;
    else {
      console.log("Id created");
    }
  });

  if (!found) {
    var sql = "INSERT INTO users (id, username, character_id ) VALUES (?,?,?)";

    conn.query(sql, function (err, result) {
      if (err) throw err;
      else {
        console.log("User Entry Created");
      }
    });
  } else {
    var sql = "INSERT INTO users (id, username, character_id) VALUES (?,?,?)";

    conn.query(sql, function (err, result) {
      if (err) throw err;
      else {
        console.log("User Entry Created");
      }
    });
  }

  var sql2 =
    "INSERT INTO character (id, character_name, character_class, class_level, class_race, isAlive) VALUES (" +
    response["username"] +
    ',"' +
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
      console.log("Character Entry Created");
    }
  });
});
