// Lógica para el evento de Enter
document.getElementById("textBox").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        alert("Texto cargado: " + this.value);
    }
});

// Lógica para cambiar el color de la caja de texto
let colorIndex = 0;
const colors = [
    { background: "white", color: "black" },
    { background: "black", color: "white" },
    { background: "lightblue", color: "red" }
];

document.getElementById("colorButton").addEventListener("click", function() {
    colorIndex = (colorIndex + 1) % colors.length;
    const textBox = document.getElementById("textBox");
    textBox.style.backgroundColor = colors[colorIndex].background;
    textBox.style.color = colors[colorIndex].color;
});
