function verificarIdade(idade) {
    if (idade < 18) {
        return "Menor de idade";
    }
    return "Maior de idade";
}

let anos = parseInt(prompt("Quantos anos você tem?"));
let resultado = verificarIdade(anos);
console.log(resultado);
