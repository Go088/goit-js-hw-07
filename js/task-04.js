
const form = document.querySelector('.login-form');

const userLogin = {};

form.addEventListener('submit', (event) => {
    event.preventDefault();
   
    const data = new FormData(event.target);

    data.forEach((value, key) => {
        if (value === "") { alert('All form fields must be filled in'); return; }
        else { userLogin[key] = value.trim(); }
    })

    console.log(userLogin);
    form.reset();
});
