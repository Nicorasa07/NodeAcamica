const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const routes = require('./routes');


app.listen(3000, () => {
  console.log("servidor arriba en http://localhost:3000");
});

app.use(bodyParser.json());

routes(app);

