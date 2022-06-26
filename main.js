const svgImg = document.querySelector('.svg')
const darkMode = document.querySelector('#dark-mode')
const sun = document.querySelector(".image-sun")
const moon = document.querySelector(".image-moon")


// Toggle svg sun/moon
svgImg.onclick = function () {
    if (sun.classList.contains("hide")) {
        sun.classList.remove("hide");
        moon.classList.add("hide")
        document.body.classList.add("dark")
    } else if (moon.classList.contains("hide")) {
        moon.classList.remove("hide")
        sun.classList.add("hide")
        document.body.classList.remove("dark")
    } else {
        return;
    }
}
// Store the mode on local storage

