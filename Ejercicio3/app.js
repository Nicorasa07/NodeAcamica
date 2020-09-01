const fs = require('fs');
const moment = require('moment');
const coolImages = require('cool-images');

const imagesArr = coolImages.many(600, 800, 10);

/**
 * @returns {string} formato de hora y urls
 */
function writeLog() {
  let url = "";
  let counter = 1;
  imagesArr.forEach(image => {
    url += 'Url' + counter + ': ' + image + '\n';
    counter++;
  })

  const time = 'Fecha: ' + new moment().format('YYYY MM DD, h:mm:ss');

  return time + '\n' + url + '\n';
}

// Crear o actualizar log de fecha y urls
fs.appendFile('log.txt', writeLog(), err => {
  if (err) throw err;
  console.log('exito');
})

