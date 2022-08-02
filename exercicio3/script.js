const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
// console.log("pokemon 1: ", pokemon1);

const pokemon2 = { ...pokemon1,
    nome: "Squirtle",
    tipo: "Água",

};
//console.log("pokemon 2: ", pokemon2);

pokemon1.ataques = []
//console.log("Comando b, primeira parte:", pokemon1)

pokemon1.ataques.push([{
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
}]);  
//console.log("Comando b, segunda parte:", pokemon1)

pokemon2.ataques = [...pokemon1.ataques]
//console.log("Comando c:", pokemon2)

pokemon1.ataques.push([{
    nome: "Folha Navalha",
    dano: 45,
    tipo: "Grama",
    precisao: 100,
}])
//console.log("Comando d:", pokemon1)

pokemon2.ataques.push([{
    nome: "Jato de Água",
    dano: 40,
    tipo: "Água",
    precisao: 100,
}])
//console.log("Comando e:", pokemon2)

console.log('Comando f:',pokemon1,pokemon2)