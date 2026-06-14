let p = document.createElement("p");
let count = 0;
p.textContent="Count = " + count;
console.log(p);
document.body.append(p);

p.style.userSelect="none";
p.addEventListener("click",()=>{
    console.log(btn);
    btn.click();
    
})

let btn = document.createElement("button");
btn.textContent="Click";
console.log(btn);
document.body.append(btn);

let time =  btn.addEventListener("click",()=>{
    console.log("Btn clicked");
    count++;
    p.textContent= `Count = ${count}`;
})

// function tm(){
//     btn.addEventListener("click",()=>{
//     console.log("Btn clicked");
//     count++;
//     p.textContent= `Count = ${count}`;
// })
// }

// setInterval(()=>{
//     count++;
//     p.textContent= `Count = ${count}`;
//     // console.log(tm());
    
// },1000)