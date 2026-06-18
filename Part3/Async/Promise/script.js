// promise do states mein se ek state mein pass hota hai. ya to vo resolve hoga ya to reject hoga. humien dono states ka code likhna padta hai. ab yeh waqt batayega ki code resolve hoga ki reject.

let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res("Resolved "+rn);
    else rej("Rejected "+rn);
  }, 2000);
});

pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});
