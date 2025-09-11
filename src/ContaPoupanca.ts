import Conta from "./Conta.js";

class ContaPoupanca extends Conta {
    private taxaRendimento: number;

    constructor(nome: string, saldo: number, taxaRendimento: number) {
        super(nome, saldo); 
        this.taxaRendimento = taxaRendimento;
    }

    public getTaxaRendimento(): number {
        return this.taxaRendimento;
    }

    public setTaxaRendimento(taxaRendimento: number): void {
        this.taxaRendimento = taxaRendimento;
    }

    public renderJuros(): void {
        console.log(`Rendendo juros de R$${this.taxaRendimento}`);
    }

    public cobrarRendimento(): void {
        console.log(`Cobrando o rendimento de R$${this.taxaRendimento} da conta poupança`);
    }

    public sacar(valor: number): void {
        console.log(`Sacando o valor de R$${valor} da conta poupança`);
    }

    public depositar(valor: number): void {
        console.log(`Depositando o valor de R$${valor} na conta poupança`);
    }

    public consultarSaldo(): void {
        console.log(`Você não possui saldo na conta`);
    }
}

export default ContaPoupanca;