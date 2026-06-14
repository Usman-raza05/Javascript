let form = document.querySelector("form");
let inp = document.querySelector("#inp");
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(inp.value);
})