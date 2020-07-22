const btns = document.querySelectorAll(".btn");
const counter = document.getElementById("value")

let count = 0;
btns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
        const styles = event.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        counter.textContent = count;

        if (count < 0) {
            counter.style.color = "red"
        }
        if (count > 0) {
            counter.style.color = "green"
        }
        if (count === 0) {
            counter.style.color = "black"
        }
    })
})

