// while, for, do while

// while(condition) {
//    body
// }

// if(condition) {
//    body
// }

let i = 0
let sum = 0


while (i <= 10) {
    if (i % 2 == 0) {
        // sum = sum + i
        sum += i
    }


    // i = i + 1
    i += 1
}

console.log(sum)


let username = prompt('Enter username')

while (username != 'admin') {
    username = prompt('Enter valid username')
}

console.log('Welcome Admin!!!')
