function escopo () {
    const form = document.querySelector(".form");
    const result = document.querySelector('.result');

    const pessoas = []

    form.onsubmit = function (event) {
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        pessoas.push({
        nome: nome.value, 
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });

        console.log(pessoas);

        result.innerHTML += `<p>Nome:${nome.value} ${sobrenome.value} | Peso:${peso.value}kg | Altura:${altura.value}m</p>`
    };
};
escopo();