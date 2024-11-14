const red = document.querySelector(".red")
const yellow = document.querySelector(".yellow")
const green = document.querySelector(".green")

const colorTrafficChange = (color) => {
    red.classList.remove("active")
    yellow.classList.remove("active")
    green.classList.remove("active")

    switch (color.toLowerCase().trim()) {
        case "красный":
            red.classList.add("active")
            alert("stop")
            break;
        case "желтый":
            yellow.classList.add("active")
            alert("wait")
            break;
        case  "зеленный":
            green.classList.add("active")
            alert("go")
            break;
        default:
            alert("из трех светов выбери выпендрежник")
            break;
    }
}
const writeColor = prompt("Ввидите цвет : красный , желтый , зеленный")
colorTrafficChange(writeColor)