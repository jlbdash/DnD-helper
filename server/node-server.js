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

// start here
// making sure the port is free
app.listen(port, () =>
  console.log("Server is running on port 4000 and ready to accept requests! ")
);

// endpoint for updating JSON character file
app.post("/write", jsonParser, (req, res) => {
  var file = JSON.stringify(req.body);
  console.log(req.body[0].username);

  // rewrite character file JSON
  fs.writeFile(path, file, function (err) {
    if (err) throw err;
    console.log("Replaced");
  });
});

// endpoint for updating database
app.post("/push", jsonParser, (req, res) => {
  const character = req.body["character"][0];
  var user_name = req.body["username"];

  // check for user id
  var findUserID = conn.query(
    "SELECT COUNT(id) FROM users WHERE username='" + user_name + "'",
    (err, result) => {
      if (err) throw err;
      let res = result[0]["COUNT(id)"];
      return res;
    }
  );

  //statement for user table
  if (!findUserID) {
    var sql =
      "INSERT INTO users (id, username) VALUES ( NULL, '" + user_name + "')";
    conn.query(sql, function (err, result) {
      if (err) throw err;
      else {
        console.log("User Entry Accepted");
      }
    });
  } else {
    console.log("User Already There");
  }

  //statement for character table
  // check to see if there is a duplicate character
  var findCharacter = conn.query(
    "SELECT COUNT(character_name) FROM characters WHERE username='" +
      user_name +
      "'",
    function (err, result) {
      if (err) throw err;
      let res = result[0]["COUNT(character_name)"];
      return res;
    }
  );
  // finding character id
  var charId = conn.query(
    "SELECT id FROM characters WHERE character_name='" + charName + "';",
    function (err, result) {
      if (err) throw err;
      console.log("id", result);
      let res = result[0]["id"];
      return res;
    }
  );

  function repeater(multi) {
    //in case of multiclassing, classes are inserted multiple times
    var charClass = multi["className"];
    var charLevel = multi["classLevel"];
    var sql3 =
      "INSERT INTO classes (id, character_id, character_class, class_level) VALUES ( NULL, " +
      charId +
      ", '" +
      charClass +
      "', " +
      charLevel +
      ")";
  }

  // insert character into characters and classes tables
  if (!findCharacter) {
    var charName = character.name;
    var charRace = character.race;
    var sql2 =
      "INSERT INTO characters (id, username, character_name, character_race, isAlive) VALUES ( NULL, '" +
      user_name +
      "', '" +
      charName +
      "', '" +
      charRace +
      "', 1)";

    //Character insert
    conn.query(sql2, function (err, result) {
      if (err) throw err;
      else {
        console.log("Character Entry Accepted");
      }
    });

      //Classes insert
      conn.query(sql3, function (err, result) {
        if (err) throw err;
        else {
          console.log("Class Entry Accepted");
        }
      });

      character.class.forEach(repeater);
  } else {
    console.log("Make another character");
  }
});
