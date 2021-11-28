// обработка формы

// 1) получим нашу форму в переменную
const formEl = document.querySelector( '.login-form' )

// 2) настроим прослушивание формы на событие отправки
formEl.addEventListener( 'submit', onBtnSabmit )

// 3) напишем функцию которая выполнится при отправке формы на сервер
function onBtnSabmit ( e ) {
    
    // предотвратим перезагрузку страницы
    e.preventDefault();

    // подготовим объект куда выведем значения формы
    const objForm = {};

    // получим псевдо объект из нашей формы
    const formData = new FormData( e.currentTarget )
    
    // используем свойство форм даты для извлечения данный формы
    formData.forEach( ( value, name ) => {
        objForm[name] = value 
    })
    console.log( objForm )
    // очистим не форму а именно данные отправки события 
    // так как доступ к форме может быть из другого файла
    e.currentTarget.reset()
}

// **********************************************************************