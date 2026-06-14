let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit",(dets)=>{
    dets.preventDefault()
    // if(nm.value.length <= 2){
    //     document.querySelector("#hide").style.display = "initial"
    // }
    // else{
    //     document.querySelector("#hide").style.display = "none"
    // }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const userRegex = /^[A-Za-z0-9]{3,20}$/;
    // let ans = emailRegex.test("a@a.a")
    let ans = userRegex.test("aaa")
    console.log(ans);
    
})