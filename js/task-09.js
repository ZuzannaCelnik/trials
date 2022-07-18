const colorButton = document.getElementById('change-color-button');
const colorName = document.getElementById('color-name');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
colorButton.onclick = function() {
  let color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorName.textContent = color;
};