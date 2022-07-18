const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener(
    'change',
    function() { handleChange(this.id); },
    false
);

function handleChange(){
    if(nameInput.value){
        nameOutput.textContent = nameInput.value;
    }
    if(!nameInput.value){
        nameOutput.textContent = 'Anonymous';
    }
}