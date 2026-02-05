/*
&& (AND) -> false && true -> false
|| (OR) - false || true -> true (vai retornar o valor verdadeiro)

FALSY VALUES:
false
0
""
''
``
null
undefined
NaN
*/
// console.log("Luiz Otavio" && 0 && "maria"); -> retorna o ultimo valor checado, caso ele cheque algum valor falso, vai retornar o valor falso

/*
function falaOi () {
    return "Oi";
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());
*/

// console.log(0 || false || null || 'arroz' || true); // retorna o PRIMEIRO valor verdadeiro checado

/*
const corUsuario = null;
const corPadrao = corUsuario || "Preto";
// se o usuario escolher uma cor entao o background vai ser a cor escolhida; else vai ser "Preto"
*/

/*
const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;
console.log(a || b || c || d || e); //vai exibir false (const c) pq e um valor true
*/