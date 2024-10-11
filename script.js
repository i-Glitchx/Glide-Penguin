

// Move Penguin with Arrow Keys
let penguin = document.getElementById("penguin");
let posX = 0;
let posY = 0;

document.addEventListener("keydown", function(event) {
  if (event.code === "ArrowRight") posX += 10;
  if (event.code === "ArrowLeft") posX -= 10;
  if (event.code === "ArrowUp") posY -= 10;
  if (event.code === "ArrowDown") posY += 10;
  penguin.style.transform = `translate(${posX}px, ${posY}px)`;
});








