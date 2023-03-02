// Dom 요소를 javascript 변수에 가져오기
const button = document.querySelector(".selectBtn");
const showCurrentColor = document.getElementById("showCurrentColor");
const currentColor = document.querySelector(".currentColor");

button.addEventListener("click", () => {
  const num1 = parseInt(Math.random() * 255 + 1);
  const num2 = parseInt(Math.random() * 255 + 1);
  const num3 = parseInt(Math.random() * 255 + 1);
  document.body.style.backgroundColor =
    "rgb(" + num1 + "," + num2 + "," + num3 + ")";
  console.log(`(${num1}, ${num2}, ${num3})`);
  showCurrentColor.innerText = `(${num1}, ${num2}, ${num3})`;
  currentColor.style.color = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
});
