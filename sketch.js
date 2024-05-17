function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(145,18,10);
  textSize(40); 
  fill(color(100, 200, 400)); // 
  text("Formadores", 100, 190);
}

function changeFontSize() {
  var texto = document.getElementById("texto");
  texto.style.fontSize = "100px";
}