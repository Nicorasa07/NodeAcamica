const autores = [{
  id: 1,
  nombre: "Pablo",
  apellido: "Neruda",
  fechadeNacimiento: "12/07/1904",
  libros: [{
      id:1,
      titulo: "Veinte poemas de amor y una canción desesperada",
      genero: "poesia",
      aniopublicacion: 1924
  },
  {
      id:2,
      titulo:"Libro de las preguntas",
      genero: "poesia",
      aniopublicacion: 1974
  },{
      id:3,
      titulo:"La Barcarola",
      genero: "poesia",
      aniopublicacion: 1967
  },
  {
      id:4,
      titulo:"Cien sonetos de amor",
      genero: "poesia",
      aniopublicacion: 1959
  },]
},{
  id: 2,
  nombre: "Gabriel",
  apellido: "García Márquez",
  fechadeNacimiento: "06/03/1927",
  libros: [{
      id:5,
      titulo: "Cien anios de soledad",
      genero: "Drama y realismo mágico",
      aniopublicacion: 1967
  },
  {
      id:6,
      titulo:"Libro de las preguntas",
      genero: "poesia",
      aniopublicacion: 1974
  },{
      id:7,
      titulo:"El amor en los tiempos del colera",
      genero: "Novela romantica",
      aniopublicacion: 1985
  },
  {
      id:8,
      titulo:"Cronicas de una muerte anunciada",
      genero: "Novela romantica",
      aniopublicacion: 1981
  },]
}, {
  id: 3,
  nombre: "Jorge Luis",
  apellido: "Borges",
  fechadeNacimiento: "24/08/1899",
  libros : [{
          id:9,
          titulo: "El informe de Brodie",
          genero: "Cuento",
          aniopublicacion: 1970
      },
      {
          id:10,
          titulo:"Historia universal de la infamia",
          genero: "Cuento",
          aniopublicacion: 1936
      },{
          id:11,
          titulo:"La moneda de hierro",
          genero: "Poesia",
          aniopublicacion: 1976
      },
  ]
}];


module.exports = {
  autores
}