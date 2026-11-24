function maiorDeDois(a, b) {
    let maior = a;
    if (b > a) {
        maior = b;
    }
    return maior;
}

let primeiro = parseFloat(prompt("Informe um número:"));
let segundo = parseFloat(prompt("Informe outro número:"));
let resultado = maiorDeDois(primeiro, segundo);
console.log("Maior número:", resultado);
