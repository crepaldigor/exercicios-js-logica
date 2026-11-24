function celsiusParaFahrenheit(c) {
    let fahrenheit = (c * 9 / 5) + 32;
    return fahrenheit;
}

let temperatura = parseFloat(prompt("Quantos graus Celsius?"));
let resultado = celsiusParaFahrenheit(temperatura);
console.log("Graus Fahrenheit:", resultado);
