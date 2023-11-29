
const countItem = document.querySelectorAll('.item');
console.log(`Number of categories: ${countItem.length}`);

const titles = document.querySelectorAll('h2');
const lists = document.querySelectorAll('ul');

for (const title of titles) { console.log(`Category: ${title.textContent}`) };

for (const list of lists) {if (list != categories) console.log(`Elements: ${list.childElementCount}`) };
