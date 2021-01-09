window.addEventListener('scroll', function(){
    let header = document.querySelector('.header')
    let div = document.querySelector('.text')
    if (this.scrollY > 40) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }

    if (this.scrollY > 40) {
        div.classList.add('active')
    } 
})
