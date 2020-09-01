const {autores} = require('./constants');

const routes = (app) => {

  app.get('/autores', (req, res) => {
    res.status(200).json(autores);
  });

  app.get('/autores/:idAutor', (req, res) => {
    const {idAutor} = req.params;
    if (isNaN(idAutor)) {
      res.status(400).json({error: 'Solicitud no valida'});
    } else {
      let autor = autores.find(student => student.id.toString() === idAutor.toString());
      if (autor) {
        res.status(200).json(autor);
      } else {
        res.status(404).send('Id no encontrado');
      }
    }
  });

  app.delete('/autores/:idAutor', (req, res) => {
    const {idAutor} = req.params;
    if (isNaN(idAutor)) {
      res.status(400).json({error: 'Solicitud no valida'});
    } else {
      let autor = autores.find(autor => autor.id.toString() === idAutor.toString());
      if (autor) {
        const i = autores.indexOf(autor);
        autores.splice(i, 1);
        res.send('Autor eliminado');
      } else {
        res.status(404).send('Id no encontrado');
      }
    }
  });

  app.put('/autores/:idAutor', (req, res) => {
    const {idAutor} = req.params;
    const {body} = req;

    if (isNaN(idAutor)) {
      res.status(400).send('Error: Solicitud no valida');
    } else {
      let autor = autores.find(autor => autor.id.toString() === idAutor.toString());
      if (autor) {
        autor = {...autor, ...body};

        autores.forEach((el, index) => {
          if (el.id === autor.id) {
            autores[index] = autor;
          }
        });

        res.status(200).send('Autor actualizado');
      } else {
        res.status(404).send('Id no encontrado');
      }
    }
  });

  app.post('/autores', (req, res) => {
    const {body} = req;
    // falta validar estructura del post antes de hacer push
    autores.push(body);
    res.status(200).json('Autor agregado correctamente');
  });


  app.get("/autores/:id/libros", (req, res) => {
    const {id} = req.params;

    if (isNaN(id)) {
      res.status(404).send("Error: Solicitud no válida");
    } else {
      const autor = autores.find(autor => autor.id.toString() === id.toString());
      res.status(200).json(autor.libros);
    }
  });

  app.post("/autores/:id/libros", (req, res) => {
    const {body} = req;
    const {id} = req.params;

    if (isNaN(id)) {
      res.status(404).send("Solicitud no valida");
    } else {
      const autor = autores.find(autor => autor.id.toString() === id.toString());
      const libros = autor.libros;
      libros.push(body);

      res.status(201).json("Libro agregado correctamente");
    }
  });

  app.get("/autores/:id/libros/:idLibro", (req, res) => {
    const {id, idLibro} = req.params;

    if (isNaN(id) || isNaN(idLibro)) {
      res.status(404).send("Solicitud no valida");
    }  else {
      const autor = autores.find(autor => autor.id.toString() === id.toString());

      const libros = autor.libros;
      const libro = libros.find(libro => libro.id.toString() === idLibro.toString());

      if (libro) {
        res.status(200).json(libro);
      } else {
        res.status(404).send('Libro no encontrado')
      }
    }
  });

  app.put("/autores/:id/libros/:idLibro", (req, res) => {
    const {id, idLibro} = req.params;

    if (isNaN(id) || isNaN(idLibro)) {
      res.status(400).send("Solicitud no válida");
    } else {
      const autor = autores.find(autor => autor.id.toString() === id.toString());
      const libros = autor.libros;
      let libro = libros.find(libro => libro.id.toString() === idLibro.toString());

      if (libro) {
        libro = {...libro, ...req.body};

        const i = autores.indexOf(autor);
        libros.forEach((el, index) => {
          if (el.id === libro.id) {
            autores[i].libros[index] = libro;
          }
        });

        res.status(200).send("Libro actualizado correctamente");
      } else {
        res.status(404).send("Libro no encontrado");
      }
    }
  });

  app.delete("/autores/:id/libros/:idLibro", (req, res) => {
    const {id, idLibro} = req.params;

    if (isNaN(id) || isNaN(idLibro)) {
      res.status(400).send('solicitud no valida');
    } else {
      const autor = autores.find(autor => autor.id.toString() === id.toString());
      const libros = autor.libros;
      const libro = libros.find(libro => libro.id.toString() === idLibro.toString());
      if (libro) {
        const i = libros.indexOf(libro);
        libros.splice(i, 1);
        res.status(200).send("Libro borrado correctamente");
      } else {
        res.status(404).send('Libro no encontrado');
      }
    }
  });
};


module.exports = routes;

