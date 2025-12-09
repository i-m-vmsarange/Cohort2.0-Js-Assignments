//finds the values of the form input elements
let form = document.querySelector("form");
let username = document.querySelector("#name");
let occupation = document.querySelector("#role");
let bio = document.querySelector("#bio");
let pic = document.querySelector("#url");
let cards = document.querySelector(".cards");

const userManager = {
  // userManager is a object in which there is empty array initially in which we will store users
  users: [],
  // this does not depend upon where function is written it depends on how the functin is called

  init() {
    form.addEventListener("submit", userManager.submitForm.bind(this));
  },

  submitForm(e) {
    e.preventDefault();
    this.addUser();
    form.reset();
    this.renderUI();
    console.log(this.users);
  },

  addUser() {
    this.users.push({
      userid: Date.now(), // yahan ek new unique userid add ho chuki hai
      username: username.value,
      occupation: occupation.value,
      bio: bio.value,
      pic: pic.value,
    });
  },
  removeUser(userid) {
    this.users = this.users.filter((user) => {
      return user.userid !== userid;
    });
    this.renderUI();
  },
  renderUI() {
    cards.innerHTML = ""; // Clear UI

    this.users.forEach(function (user) {
      const card = document.createElement("div");
      card.className = "card";

      card.setAttribute("id", user.userid); // Id card me laga di

      const imgDiv = document.createElement("div");
      imgDiv.className = "img";

      const img = document.createElement("img");
      img.src = user.pic;
      img.alt = "profile picture";
      imgDiv.appendChild(img);

      const userNameEl = document.createElement("h3");
      userNameEl.textContent = user.username;

      const occupationEl = document.createElement("h4");
      occupationEl.textContent = user.occupation;

      const bioEl = document.createElement("h5");
      bioEl.textContent = user.bio;

      const deltBtn = document.createElement("button");
      deltBtn.textContent = "Delete"; // Delete button ko create karo

      deltBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // card click na chale
        userManager.removeUser(user.userid);
      });

      card.appendChild(imgDiv);
      card.appendChild(userNameEl);
      card.appendChild(occupationEl);
      card.appendChild(bioEl);
      card.appendChild(deltBtn);

      cards.appendChild(card);
    });
  },
};

userManager.init(); // this is to attach event listener to the page when launched first
