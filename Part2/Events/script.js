// document.body.style.backgroundColor="black"
// document.body.style.color="white"

// let h1 = document.querySelector("h1");
// h1.addEventListener("click",()=>{
//     h1.style.color="red"
// })
// function dblclick (){
//     h1.style.color="yellow"
// }
// h1.addEventListener("dblclick",dblclick)
// h1.removeEventListener("dblclick",dblclick)

// let input = document.querySelector("input")
// input.addEventListener("input",(e)=>{
//     console.log("You input:",e.target.value);

// })

// let input = document.querySelector("input")
// input.addEventListener("input",(detail)=>{
//     if(detail.data != null){
//         console.log(detail.data);
//     }
// })

// let device = document.querySelector("#device")
// let sel = document.querySelector("select")
// sel.addEventListener("change",(dets)=>{
//     console.log(dets.target.value);
//     // console.log(device);
//     device.textContent=`You Choose ${dets.target.value}`

// })

// let h1 = document.querySelector("h1")
// window.addEventListener("keydown",(elem)=>{
//     if(elem.key == " "){
//         h1.textContent = "space"
//     }
//     else{
//         h1.textContent = elem.key
//     }
//     // console.log(elem.key);

// })

// let fileinp = document.querySelector("#fileinp")
// let btn = document.querySelector("#btn")
// btn.addEventListener("click",()=>{
//     fileinp.click()
//     // console.log(fileinp);
// })

// fileinp.addEventListener("change",(dets)=>{
//     const file = dets.target.files[0]
//     if(file){
//     console.log(dets.target.value);
//     console.log(dets.target.files[0].name);
//     console.log(file.name);
//     }
// })

// let inputs = document.querySelectorAll("input")
// let main = document.querySelector("#main")
// let form = document.querySelector("form")
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log(inputs[0].value);

//     let card = document.createElement("div");
//     card.classList.add("card");

//     let profile = document.createElement("div");
//     profile.classList.add("profile");

//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value)

//     let h3 = document.createElement("h3")
//     h3.textContent = inputs[1].value

//     let h5 = document.createElement("h5")
//     h5.textContent = inputs[2].value

//     let p = document.createElement("p")
//     p.textContent = inputs[3].value

//     profile.appendChild(img)
//     card.appendChild(profile)
//     card.appendChild(h3)
//     card.appendChild(h5)
//     card.appendChild(p)

//     main.appendChild(card)

//     inputs.forEach((inp)=>{
//         if(inp.type !== "submit"){
//             inp.value = ""
//         }
//     })
    
// })


let div = document.querySelector(".abcd")
div.addEventListener("mouseover",()=>{
    div.style.backgroundColor = "yellow"
})
div.addEventListener("mouseout",()=>{
    div.style.backgroundColor = "red"
})

window.addEventListener("mousemove",(dets)=>{
    // console.log(dets.screenX);
    div.style.top = `${dets.screenY-85}px`
    div.style.left = `${dets.screenX}px`
    
})