//This keyword special keyword hai, kyuki jaise ki baki saare keyword ki value ya unka nature same rehta hai this ki value ya nature badal jata hai is baat se ki aap usey kaha use kar rahe ho

// global scope
console.log(this); // window

//function ke andar
function abcd() {
  console.log(this);
}
abcd();

// method ke andar
let obj = {
  name: "harsh",
  age: 26,
  sayName: function () {
    // object ke andar function bnane ko method kehte hein
    // aur haan object ke andar arrow function banane se this apni value loose kar deta hai isliye hamesha Es5 function ka use karein
    console.log(this);

    // function ke andar ek aur Es5 function banane se this fir se apni value loose kar deta hai isliye yahan Arrow function bnayein
    let defg = () => {
      console.log(this, "defg");
    };
    defg();
  },
};
obj.sayName();

// event handler
document.querySelector("h1").addEventListener("click", function () {
  console.log((this.style.color = "red"));
});

// class
class Abcd {
  constructor() {
    console.log("Heye");
    this.a = 12;
  }
}

let val = new Abcd();
console.log(val);
