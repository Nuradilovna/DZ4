const bigBlog = document.querySelector(".wrapper")
const positionChild = document.querySelector(".cordinat")

bigBlog.addEventListener('mousemove', (event) => {
    const x = event.offsetX
    const y = event.offsetY
    positionChild.textContent = `x: ${x} , y: ${y}`
})