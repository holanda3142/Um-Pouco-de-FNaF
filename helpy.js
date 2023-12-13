const helpy = document.querySelector(".helpy")
const menu = document.querySelector("nav")
let menuAberto = false

helpy.addEventListener("click", abrirMenu)

function abrirMenu () {
    if (menuAberto) {
        menu.style.display = "none"
        menuAberto = false
    } else {
    menu.style.display = "inline-block"
    // menu.style.backgroundColor = "black"
    menu.style.height = "50px"
    menu.style.left = "0"
    menu.style.top = "0"
    menu.style.position = "absolute"
    menu.style.marginLeft = "100px"
    menuAberto = true
    }
}