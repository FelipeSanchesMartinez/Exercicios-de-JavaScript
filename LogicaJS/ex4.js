const prompt = require('prompt-sync')();

const numeroA = Number(prompt('Primeiro numero'));
const numeroB = Number(prompt('Segundo numero'));

function multiplica (numeroA, numeroB) {
console.log(`A multipçlicação entre ${numeroA} e ${numeroB} é igual á ${numeroA} X ${numeroB} = ${numeroA * numeroB}`);
}

multiplica(numeroA, numeroB)