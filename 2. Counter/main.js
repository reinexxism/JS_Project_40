const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const showNumber = document.getElementById("showNumber");
let count = 0;

function numberUp() {
  count++;
  showNumber.textContent = count;
}

function numberDown() {
  count--;
  showNumber.textContent = count;
}

function backToZero() {
  showNumber.innerText = 0;
}

increaseBtn.addEventListener("click", numberUp);
decreaseBtn.addEventListener("click", numberDown);
resetBtn.addEventListener("click", backToZero);
