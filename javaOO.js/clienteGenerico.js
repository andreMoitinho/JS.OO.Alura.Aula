function Cliente (nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo 
    this.depositar = function(valor){
        this.saldo += valor 
    }
    
}

const andre = new Cliente ("Andre", "45157972888","manos.moitinho@gmail.com",100)

console.table(andre)