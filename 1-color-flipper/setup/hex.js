const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color");

document.addEventListener("click", function () {
    selectedColor = "#";
    for (let i = 0; i < 6; i++) {
        selectedColor += hex[randomGenerator()];
    }
    document.body.style.backgroundColor = selectedColor;
    color.textContent = selectedColor;
})

function randomGenerator() {
    return Math.floor(Math.random() * hex.length);
}