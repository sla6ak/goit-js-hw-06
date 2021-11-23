const enter = document.querySelector( '#name-input' )
const exit = document.querySelector( '#name-output' )


enter.addEventListener( 'input',  onNameInput)

function onNameInput () {
    
    if ( enter.value === "" ) {
    exit.textContent = "Anonimus"
    }
    else {
    exit.textContent = enter.value;
    }
    
}
