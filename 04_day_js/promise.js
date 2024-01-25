// Promise

// console.log("script starts");

const bucket = ["coffee", "chips", "vegetables", "rice", "salt"];

const friedRicePromise = new Promise((resolve, reject) => {
    if(bucket.includes("vegetables")&& bucket.includes("rice")&& bucket.includes("salt")){
        resolve("FriedRice is ready...");
    }
    else{
        reject("Couldn't make it");
    }
});
// console.log(friedRicePromise);

// consume (how to consume)

friedRicePromise.then(
    // when promise would be resolved
    (myFriedRice) =>{
        console.log("Let's eat", myFriedRice);
    }
    // when promise would be rejected
    // (error) =>{
    //     console.log(error);
    // }
).catch((error) =>{
    console.log(error)
})

// setTimeout(() => {
//     console.log("hello from setTimeout")
// }, 0);

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// console.log("script end")





// async await

const favLanguage = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(["java", "javascript", "C++"]);
        }, 3000);
    });
};

async function displayData(){
    const language = await favLanguage();
    console.log(language[1]);
}
displayData();