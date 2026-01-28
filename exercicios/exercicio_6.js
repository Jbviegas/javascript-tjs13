const leia = require("readline-sync");

let saldo = 1000.00;

// Menu de operações
console.log("********************************");
console.log("       BANCO DIGITAL");
console.log("********************************");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Deposito");
console.log("********************************");

let operacao = leia.questionInt("Operacao: ");

switch (operacao) {

    case 1:
        console.log("\nOperacao - Saldo");
        console.log("Saldo: R$ " + saldo.toFixed(2));
        break;

    case 2:
        console.log("\nOperacao - Saque");
        let saque = leia.questionFloat("Valor: R$ ");

        if (saque > saldo) {
            console.log("Saldo Insuficiente!");
        } else {
            saldo -= saque;
            console.log("Novo Saldo: R$ " + saldo.toFixed(2));
        }
        break;

    case 3:
        console.log("\nOperacao - Deposito");
        let deposito = leia.questionFloat("Valor: R$ ");

        saldo += deposito;
        console.log("Novo Saldo: R$ " + saldo.toFixed(2));
        break;

    default:
        console.log("\nOperacao Invalida!");
        break;
}
