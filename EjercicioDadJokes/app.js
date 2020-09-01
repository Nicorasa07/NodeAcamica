const express = require('express');
const fetch = require('node-fetch');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.listen(3000, () => {
  console.log('Servidor node.js en http://localhost:3000');
});

app.get('/', (req, res) => {
  res.send('Hola')
});

app.get('/search', (req, res) => {
  const {term} = req.query;

  if (term) {

    const meta = {
      method: 'GET',
      headers: {"Accept": "application/json"}
    };

    fetch(`https://icanhazdadjoke.com/search?term=${term}`, meta)
      .then(res => res.json())
      .then(data => res.json(data));

  } else {
    res.status(400).send('solicitud invalida');
  }
})


