const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes');


/* Listen to port */
app.listen(3000, (err) => {
  if (err) return console.log('cannot init server');
  console.log('starting server in http://localhost:3000');
})

/* Generic middlewares */
app.use(bodyParser.json());
app.use((err, req, res, next) => {
  if (err) {
    res.status(500).send('server error');
  }
  next();
});

/* Start routes */
routes(app);

