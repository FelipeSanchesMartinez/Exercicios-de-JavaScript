const prompt = require('prompt-sync')();

const bairro = prompt('Digite o bairro: SP, SBC , SA , SCS  ==>');

function frete (){
    if (bairro === 'SP'){
        console.log('O frete é R$ 10,00');
    }else if (bairro === 'SA')
    {
        console.log('O frete é R$ 15,00');
    }else if (bairro === 'SBC')
    {
        console.log('O frete é R$ 20,00');
    }else if (bairro === 'SCS')
    {
        console.log('O frete é R$ 25,00');
    }
}
frete();