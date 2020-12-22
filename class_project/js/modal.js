let modal = document.querySelector('.modal_window')
let nav_modal = document.querySelector('.nav_window')
let loader_modal = document.querySelector('.loader_window')

function toggleModal(action) {
    if (action === 'open') {
        modal.classList.add('active')
    } else {
        modal.classList.remove('active')
    }
}

function toggleModalNav(action) {
    if (action === 'open') {
        nav_modal.classList.add('active')
    } else {
        nav_modal.classList.remove('active')
    }
}

window.onclick = function(e) {
    if (e.target === modal) {
        modal.classList.remove('active')
    }
    if (e.target === nav_modal) {
        nav_modal.classList.remove('active')
    }
}

let isLoading = true
function setLoader() {
    if (isLoading === true) {
        loader_modal.classList.remove('active')
    }
}

setTimeout(setLoader, 3000)