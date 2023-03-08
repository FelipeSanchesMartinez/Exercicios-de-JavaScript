const prompt = require('prompt-sync')();

const idade = Number(prompt(' Digite sua idade'));
function podeComprar () {
    if (idade >= 16) {
        return `Pode comprar`;
    } else {
        return `Não pode comprar`
    }
}
console.log(podeComprar());