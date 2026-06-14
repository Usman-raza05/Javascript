// let si = setInterval(()=>{
//     console.log("Hello");
    
// },1000)

// clearInterval(si);

// let st = setTimeout(()=>{
//     console.log("Hello");
    
// },1000)

// clearTimeout(st);

let count = 10;
let si = setInterval(()=>{
    if(count >= 0){
        console.log(count);
        count--;
    }
    else{
        clearInterval(si)
    }
    
    // console.log(count);
},1000)