const express = require('express'),
    app = express(),
    mysql = require('mysql'), // import mysql module
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv');

dotenv.config();

// setup database
db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

// make server object that contain port property and the value for our server.
var server = {
    port: process.env.PORT
};

// use the modules
app.use(cors())
app.use(bodyParser.json());

// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));