// while, for, do while

// while(condition) {
//    body
// }

// if(condition) {
//    body
// }

// let i = 0
// let sum = 0


// while (i <= 10) {
//     if (i % 2 == 0) {
//         // sum = sum + i
//         sum += i
//     }


//     // i = i + 1
//     i += 1
// }

// console.log(sum)


// let username = prompt('Enter username')

// while (username != 'admin') {
//     username = prompt('Enter valid username')
// }

// console.log('Welcome Admin!!!')


// let start = -50
// let end = 35
// let step = 1
// let countEvenNeg = 0


// while(start <= end) {

//     if (start < 0 && start % 2 == 0) {
//         countEvenNeg += 1
//         // countEvenNeg++
//     }

//     // if(start == -32) {
//     //     continue
//     // }
//     start += step
// }

// console.log(countEvenNeg)

// Math.floor(Math.random() * (max - min) + min)

// let guessNumber = Math.floor(Math.random() * (4 - 1) + 1)
// let attempt = 0
// let answer
// let win = false

// while(attempt < 3) {
//     answer = Number(prompt('Enter your answer: '))
//     if (answer == guessNumber){
//         console.log('WIN')
//         win = true
//         break
//     }
//     attempt += 1
// }

// if (win==false){
//     console.log('LOSE')
// }


// let num = 584673

// let sumDigits = 0

// while(num > 0) {
//     console.log(`${sumDigits} + ${num % 10} = ${sumDigits + num % 10}`)
//     sumDigits += num % 10
//     num = Math.floor(num / 10)
// }
// console.log(sumDigits)

// i++
// i += 1
// i = i + 1

// for (let i = 1; i < 20; i += 1) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// for (let i = 20; i >= 0; i -= 1) {
//     console.log(i)
// }

// let i = 20

// while (i >= 0) {
//     console.log(i)
//     i -= 1
// }

// let sumDigits = 0

// for (let i = 584673; i > 0; i = Math.floor(i / 10)) {
//     sumDigits += i % 10
// }

// console.log(sumDigits)


do {
    console.log('DO While')
}
while (10 > 20)



while (10 > 20) {
    console.log('While')
}