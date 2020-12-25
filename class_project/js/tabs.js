const content = [
    {
        id: 1,
        tabTitle: 'about us',
        tabContent: 'Archtera offers the widest and best in class range in furniture, home furnishings & decor, modular kitchens, home improvement and more. We promise to facilitate our customers with a unique and personalized shopping experience.'
    },

    {
        id: 2,
        tabTitle: 'why choose us',
        tabContent: 'As a team of architects and designers, we are uniquely qualified to translate your property vision into visuals that will transport homebuyers and investors alike.'
    },
    {
        id: 3,
        tabTitle: 'Our misson',
        tabContent: 'To form a team dedicated to providing exceptional customer service. We will provide a professional approach to constructing exceptional quality projects which meet budget and schedule goals.'
    }
]

let buttons = ''

for(let item of content) {
    buttons += `<button class = "tab-btn"> ${item.tabTitle} </button>`
}

document.querySelector('.tab_navs').innerHTML = buttons

let contentDiv = document.querySelector('.tab_content')

let tabBtns = document.querySelectorAll('.tab-btn')

tabBtns[0].classList.add('active')

for(let i = 0; i < tabBtns.length; i++){
    tabBtns[i].addEventListener('click', function(){
        removeActive()
        contentDiv.innerHTML = content[i].tabContent
        tabBtns[i].classList.add('active')
    })
}

function removeActive(){
    for (let btn of tabBtns) {
        btn.classList.remove('active')
    }
}