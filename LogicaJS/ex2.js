const prompt = require('prompt-sync')();

const numeroA = Number(prompt('Primeiro numero'));
const numeroB = Number(prompt('Segundo numero'));
let reseultado = numeroA + numeroB;

console.log(`A soma entre ${numeroA} e ${numeroB} é igual a:
${numeroA} + ${numeroB} = ${reseultado}`);
