const qtd = document.querySelector("#numbers");
const inicio = document.querySelector("#start-number");
const fim = document.querySelector("#end-number");
const botao = document.querySelector("button");
const semRepetir = document.querySelector(".label-option input")

botao.addEventListener("click", () =>{

const quantidade = Number(qtd.value)
const min = Number(inicio.value)
const max = Number(fim.value)



// Garante que o minímo seja menor que o máximo
if (min > max){
    alert("O número inicial não pode ser maior que o final!")
    return
}


// Garantir que os campos estejam preenchidos. Caso algum esteja vazio, o operador lógico ! (negação) retornará true e o alerta será exibido.
 if (!quantidade || !min || !max) {
        alert("Preencha todos os campos!");
        return;
    }



// Condição ternária. Se o botão estiver marcado, será true (?) e executará a função sem repetição, caso contrário, executará a função com repetição.
const numeros = semRepetir.checked
        ? sortearSemRepeticao(quantidade, min, max)
        : sortearComRepeticao(quantidade, min, max)

    alert("Números sorteados: " + numeros.join(", "))
})


function sortearComRepeticao(quantidade, min, max) {

const resultado = [];


// Math.random() → gera número decimal entre 0 e 1 (ex: 0.234)
// Math.random() * (max - min + 1) → escala para o intervalo desejado Ex: se min=5 e max=10 → gera entre 0 e 5
// Math.floor(...) → arredonda para baixo (de 7.9 vira 7)
// + min → desloca o número para começar no mínimo desejado, ou seja, de 5 a 10


for (let i = 0; i < quantidade; i++) {
        const n = Math.floor(Math.random() * (max - min + 1)) + min;
        resultado.push(n);
    }

    return resultado;
}


function sortearSemRepeticao(quantidade, min, max) {

const numerosPossiveis = [];
    const resultado = [];

    for (let i = min; i <= max; i++) {
        numerosPossiveis.push(i);
    }

    if (quantidade > numerosPossiveis.length) {
        alert("Quantidade maior que o intervalo disponível!");
        return [];
    }

    for (let i = 0; i < quantidade; i++) {
        const index = Math.floor(Math.random() * numerosPossiveis.length);
        resultado.push(numerosPossiveis[index]);
        numerosPossiveis.splice(index, 1);
    }

    return resultado;


}


