const prompt = require('prompt-sync')();

const racaoKG = Number(prompt(' Digite quantos KG de ração  '));
const consumoGR = Number(prompt(' Digite quantas gramas de ração o cachorro consome por dia  '));


function Vete (){
const convercao = racaoKG * 1000
const diaDuracao = convercao / consumoGR
const SobraDaRacao = convercao % consumoGR

console.log(`
Voce tem ${convercao.toFixed(2)} gramas de ração
Consume ${consumoGR} gramas por dia
Ira durar ${diaDuracao.toFixed(0)} dias
E Ira Sobrar ${SobraDaRacao.toFixed(2)} gramas de ração


`)
}
Vete()