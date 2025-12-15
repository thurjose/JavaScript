/*
Operadores de comparacao
> Maior que
>= Maior que ou igual a
< Menor que
<= Menor que ou igual a
= Atribuicao
== igualdade (valor) (NAO RECOMENDADO)
=== igualdade estrita (valor e TIPO)
!= diferente (valor) (NAO RECOMENDADO)
!== diferente estrito (valor e TIPO)

== e != Recomendado nao usar por que se um valor 1 for um number e o valor 2 for uma string ele vai considerar q os dois valores sao iguais
podendo ocasionar problemas em futuros codigos

VAO SEMPRE RETORNAR UM VALOR BOLEANO (boolean value)

*/

const num1 = 10;
const num2 = "10";
const exp = num1 === num2;
console.log(exp);
