const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color");

document.addEventListener("click", function () {
    let selectedColor = colors[randomGenerator()]
    document.body.style.backgroundColor = selectedColor;
    color.textContent = selectedColor;
})

function randomGenerator() {
    return Math.floor(Math.random() * colors.length);
}