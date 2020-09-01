const jwt = require('jsonwebtoken');
const {key} = require('./constants');

const auth = (req, res, next) => {
  const {headers: {authorization}} = req;

  const token = authorization && authorization.split(' ').pop();
  if (!token) return res.status(400).send('Error de autenticación');

  jwt.verify(token, key, (err, user) => {
    if (err) return res.status(400).send('token invalido');
    if (!user.es_admin) return res.status(403).send('no tiene permisos');
    console.log(user.es_admin);
    return next();
  })
}

module.exports = {
  auth
}

