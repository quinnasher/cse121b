/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
  name: "Divine Paul",
  photo: "../images/my-profile.jpg",
  favoriteFoods: ["Jollof Rice", "Fried Rice", "white Rice and Stew", "Masa"],
  hobbies: ["Programming", "Coding", "Music"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
  { place: "Bauchi, Nigeria", length: "13 years" },
  { place: "Lagos, Nigeria", length: "4 years" },
  { place: "Jos, Nigeria", length: "2 years" },
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
const photoEl = document.querySelector("#photo");
photoEl.setAttribute("src", myProfile.photo);
photoEl.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((favFood) => {
  const liEl = document.createElement("li");
  liEl.textContent = favFood;
  document.querySelector("#favorite-foods").appendChild(liEl);
});
/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  const liEl = document.createElement("li");
  liEl.textContent = hobby;
  document.querySelector("#hobbies").appendChild(liEl);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((place) => {
  const dtEl = document.createElement("dt");
  const ddEl = document.createElement("dd");
  dtEl.textContent = place.place;
  ddEl.textContent = place.length;

  document.querySelector("#places-lived").appendChild(dtEl);
  document.querySelector("#places-lived").appendChild(ddEl);
});
