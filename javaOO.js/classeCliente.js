class Cliente {
    constructor (nome,cpf,email,saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
    depositar (valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.table(this.saldo)
    }
}
const andre = new Cliente("andre","451.579.728.9","andre@email.com",100)
andre.exibirSaldo()
console.table(andre)