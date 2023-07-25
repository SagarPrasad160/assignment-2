const minEL = document.querySelector(".min");
const maxEl = document.querySelector(".max");
const drawBtn = document.querySelector(".draw");
const fillEl = document.querySelector(".fill");

drawBtn.addEventListener("click", () => {
  if (!minEL.value || !maxEl.value || maxEl.value - minEL.value < 0) {
    alert("Please enter min and max correctly");
  }
  const fillPercentage = Math.floor((minEL.value / maxEl.value) * 100);
  console.log(fillPercentage);
  fillEl.style.height = `${fillPercentage}%`;
});
