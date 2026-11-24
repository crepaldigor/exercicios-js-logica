function areaRetangulo(base, altura) {
    let area = base * altura;
    return area;
}

let medidaBase = parseFloat(prompt("Informe a medida da base:"));
let medidaAltura = parseFloat(prompt("Informe a medida da altura:"));
let resultado = areaRetangulo(medidaBase, medidaAltura);
console.log("Área do retângulo:", resultado);
