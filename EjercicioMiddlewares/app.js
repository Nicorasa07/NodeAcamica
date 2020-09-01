const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(3000, () => {
  console.log('Servidor activo en http://localhost:3000');
});

app.use(bodyParser.json());

function logger(req, res, next) {
  let time = new Date();
  time = (time.getDate() + "/" + time.getMonth() + "/" + time.getFullYear());

  let record = `Fecha: ${time} Info: ${req.method} - ${req.path} - ${req.query.version} - ${req.body}\n`;

  fs.appendFile('log.txt', record, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('succes:', record);
    }
  });

  next();
};


app.use(logger);

function checkBody(req, res, next) {
  const {nombre, apellidos, email} = req.body;

  if (nombre === "" || apellidos === "" || email === "") {
    res.status(400).send('Información no valida')
  } else {
    next()
  }
};

function checkUser(req, res, next) {
  const {email} = req.body;

  const user =  users.find(el => el.email.toString() === email.toString());
  if (user) {
    res.status(409).send('Usuario ya registrado');
  } else {
    console.log('registrado');
    next();
  }
};

function checkQuery(req, res, next) {
  const {version} = req.query;

  if (version) {
    if(version > 5) {
      next();
    } else {
      res.status(422).send('version no permitida');
    }
  } else {
    next();
  }
}

const users = [];

app.get('/demo', checkQuery, (req, res) => {
  res.send('hola mundo');
});

app.post('/contacto', checkBody, checkUser, (req, res) => {
  const {body} = req;
  users.push(body);
  res.send('registro exitoso');
  res.json(body);
});