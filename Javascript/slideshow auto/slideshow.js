const bgs = [
    'https://wow.zamimg.com/uploads/blog/images/20516-afterlives-ardenweald-4k-desktop-wallpapers.jpg', 
    'https://i.pinimg.com/originals/82/ee/2b/82ee2b072f4537f3e91684dff0f91911.jpg', 
    'https://sf-applications.s3.amazonaws.com/Bear/wallpapers/05/july-2020-wallpaper_desktop-3840x1600.png',
    'https://static3.srcdn.com/wordpress/wp-content/uploads/2020/10/Among-Us-Desktop-Wallpaper-Backgrounds-Neon-Logo.jpg?q=50&fit=crop&w=740&h=370'
]

let slideContainer = document.querySelector('.slide-container')

let slideIndex = 1

slideShow(slideIndex)

function slideShow() { 

    if (slideIndex > bgs.length) {
        slideIndex = 1
    }

    if (slideIndex <= 0) {
        slideIndex = bgs.length
    }

    slideContainer.style.cssText = `background-image: url(${bgs[slideIndex-1]})`
    // slideContainer.classList.add('fade-slide')
    slideIndex++
    // setTimeout(function(){
    //     slideContainer.classList.remove('fade-slide')
    // }, 800)
   

}

setInterval(slideShow, 3000)