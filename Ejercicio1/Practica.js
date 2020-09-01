const fs = require('fs');

const hobbies = ['leer', 'correr', 'dormir', 'comer', 'jugar', 'ejercicio'];
hobbies.forEach(hobbie => {
  console.log('hobbie: ' + hobbie);
});

fs.writeFile('ArchivoPrueba.txt', 'Creating first file function', (err) => {
  if (err) {
    throw err;
  }
  console.log('Success');
});

fs.readFile('ArchivoPrueba.txt', SobreEscribir);

function SobreEscribir(err, data) {
  if (err) {
    console.log(err);
  }
  else {
    data = data.toString()
    data = data.toUpperCase();
    fs.writeFile('ArchivoPrueba.txt', data, function (err) {
      err || console.log('Data replaced \n', data);
    });
  }
}