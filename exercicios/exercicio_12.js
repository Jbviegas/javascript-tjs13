const leia = require("readline-sync");

// Vetor com 10 números inteiros não ordenados e não repetidos
let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numero = leia.questionInt("Digite o numero que voce deseja encontrar: ");

let encontrado = false;
let posicao = -1;

// Laço de repetição para pesquisar no vetor
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === numero) {
        encontrado = true;
        posicao = i;
        break;
    }
}

// Saída de dados
if (encontrado) {
    console.log(`O numero ${numero} esta localizado na posicao: ${posicao}`);
} else {
    console.log(`O numero ${numero} nao foi encontrado!`);
}
