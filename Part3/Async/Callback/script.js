// ek function ke parameter mein agar aap ek aur function pass kar rahe ho to woh parameter wale function ko callback kehte hein

function profileLekarAao(username, cb) {
  console.log("Fetching profile...");
  setTimeout(() => {
    cb({ _id: 1212, username, age: 26, email: "huihui@hui.com" });
  }, 2000);
}

function saarePostLekarAao(id, cb) {
  console.log("Fetching all Posts...");

  setTimeout(() => {
    cb({ _id: id, posts: ["hey", "hello", "good morning"] });
  }, 2000);
}

function savedPostsNikalo(id, cb) {
  console.log("Fetching saved posts...");
  setTimeout(() => {
    cb({ _id: id, saved: [1, 2, 3, 4, 5, 6] });
  }, 2000);
}

profileLekarAao("harsh", function (data) {
  console.log(data);
  saarePostLekarAao(data._id, function (posts) {
    console.log(posts);
    savedPostsNikalo(data._id, function (saved) {
      console.log(saved);
    });
  });
});
