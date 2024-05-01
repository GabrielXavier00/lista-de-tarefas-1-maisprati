/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
 */

let a = 10;
let b = 1

if( a < b ) {
    console.log(`Os valores em ordem crescente: ${a}, ${b}`);
} else {
    console.log(`Os valores em ordem crescente: ${b}, ${a}`);
}

let valores = [20,1]

valores.sort((a,b) => a - b)

console.log(`Os valores em ordem crescente: ${valores[0]}, ${valores[1]}`);