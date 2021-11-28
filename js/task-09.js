function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// так как кнопка одна давайте получим ее в переменную

const refs = {
  btn: document.querySelector( '.change-color' ),
  body: document.querySelector( "[data-color='cheng']" ),
  textColor:document.querySelector( '.color' )
}

// добавляем слушателя кнопке
refs.btn.addEventListener( 'click', onColorClick )

// создадим функцию для кнопки
function onColorClick ( e ) {
  refs.body.style.backgroundColor = getRandomHexColor()
  refs.textColor.textContent = getRandomHexColor()
}