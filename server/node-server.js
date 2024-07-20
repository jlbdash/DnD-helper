import express from "express";
import mysql from "mysql";
import { con, conn } from "server-operator";

const port = 4000;

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Database for Users, Characters
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//Table for Characters
conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE IF NOT EXISTS characters (username VARCHAR(60) PRIMARY KEY, 'character name' VARCHAR(25), 'character class' VARCHAR(80), 'class level' VARCHAR(15), 'character race' VARCHAR(25)";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

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
    'SELECT Count(*) FROM movies WHERE name = "' + response["name"] + '" ';

  function insert() {
    var sql2 =
      'INSERT INTO movies (id, name, genre, date,rating) VALUES ("NULL","' +
      response["name"] +
      '","' +
      response["genre"] +
      '",' +
      response["date"] +
      "," +
      response["rating"] +
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

// Create an endpoint called /movies/{ID} that deletes a movie entry
app.get("/delete/:id", (req, res) => {
  var sql = "DELETE FROM movies WHERE `id` = " + req.params.id;
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Entry Deleted");
  });
});

app.listen(port, () =>
  console.log("Server is running on port 4000 and ready to accept requests!")
);
