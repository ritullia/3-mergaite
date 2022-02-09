let img = document.getElementById("girl")

img.addEventListener("mouseenter", mouseEnter);
img.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
    document.getElementById("girl").style.height = "300px"
    document.getElementById("girl").style.width = "300px"
}
function mouseLeave() {
    document.getElementById("girl").style.height = "150px"
    document.getElementById("girl").style.width = "150px"
}