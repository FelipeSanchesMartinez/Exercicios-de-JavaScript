const prompt = require('prompt-sync')();

const numero1 = Number(prompt(' Digite o primeiro numero'));
const numero2 = Number(prompt(' Digite o segundo numero'));

function Express (){
    console.log(`
    A soma entre ${numero1} + ${numero2} = ${numero1 + numero2}
    A subtração entre ${numero1} - ${numero2} = ${numero1 - numero2}
    A multiplicação entre ${numero1} X ${numero2} = ${numero1 * numero2}
    A divisão entre ${numero1} / ${numero2} = ${numero1 / numero2}
    O resto da divisão entre ${numero1} % ${numero2} = ${numero1 % numero2}`)
}
Express();