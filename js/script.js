const bodyitems = document.querySelectorAll('.body-item-wrapper')

bodyitems.forEach(bodyitem => {
    bodyitem.addEventListener('mouseover', () =>{
        bodyitem.childNodes[1].classList.add('img-darken')
    })

    bodyitem.addEventListener('mouseout', () =>{
        bodyitem.childNodes[1].classList.remove('img-darken')
    })
})