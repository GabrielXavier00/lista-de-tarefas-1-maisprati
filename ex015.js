/* 

15. Fazer um algoritmos para receber um número decimal e o peso de cada número atéque o usuário digite o número 0. Fazer a média ponderada desses números e pesos respectivos. */


const prompt  = require('prompt-sync') ({sigint:true});

let numero; 
let peso;
let somaPonderada = 0;
let somaPesos = 0;


do {
    numero = Number(prompt('Digite um número: '))
    if (numero !== 0) {
        peso = Number(prompt('Digite o peso da sua nota: '))
        somaPonderada += numero * peso
        somaPesos += peso;
    }
} while(numero !== 0) {
    if(somaPesos === 0) {
        console.log('Nenhum número foi inserido.')
    }
    else {
        const mediaPonderada = somaPonderada / somaPesos
        console.log(`A média ponderada dos números é: ${mediaPonderada}`);
    }
}
