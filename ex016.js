
function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let contador = 0;
let numeroAtual = 101;

while (contador < 50) {
    if (isPrimo(numeroAtual)) {
        console.log(numeroAtual);
        contador++;
    }
    numeroAtual++;
}
