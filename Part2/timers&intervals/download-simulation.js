let progressbar = document.querySelector("#progressBar");
let percent = document.querySelector("#percent");
let speed = document.querySelector("#speed");
let seconds = 3;

let count = 0;
let interval = setInterval(()=>{
    if(count<100){
        count++;
        progressbar.style.width =  `${count}%`;
        percent.textContent = `${count}%`;
        speed.textContent = `${seconds} MB/s`
        console.log(count);
    }
    else{
        speed.textContent = `0 MB/s`
        clearInterval(interval)
    }
},seconds * 10)