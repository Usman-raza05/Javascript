function createToaster(config) {
  return function (notification) {
    let div = document.createElement("div");
    div.className = `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} px-6 py-5 rounded shadow-lg pointer-events-none transition-opacity duration-300`;
    div.textContent = notification;
    document.querySelector(".parent").appendChild(div);

    if(config.positionX !== "left" || config.positionY !== "bottom"){
        document.querySelector(".parent").className += `
        ${config.positionX==="right"?"right-5":"left-5"}
        ${config.positionY==="top"?"top-5":"bottom-5"}
        `;
    }

    setTimeout(()=>{
        document.querySelector(".parent").removeChild(div)
    },config.duration*1000)
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "dark",
  duration: 2,
});
toaster("New notification");
setTimeout(()=>{

    toaster("New second notification");
},1000)
setTimeout(()=>{

    toaster("New third notification");
},2000)
setTimeout(()=>{

    toaster("New fourth notification");
},2500)