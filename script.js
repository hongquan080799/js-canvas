const canvasEnvelope = document.getElementById("canvasEnvelope");
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ctxEnvelope = canvasEnvelope.getContext("2d");

function resizeCanvas() {
  const maxSize = Math.max(window.innerWidth, window.innerHeight);
  // Use the smaller dimension as the max size for mobile
  canvas.width = canvas.height = maxSize * 0.8;
  canvasEnvelope.width = canvasEnvelope.height = maxSize * 0.8;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let heartSize = 1;
let grow = true;

function drawHeart(x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size, size);
  // ... rest of the heart drawing code ...
  ctx.restore();
}

function drawText() {
  const fontSize = Math.min(canvas.width, canvas.height) * 0.05; // Adjust font size based on smaller dimension
  ctx.font = `${fontSize}px Arial`;
  // ... rest of the text drawing code ...
}

function drawLines() {
  // ... rest of the lines drawing code ...
}

function animate() {
  ctx.clearRect(0, canvas.height - canvas.height * 0.4, canvas.width, canvas.height);
  drawHeart(canvas.width / 2, canvas.height - canvas.height * 0.3, heartSize);
  drawText();
  // drawLines();

  if (grow) {
    heartSize += 0.02;
    if (heartSize >= 1.2) {
      grow = false;
    }
  } else {
    heartSize -= 0.02;
    if (heartSize <= 1) {
      grow = true;
    }
  }

  requestAnimationFrame(animate);
}

function drawEnvelope() {
  // ... rest of the envelope drawing code ...
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  // ... rest of the text wrapping code ...
}

let index = 0;
const text = `...`; // Your message here
const textX = canvas.width / 2;
const textY = canvas.height / 2;

function drawTextAnimate() {
  // ... rest of the text animation code ...
}

function drawImage() {
  const img = new Image();
  img.src = "./images/couple.jpg";
  img.onload = () => {
    const desiredWidth = Math.min(canvas.width, canvas.height) * 0.3; // Adjust image size based on smaller dimension
    const aspectRatio = img.height / img.width;
    const calculatedHeight = desiredWidth * aspectRatio;
    ctx.drawImage(img, canvas.width / 2 - desiredWidth / 2, canvas.height * 0.2, desiredWidth, calculatedHeight);
  };
}

function playAudio() {
  const audio = new Audio("./musics/henmotmai.mp3");
  audio.play();
}

drawEnvelope();

document
  .getElementById("canvasEnvelope")
  .addEventListener("click", function () {
    playAudio();
    this.style.display = "none";
    canvas.style.display = "block";
    animate();
    drawTextAnimate();
    drawImage();
  });

// Additional considerations for mobile:

// * Consider using a smaller font size overall for better readability.
// * Adjust the positioning of elements to ensure they fit well on smaller screens.
// * You might want to simplify the animation for performance reasons.
// * Test the animation on different mobile devices to ensure a smooth experience.
