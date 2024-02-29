// Burger

const hamburger = document.querySelector(".burger-icon");
const navMenu = document.querySelector(".burger-links");

hamburger.addEventListener("click", () => {
    /* hamburger.classList.toggle("active"); */
    navMenu.classList.toggle("active");
})

document.querySelectorAll("burger-item").forEach(n => n.
    addEventListener("click", () => {
       /*  hamburger.classList.remove("active"); */
        navMenu.classList.remove("active");

}))