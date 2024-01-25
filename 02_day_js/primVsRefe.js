// let num = 12;
// num = 13;
// let num2 = num;
// num = 14;
// console.log(num);
// console.log(num2);

// array is reference

// let array1 = [1, 2, 3];  //x123
// let array2 = array1;
// array1.push(4);

// console.log("array1 is", array1);
// console.log("array2 is", array2);


// const array1 = [1, 2, 3];
// array1.push(4);        // this will work because we  are not changing the reference of the array
// console.log(array1);

// if we change the reference of the array then we can not any perform any oprations


// string templating

// const age = 25;
// const fName = "bhanu";

// const about = "hello my name is " + fName + "and i am " + age + "years old";
// console.log(about);


// objects

// array --> ordered collection
// objects ==> key : value pairs / undefined
// objects ---> reference types

// const person = {
//     firstName : "bhanu",
//     lastName: "prakash",
//     age:23,
//     "new property":"unique val"
// };

// console.log(person);
// access properties

// 1. dot notation
// 2 . bracket notation






// const myArr = [
//     {
//         id:1,
//         firstName:bhanu,
//         age:20,
//     },
//     {
//         id:2,
//         firstName:rohit,
//         age:20,
//     },
//     {
//         id:3,
//         firstName:mitthu,
//         age:20,
//     },
//     {
//         id:4,
//         firstName:chotu,
//         age:20,
//     },
// ]

// function upperFirstNameIfIdMatch(person, id){
//     const personFirstNameArray = myArr.map(person =>{
//         if(person.id == id){

//         }
//     }) 
// }



// const myArr = [
//     {
//         id: 1,
//         firstName: 'bhanu',
//         age: 20,
//     },
//     {
//         id: 2,
//         firstName: 'rohit',
//         age: 20,
//     },
//     {
//         id: 3,
//         firstName: 'mitthu',
//         age: 20,
//     },
//     {
//         id: 4,
//         firstName: 'chotu',
//         age: 20,
//     },
// ];

// function upperFirstNameIfIdMatch(myArr,id) {
//     const updatedArr = myArr.map(person => {
//         if (person.id === id) {
//             return {
//                 ...person,
//                 firstName: person.firstName.toUpperCase(),
//             };
//         } 
//         else {
//             return person;
//         }
//     });

//     return updatedArr;
// }

// const resultArray = upperFirstNameIfIdMatch(myArr, 3);
// console.log(resultArray);


// function display(a){
//     console.log("hello bhanu", a);
// }

// function add(a, b, display){
//     let c = a + b;
//     display(c);
// }
// // display(5);
// add(3, 5, display);




// const displayName = (name) =>{
//     console.log("hello");
//     setTimeout(() =>{
//         console.log("hello from settimeout");
//         display(name);
//     }, 3000);
// };

// console.log("a");
// console.log("b");
// const name = displayName("bhanu", (names) =>{
//     console.log(names)
// })
// console.log("c");


// const displayName = (name1, callback) => {
//     setTimeout(() => {
//         callback(name1);
//     }, 3000);
// };


const hobbiesInfo = (name1, (callback) =>{
    setTimeout(() =>{
        callback(['coding', 'gyming'])
    }, 3000)
})

const favEditors = (hobbies, (callback) =>{
    setTimeout(() =>{
        callback(['vscode', 'sublime'])
    }, 3000)
})

const names = userInfo("bhanu", (names) => {
    hobbiesInfo(names, (hobbies) => {
        favEditors(hobbies[0], (editors) => {
            console.log(favEditors[0]);
        })
    })
})

