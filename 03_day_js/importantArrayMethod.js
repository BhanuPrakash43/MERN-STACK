// forEach
// map
// filter
// reduce

// forEach is used to iterate in the array

// const fruits = ["apple", "mango", "grapes"];

// fruits.forEach(function(fruit) {
//     console.log(fruit.toUpperCase());
// });


// fruits.forEach((fruit)=>{
//     console.log(fruit.toUpperCase());
// });

// fruits.forEach(fruit =>{
//     console.log(fruit.toUpperCase());
// });


// map methods --> returns new Array

// const newFruits = fruits.map(function(fruit){
//     return fruit.toUpperCase();
// })
// console.log(newFruits);


// const fruits = ["apple", "mango", "grapes"];

// const firstLetters = fruits.map((fruit) =>{
//     return fruit[0];
// })
// console.log(firstLetters);

// implicit return

// const firstLetters = fruits.map((fruit) => fruit[0]);
// console.log(firstLetters);


// const persons = [
//     {
//         id:1, 
//         firstName:"Bhanu",
//         lastName:"Prakash",
//         age:21,
//     },
//     {
//         id:2,
//         firstName:"Golu",
//         lastName:"Kumar",
//         age:15,
//     },
//     {
//         id:3,
//         firstName:"Sameer",
//         lastName:"Sharma",
//         age:24
//     },
// ];

// const personFirstNameArray = persons.map((person) =>{
//     return person.firstName + person.lastName;
// });
// console.log(personFirstNameArray);

// implicit return

// const personFirstNameArray = persons.map((person) => person.firstName);
// console.log(personFirstNameArray);

// Convert the firstname and lastname in uppercase if person id match to the input id

// const persons = [
//     {
//         id:1, 
//         firstName:"Bhanu",
//         lastName:"Prakash",
//         age:21,
//     },
//     {
//         id:2,
//         firstName:"Golu",
//         lastName:"Kumar",
//         age:15,
//     },
//     {
//         id:3,
//         firstName:"Sameer",
//         lastName:"Sharma",
//         age:24
//     },
// ];

// function firstNameUpperCaseIfIdMatch(persons, id) {
//     const updatedNames = persons.map((person) => {
//         if(person.id === id){
//             return { ...person, firstName: person.firstName.toUpperCase(), lastName: person.lastName.toUpperCase()};
//         }
//         else{
//             return {...person};
//         }
//     });
//     return updatedNames;
// }
// console.log(persons);
// const resultNames = firstNameUpperCaseIfIdMatch(persons, 1);
// // resultNames[2].gender = "male";
// console.log(resultNames);
// // console.log(persons);