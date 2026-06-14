let span = document.querySelector("span");
let input = document.querySelector("input")
input.addEventListener("input",(e)=>{
    let left = 20 - e.target.value.length;
    console.log(left)
    span.textContent = left;
    if(left < 0){
        span.style.color = "red"
    }
    else{
        span.style.color = "white"
    }
})