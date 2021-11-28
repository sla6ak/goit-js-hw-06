
function getRandomHexColor () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// 1) в задании явно намекают чтоб мы прослушивали потомков контроля повесив id=controls

const refs = {
  controlsBox: document.querySelector("#controls"),
  box: document.querySelector("#boxes")
}

// 2)назначим слушателей на кнопки

refs.controlsBox.addEventListener( 'click', onBtnClick )

// эта функция проверяет по каким элементам было событие клика
function onBtnClick ( e ) {
  // проверим был ли клик по кнопкам или мимо
  if ( e.target.nodeName !== 'BUTTON' ) {
    return
  }
  // создадим в переменную число желаемых дивов
  let numberInput = refs.controlsBox.firstElementChild.value

  if ( e.target.textContent == "Create" ) {
    // передаем в функцию число дивов
    createBoxes(numberInput)
  }

  else if ( e.target.textContent == "Destroy" ) {
    destroyBoxes(numberInput)
  }

   else if ( e.target.textContent == "Destroy-All" ) {
    destroyAllBoxes()
  }
}


// функция создания дивов
function createBoxes( amount ){
  // console.log( amount )

  // создадим массив дивов которые встроем в html
  let elementsAdd = [];
  let currentDiv = 30
  if ( refs.box.lastChild ) {
    currentDiv = parseInt( refs.box.lastChild.style.width )+10
    // console.log(parseInt(refs.box.lastChild.style.width))
  }
  
  console.log(refs.box.lastChild)
  for ( let n = 0; n < amount; n += 1 ){
    let element = document.createElement( 'div' )
    element.style.width = `${currentDiv}px`
    element.style.height = `${currentDiv}px`
    element.style.backgroundColor = getRandomHexColor()
    elementsAdd.push( element );
    currentDiv += 10
  }
    // распылим все созданые элементы в нужное место
  refs.box.append(...elementsAdd)
}

// функция удаления дивов по введенному количеству штук
// понятно что это неоптимизированно много раз обратиться к dom
// но вариант удалить общий див с дивами одним махом мение гибок
// я попробую его реализовать, проблемма в том что тогда сложно добавлять 
// новые дивы нужного размера так как функция снова будет создавать общий див для вложеных
// возможно это реализуемо добавив проверку есть ли уже родительский бокс
function destroyBoxes ( amount ) {
  for ( let d = 0; d < amount; d += 1 ){
      refs.box.lastChild.remove()
    }
}

function destroyAllBoxes () {
  let namberDivs = refs.box.children.length 
  for ( let del = 0; del < namberDivs; del += 1 ){
    refs.box.lastElementChild.remove()
  } 
}
