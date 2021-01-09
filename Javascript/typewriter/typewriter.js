const words = ['HTML', 'JavaScript', 'CSS', 'PHP', 'MySQL']
const colors = ['orange', 'yellow', 'blue', 'purple', 'indigo']
let wordTurn = 0
let charTurn = 0

let outputSpan = document.querySelector('#output')

printWord()

function printWord(){
    if (words[wordTurn].length > charTurn){
        outputSpan.innerText += words[wordTurn].charAt(charTurn)
        outputSpan.style.color = colors[wordTurn]
        charTurn += 1
        setTimeout(printWord, 150)        
    } else {
        setTimeout(deleteWord, 100)
    }
}

function deleteWord() {
    if (charTurn >= 0){
        const outputString = words[wordTurn].substring(0, charTurn)
        outputSpan.innerText = outputString
        charTurn -= 1
        setTimeout(deleteWord, 100)
    } else {
        wordTurn += 1
        if (wordTurn >= words.length) {
            wordTurn = 0
        }
        setTimeout(printWord, 150) 
    }
}


// let str = 'Hello,test,qwe'

// console.log(str.length)
// console.log(str.indexOf('e'))
// console.log(str.charAt(1))
// console.log(str.substr(0,3)) 
// console.log(str.substring(0,3))
// console.log(str.split('t',1))
