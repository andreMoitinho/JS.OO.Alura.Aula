const clientes = [
{
        nome :" Andre",
        cpf : "12345678906",
        dependentes :[{
                nome:"Sara Moitinho",
                parentesco: "Filha",
                dataDeNasc : "03/05/2022"
            },
            {
                nome:"Emily Moitinho",
                parentesco:"Filha",
                dataDeNasc :"03/08/2030"
            }],
},    
    {
      nome : "juliana",
      cpf : "4515797288",
      dependentes:[{
        nome:"juditi",
        parentesco: "filha",
        dataDeNasc: "03/05/1998"
      }],
    }
]

const listaDependetes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependetes);
