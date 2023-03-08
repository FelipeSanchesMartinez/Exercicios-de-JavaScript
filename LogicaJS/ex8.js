const prompt = require('prompt-sync')();

const numeroA = Number(prompt('Um numero'));

for(let i = 0; i <= 10 ; i++){
    let result = numeroA * i;
    console.log(`${numeroA} X ${i} = ${result}`);
}