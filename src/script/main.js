const pikachu = document.querySelector(".pikachu")
const pokebola = document.querySelector(".pokebola")

const pulo = () => {
    pikachu.classList.add("pulo-pikachu")

    setTimeout(() => {
        pikachu.classList.remove("pulo-pikachu")
    }, 500);
}

const loop = setInterval(() => {
    const pokebolaPosition = pokebola.offsetLeft
    const pikachuPosition = Number(window.getComputedStyle(pikachu).bottom.replace('px', ''))

    if(pokebolaPosition <= 120 && pikachuPosition < 80 && pokebolaPosition > 50) {
        pokebola.style.animation = "none"
        pokebola.style.left = `${pokebolaPosition}px`

        pikachu.style.animation = "none"
        pikachu.style.bottom = `${pikachuPosition}px`
        pikachu.src = "./src/images/game-over.png"
        pikachu.style.width = "150px"
    }
}, 10)

document.addEventListener("keydown", pulo)