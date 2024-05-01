
let id = 15

if (id === 5 || id === 6) {
    console.log(`A origem do produto é o Nordeste`)
} else if (id === 7 || id === 8 || id === 9) {
    console.log(`A origem do produto é o Sudeste`)
}
else if (id => 10 && id <= 20) {
    console.log(`A origem do produto é do Centro-Oeste`)
}
else if (id => 25 && id <= 50) {
    console.log(`A origem do produto é do Norte`)
} else if (id => 60 && id <= 70) {
    console.log(`A origem do produto é do Sul`)
}
else {
    console.log(`O produto é Importado`)
}
