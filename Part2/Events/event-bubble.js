// document.querySelector("#nav").addEventListener("click",()=>{
//     alert("Nav clicked...");
    
// })

let ul = document.querySelector("ul")
ul.addEventListener("click",(dets)=>{
    dets.target.classList.toggle("lt");
    dets.target.style.color = "red";
    console.log(dets.target);
    
})