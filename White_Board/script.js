const canvas = document.getElementById('whiteboard');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const lineWidth = document.getElementById('lineWidth');
const clearBtn = document.getElementById('clearBtn');
const undoBtn = document.getElementById('undoBtn');

let isDrawing = false;
let lastX, lastY;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    drawLine(lastX, lastY, e.offsetX, e.offsetY);
    lastX = e.offsetX;
    lastY = e.offsetY;
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

function drawLine(startX, startY, endX, endY) {
  ctx.beginPath();
  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = lineWidth.value;
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// (Optional) Implement undo functionality using an array to store drawing data

// Feel free to expand on this code to implement real-time collaboration, additional drawing tools, and more features!
