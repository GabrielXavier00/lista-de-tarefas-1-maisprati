const prompt  = require('prompt-sync') ({sigint:true});

let N = prompt('Digite um número: ')



for (let i = 1; i <= 10; i++) {
    let multiplicacao = N * i

    console.log(` ${N} x ${i} = ${multiplicacao}
    `)

    
}