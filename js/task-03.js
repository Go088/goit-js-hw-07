
const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const getUserName = () => {
    const inputValue = input.value.trim();
    inputValue === "" ? span.textContent = "Anonymous" : span.textContent = inputValue;
};

input.addEventListener('input', getUserName);
