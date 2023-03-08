const prompt = require('prompt-sync')();

const pessoas = Number(prompt(' Digite quantas pessoas'));
const peixes = Number(prompt(' Digite quantos peixes'));


function Calculo (){

const pessoasValor = 20
const peixeValor =  12
    if (pessoas === peixes){
   return pessoas * peixes

    }else if (pessoas !== peixes){
        if(pessoas >= peixes){
            return pessoas * peixes
        }else if (peixes > pessoas) {
            return (pessoasValor * pessoas) + (peixes * peixeValor)
        } 
    }
    
}
console.log(Calculo())