const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const cookie = document.querySelector('.cookie')
const btnReset = document.querySelector('.btnReset')

let randomNumber = Math.round(Math.random() * 9)

cookie.addEventListener('click', openCookie)
btnReset.addEventListener('click', resetCookie)

function openCookie(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    randomPhrases()
}

function randomPhrases(){
    if(randomNumber == 0){
        screen2.querySelector('p').innerText = "Não compense na ira o que lhe falta na razão." 
    } else if (randomNumber == 1){
        screen2.querySelector('p').innerText = "A juventude não é uma época da vida, é um estado de espírito." 
    } else if (randomNumber == 2){
        screen2.querySelector('p').innerText = "Não há que ser forte. Há que ser flexível." 
    } else if (randomNumber == 3){
        screen2.querySelector('p').innerText = "A maior barreira para o sucesso é o medo do fracasso." 
    } else if (randomNumber == 4){
        screen2.querySelector('p').innerText = "O nosso primeiro e último amor é… o amor-próprio."
    } else if (randomNumber == 5){
        screen2.querySelector('p').innerText = "Você sempre será a sua melhor companhia!"
    } else if (randomNumber == 6){
        screen2.querySelector('p').innerText = "A inspiração vem dos outros. A motivação vem de dentro de nós."
    } else if (randomNumber == 7){
        screen2.querySelector('p').innerText = "Acredite em milagres, mas não dependa deles."
    } else if (randomNumber == 8){
        screen2.querySelector('p').innerText = "A vida trará coisas boas se tiver paciência."
    } else if (randomNumber == 9){
        screen2.querySelector('p').innerText = "Todas as coisas são difíceis antes de se tornarem fáceis."
    }
}

function resetCookie(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
    randomNumber = Math.round(Math.random() * 9)
}
