const jwt = require('jsonwebtoken');
const {usuarios, key} = require('./constants');
const {auth} = require('./middlewares');

const routes = (app) => {

  app.get('/api/usuarios', auth, (req, res) => {
    res.json(usuarios);
  });

  app.post('/api/usuarios/create', (req, res) => {
    const {nombre, apellido, email, password} = req.body;
    const id = (new Date().valueOf() + usuarios.length).toString();

    if (nombre && apellido && email && password) {
      const user = {
        id,
        nombre,
        apellido,
        email,
        password
      };
      usuarios.push(user);
      res.status(200).send('Usuario registrado');
    } else {
      res.status(409).send('Error en el registro, intente de nuevo');
    }
  });

  app.put('/api/usuarios/:email/:setAdmin?', (req, res) => {
    const {email, setAdmin} = req.params;
    let user = usuarios.find(el => el.email === email);
    const es_admin = user.es_admin && !setAdmin ? true : Boolean(setAdmin);

    console.log(setAdmin);

    if (email && user) {
      user = {
        ...user,
        ...req.body,
        es_admin
      };
      usuarios.forEach((el, index) => {
        if (el.email === user.email) {
          usuarios[index] = user;
        }
      });
      res.status(200).send('usuario modificado');
    }
  })

  app.post('/login', (req, res) => {
    const {body} = req;
    const {email, password} = body;

    const user = usuarios.find(el => el.email === email);

    const {es_admin} = user;

    if (!(user && user.password === password)) return res.status(400).send('usuario o contraseña invalidos');
     const token = jwt.sign({email, es_admin}, key);

     res.json(token);
  })

}

module.exports = routes;