/*
2. Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representaem relação ao total de eleitores. 
*/

// const prompt  = require('prompt-sync') ({sigint:true});

let totalDeEleitores = 200
let votosBrancos = 10; 
let votosNulos = 20;
let votosValidos = 160;

let percentualVotosBrancos = (votosBrancos / totalDeEleitores) * 100;
let percentualNulos = (votosNulos / totalDeEleitores) * 100;
let percentualVotosValidos = (votosValidos / totalDeEleitores) * 100;

console.log("Percentual de votos brancos: " + percentualVotosBrancos + "%")
console.log("Percentual de votos nulos: " + percentualNulos + "%")
console.log("Percentual de votos válidos: " + percentualVotosValidos + "%")


