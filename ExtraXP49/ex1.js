const prompt = require('prompt-sync')();

const nome = prompt(' Qual o seu nome?');

function seuNome () {
    console.log(`Olá ${nome}!`);
}

seuNome();