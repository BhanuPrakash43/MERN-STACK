// spread operator is used for cloning


const person = {
    firstName: "Bhanu",
    lastName: "Prakash",
    gender: "male",
    age:21,
    address: {
        city: "jalandhar",
        state: "Punjab",
        country: "India",
        pinCode: "387463",
    }
}

// shllow copy
// const updateFirstName = person.firstName = "mitthu"
// const person1 = {...person}
// person.address.colony = "chiheru"
// person.hobby = "exercise";
// console.log(person.address)
// console.log(person1.address)
// console.log(person.address)
// console.log(person1.address)


// deep copy
const person2 = JSON.parse(JSON.stringify(person))
person.address.streetNumber = 4;
console.log(person.address)
console.log(person2.address)





