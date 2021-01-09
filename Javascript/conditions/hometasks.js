// Пользователь вводит два целых числа. Если оба числа положительные, то вывести их сумму, иначе вывести сообщение «условие не выполняется».
// let num1 = Number(prompt('Enter number 1: '))
// let num2 = Number(prompt('Enter number 2: '))


// if(num1 > 0 && num2 > 0) {
//     console.log(num1 + num2)
// } else {
//     console.log('условие не выполняется')
// }


// В високосном годе 366 дней, в обычном 365.
// a. Если год не делится на 4, значит он обычный.
// b. Иначе надо проверить не делится ли год на 100.
// c. Если не делится, значит это не столетие и можно сделать вывод, что год
// високосный.
// d. Если делится на 100, значит это столетие и его следует проверить его делимость на 400.
// e. Если год делится на 400, то он високосный.
// f. Иначе год обычный.


// let year = Number(prompt('Enter Year: '))


// if(year % 4 != 0) {
//     console.log(365)
// } else {
//     if(year % 100 != 0) {
//         console.log(366)
//     } else {
//         if(year % 400 == 0) {
//             console.log(366)
//         } else {
//             console.log(365)
//         }
//     }
// }

// if (year % 4 == 0 && year % 400 == 0 && year % 100 !=0) {
//     console.log(366)
// } else {
//     console.log(365)
// }

// if(year % 4 != 0 && year % 400 != 0 && year % 100 == 0) {
//     console.log(365)
// } else {
//     console.log(366)
// }

// let result = year % 4 != 0 && year % 400 != 0 && year % 100 == 0 ? 365 : 366






// Пользователь вводит четыре целых числа. Найти сумму четных и нечетных чисел


let num1 = Number(prompt('Enter number 1: '))
let num2 = Number(prompt('Enter number 2: '))
let num3 = Number(prompt('Enter number 3: '))
let num4 = Number(prompt('Enter number 4: '))

let sumEven = 0
let sumOdd = 0

if(num1 % 2 == 0) {
    sumEven = sumEven + num1
} else {
    sumOdd = sumOdd + num1
}

if(num2 % 2 == 0) {
    sumEven = sumEven + num2
} else {
    sumOdd = sumOdd + num2
}

if(num3 % 2 == 0) {
    sumEven = sumEven + num3
} else {
    sumOdd = sumOdd + num3
}

if(num4 % 2 == 0) {
    sumEven = sumEven + num4
} else {
    sumOdd = sumOdd + num4
}


console.log('Sum even: ', sumEven)
console.log('Sum odd: ', sumOdd)