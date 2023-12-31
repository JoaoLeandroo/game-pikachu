const pikachu = document.querySelector(".pikachu")
const pokebola = document.querySelector(".pokebola")
let contador = document.querySelector(".contador")
const reset = document.querySelector(".reset-game")

let pontos = 0
const pulo = () => {
    pikachu.classList.add("pulo-pikachu")

    setTimeout(() => {
        pikachu.classList.remove("pulo-pikachu")
    }, 500);
}

function startGame() {
    const loop = setInterval(() => {
        const pokebolaPosition = pokebola.offsetLeft
        const pikachuPosition = Number(window.getComputedStyle(pikachu).bottom.replace('px', ''))
        pontos++
        contador.innerHTML = pontos
    
        if(pokebolaPosition <= 120 && pikachuPosition < 80 && pokebolaPosition > 50) {
            pokebola.style.animation = "none"
            pokebola.style.left = `${pokebolaPosition}px`
    
            pikachu.style.animation = "none"
            pikachu.style.bottom = `${pikachuPosition}px`
            pikachu.src = "./src/images/game-over.png"

            pontos = 0
            clearInterval(loop)
            reset.style.display = "block"
        }
    }, 10)
}

startGame()

reset.addEventListener("click", () => {

    pokebola.style.left = ""
    pikachu.style.bottom = ""
    
    contador.innerHTML = 0
    pikachu.src = "./src/images/pikachu.gif"
    pikachu.style.left = '40px'
    pikachu.bottom = '0px'
    pikachu.style.animation = ""

    pokebola.style.right = 0
    pokebola.style.animation = ""

    reset.style.display = "none"
    startGame()
})

document.addEventListener("keydown", pulo)