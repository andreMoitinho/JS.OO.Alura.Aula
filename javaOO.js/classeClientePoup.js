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

class ClientePoupanca extends Cliente {
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,cpf,email,saldo)
        this.saldoPoupanca += saldoPoupanca
    }
    depositarPoupanca(valor){
        this.depositarPoupanca += valor
     }
}

const andre = new ClientePoupanca("andre","451,579,7288","andre@email.com",100,200)
console.table(andre)


