for(let i = 1; i <= 5; i++) {

    for(let k = 5; k >= i; k--) {
        document.write('&nbsp&nbsp')
    }

    for(let j = 1; j <= 2 * i - 1; j++) {
        document.write('*')
    }

    document.write('<br>')

}

for(let i = 1; i <= 5; i++) {

    for(let k = 5; k >= i; k--) {
        document.write('&nbsp&nbsp')
    }

    for(let j = 1; j <= 2 * i - 1; j++) {
        document.write('*')
    }

    document.write('<br>')

}

for(let i = 0; i < 6; i++){
    for(let j = 0; j < 9; j++){
        document.write(`${i}`)
    }
    document.write('<br>')
}


let productDigits = 1

for (let i = 5804673; i > 0; i = Math.floor(i / 10)) {
    if(i % 10 != 0){
        productDigits *= i % 10
    }
}

console.log(productDigits)