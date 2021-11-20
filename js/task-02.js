const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector( '#ingredients' )

let elementsListIngredients = [];

// for ( let i = 0; i < ingredients.length; i += 1 ){
//   let element = document.createElement( 'li' )
//   element.classList.add( 'item' )
//   element.textContent = ingredients[ i ]
//   elementsListIngredients.push(element)
// }

let elementList
ingredients.forEach(elem => {
  elementList = document.createElement( 'li' );
  elementList.classList.add( 'item' );
  elementList.textContent = elem;
  elementsListIngredients.push( elementList );
  })

listIngredients.append(...elementsListIngredients)

