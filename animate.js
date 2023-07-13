let container = document.createElement("div");
container.setAttribute("id", "container")
document.body.appendChild(container);
for(let i = 0; i < 300; i++){
    container.innerHTML += "<div class='circle-container'><div class='circle'></div></div>";
}