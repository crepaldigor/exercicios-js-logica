function dobro(numero) {
    return numero + numero;
}

let valor = parseFloat(prompt("Qual número você quer dobrar?"));
let resultado = dobro(valor);
console.log("Dobro:", resultado);
