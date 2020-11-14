require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');
const dotenv = require('dotenv');
const db = require("./models");

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/apidoc', express.static('apidoc'));

// api routes
app.use('/users', require('./routes/users/user.controller'));
app.use('/categories', require('./routes/categories/category.controller'));
app.use('/courses', require('./routes/courses/course.controller'));
app.use('/articles', require('./routes/articles/article.controller'));

// global error handler
app.use(errorHandler);

db.sequelize.sync({ alter: true }).then(() => {
   console.log("Drop and re-sync db.");
});

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : process.env.PORT;
app.listen(port, () => console.log('Server listening on port ' + port));
