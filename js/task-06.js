function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', (event) => {
  if (input.value >= 1 && input.value <= 100)
  createBoxes(input.value);
  input.value = '';
});

function createBoxes(amount) {
  boxes.innerHTML ='';
  for (let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    let size = 30 + i * 10;

    div.style.width = size + 'px';
    div.style.height = size + 'px';
    div.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(div);
  } 
};
 
destroyBtn.addEventListener('click', (event) => {
  destroyBoxes();
});
function destroyBoxes() {
  boxes.innerHTML = '';
};


