const express = require('express');
const server = express();

const url = '/acamica/dwfs/alumnos';

const students = [{
  id: 1,
  name: 'Nico'
},{
  id: 2,
  name: 'Jay'
}]

server.listen(3000, () => {
  console.log('Servidor Node.js en http://localhost:3000');
})

server.get(url, (req, res) => {
  res.json(students)
})

server.get(url+'/:idStudent', (req, res) => {
  const id = req.params.idStudent;
  if (isNaN(id)) {
    res.status(400).json({error: 'Solicitud no valida'});
  } else {
    let search = students.find(student => student.id.toString() === id.toString());
    if (search) {
      res.json(search);
    } else {
      res.status(404).json({error: 'Id no encontrado'});
    }
  }
})


































