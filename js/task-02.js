const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.getElementById('ingredients');
ingredients.forEach(ingredient => {
  let li = document.createElement('li');
  li.classList.add('item');
  li.appendChild(document.createTextNode(ingredient));
  ul.appendChild(li);
})


