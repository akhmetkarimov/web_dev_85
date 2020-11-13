// let obj = {
//     firstName: "Test Name",
//     lastName: "Test last Name",
//     skills: ["HTML", "JS", "CSS"]
// }

// console.log(obj)
// console.log(obj.firstName)
// console.log(obj.lastName)
// console.log(obj.skills)

// console.log(obj['firstName'])
// console.log(obj['lastName'])
// console.log(obj['skills'])

// obj.skills.forEach((skill)=>{
//     console.log('Skill', skill)
// })

// for(let skill of obj.skills){
//     console.log('Skill', skill)
// }

let people = [

    {
        firstName: "Test Name",
        lastName: "Test last Name",
        salary: 500
    },

    {
        firstName: "Test Name 2",
        lastName: "Test last Name 2",
        salary: 400
    },

    {
        firstName: "Test Name 3",
        lastName: "Test last Name 3",
        salary: 1600
    },
    {
        firstName: "Test Name 4",
        lastName: "Test last Name 4",
        salary: 800
    }

]


let sum = 0

for (let person of people) {
    sum += person.salary
}

let avg = sum / people.length

for (let person of people) {
    if (person.salary < avg) {
        console.log(person.firstName, person.salary)
    }
}
console.log(people)

people.push({
    firstName: "Test Name 4",
    lastName: "Test last Name 4",
    salary: 1200
})

let test = {
    firstName: "Test Name 5",
    lastName: "Test last Name 5",
    salary: 1000
}
people.push(test)

console.log(people)

// for (let i = 0; i < people.length; i++) {
//     if (people[i].salary > avg) {
//         console.log(people[i].firstName, people[i].salary)
//     }
// }


// Напишите цикл, который будет 
// собирать вопросы в массив, 
// пока клиент не введеть команду N Вы будете спрашивать ввести вопрос 
// все вопросы у вас должны сохраняться в массив который будет состоять из объектов
// когда клиент введет команду N вы должны
// остановить программу и вывести все вопросы который ввел клиент

let questions = []
let question = ""

while (question != 'N') {
    question = prompt('Enter your question, OR enter N for STOP')
    if (question != 'N') {
        questions.push({
            question
        })
    }
}

console.log(questions)