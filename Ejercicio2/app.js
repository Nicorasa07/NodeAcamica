const fs = require('fs');
const calculator = require('./calculator');


function registro(operacion, n1, n2) {
  let log = "";
  switch (operacion) {
    case 'suma':
      log = `${n1} + ${n2} = ${calculator.suma(n1, n2)}`
      break;
    case 'resta':
      log = `${n1} - ${n2} = ${calculator.resta(n1, n2)}`
      break;
    case 'multiplicacion':
      log = `${n1} * ${n2} = ${calculator.multiplicacion(n1, n2)}`
      break;
    case 'division':
      log = `${n1} / ${n2} = ${calculator.division(n1, n2)}`
      break;
    default:
      break;
  }
  return log + '\n';
}

function writeLog(operacion, n1, n2) {
  fs.appendFile('log.txt', registro(operacion, n1, n2), err => {
    if (err) {
      console.log(err);
    } else {
      console.log('succes:', registro(operacion, n1, n2));
    }
  })
}

writeLog('suma', 4, 5);
writeLog('resta', 10, 7);
writeLog('multiplicacion', 3, 2);
writeLog('division', 9, 3);
