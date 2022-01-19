class ContaBancaria {
    constructor(agencia, numero) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = "Conta Corrente";
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo ) return "Você não tem saldo suficiente";

        this._saldo -= valor;
        return `Você sacou R$${valor} e seu novo saldo é de R$${this._saldo}`;
    }

    depositar(valor) {
        this._saldo += valor;
        return `Você depositou R$${valor} e seu novo saldo é de R$${this._saldo}`;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = "Conta Corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Conta Poupança";
    }

}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Conta Universitaria";
    }

    sacar(valor) {
        if (valor > 500) return `Você não pode sacar mais de R$500`;

        this._saldo -= valor;
        return `Você sacou R$${valor} e seu novo saldo é de R$${this._saldo}`;
    }

}

const novaConta = new ContaBancaria(01, 02);
console.log(novaConta.tipo);
console.log(novaConta.sacar(500));
console.log(novaConta.depositar(5000));

const novaContaCorrente = new ContaCorrente(01, 02, true);
console.log(novaContaCorrente.tipo);
console.log(novaContaCorrente.depositar(5000));
console.log(novaContaCorrente.sacar(500));
console.log(novaContaCorrente.cartaoCredito);

const novaContaUniversitaria = new ContaUniversitaria(01, 02);
console.log(novaContaUniversitaria.tipo);
console.log(novaContaUniversitaria.depositar(5000));
console.log(novaContaUniversitaria.sacar(550));
console.log(novaContaUniversitaria.sacar(500));