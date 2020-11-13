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

console.log(people)


let sum = 0

for(let person of people){
    sum += person.salary
}

console.log(sum / people.length)