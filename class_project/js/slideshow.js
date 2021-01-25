const reviews = [
    {
        authorImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        reviewContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni delectus, nostrum cupiditate eius quam laudantium sapiente, tempore veritatis provident, beatae similique vitae. Ullam maiores rem autem enim doloremque qui nisi.',
        authorName: 'John Morison',
        authorCity: 'New York'
    },
    {
        authorImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        reviewContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni delectus, nostrum cupiditate eius quam laudantium sapiente, tempore veritatis provident, beatae similique vitae. Ullam maiores rem autem enim doloremque qui nisi.',
        authorName: 'John Morison 2',
        authorCity: 'New York'
    },
    {
        authorImg: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        reviewContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni delectus, nostrum cupiditate eius quam laudantium sapiente, tempore veritatis provident, beatae similique vitae. Ullam maiores rem autem enim doloremque qui nisi.',
        authorName: 'John Morison 3',
        authorCity: 'New York'
    },
]

let slideContainer = document.querySelector('.review_item')


let slideIndex = 1

slideShow(slideIndex)

function nextSlide(n) {
    slideIndex += n
    slideShow(slideIndex)
}


function slideShow(index) { 
    console.log(slideIndex)

    if (index > reviews.length) {
        index = 1
        slideIndex = 1
    }

    if (index <= 0) {
        index = reviews.length
        slideIndex = reviews.length
    }

    let output = `
        <img src="${reviews[index-1].authorImg}" alt="review" class="review-fade">
        <p class="review-fade">${reviews[index-1].reviewContent}</p>
        <h4 class="review-fade">${reviews[index-1].authorName}</h4>
        <h5 class="review-fade">${reviews[index-1].authorCity}</h5>
    `


    slideContainer.innerHTML = output
}