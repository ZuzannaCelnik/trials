const sizeControl = document.getElementById('font-size-control');
const text = document.getElementById('text');

sizeControl.addEventListener("change", () => {
    text.style.fontSize = String(sizeControl.value) + 'px';
});