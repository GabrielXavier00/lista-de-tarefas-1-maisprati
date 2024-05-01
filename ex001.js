/* 
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.
*/
const prompt  = require('prompt-sync') ({sigint:true});

let x = prompt('Temperatura em celsius: ')

let temperaturaEmCelsius = Number(x);
let temperaturaEmFahrenheit = temperaturaEmCelsius * 1.8 + 32 

console.log(`Celsius = ${temperaturaEmCelsius} °C
Fahrenheit = ${temperaturaEmFahrenheit} °F
`);