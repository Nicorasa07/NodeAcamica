const swapi = require('swapi-node');


const routes = (app) => {

  app.get('/', (req, res) => {
    res.send('server online')
  });

  app.get('/people', (req, res) => {
    const {limit} = req.query;

    swapi.get('https://swapi.dev/api/people/')
    .then((data) => {
      let users = [];
      for(let i = 0; i < limit; i++) {
        const user = data.results[i];
        users.push(user);
      }
      return users;
    })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      console.log(err);
    });

  })
}

module.exports = routes;