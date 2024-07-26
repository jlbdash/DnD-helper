import mysql from 'mysql';

export var conn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "test"
});

export var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password"
});
 