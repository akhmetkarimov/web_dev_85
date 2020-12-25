const content = [
    {
        id: 1,
        tabTitle: 'about us',
        tabContent: 'About us content'
    },

    {
        id: 2,
        tabTitle: 'why choose us',
        tabContent: 'Why choose us content'
    },
    {
        id: 3,
        tabTitle: 'Our misson',
        tabContent: 'our mission content'
    }
]

let buttons = ''

for(let item of content) {
    buttons += `<button class = "tab-btn"> ${item.tabTitle} </button>`
}

document.querySelector('.tab-navs').innerHTML = buttons

let contentDiv = document.querySelector('.tab-content')

let tabBtns = document.querySelectorAll('.tab-btn')


for(let i = 0; i < tabBtns.length; i++){
    tabBtns[i].addEventListener('click', function(){
        contentDiv.innerHTML = content[i].tabContent
    })
}