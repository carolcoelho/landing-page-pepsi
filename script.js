//menu resposivo

let show = true;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show;
})

//thumb

function imgSlider(anything) {
    document.querySelector('.pepsi').src = anything;
}

function changeBgColor(color) {
    const sec = document.querySelector('.sec');
    sec.style.background = color;
}