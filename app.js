const express = require('express'),
    app = express(),
    mysql = require('mysql'), // import mysql module
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dotenv = require('dotenv');

// Routes
const usersRouter = require('./routes/users');

dotenv.config();

// Base de donnée
db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

var server = {
    port: process.env.PORT
};

// Modules
app.use(cors())
app.use(bodyParser.json());
app.use('/users', usersRouter);

app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));