# 🟨 GUIA RÁPIDO: JAVASCRIPT (Básico Essencial)

## 1. Variáveis (Onde guardar dados)
> **Regra de ouro:** Esqueça o `var`. Use apenas `const` e `let`.

### `const` (Constante)
Use em **95%** dos casos. O valor **NÃO** pode mudar.
```javascript
const cpf = "123.456.789-00";
const pi = 3.14;
// cpf = "000"; // ❌ ERRO! O código quebra se tentar mudar.

let (Variável)

Use SÓ se o valor for mudar depois (ex: placar de jogo, contador).
JavaScript

let pontos = 0;
pontos = 10; // ✅ Funciona!

2. Tipos de Dados (O que você guarda)

const texto = "Olá";       // String (Use aspas ou crase)
const numero = 42;         // Number (Serve para inteiros e decimais)
const booleano = true;     // Boolean (true ou false)
const lista = [];          // Array (Lista vazia)
const nada = null;         // Null (Vazio intencional)



3. Funções (Ações do código)
O jeito moderno (Arrow Function)

Mais usado hoje em dia.

// Criando a função
const somar = (a, b) => {
    return a + b;
};

// Usando a função
somar(2, 2); 

O jeito clássico

function somar(a, b) {
    return a + b;
}



4. Condicionais (Decisões)
JavaScript

const hora = 14;

if (hora < 12) {    
    console.log("Bom dia");
    } 
else if (hora < 18) {
    console.log("Boa tarde");
    } 
else {
    console.log("Boa noite");
}

5. Estruturas de Dados (Listas e Objetos)
Array (Lista ordenada)

Começa sempre no zero [0]

const compras = ["Pão", "Leite", "Ovos"];

console.log(compras[0]); // Pega o primeiro item ("Pão")
console.log(compras.length); // Tamanho da lista (3)

Objeto (Características de algo)

Chave e Valor

const pessoa = {
    nome: "Carlos",
    idade: 28,
    vip: true
};

console.log(pessoa.nome); // "Carlos"

6. Template String (Juntar texto + variável)

Use a crase ( `` ) em vez de aspas para misturar texto e código fácil.

❌ Jeito ruim (Antigo):

const msg = "Olá " + nome + ", tudo bem?";

✅ Jeito certo (Moderno):

const msg = `Olá ${nome}, tudo bem?`; 

7. Console (Debug)

Como ver o que está acontecendo no seu código:
JavaScript

console.log("Mensagem normal");
console.error("Mensagem de erro vermelha");
console.table(lista); // Mostra listas como uma tabela bonita