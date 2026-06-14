// let obj ={
//     name: "Harsh",
//     age: 26,
//     khana: "daal chawal"
// };

// let aa = "name"


// const user = {
//     name: "Harsh",
//     address:{
//         city:"Bhopal",
//         pin:462001,
//         locations:{
//             lat:23.2,
//             lng:77.4,
//         },
//     },
// };

// let {lat,lng} = user.address.locations;


// let obj = {
//     name: "Harsh",
//     age: 26,
//     email: "test@gmail.com"
// };

// for(let key in obj){
//     console.log(key,':',obj[key]);

// }

// console.log(Object.keys(obj))
// console.log(Object.entries(obj))

// let obj2 = {...obj}
// let obj2 = Object.assign({ price: Infinity }, obj)

// let obj = {
//     name: "Harsh",
//     age: 26,
//     email: "test@gmail.com",
//     locations:{
//         city:"Bhopal",
//     },
// };

// let obj2 = {...obj}
// obj2.locations.city = "Indore"

// let obj2 = JSON.parse(JSON.stringify(obj))
// obj2.locations.city = "Indore"

// console.log(obj?.locations?.city)

// let role = "admin";
// let obj = {
//     name: "Harsh",
//     age: 26,
//     email: "test@gmail.com",
//     locations:{
//         city:"Bhopal",
//     },
//     [role]:"harsh",
// };

// let obj = {
//     name:"harsh",
//     age:26,
//     isEnrolled:true,
// }

// const obj = {
//     true : "yes",
//     42: "amnswer",
// };
// console.log(obj[true]);


// const user = {
//     "first-name":"harsh",
// };
// console.log(user["first-name"])

let key ="age"
const user={
    [key]:26,
};

console.log(user.age);
