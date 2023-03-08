const prompt = require('prompt-sync')();

const numeroA = Number(prompt('Digite os minutos para serem convertidos em horas :  '));

function converterEmHoras () {
    let horas = numeroA / 60;
    return `${horas.toFixed(2)} Hrs`
}
console.log(converterEmHoras());