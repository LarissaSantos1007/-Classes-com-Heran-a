 import conta from "./Conta.js";

  abstract class Conta {
    private titular: string;
    private saldo: number;
    constructor(
        _titular: string,
        _saldoInicial: number,
    ) {
        this.titular = _titular;
        this.saldo = _saldoInicial;
    }

    public getTitular(): string {
        return this.titular;
    }

    public setTitular(_titular: string): void {
        this.titular = _titular;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(_saldo: number): void {
        this.saldo = _saldo;
    }  

    public depositar(_valor: number): void {
        this.saldo = this.saldo + _valor;
    }

    public sacar(_valor: number): void {
        if (_valor > this.saldo) {
        }else{
            this.saldo -= _valor;
        }
    }
    
    public recuperarSaldo(): number{
        return this.saldo;
    }
}
export default Conta;