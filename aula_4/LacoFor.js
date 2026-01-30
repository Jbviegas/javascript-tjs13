const leia = require("readline-sync");

// Entrada de dados
let nome = leia.question("Digite o Nome do doador: ");
let idade = leia.questionInt("Digite a Idade do doador: ");

let resposta;
do {
    resposta = leia
        .question("Primeira doacao de sangue? (sim/nao): ")
        .toLowerCase();
} while (resposta !== "sim" && resposta !== "nao");

// Converte para boolean
let primeiraDoacao = resposta === "sim";// true se for a primeira doação

// Processamento
if (idade >= 18 && idade <= 69) {

    if (idade >= 60 && idade <= 69 && primeiraDoacao) {
        console.log(nome + " nao esta apto para doar sangue!");
    } else {
        console.log(nome + " esta apto para doar sangue!");
    }

} else {
    console.log(nome + " nao esta apto para doar sangue!");
}
