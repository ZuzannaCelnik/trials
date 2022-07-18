const ul = document.getElementById('categories');
const categories = ul.getElementsByClassName('item');
console.log('Number of categories: ' + categories.length);
for (let i = 0; i < categories.length; i++) {
    console.log('Category: ' + categories[i].querySelectorAll('h2')[0].innerText);
    console.log('Elements: ' + categories[i].querySelectorAll('li').length);
}