const express = require('express');
const app = express();

const students = [{
  id: 1,
  name: 'fernando',
  class: 'dwfs'
}, {
  id: 2,
  name: 'luisa',
  class: 'dwa'
}, {
  id: 3,
  name: 'alejandra',
  class: 'bigdata'
}, {
  id: 4,
  name: 'tomas',
  class: 'bigdata'
},{
  id: 5,
  name: 'sebastian',
  class: 'dwfs'
}, {
  id: 6,
  name: 'natalia',
  class: 'dwa'
}, {
  id: 7,
  name: 'tomas',
  class: 'dwa'
}, {
  id: 8,
  name: 'samuel',
  class: 'bigdata'
}]

app.listen(3000, () => {
  console.log('Servidor Node.js en http://localhost:3000');
});

function logger(req, res, next) {
  console.log('user is navegating to:', req.path);
  next();
}

//  middlewares generic
app.use(express.json());
app.use(logger);


//  Ruta para obtener data por comision y consulta (opcional)
app.get('/acamica/:idComision/alumnos', (req, res) => {
  const comision = req.params.idComision;
  const {name} = req.query;

  let search = students.filter(student => student.class.toString() === comision.toString());

  if (name) {
    if (!isNaN(name)) {
      res.status(400).json({error: 'consulta no valida'});
    } else {
      let data = search.filter(student => student.name.toString() === name.toString());
      if (data.length === 0) {
        res.status(404).json({error: 'Solicitud no encontrada'});
      } else {
        res.json(data);
      }
    }
  } else {
    res.json(search);
  }
});

//  Ruta para obtener data por comision e identificador
app.get('/acamica/:idComision/alumnos/:idAlumno', (req, res) => {
  const comision = req.params.idComision;
  const idAlumno = req.params.idAlumno;

  let search = students.filter(student => student.class.toString() === comision.toString());

  if (isNaN(idAlumno)) {
    res.status(400).json({error: 'Solicitud no valida'});
  } else {
    let result = search.find(student => student.id.toString() === idAlumno.toString());
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({error: 'Id no encontrado'});
    }
  }
});

//  Ruta para eleminar data por comision e identificador
app.delete('/acamica/:idComision/alumnos/:idAlumno', (req, res) => {
  const comision = req.params.idComision;
  const idAlumno = req.params.idAlumno;

  let search = students.filter(student => student.class.toString() === comision.toString());

  if (isNaN(idAlumno)) {
    res.status(400).json({error: 'Solicitud no valida'});
  } else {
    let result = search.find(student => student.id.toString() === idAlumno.toString());
    if (result) {
      const i = students.indexOf(result);
      students.splice(i, 1);
      res.json({mensaje: 'Usuario eliminado'});
    } else {
      res.status(404).json({error: 'Id no encontrado'});
    }
  }
});

app.post('/user', (req, res) => {
  console.log(req.body);
  res.send('agregado')
})
