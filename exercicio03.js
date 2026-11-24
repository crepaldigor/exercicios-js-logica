function soma(a, b) {
    let total = a + b;
    return total;
}

let primeiro = parseFloat(prompt("Informe um número:"));
let segundo = parseFloat(prompt("Informe outro número:"));
let resultado = soma(primeiro, segundo);
console.log("Resultado da soma:", resultado);
