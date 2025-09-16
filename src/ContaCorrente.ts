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
        let saldoTaxa: number = this.getSaldo() - (this.getSaldo() * this.getTaxaManutencao());
        this.setSaldo(saldoTaxa); 
      
    }   
  
}
export default ContaCorrente;