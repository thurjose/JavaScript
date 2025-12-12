// const array = [1,2,3];
// array.push(4);
// array[4] = 5
// console.log(array)


//FORMA DIFICIL
// const nome1= "Pedro";
// const idade1 = 20;

// const nome2 = "Carla"
// const idade2 = 42

//FORMA FACIL CRIANDO UM OBJETO
// const pessoa1 = {
//     nome: "Pedro"
//     idade: 20
//     cor: "preto"
// };

// const pessoa2 = {
//     nome: "Maria"
//     idade: 24
//     cor: "rosa"
// };

// console.log(pessoa1.nome)
// console.log(pessoa1.idade)
// console.log(pessoa1.cor)


//MAIS FACIL
function criapessoa(nome, idade, cor) {
    return {
        nome, idade, cor
    };
};

const pessoa1 = criapessoa("Pedro", 20, "preto")
console.log(pessoa1)
console.log(`Nome: ${pessoa1.nome}`)
console.log(`idade: ${pessoa1.idade}`)
console.log(`cor: ${pessoa1.cor}`)