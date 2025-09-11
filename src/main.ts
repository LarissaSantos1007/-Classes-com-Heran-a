import ContaCorrente from "./ContaCorrente.js";
import ContaPoupanca from "./ContaPoupanca.js";

console.log(`---Cenário1---`);

let conta1 = new ContaCorrente("Felisberto Felis", 1000, 0.08);
conta1.depositar(200);
conta1.cobrarTaxa();
conta1.sacar(2000);
console.log(`Saldo do cliente ${conta1.getTitular()} é de R$${conta1.getSaldo().toFixed(2)}`);

console.log(`---Cenário2---`);

let conta2 = new ContaPoupanca("Joselito Rodrigues", 200, 0.06);
conta2.depositar(500);
conta2.cobrarRendimento();
conta2.sacar(100);
console.log(`O saldo do cliente ${conta2.getTitular()} é de R$${conta2.getSaldo().toFixed(2)}`);
