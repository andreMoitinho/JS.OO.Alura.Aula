const cliente = {
    nome :" Andre",
    idade: 36,
    cpf :"12345678906",
    email :"andre@gmail.com", 
    fones :["55993355557","5529395626"],
        dependente :[
        {
            nome:"Sara Moitinho",
            parentesco: "Filha",
            dataDeNasc : "03/05/2022"},
        {
            nome:"Emily Moitinho",
            parentesco:"Filha",
            dataDeNasc :"03/08/2030"
         }
        ],
   saldo:100,
        depositar:function(valor){
            this.saldo += valor
        }
}       

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
         
 