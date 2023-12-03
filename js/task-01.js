
const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${categories.children.length}`);

items.forEach(item => {
    
    console.log(`Category; ${item.children[0].innerText}`);
    console.log(`Elements: ${item.children[1].childElementCount}`);

});
