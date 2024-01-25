// variables
// const
// let firstName = "John";

// difference between let and var
// Yon cannot re-decare let varibale with same name

// block scope vs function scope
// const pi = "3.14";
// pi = "3.15";

// datatypes

// 1. Primitives

// Number
// string
// boolean
// null
// undefined
// BigInt
// Symbol

// 2. Reference types
// Arrays
// Objects
// Functions

// const num = 2.4;
// console.log(num);
// let num2 = +"2.3";

// console.log(num, typeof num);
// console.log(num2, typeof num2);
// console.log(2 + "abcd");

// string to number

// booleans
// true , false

// const num1 = 2;
// const num2 = "2";

// console.log(num1 === num2);

// javascript

// function declaration

// function expression

// arrow function

// function declaration

// memory

// function singHappyBday() {
//   return "happy birthday to you ...";
// }

// function singHappyBday(name) {
//   return "happy birthday " + name;
// }

// console.log(singHappyBday("john"));

// funciton expression

var myFunction = function () {
    console.log("hello from my function");
  };
  
  var myFunction = function () {
    console.log("hello from my funciton");
  };
  
  myFunction();
  
  // JS
  // JS
  
  //
  
  // react
  
  // react practice + node express mongodb(mongoose)
  
  // MERN project
  
  // authentication
  
  // auth + react + node
  // crud REST APIS + react + auth + rrd + mon
  
  // node express





  

// we will talk about function and their 3 types
// 1. function declaratin
// 2. function expression
// 3. arrow function

// function declaration

// function world2(){
//     console.log("what is the size of the Earth");
// }
// world2();

// function world(a, b){
//     // console.log(a+b);
//     return a+b;
// }
// let sum = world("bhanu", "prakash");
// console.log(sum)

// function expression

// const myBookCollection = function(){
    // console.log("rashmirathi");
//     return "Rashmirathi"
// }
// const myVar = myBookCollection();
// console.log(myVar);


// const myPractice = function(a, b, c){
//     if(a>b && b>c){
//         return a;
//     }
//     else if(b>a && b>c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }
// const largeNum = myPractice(563, 2334, 545);
// console.log(largeNum)


// arrrow function

// arrow function with no parameter

// const firstArr = () => "hello arrow functon bhai ";
// const firstArr = () => console.log("hello arrow functon bhai ");

// const greet = firstArr();
// console.log(greet);


// arrow function with one parameter
// if only one parameter is present then we can remove braces and directly put the parameter

// const arrowwithPara = (number) =>{
// const arrowwithPara = number =>{
//     return number;
// }
// const arrowwithPara = number => number;

// const helo = arrowwithPara("I am arrow function with one parameter");
// console.log(helo)

// arrow function with more than one parameter

// const arrowFunc = (a, b, c) =>{
//     return a+b+c;
// }
// const onlySum = arrowFunc(345, 32, 45);
// console.log(onlySum)



