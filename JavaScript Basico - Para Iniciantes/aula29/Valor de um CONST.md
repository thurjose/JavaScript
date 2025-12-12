# 🛡️ Const com Valores Mutáveis

## 1. A Regra Básica da `const`
A `const` descreve uma variável que **não pode ser reatribuída** (usando o sinal `=`).
Depois de criada, você não pode simplesmente apontar ela para outro valor.

```javascript
const nome = 'Luiz';
// nome = 'João'; // ❌ ERRO: Assignment to constant variable.
```
## 2. Variável vs. Valor (O Conceito Importante)
```javascript
Para entender por que podemos alterar arrays criados com const, precisamos diferenciar duas coisas:

    A Variável (O Apelido): É apenas uma referência (um endereço) apontando para um lugar na memória.

    O Valor (O Dado): O que está realmente salvo lá dentro.

Tipos de Valores
Tipo	Comportamento	Exemplos
Primitivos	Imutáveis (Não mudam)	string, number, boolean, null, undefined
Objetos	Mutáveis (Podem mudar por dentro)	Arrays [], Objetos {}, Functions

    Nota: Quando usamos const com primitivos (ex: número), ele nunca muda. A variável é constante e o valor é imutável.
```
## 3. Por que Arrays e Objetos "const" podem mudar?
```javascript
Quando você cria um array com const, a variável guarda o endereço de memória daquele array.

    Você NÃO pode mudar o endereço (usar = para trocar o array inteiro).

    Você PODE mudar o que está guardado dentro daquele endereço (adicionar/remover itens).

    A const protege a referência, não o conteúdo interno do objeto.
```
## 4. Exemplos Práticos
```javascript
✅ O que é PERMITIDO (Mutação Interna)

Você altera os dados dentro da estrutura, mas a variável continua apontando para o mesmo objeto na memória.

const array = [1, 2, 3, 4, 5];

array.pop();      // Remove o último
array[0] = 1024;  // Altera o índice 0

console.log(array); 
// Resultado: [ 1024, 2, 3, 4 ]

❌ O que é PROIBIDO (Reatribuição)

Você tenta arrancar o objeto antigo e colocar um novo no lugar usando =.

const array = [1, 2, 3, 4, 5];

// array = 'Legal';     // ❌ ERRO
// array = [10, 20];    // ❌ ERRO
```