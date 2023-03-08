const prompt = require('prompt-sync')();

const valor = Number(prompt(' Qual valor total da compra?  '));

let maxParcelas = Math.min(Math.floor(valor / 20), 6);
let valorParcela = valor / maxParcelas;

console.log(`
O cliente pode parcelar em até ${maxParcelas} vezes de R$ ${valorParcela.toFixed(2)} cada.`)