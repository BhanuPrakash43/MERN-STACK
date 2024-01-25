// reference types

// arrays
// objects
// functions

// function hello(){
//     console.log("hello world");
// }

let myArray = ["1", 2, "hello", [1, 2, 3]];

// create using []
// you can pas anything to array

// access values ?
console.log(myArray[2]);
console.log(myArray[3][2]);

console.log(myArray[5]);   // undefined

// calculate length

console.log(myArray.length);
const lastIndex = myArray.length - 1;
console.log(lastIndex);

let fruits = ["apple", "mango", "grapes"];
// const poppedItem = fruits.pop();   // remove from end
// const poppedItem = fruits.shift();  // remove from beggining
// fruits.push("blueberry");  // add to end
// console.log("popped item is:", poppedItem);
fruits.push("strawberries", "guava", "berries");
fruits.pop()
console.log(fruits)

// fruits.unshift("blueberry"); //  add to beggining

// push and pop // stack  // last in first out
// O(1)

// shift and unshift // queue -->  push(O(1)), shift(O(n))
// O(n)
//// linked ist --> queue ds shift (O(1))
// first in first out // queue

// console.log(fruits);



