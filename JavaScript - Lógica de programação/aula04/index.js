const hora = 24;
// IF pode ser usado sozinho
// se houver um else vai ter um IF antes dele
// eu posso ter quantos else if eu quiser
// so posso ter um else
// podemos usar condicoes sem else if. usando apenas else e if


// if (hora >= 0 && hora <= 12) {
//     console.log("Bom Dia!");
// } else if (hora > 12 && hora <= 18) {
//     console.log("Boa tarde");
// } else if (hora > 18 && hora <= 23.99) {
//     console.log("Boa Noite!");
// } else {
//     console.log("Insira uma hora entre 0-23.99");
// }

let tenhoDinheiro = true;
let vouSair;

if (tenhoDinheiro) {
    vouSair = true;
} else {
    vouSair = false;
}

console.log(`vou sair de casa? ${vouSair}`);