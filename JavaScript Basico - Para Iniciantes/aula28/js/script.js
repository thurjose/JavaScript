const numero = Number(prompt("Digite um Numero"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu numero -2 e: ${numero - 2}.</p>`
texto.innerHTML += `<p>A raiz quadrada: ${numero ** 1/2}.</p>`
texto.innerHTML += `<p>${numero} E inteiro?: ${Number.isInteger(numero)}.</p>`
texto.innerHTML += `<p>${numero} E NaN?: ${Number.isNaN(numero)}.</p>`
texto.innerHTML += `<p>Arredondando para BAIXO: ${Math.floor(numero)}.</p>`
texto.innerHTML += `<p>Arredondando para CIMA: ${Math.ceil(numero)}.</p>`
texto.innerHTML += `<p>Duas casas DECIMAIS: ${numero.toFixed(2)}.</p>`    