const prompt = require('prompt-sync')();

const modelo = (prompt(' Digite o modelo do veiculo'));
const valor = Number(prompt(' Digite valor do veiculo'));

function Valor () {
    let entrada = valor * 0.3
    let valorFinal = (valor - entrada) / 12
    console.log(`
    Seu veiculo ${modelo}
    Com valor de ${valor}
    Entrada ${entrada.toFixed(2)}
    + 12X de R$ ${valorFinal.toFixed(2)}`)
    
}
Valor()