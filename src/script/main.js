const pikachu = document.querySelector(".pikachu")
const arvore = document.querySelector(".arvore")

const pulo = () => {
    pikachu.classList.add("pulo-pikachu")

    setTimeout(() => {
        pikachu.classList.remove("pulo-pikachu")
    }, 500);
}

const loop = setInterval(() => {
    const arvorePosition = arvore.offsetLeft
    const pikachuPosition = Number(window.getComputedStyle(pikachu).bottom.replace('px', ''))

    if(arvorePosition <= 120 && pikachuPosition < 80 && arvorePosition < 40) {
        arvore.style.animation = "none"
        arvore.style.left = `${arvorePosition}px`
    }
}, 10)

document.addEventListener("keydown", pulo)