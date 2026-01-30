const leia = require("readline-sync");

// Criação da matriz 3x3
let matriz = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

// Leitura dos dados da matriz
for (let i = 0; i < 3; i++) {
    matriz[i] = [];

    for (let j = 0; j < 3; j++) {
        matriz[i][j] = leia.questionInt(`Digite o valor da posicao [${i}][${j}]: `);
    }
}

console.log("\nMatriz informada:");
console.table(matriz);

// Elementos da diagonal principal
console.log("\nElementos da Diagonal Principal:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i]);
    somaPrincipal += matriz[i][i];
}

// Elementos da diagonal secundária
console.log("\nElementos da Diagonal Secundaria:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][2 - i]);
    somaSecundaria += matriz[i][2 - i];
}

// Saída das somas
console.log("\nSoma dos Elementos da Diagonal Principal:");
console.log(somaPrincipal);

console.log("\nSoma dos Elementos da Diagonal Secundaria:");
console.log(somaSecundaria);
