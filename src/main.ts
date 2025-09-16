
import Corrente from "./ContaCorrente.js";
import Poupanca from "./ContaPoupanca.js";


console.log(" Conta Corrente!");

let corrente: Corrente = new Corrente("Felisberto Felis", 1000, 0.08);

corrente.depositar(200);
corrente.cobrarTaxa();
corrente.sacar(2000);
console.log(`O saldo do cliente ${corrente.getTitular()} é de ${corrente.recuperarSaldo().toFixed(2)} `)

console.log(" Conta Poupança! ");

let poupanca = new Poupanca("Joselito Rodrigues", 200, 0.06);

poupanca.depositar(75.12);
poupanca.renderJuros();
poupanca.sacar(100);
console.log(`O saldo ${poupanca.getTitular()} é de R$ ${poupanca.recuperarSaldo().toFixed(2)}`);