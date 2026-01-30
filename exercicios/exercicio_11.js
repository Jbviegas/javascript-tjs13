const leia = require("readline-sync");

let numero;
let soma = 0;

// Laço de repetição DO...WHILE
do {
    numero = leia.questionInt("Digite um numero: ");

    if (numero > 0) {
        soma += numero;
    }

} while (numero !== 0);

// Saída de dados
console.log("\nA soma dos numeros positivos e: " + soma);
