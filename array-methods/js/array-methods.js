console.log('connected...')
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(function(planet) {
    planetEl.innerHTML += `<div class="planet">${planet}</div>`
});

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const capitalizedPlanets = planets.map(function(planet){
    // take the first character and capitalize it, then add
    // back the original string minus the first letter (slice(1))
    return planet.split("")[0].toUpperCase() + planet.slice(1);
});

console.log("capitalized Planets:", capitalizedPlanets)


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const ePlanets = planets.filter(function(planet) {
    return planet.includes('e');
})

console.log('planets with an e: ', ePlanets);

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentence = words.reduce(function(prev, curr){
    return prev += " " + curr;
});

console.log("sentence: ", sentence);