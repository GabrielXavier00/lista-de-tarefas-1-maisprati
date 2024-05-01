/* 
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
    ● Some 25 ao primeiro inteiro;
    ● Triplique o valor do segundo inteiro;
    ● Modifique o valor do terceiro inteiro para 12% do valor original;
    ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/

let numeros = [10,2,5,20]
let somar = numeros[0] + 25
let triplicar = numeros[1] * 3
let porcentagem = numeros[2] - (numeros[2] * 0.12)
let somaTotal = numeros[0] + numeros[1] + numeros[2] + numeros[3]

console.log(numeros)
console.log(somar)
console.log(triplicar)
console.log(porcentagem)
console.log(somaTotal)