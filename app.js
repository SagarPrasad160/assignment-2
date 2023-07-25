const minEL = document.querySelector(".min");
const maxEl = document.querySelector(".max");
const drawBtn = document.querySelector(".draw");
const fillEl = document.querySelector(".fill");
const canvas = document.querySelector(".canvas");

const ctx = canvas.getContext("2d");

drawBtn.addEventListener("click", () => {
  if (!minEL.value || !maxEl.value || maxEl.value - minEL.value < 0) {
    alert("Please enter min and max correctly");
    return;
  }

  // Level 1 - Filling the bar
  const fillPercentage = Math.floor((minEL.value / maxEl.value) * 100);
  fillEl.style.height = `${fillPercentage}%`;

  // Level 2 - Drawing the circle
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before drawing

  const circleFill = (Math.PI * 2 * fillPercentage) / 100;

  // draw the outer circle
  ctx.beginPath();
  ctx.fillStyle = "#c2e3ff";
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2);
  ctx.fill();

  //filled portion
  ctx.beginPath();
  ctx.fillStyle = "#008cff";
  ctx.moveTo(canvas.width / 2, canvas.height / 2);
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, circleFill);
  ctx.closePath();
  ctx.fill();
});
