/*
// lecture 1 Values and Variables
const country = "Serbia";
const continent = "Europe";
let population = "8000000";
console.log(country);
console.log(continent);
console.log(population);

// lecture 2 Data types
const isIsland = false;
const language = "serbian";
console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

// lecture 3 let,const (and var) (for this assignment, changes are made in previous two)

// language = "English"; ne moze se menjati constant variable

// lecture 4 Basic Operators
let halfPopulation = population / 2;
console.log(halfPopulation);
population++;
console.log(population);
finlandPopulation = 6000000;
console.log(population > finlandPopulation);
averagePopulation = 33000000;
console.log(population < averagePopulation);
let description = `${country} is in ${continent}, and it's ${population} people speak ${language}.`;
console.log(description);

if (population > averagePopulation) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } below average.`
  );
}

/*
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143


const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("Only one border!");
} else if (Number(numNeighbours > 1)) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}
*/
/*
if (language === "english" && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} does not meet your criteria. :(`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of speakers!");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too! :D");
}

console.log(
  `${country}'s population is ${
    population > 33000000 ? "above" : "below"
  } average`
);
*/
