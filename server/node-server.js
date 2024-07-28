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
  const charClasses = character.class;
  const charName = character.name;
  const charRace = character.race;
  var user_name = req.body["username"];

  // check for user id
  conn.query(
    "SELECT COUNT(id) FROM users WHERE username='" + user_name + "'",
    function (err, result) {
      if (err) throw err;

      //statement for user table
      if (result[0]["COUNT(id)"] === 0) {
        var sql =
          "INSERT INTO users (id, username) VALUES ( NULL, '" +
          user_name +
          "')";
        conn.query(sql, function (err, result) {
          if (err) throw err;
          else {
            console.log("User Entry Accepted");
          }
        });
      } else {
        console.log("User Already There");
      }
    }
  );

  //statement for character table
  // check to see if there is a duplicate character
  conn.query(
    "SELECT COUNT(*) FROM characters WHERE username='" +
      user_name +
      "' AND character_name='" +
      charName +
      "'",
    function (err, result) {
      if (err) throw err;
      let res = result[0]["COUNT(*)"];

      // insert character into characters and classes tables
      if (result[0]["COUNT(*)"] === 0) {
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
      } else {
        console.log("Make another character");
      }
    }
  );

  // finding character id
  conn.query(
    "SELECT id FROM characters WHERE character_name='" + charName + "'",
    function (err, result) {
      if (err) throw err;
      let charID = result[0]["id"];

      conn.query(
        "SELECT * FROM classes WHERE character_id='" + charID + "'",
        function (err, result) {
          if (err) throw err;

          //in case of multiclassing, classes are inserted multiple times
          charClasses.forEach(repeater);

          // function for updating database endpoint - classes table
          function repeater(value, index, array) {
            var charClass = charClasses[index]["className"];
            var charLevel = charClasses[index]["classLevel"];
            if (result[index]["character_class"] !== charClass) {
              // no class there
              var sql3 =
                "INSERT INTO classes (id, character_id, character_class, class_level) VALUES ( NULL, " +
                charID +
                ", '" +
                charClass +
                "', " +
                charLevel +
                ")";
            } else {
              // if there is a class already
              var sql3 =
                "UPDATE classes SET character_class='" +
                charClass +
                "', class_level='" +
                charLevel +
                "' WHERE character_id=" +
                charID +
                " ";
            }
            //Classes insert
            conn.query(sql3, function (err, result) {
              if (err) throw err;
              else {
                console.log("Class Entry Updated");
              }
            });
          }
        }
      );
    }
  );
});
