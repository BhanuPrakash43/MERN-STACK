// CallBack Hell (Pyramid of doom)

// setTimeout(() => {
//     console.log("print 1 after 1 sec");
//     setTimeout(() => {
//         console.log("print 2 after 2 sec");
//         setTimeout(() => {
//             console.log("print 3 after 3 sec");
//         }, 3000);
//     }, 2000);
// }, 1000);

// Convert above code into flat code with the help of promises


// This is step by step conversion into flat code using promises

// function step1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("1");
//             resolve();
//         }, 2500);
//     });
// }

// function step2() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("2");
//             resolve();
//         }, 2000);
//     });
// }

// function step3() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("3");
//             resolve();
//         }, 1000);
//     });
// }


