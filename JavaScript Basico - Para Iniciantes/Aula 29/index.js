/*

// const nome = "Arthur Jose";
// console.log(nome[0]);

[] apos a const nome faz com que o numero do caractere que ta dentro dos colchetes vai para output

no exemplo acima
console diria "A"
*/


const alunos =  ["Luiz", "Pedro", "Maria"];

// console.log(alunos[0]); 
// // nesse caso como o valor de const alunos e um array (qualquer coisa dentro de []) 
// no exemplo a cima 0 seria o primeiro valor do array "Luiz" sendo assim o console log vai apresentar Luiz


// console.log(alunos);
// (alunos[0]) isso faz com que o valor que esta na posicao dos colchetes se modifique

// console.log(alunos.length) 
// para saber o tamanho do array




// alunos.push("Fabricio")
// alunos.push("Cleopatra")            // MAIS USADO EM GRANDES MAIORIAS DOS CASOS!!!!!!!!!!!!!!!!!
// adiciona ao final




// alunos[4] = "Mario" 
//adiciona tambem so que em posicao exata (se nao houver valor em [3] ele vai pular e definir valor no 4) (a empty item)

// alunos.unshift("Caroline")
// adiciona ao comeco

// alunos.pop();
// remove o ultimo elemento do array

// const removido = alunos.pop()
// resultado disso e oque foi removido

// console.log(removido)
//exibe o nome de quem foi removido

// alunos.shift();
//o primeiro elemento e removido

// delete alunos[1];
// deleta o elemento do indicie deixando-o como a empty item

// console.log(alunos[50]);
//mostra undefined como um indicie que nao existe

// alunos.slice(0, 3)
//fatiar o array nesse caso de 0 a 2
// alunos.slice(0, -1)
// faz o mesmo so que -1 seria (alunos.length)-1


// console.log(alunos instanceof Array)
//se true e array       else nao e array

// console.log(typeof alunos);
// mostra o tipo do array (OBJETO)

console.log(alunos);