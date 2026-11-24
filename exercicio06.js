function calcularMedia(n1, n2, n3) {
    let somaNotas = n1 + n2 + n3;
    let media = somaNotas / 3;
    return media;
}

let nota1 = parseFloat(prompt("Qual foi a primeira nota?"));
let nota2 = parseFloat(prompt("Qual foi a segunda nota?"));
let nota3 = parseFloat(prompt("Qual foi a terceira nota?"));
let resultado = calcularMedia(nota1, nota2, nota3);
console.log("Média das notas:", resultado);
