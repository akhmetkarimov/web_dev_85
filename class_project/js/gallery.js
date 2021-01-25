const gallery = [
    {
        galleryCategory: 'ARCHITECTURE',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },

    {
        galleryCategory: 'ARCHITECTURE',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },

    {
        galleryCategory: 'ARCHITECTURE',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },

    {
        galleryCategory: 'INTERIOR DESIGN',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },

    {
        galleryCategory: 'INTERIOR DESIGN',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },
    {
        galleryCategory: 'HOUSE RENOVATION',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },
    {
        galleryCategory: 'HOUSE RENOVATION',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },

    {
        galleryCategory: 'HOUSE RENOVATION',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },

    {
        galleryCategory: 'HOUSE RENOVATION',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },

    {
        galleryCategory: 'HOUSE RENOVATION',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },

    {
        galleryCategory: 'HOUSE RENOVATION',
        galleryImg: 'images/widgets/pro.jpg',
        galleryInnerTitle: 'THE NOOK HOUSE',
        galleryInnerSubTitle: 'ARCHITECTURE'
    },

]

let temp = []

for (const item of gallery) {
    temp.push(item.galleryCategory)
}

let categories = temp.filter(function(item, pos) {
    return temp.indexOf(item) == pos;
})

let categoryOutput = `<a href='#' class='gallery-btn' onclick='showItems(event, "ALL")'>ALL</a>`
for (const category of categories) {
    categoryOutput += `<a href='#' class='gallery-btn' onclick='showItems(event, "${category}")'>${category}</a>`
}

$('.gallery-navs').html(categoryOutput)


function showItems(e, field) {
    e.preventDefault()
    let output = ''
    for(const item of gallery) {
        if (field == item.galleryCategory) {
            output += `
            <div class="tab_item fade">
                <img src="${item.galleryImg}" alt="portfolio">
                <div class="tab_inner">
                    <h3>${item.galleryInnerTitle}</h3>
                    <div></div>
                    <p>${item.galleryInnerSubTitle}</p>
                    <i class="fas fa-search"></i>
                </div>
            </div>`
        }
        if (field === 'ALL') {
            output += `
            <div class="tab_item fade">
                <img src="${item.galleryImg}" alt="portfolio">
                <div class="tab_inner">
                    <h3>${item.galleryInnerTitle}</h3>
                    <div></div>
                    <p>${item.galleryInnerSubTitle}</p>
                    <i class="fas fa-search"></i>
                </div>
            </div>`
        }
    }
    $('.gallery-content').html(output)

} 