const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();

const routes = require('./routes');

// start server
app.listen(3000, () => {
  console.log('starting server in http://localhost:3000');
});

// middlewares
app.use(bodyParser.json());

// start routes
routes(app);