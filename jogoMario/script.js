const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reiniciar = document.querySelector('.reiniciar');
const play = document.querySelector('.play');
const pontuacao = document.querySelector('.pontuacao');
const exibir = document.querySelector('.exibirPontuacao');

let score = 0;
let ticks = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump')
    }, 500);

}

play.style.display = 'block';
exibir.style.display = 'none'

play.addEventListener('click', () => {
    play.style.display = 'none';
    reiniciar.style.display = 'none';

 const loop = setInterval(()=>{
    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '' );
    
    ticks++;
if (ticks % 10 === 0) {
    score++;
    pontuacao.textContent = score;
}

    if(pipePosition <= 95 && pipePosition > 0 && marioPosition < 85    ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game-over.png';
        mario.style.width = '60px'
        mario.style.marginLeft = '35px'

        exibir.style.display = 'block'
        exibir.innerHTML = "Seu score é: "+score;

        clearInterval(loop);

        reiniciar.style.display = 'block';
    }
} ,10);
})




document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

reiniciar.addEventListener('click', () =>{
    location.reload();
})