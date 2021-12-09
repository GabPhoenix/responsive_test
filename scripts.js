// Menu (Responsivo)

let show = true;

const menuSection = document.querySelector('.menu__section')
const menuToggle = menuSection.querySelector('.menu__toggle')

menuToggle.addEventListener("click", () =>{

    // Roll off when menu is open
    document.body.style.overflow = show ? "hidden" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;
})