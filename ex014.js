/* 
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
*/
const prompt  = require('prompt-sync') ({sigint:true});


let numero;
let contador = 0;
let soma = 0;

do {
    numero = Number(prompt('Digite um número: '));
    soma += numero
    contador++
} while (numero !== 0) {
    if(contador === 1) {
        console.log('Nenhum número foi inserido.')
    } else {
        const media = soma / (contador - 1)
        console.log(`A média dos números é: ${media}`)
    }
 
}



