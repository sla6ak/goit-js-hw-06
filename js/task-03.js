const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryUl = document.querySelector( '.js-gallery' )

// создадим верстку страницы в массиве
const galleryLi = []

// переберем все элементы которые необходимо создать
images.forEach(  elem => {
  
  // создаем лишки
  let photoLi = document.createElement( 'li' )
  photoLi.classList.add( 'li-photo' )

  // создаем элементы изображений
  let photo = document.createElement( 'img' )
  photo.src = elem.url
  photo.alt = elem.alt
  photo.height = '400'
  photo.width = '600'

  // привязываем изображения в лишки внутри цикла
  photoLi.appendChild( photo )
  
  // добавляем каждую ли в массив
  galleryLi.push( photoLi )
  
} ) 

// прикрепляем получившуюся верстку к html документу
galleryUl.append(...galleryLi)

console.log(galleryLi)