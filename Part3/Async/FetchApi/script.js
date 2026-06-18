const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const userUsername = document.getElementById("userUsername");
const userGender = document.getElementById("userGender");
const userAge = document.getElementById("userAge");
const userEmail = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");
const userLocation = document.getElementById("userLocation");
const userNationality = document.getElementById("userNationality");
const userRegistered = document.getElementById("userRegistered");
const generateBtn = document.getElementById("generateBtn");
const usersContainer = document.getElementById("usersContainer");

async function getUser() {
  generateBtn.textContent = "Loading...";
  generateBtn.setAttribute("disabled", "");
  const response = await fetch("https://randomuser.me/api?results=4");
  const data = await response.json();

  const users = data.results;
  
usersContainer.textContent="";
  users.forEach((user) => {
    createUserCard(user);
  });
  generateBtn.textContent = "Generate New User";
  generateBtn.removeAttribute("disabled", "");
}

getUser();

generateBtn.addEventListener("click", getUser);

function createUserCard(user) {

  // Main Card
  const card = document.createElement("div");
  card.className = "w-72 bg-white rounded-2xl shadow-lg overflow-hidden";

  // Cover
  const cover = document.createElement("div");
  cover.className = "h-20 bg-gradient-to-r from-blue-500 to-purple-600";

  // Profile Container
  const profile = document.createElement("div");
  profile.className = "relative px-6 pb-6";

  // Image
  const img = document.createElement("img");
  img.src = user.picture.large;
  img.className =
    "w-24 h-24 rounded-full border-4 border-white absolute -top-12 left-1/2 -translate-x-1/2";

  // Content
  const content = document.createElement("div");
  content.className = "pt-16 text-center";

  // Name
  const name = document.createElement("h2");
  name.textContent = `${user.name.first} ${user.name.last}`;
  name.className = "text-2xl font-bold text-gray-800";

  // Username
  const username = document.createElement("p");
  username.textContent = `@${user.login.username}`;
  username.className = "text-blue-600";

  // Gender + Age Container
  const badgeContainer = document.createElement("div");
  badgeContainer.className = "mt-3 flex justify-center gap-2";

  const gender = document.createElement("span");
  gender.textContent = user.gender;
  gender.className = "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm";

  const age = document.createElement("span");
  age.textContent = `${user.dob.age} Years`;
  age.className = "px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm";

  badgeContainer.append(gender, age);

  // Details Container
  const details = document.createElement("div");
  details.className = "mt-5 text-left space-y-3";

  const email = document.createElement("p");
  email.textContent = `📧 ${user.email}`;

  const phone = document.createElement("p");
  phone.textContent = `📱 ${user.phone}`;

  const location = document.createElement("p");
  location.textContent = `📍 ${user.location.city}, ${user.location.state}, ${user.location.country}`;

  const nationality = document.createElement("p");
  nationality.textContent = `🌍 Nationality: ${user.nat}`;

  const registered = document.createElement("p");
  registered.textContent = `📅 Registered: ${new Date(
    user.registered.date,
  ).toLocaleDateString()}`;

  details.append(email, phone, location, nationality, registered);

  // Build Structure
  content.append(name, username, badgeContainer, details);

  profile.append(img, content);

  card.append(cover, profile);

  usersContainer.appendChild(card);
}
