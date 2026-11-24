function calcularDesconto(preco, percentual) {
    let percentualFinal = 100 - percentual;
    return preco * percentualFinal / 100;
}

let valorProduto = parseFloat(prompt("Qual é o valor do produto?"));
let desconto = parseFloat(prompt("Qual é a porcentagem de desconto?"));
let resultado = calcularDesconto(valorProduto, desconto);
console.log("Valor com desconto:", resultado);
