const input = document.querySelector('.input');

const random = Math.random() * (100 - 1) + 1;
let num = (Math.floor(random));

input.addEventListener(onclick)

if(input.value === num){
    console.log(num)
}else{
    console.log("Esse não é o número, tente novamente")
}