const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reiniciar = document.querySelector('.reiniciar');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() =>{
        mario.classList.remove('jump')
    }, 500);

}

const loop = setInterval(()=>{
    const pipePosition =  pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '' );
    

    if(pipePosition <= 95 && pipePosition > 0 && marioPosition < 85    ){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './img/game-over.png';
        mario.style.width = '60px'
        mario.style.marginLeft = '35px'


        clearInterval(loop);

        reiniciar.style.display = 'block';
    }
} ,10);


document.addEventListener('keydown', jump);

reiniciar.addEventListener('click', () =>{
    location.reload();
})