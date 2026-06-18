// class User {
//   constructor(name, address, username, email) {
//     this.name = name;
//     this.address = address;
//     this.username = username;
//     this.email = email;
//     this.role = "user";
//   }
//   write(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = `${this.name}: ${text}`;
//     document.body.appendChild(h1);
//   }
//   checkRole() {
//     return ("You are a ", this.role);
//   }
// }

// class Admin extends User {     // class inherits class -> clasical inheritance
//   constructor(name, address, username, email) {
//     super(name, address, username, email);
//     this.role = "admin";
//   }

//   remove() {
//     document.body.querySelectorAll("h1").forEach(function (elem) {
//       elem.remove();
//     });
//   }
// }

// let u1 = new User("Harsh", "Bhopal", "Harsh123", "harsh@harsh.harsh");
// let u2 = new User(
//   "Harshita",
//   "Benglore",
//   "Harshita123",
//   "harshita@harshita.harshita",
// );

// let a1 = new Admin("Admin", "India", "Admin123", "admin@admin.admin");

let Coffee = {
  color: "dark",
  drink: function () {
    console.log("gut gut gut");
  },
};

let arabiataCoffee = Object.create(Coffee)    // object inherit object -> prototypal inheritance
arabiataCoffee.taste="bitter";
arabiataCoffee.drink();