const bgs = [
    'https://wow.zamimg.com/uploads/blog/images/20516-afterlives-ardenweald-4k-desktop-wallpapers.jpg', 
    'https://i.pinimg.com/originals/82/ee/2b/82ee2b072f4537f3e91684dff0f91911.jpg', 
    'https://sf-applications.s3.amazonaws.com/Bear/wallpapers/05/july-2020-wallpaper_desktop-3840x1600.png'
]

let slideContainer = document.querySelector('.slide-container')


let slideIndex = 1

slideShow(slideIndex)

function nextSlide(n) {
    slideIndex += n
    slideShow(slideIndex)
}


function slideShow(index) { 
    console.log(slideIndex)

    if (index > bgs.length) {
        index = 1
        slideIndex = 1
    }

    if (index <= 0) {
        index = bgs.length
        slideIndex = bgs.length
    }

    slideContainer.style.cssText = `background-image: url(${bgs[index-1]})`
}