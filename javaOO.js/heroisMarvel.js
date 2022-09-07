const heroisMarvel = 
[
   
   { // Inicio de um Indice ou capitulo 
    nome:"Tony Stark",
    idade:35,
    cidade:"New York",
    poder:"Armadura de Ferro",
         dependentes:
         [{
            nome:"Peper Potts",
            parentesco:"Esposa",
            idade:30},
         {    
            nome:"Happy Hogan",
            parentesco:"Melhor amigo",
            idade:35    
         }]
    }, //fechamento de um Indice ou capitulo
      {
        nome:"Petter Park",
        idade:25,
        cidade:"New York",
        poder:"Super força , Teias super resistentes",
          dependentes: 
          [{
             nome:"May parker",
             parentesco:"Tia",
             idade:26},
           {
             nome:"Mary jane",
             parentesco:"Esposa",
             idade:25
           }]
        
      }

]

const listaDependetes = [...heroisMarvel[0].dependentes,...heroisMarvel[1].dependentes]

console.table(listaDependetes)