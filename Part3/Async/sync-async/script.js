// koi bhi code js me line by line chalta hai, kabhi aisa cenerio aajate hein jab koi line ko execute hone me time lagta hai ya phir wait karna parta hai tab aur utni der me aage ka code chal jata hai

// console.log("Hey1");
// console.log("Hey2");
// setTimeout(() => {
//     console.log("Hey3");
// }, 1000);
// console.log("Hey4");

// aisa code jo line by line chale woh sync code hai
// aisa code jo tab chale jab chalne ke liye ready ho jaye woh async hai

function kuchDerBaadChalunga(fnc) {
  setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
}
kuchDerBaadChalunga(function () {
  console.log("Hey");
});