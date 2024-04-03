/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Paul Divine Onoja";
const currentYear = new Date().getFullYear();
const profilePicture = "./images/my-profile.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.getElementById("image");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}<strong/>`;
yearElement.textContent = currentYear.toString();
imageElement.setAttribute(`src`, profilePicture);
imageElement.setAttribute(`alt`, `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFood = [
  "Jollof Rice",
  "Fried Rice",
  "Tuwon Chinkafa Da Miyan Geda",
  "Golden Yam",
  "Rice and Stew",
];

// for (const food of favFood) {
//   foodElement.textContent +=
//     favFood[favFood.length - 1] !== food ? food + ", " : food + ".";
// }

foodElement.textContent = favFood;

const newFavFood = "Pasta and Sauce";

favFood.push(newFavFood);

foodElement.innerHTML += `<br>${favFood}`;

favFood.splice(0, 1);
foodElement.innerHTML += `<br>${favFood}`;

favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;
