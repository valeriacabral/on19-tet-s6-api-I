const estados = require("./cidade-e-estados.json")

for
 (let es of estados) 
 


 {
         console.log(es.nome + "\n" + es.sigla + "\n")
es.cidades.forEach((city) => 


{
console.log(city + "\n")
})

}