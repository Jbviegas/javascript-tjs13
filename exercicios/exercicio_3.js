const leia = require("readline-sync");

let salarioBruto = parseFloat(leia.question("Digite o salario bruto:"));
let adicionalNoturno = parseFloat(leia.question("Digite o adicional noturno:"));
let horasExtras = parseFloat(leia.question("Digite as horas extras:"));
let descontos = parseFloat(leia.question("Digite os descontos:"));

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

console.log("Salário Líquido: " + salarioLiquido.toFixed(2));
