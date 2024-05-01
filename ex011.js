
/*
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.*/ 

const prompt  = require('prompt-sync') ({sigint:true});

for (let i = 0; ;i++) {
    let x = prompt('Digite um número: ')
    
    if(x % 2 === 0) {
        console.log(`${x} = É par`)
    } else if (x % 2 === 1) {
        console.log(`${x} = É Impar`)
    } else {
        console.log('Por favor insira um número válido')
        break;
    }
   
}

