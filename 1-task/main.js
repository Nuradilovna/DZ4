
const btnPlus = document.querySelector(".increment")
const btnMinus = document.querySelector(".decrement")
const numberResults = document.querySelector(".number")

let number = 0
btnPlus.onclick = () => {
    number++
    numberResults.innerHTML = number
    numberResults.style.color = "green"
}
btnMinus.onclick = () => {
    if (number > 0) {
        number--
        numberResults.innerHTML = number
        numberResults.style.color = "red"
    }
}
numberResults.innerHTML = number