
const leia = require("readline-sync");

let n1 = parseFloat(leia.question("Digite o primeiro numero:"));
let n2 = parseFloat(leia.question("Digite o segundo numero:"));
let n3 = parseFloat(leia.question("Digite o terceiro numero:"));
let n4 = parseFloat(leia.question("Digite o quarto numero:"));

let diferenca = (n1 * n2) - (n3 * n4);

console.log("Diferença: " + diferenca.toFixed(1));
