const leia = require("readline-sync");

// Entrada de dados
let codigo = leia.questionInt("Codigo do Produto: ");
let quantidade = leia.questionInt("Quantidade: ");

let produto;
let preco;
let total;

// Processamento
switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        preco = 10.00;
        break;

    case 2:
        produto = "X-Salada";
        preco = 15.00;
        break;

    case 3:
        produto = "X-Bacon";
        preco = 18.00;
        break;

    case 4:
        produto = "Bauru";
        preco = 12.00;
        break;

    case 5:
        produto = "Refrigerante";
        preco = 8.00;
        break;

    case 6:
        produto = "Suco de laranja";
        preco = 13.00;
        break;

    default:
        console.log("Codigo do produto invalido!");
        process.exit(0);
}

// Cálculo
total = quantidade * preco;

// Saída
console.log("Produto: " + produto);
console.log("Valor total: R$ " + total.toFixed(2));
