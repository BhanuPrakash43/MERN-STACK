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



