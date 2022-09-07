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

ofertaSeguros(cliente) 

function ofertaSeguros(obj){
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes ("dependentes")){
        console.log(`Oferta de seguros de vida para ${obj.nome}`)
    };
}

console.table(Object.entries(cliente))
ofertaSeguros(cliente);