let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let button = document.querySelector("button");

button.addEventListener("click",()=>{
    console.log("button clicked..");
})
c.addEventListener("click",()=>{
    console.log("c clicked..");
},true)
b.addEventListener("click",()=>{
    console.log("b clicked..");
})
a.addEventListener("click",()=>{
    console.log("a clicked..");
},true)