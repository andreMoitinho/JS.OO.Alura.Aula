const cliente = {
    nome :" Andre",
    idade: 36,
    cpf :"12345678906",
    email :"andre@gmail.com", 
    fones :["55993355557","5529395626"],
        dependente :[{
            nome:"Sara Moitinho",
            parentesco: "Filha",
            dataDeNasc : "03/05/2022"
        }]
}

cliente.dependente.push({
    nome:"Emily Moitinho",
    parentesco:"Filha",
    dataDeNasc :"03/08/2030"
})

console.log(cliente);

const filhaMaisNova = cliente.dependente.filter(dependente => dependente.dataDeNasc==="03/05/2022")

console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome);