'use strict';

import mysql from 'mysql';

export const conn = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "test"
});

export const con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password"
});
 