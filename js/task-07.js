const refs = {
    controlFont :document.querySelector( '#font-size-control' ),
    textSpan :document.querySelector( '#text' )
}


refs.controlFont.addEventListener( 'input', onControlInput )

function onControlInput () {

    let cheng = refs.controlFont.value
    refs.textSpan.style = `font-size: ${ cheng }px`
}

   


    
