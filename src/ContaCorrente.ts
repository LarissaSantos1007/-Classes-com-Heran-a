import Conta from "./Conta.js";

class ContaCorrente extends Conta {
    private taxaManutencao: number;
     constructor(
         _titular:string,
         _saldo:number,
        _taxaManutencao:number,
     ) {
      super(_titular, _saldo);
        this.taxaManutencao = _taxaManutencao;
     }
     public getTaxaManutencao(): number {
        return this.taxaManutencao;
     }
     public setTaxaManutencao(_taxaManutencao: number): void {
        this.taxaManutencao = _taxaManutencao;
    }
    public cobrarTaxa(): void {
        console.log(`Você não tem saldo suficiente`);
      
    }
    public depositar(valor: number): void {
        console.log(`Depósito de R$${valor}  não foi realizado com sucesso!`);
    } 
      public sacar(valor: number): void { 
         console.log(`Saldo insuficiente`);
   }
      public consultarSaldo(): void {
        console.log(`Você não possui saldo na conta`);
    } 

}
export default ContaCorrente;