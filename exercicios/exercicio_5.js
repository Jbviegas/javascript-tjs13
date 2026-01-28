const leia = require("readline-sync");


let numero = parseInt(leia.question("Digite um número:"));

// Verifica se é par ou ímpar
if (numero % 2 === 0) {

    // Número par
    if (numero >= 0) {
        console.log("O Número " + numero + " é par e positivo!");
    } else {
        console.log("O Número " + numero + " é par e negativo!");
    }

} else {

    // Número ímpar
    if (numero >= 0) {
        console.log("O Número " + numero + " é ímpar e positivo!");
    } else {
        console.log("O Número " + numero + " é ímpar e negativo!");
    }
}
