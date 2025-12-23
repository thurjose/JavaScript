/*
Operadores Logicos
&& -> AND -> E -> TODAS AS EXPRESSOES PRECISAM SER true PARA RETORNAR true
|| -> OR -> OU -> PELA MENOS UMA EXPRESSAO PRECISA SER true Para RETORNAR true (SE TODAS EXPRESSOES FOREM false VAI RETORNAR false)
! -> NOT -> NÃO -> VAI SEMPRE INVERTER O VALOR (VOCE PODE USAR MAIS QUE UM POR EXEMPLO (!!true) ISSO RETORNARA (true) PQ ELE TA INVERTENDO O VALOR DE TRUE DUAS VEZES)
*/

//                         AND
// const bolso = 1
// const fora = 1 // 0 = nao tem 1 = tem
// const haveMoney = bolso > 0
// if (fora === 1){
//     sunDay = true
// }else {
//     sunDay = false
// };
// if (haveMoney && sunDay){
//     console.log(`Tenho dinheiro? ${haveMoney}
// Sol la fora? ${sunDay}`);
// }else {
//     console.log(`Tem dinheiro? ${haveMoney}`);
//     console.log(`Esta sol la fora? ${sunDay}`);}
// console.log(`Tenho Dinheiro e Esta sol la fora? ${haveMoney && sunDay}`);



                                OR
const bolso = 0
const fora = 1 // 0 = nao tem 1 = tem
const haveMoney = bolso > 0
if (fora === 1){
    sunDay = true
}else {
    sunDay = false
};
console.log(`Tenho dinheiro? ${haveMoney}, Esta sol? ${sunDay}`);
console.log(haveMoney || sunDay);


                             !
console.log(!true); // INVERTE O VALOR
