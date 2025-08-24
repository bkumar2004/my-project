const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");

let drawing = false;

// Start drawing
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

// Drawing in motion
canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 2;
  ctx.stroke();
});

// Stop drawing
canvas.addEventListener("mouseup", () => {
  drawing = false;
  ctx.closePath();
});

// Stop drawing if mouse leaves the canvas
canvas.addEventListener("mouseleave", () => {
  drawing = false;
  ctx.closePath();
});
