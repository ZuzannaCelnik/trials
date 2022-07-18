const valueElement = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
let counterValue = 0;

decrementButton.onclick = function() {
    counterValue--;
    valueElement.textContent = String(counterValue);
};
incrementButton.onclick = function() {
    counterValue++;
    valueElement.textContent = String(counterValue);
}