const form = document.getElementById('credentials');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    } else {
        let newUser = {
            email: email.value,
            password: password.value
        }
        console.log(newUser);
        form.reset();
    }

}
