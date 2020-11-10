// let arr = [43, 12, 12, 22, 12, 43, 2, 55, 22, 88, 12, 22, 22, 22]

// let maxCount = 0
// let maxNumber = 0

// for (let i = 0; i < arr.length; i++) {
//     let count = 0

//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i] == arr[j]) {
//             count++
//         }
//     }

//     if (maxCount < count) {
//         maxCount = count
//         maxNumber = arr[i]
//     }

// }

// if (maxCount == 1) {
//     console.log('Not equal numbers')
// } else { 
//     console.log(maxNumber, maxCount)
// }



// let arr = [121, 21, 45, 234, 25, 33, 12, 1]

// let max = arr[0]
// let min = arr[0]

// for (let element of arr) {

//     if (element > max) {
//         max = element
//     }

//     if (element < min) {
//         min = element
//     }

// }
// let arr = [121, 21, 45, 234, 25, 33, 12, 1]

// let max = arr[0]
// let min = arr[0]

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > max) {
//         max = arr[i]
//     }

//     if (arr[i] < min) {
//         min = arr[i]
//     }

// }
// console.log(max, min)


// // Сумма чисел между максимумом и минимумом включая значения максимума и минимума.
// let array = [121, 32, 45, 64, 234, 5, 4, 12, 1]
// let maxNumber = array[0]
// let minNumber = array[0]

// let indexOfMin, indexOfMax
// let sumOfRange = 0

// for (let i = 0; i < array.length; ++i) {

//     if (array[i] > maxNumber) {
//         maxNumber = array[i]
//         indexOfMax = i
//     }

//     if (array[i] < minNumber) {
//         minNumber = array[i]
//         indexOfMin = i
//     }
// }

// if (indexOfMax > indexOfMin) {
//     for (let i = indexOfMin; i <= indexOfMax; ++i) {
//         sumOfRange += array[i]
//     }
// } else {
//     for (let i = indexOfMax; i <= indexOfMin; ++i) {
//         sumOfRange += array[i]
//     }
// }

// console.log(sumOfRange)


// let num1 = 20
// let num2 = 30

// let temp = num1 // 20 

// num1 = num2 // 30
// num2 = temp // 20


// let arr = [12, 44, 11, 32, 54]
// // 11, 12, 32, 44, 54

// console.log(arr)

// for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//         }
//     }

// }

// console.log(arr)



// push(elem) - добавление элемента в конец массива 
// pop() - удаление элемента с конца массива

// unshift(elem) - добавление элемента в начало массива 
// shift() - удаление элемента в начало массива 

// map, forEach - методы для перебора массива 

// join() - позволяет из массива сделать строку 

let arr = []

console.log(arr)

arr.push(12)

console.log(arr)

arr.unshift(55)

console.log(arr)

arr.push(99)

console.log(arr)

arr.pop()

console.log(arr)

arr.shift()

console.log(arr)


arr.push('hello')
arr.push('world')

console.log(arr)


let str = arr.join(' ')

console.log(str)


let array = [12, 44, 66, 77, 821, 123, 43]


array.map(function(element, index){
    console.log(element, index)
})

array.forEach(function(element, index){
    console.log(element, index)
})