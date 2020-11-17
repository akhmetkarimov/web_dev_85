// function functionName () {
//     body
// }

// functionNameArrow = () => {
//     body
// }

// void - не возвращяет данные, int, string, obj, ... 

// test()

// function test () {
//     console.log('Into Test Function')
// }

// test() // call function

// testArrow = () => {
//     console.log('Into Test Function Arrow')
// }

// testArrow()

// function sum () {
//     return 2 + 2
// }

// let n = sum()

// console.log(n)

// sumArrow = () => {
//     return 2 + 10
// }

// let n1 = sumArrow()

// console.log(n1)

// console.log(sumArrow())


// function testSum (num1, num2) {
//     return num1 + num2
// }

// let a = testSum(43, 122) 
// console.log(testSum(43, 122))
// console.log(a)


// let globalVar = 100

// console.log('Global', globalVar)

// function testLocal () {
//     let localVar = 200
//     globalVar = 155
//     console.log('Local', localVar)
//     console.log('Global Into Function', globalVar)
// } 

// console.log('Global Outside before Function', globalVar)

// testLocal()

// // console.log('Local Outside function', localVar)

// console.log('Global Outside after Function', globalVar)


// setTimeout(function, time, arguments)
// setInterval(function, time, arguments)

// function testTime(){
//     let currentTime = new Date()
//     console.log('Current Time:', currentTime)
// }

// setTimeout(testTime, 3000)
// setInterval(testTime, 3000)

// function testName(name){
//     console.log('Hello!!!', name)
// }

// setTimeout(testName, 3000, 'Yedil')
// setInterval(testName, 3000, 'Yedil')


// let num = 0
// let timer

// function counter () {
    
//     if (num == 10){
//         clearTimeout(timer)
//     }
    
//     console.log(num)
//     num++

// }

// timer = setInterval(counter, 1000)

// function testRecursive (num) {

//     console.log(num)

//     if (num == 4) {
//         return
//     }

//     return testRecursive(num + 1)
// }

// testRecursive(2)


// console.log("10 == '10'",10 == '10')
// console.log("10 == 10",10 == 10)

// console.log("10 === 10",10 === 10)
// console.log("10 === '10'",10 === '10')

// console.log("10 !== '10'",10 !== '10')
// console.log("10 != '10'",10 != 10)



// function factorial (factorialNumber) {
//     let product = 1
//     for (let i = 1; i <= factorialNumber; i++) {
//         product *= i
//         console.log(product)
//     }
//     console.log(product)
// }

// factorial(6)

// function factorial(num) {
//     if(num === 0) {
//         return
//     }
//     if ((num - 1) === 0) {
//         return num
//     }
//     return num * factorial(num - 1)
// }

//  console.log(factorial(6))
