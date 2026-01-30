let pares = 0;
let impares = 0;
let numero;

// Laço de repetição FOR para ler 10 números
for (let i = 1; i <= 10; i++) {
    numero = parseInt(prompt("Digite o " + i + "º numero:"));

    // Estrutura condicional para verificar par ou ímpar
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

// Saída de dados
console.log("Total de numeros pares: " + pares);
console.log("Total de numeros impares: " + impares);