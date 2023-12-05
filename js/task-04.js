
const form = document.querySelector('.login-form');

const userLogin = {};

form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const data = new FormData(event.target);

    data.forEach((value, key) => {
        value != "" ? userLogin[key] = value.trim() : alert('All form fields must be filled in');
    })

    console.log(userLogin);
    form.reset();
});
