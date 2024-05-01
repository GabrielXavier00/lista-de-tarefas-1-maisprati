/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
*/

let quantMacas = 2

if(quantMacas < 12) {
    const preco = 0.30
    console.log(`Preço das Maças = R$ ${quantMacas * preco}`)
} else if(quantMacas > 12) {
    const preco = 0.25
    console.log(`Preço das Maças = R$ ${quantMacas * preco}`)
}