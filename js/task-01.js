const perentsLength = document.querySelector( '#categories' ).children.length;
console.log( 'Number of categories:', perentsLength )

const titleContent = document.querySelectorAll( '.item' )
    .forEach( ( elem, index, arr ) =>
        console.log('Category:', elem.firstElementChild.textContent,'Elements:', elem.lastElementChild.children.length ) );


// let titleContent = document.querySelectorAll( '.item' ).forEach((elem, index, arr)=>console.log(elem.firstElementChild.textContent, elem.querySelector( 'ul' ).children.length));
