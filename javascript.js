const qtd = document.querySelector("#numbers");
const inicio = document.querySelector("#start-number");
const fim = document.querySelector("#end-number");
const botao = document.querySelector("button");
const semRepetir = document.querySelector(".label-option input")
const formBox = document.querySelector(".content-form");
const listResult = document.querySelector(".resultados");

// Seleciona as caixas de formulário inicial e o do resultado

const resultBox = document.createElement("div")

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

   // Remove a classe mais próxima do evento de clicar que no caso é o .content-form
    const removed = event.target.closest(".content-form");
    removed.remove();
    
    // Cria os elementos para aparecer os resultados do sorteio
    const divResult = document.createElement("div");
    divResult.classList.add("title");

    const h1Result = document.createElement("h1");
    h1Result.textContent = "RESULTADO SORTEIO";
    divResult.appendChild(h1Result);


    const pResult = document.createElement("p");
    pResult.textContent = "1º RESULTADO";
    divResult.appendChild(pResult);

    listResult.appendChild(divResult);
  
    // Loop para criar cada número sorteado na tela adiciona os elementos individualmente nas divs conforme quantidade escolhida
    
    for (let i = 0; i < quantidade; i++) {
        
        
    const areaResult = document.createElement("div");
    areaResult.classList.add("content-result");
    
    // Controla o delay da animação para cada número
    areaResult.style.animationDelay = `${i * 4}s`;

    const spanResult = document.createElement("span");
    spanResult.textContent = numeros[i];  // ← Acessa cada número pelo índice
    
    areaResult.appendChild(spanResult);  
    listResult.appendChild(areaResult);
}

    const sortearButton = document.createElement("button");
    sortearButton.textContent = "SORTEAR NOVAMENTE";
    sortearButton.classList.add("sortear-again");

    const imgCircle = document.createElement("img");
    imgCircle.src = "assets/Vector (Stroke).svg";
    imgCircle.classList.add("img-circle")
    
    const imgArrow = document.createElement("img");
    imgArrow.src = "assets/Vector.svg"
    imgArrow.classList.add("img-arrow")

    sortearButton.appendChild(imgCircle);
    sortearButton.appendChild(imgArrow);

    
    listResult.appendChild(sortearButton);


    const buttonAgain = document.querySelector(".sortear-again");
    buttonAgain.addEventListener("click", () => {
        window.location.reload();



    })



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


