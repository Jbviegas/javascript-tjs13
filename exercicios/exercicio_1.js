const leia = require("readline-sync");

let salario = parseFloat(leia.question("Digite o salario:"));
let abono = parseFloat(leia.question("Digite o abono:"));

let novoSalario = salario + abono;

console.log("Novo Salário: " + novoSalario.toFixed(2));
