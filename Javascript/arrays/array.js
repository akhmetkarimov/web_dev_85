// [] - array (массив)
// {} - object (объект)
         //  0  1    2        3        4
// let array = [1, 26, 'Hello', "world", true]

// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])
// console.log(array[5])


// for(let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// console.log(array)
let array = [1, 2, 3, 69.123, 77, 12, 54]

let sum = 0                   
for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 == 0) {
        console.log(array[i])
        sum += array[i]
    }
}
console.log('--------')
console.log(sum)
console.log('--------')

sum = 0
for(let element of array){
    if (element % 2 == 0){
        console.log(element)
        sum += element
    }
}
console.log('--------')
console.log(sum)
console.log('--------')

sum = 0
for(let index in array){
    if (array[index] % 2 == 0){
        console.log(array[index])
        sum += array[index]
    }
}
console.log('--------')
console.log(sum)

