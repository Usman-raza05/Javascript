// Manual binding
// call apply bind
// function ko call karte waqt aap set kr sakte ho ki uski this ki value kiya hogi

let obj = {
  name: "harsh",
  age: 26,
};

function abcd(a, b, c) {
  console.log(this, a, b, c);
}
abcd.call(obj, 1, 2, 3);

abcd.apply(obj, [1, 2, 3]);

let fnc = abcd.bind(obj, 1, 2, 3);
fnc();
