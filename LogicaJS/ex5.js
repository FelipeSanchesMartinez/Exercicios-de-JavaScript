const prompt = require('prompt-sync')();

const idade = Number(prompt('Qual sua idade'));

function podeDirigir () {
    if (idade >= 18) {
        return 'pode-dirigir';
    } else {
        return 'não pode dirigir';
    }
}
console.log(podeDirigir());