/*
Primitivos (imutaveis): string, number, boolean, undefined, null (bigint, symbol)
VALORES COPIADOS

Referencia (geralmente muravel): array, object, function
VALORES PASSADOS POR REFERENCIA
*/


//          0123
// let nome = "Luiz";
// nome[0] = "R"; // NAO FAZ NADA PQ A STRING E IMUTAVEL
// console.log(nome[0], nome);



// let a = "A";
// let b = a; // COPY
// a = "outra coisa"
// console.log(a, b);



// let a = [1, 2, 3];
// let b = a;
// let c = b

// console.log(a, b);
// a[0] = 20;
// console.log(a, b);
// // a, b vao apontar para o mesmo valor na memoria

// b.pop();
// console.log(a, b);

// a.push('RRR')
// console.log(c);

// let a = [1, 2, 3];
// let b = [...a];
// //isso fara com que o valor seja copiado, entao se o valor de a for modificado a baixo o valor de b nao mudara
// //Isso e chamado de SPREAD


//sem spread
// const a = {
//     nome: "Luiz",
//     sobrenome: "Fernando"
// };
// const b = a;

// a.nome = "Joao";
// console.log(b);


//com spread
// const a = {
//     nome: "Luiz",
//     sobrenome: "Fernando"
// };
// const b = {...a};

// a.nome = "Joao";
// console.log(b);
// console.log(a);

