document.querySelector('.h2JS').innerText = 'Change JS'
document.querySelector('.h2JS').style.color = 'orange'

$('.h2JQ').text('Change JQ').css('color', 'red')

let listP = document.querySelectorAll('.pJS')

for (let item of listP) {
    item.innerText = 'Change P JS'
    item.style.cssText = 'background: gray; color: yellow;'
    item.addEventListener('click', function(){
        this.style.color = 'red'
    })
}

$('.pJQ').text('Change P JQ').css({
    'background': 'lightblue',
    'color': 'red'
}).click(function(){
    $(this).css('color', 'blue')
})


$('.showBtn').click(function(){
    $('.content').show(1000)
})

$('.hideBtn').click(function(){
    $('.content').hide(500)
})

$('.toggleBtn').click(function(){
    $('.content').toggle(300)
})


// document.querySelector('.hideBtn').addEventListener('click', function(){
//     document.querySelector('.content').style.display = 'none'
// })

// document.querySelector('.showBtn').addEventListener('click', function(){
//     document.querySelector('.content').style.display = 'block'
// })