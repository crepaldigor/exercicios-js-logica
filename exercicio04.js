function ehPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let valor = parseInt(prompt("Informe um número inteiro:"));
let resultado = ehPar(valor);
console.log(resultado);
