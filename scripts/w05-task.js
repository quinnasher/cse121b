/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElement = document.querySelector("#temples");
const templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const articleEl = document.createElement("article");
    const h3El = document.createElement("h3");
    const imageEl = document.createElement("img");

    h3El.textContent = temple.templeName;
    imageEl.setAttribute("src", temple.imageUrl);
    imageEl.setAttribute("alt", temple.templeName);

    articleEl.appendChild(h3El);
    articleEl.appendChild(imageEl);
    templeElement.appendChild(articleEl);
  });
};

/* async getTemples Function using fetch()*/

const getTemples = async () => {
  try {
    const response = await fetch(
      "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json",
    );
    const temples = await response.json();
    templeList.push(...temples);

    displayTemples(templeList);
  } catch (e) {
    console.log(e.message);
  }
};

/* reset Function */

const reset = () => {
  templeElement.innerHTML = "";
};

/* filterTemples Function */

const filterTemples = (temples) => {
  reset();
  const filter = document.querySelector("#filtered").value;

  switch (filter) {
    case "utah": {
      const utahTemples = temples.filter((temple) =>
        temple.templeName.toLowerCase().includes("utah"),
      );
      displayTemples(utahTemples);
      break;
    }
    case "notutah": {
      const notUtahTemple = temples.filter(
        (temple) => !temple.templeName.toLowerCase().includes("utah"),
      );
      displayTemples(notUtahTemple);
      break;
    }
    case "older": {
      const oldestTemples = temples.filter((temple) => {
        const compareDate = new Date(1950, 0, 1).getTime();
        const dedicatedDate = new Date(temple.dedicated).getTime();
        return compareDate > dedicatedDate;
      });
      console.log(oldestTemples);
      displayTemples(oldestTemples);
      break;
    }

    case "sorted": {
      temples.sort((a, b) => a.templeName.localeCompare(b.templeName));
      console.log(temples);
      displayTemples(temples);
    }
  }
};

/* Event Listener */
document
  .querySelector("#filtered")
  .addEventListener("change", () => filterTemples(templeList));
getTemples();
