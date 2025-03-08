'use strict';

import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import fs from 'fs';
import { conn } from './server-operator.js';
const path = '../ui/src/CharacterFiles.json';
const port = 4000;

const app = express();
app.use(cors());

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// start here
// making sure the port is free
app.listen(port, () =>
  console.log('Server is running on port 4000 and ready to accept requests! ')
);

// endpoint for updating JSON character file
app.post('/write', jsonParser, (req, res) => {
  var file = JSON.stringify(req.body);

  // rewrite character file JSON
  fs.writeFile(path, file, function (err) {
    if (err) throw err;
    console.log('Replaced');
  });
});

// endpoint for updating database
app.post('/push', jsonParser, (req, res) => {
  const character = req.body['character'][0];
  const charClasses = character.class;
  const charName = character.name;
  const charRace = character.race;

  var user_name = req.body['username'];

  qry1();
  // check for user id
  function qry1() {
    conn.query(
      'SELECT COUNT(id) FROM users WHERE username="' + user_name + '"',
      function (err, result) {
        if (err) throw err;

        //statement for user table
        if (result[0]['COUNT(id)'] === 0) {
          var sql =
            'INSERT INTO users (id, username) VALUES ( NULL, "' +
            user_name +
            '")';
          qry2();
          conn.query(sql, function (err, result) {
            if (err) throw err;
            else {
              console.log('User Entry Accepted');
            }
          });
        } else {
          qry2();
          console.log('User Already There');
        }
      }
    );
  }

  //statement for character table
  // check to see if there is a duplicate character
  function qry2() {
    conn.query(
      'SELECT COUNT(*) FROM characters WHERE username="' +
        user_name +
        '" AND character_name="' +
        charName +
        '"',
      function (err, result) {
        if (err) throw err;

        // insert character into characters and classes tables
        if (result[0]['COUNT(*)'] === 0) {
          var sql2 =
            'INSERT INTO characters (id, username, character_name, character_race, isAlive) VALUES ( NULL, "' +
            user_name +
            '", "' +
            charName +
            '", "' +
            charRace +
            '", 1)';
          qry3();
          //Character insert
          conn.query(sql2, function (err, result) {
            if (err) throw err;
            else {
              console.log('Character Entry Accepted');
            }
          });
        } else {
          qry3();
          console.log('Character Already Created');
        }
      }
    );
  }

  // finding character id
  function qry3() {
    conn.query(
      'SELECT id FROM characters WHERE character_name="' + charName + '"',
      async function (err, result) {
        let charID = await result[0]['id'];

        conn.query(
          'SELECT * FROM classes WHERE character_id="' + charID + '"',
          function (err, res) {
            if (err) throw err;

            //in case of multiclassing, classes are inserted multiple times
            charClasses.forEach(repeater);

            // function for updating database endpoint - classes table
            function repeater(value, index, array) {
              console.log('CharClass');
              console.log(result);
              var charClass = value['className'];
              var charLevel = value['classLevel'];
              if (res.length === 0 || res[0]['character_class'] !== charClass) {
                // no class match
                var sql3 =
                  'INSERT INTO classes (id, character_id, character_class, class_level) VALUES ( NULL, ' +
                  charID +
                  ', "' +
                  charClass +
                  '", ' +
                  charLevel +
                  ')';
                console.log('Classes Inserted');
              } else {
                // class match
                var sql3 =
                  'UPDATE classes SET class_level="' +
                  charLevel +
                  '" WHERE character_id="' +
                  charID +
                  '" && character_class="' +
                  charClass +
                  '"';
                console.log('Classes Updated');
              }

              //Classes insert
              conn.query(sql3, function (err, result) {
                if (err) throw err;
                else {
                  console.log('Class Entry Updated');
                }
              });
            }
          }
        );
      }
    );
  }
});
