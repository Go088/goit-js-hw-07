
const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    if (!email.value || !password.value) {
        alert('All form fields must be filled in'); return;
    }
    const userLogin = {
        email: email.value,
        password: password.value
    };
    console.log(userLogin);
    form.reset();
});
