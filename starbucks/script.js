
let circulo = document.querySelector(".circulo");
let copo = document.querySelector(".imagem-copo");
let botoes = document.querySelectorAll(".botao-menu");

function mudarCor(cor){
    circulo.style.backgroundColor = cor;
}

function mudarCopo(mudar){
    copo.src = mudar;
}


botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        copo.classList.add('animacao');
        setTimeout(() => {
            copo.classList.remove('animacao');
        }, 1000);
    });
});



