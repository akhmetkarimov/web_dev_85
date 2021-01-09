function toggleModal(action) {
    let modal = document.querySelector('.modal_window')
    if (action === 'open') {
        // modal.style.display = 'flex'
        // modal.style.width = '100%'
        // modal.style.opacity = '1'
        modal.classList.add('active')
    } else {
        // modal.style.display = 'none'
        // modal.style.width = '0'
        // modal.style.opacity = '0'
        modal.classList.remove('active')
    }
}