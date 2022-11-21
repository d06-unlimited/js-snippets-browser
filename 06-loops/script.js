/**
 * X Grab Input Field
 * X Listen for user input
 * Have an array of pizzas ready
 * When user types / changes input:
 * - search typed input in array
 * Display found items in a container
 * If no search input => show all pizzas in array
 */

console.log("JS eingebunden! Let's rock...");

// DOM NODES
const elSearch = document.querySelector("input[name='search']");
const elPizzasContainer = document.querySelector(".pizzas")

// DATA
const arrPizzas = ["Funghi", "Hawaii", "Hotdog", "Choco", "Salami", "Tuna", "Nutella"];

// dasselbe wie: function displayPizzas() {} 
const displayPizzas = (arrPizzas) => {
  elPizzasContainer.innerHTML = ""; // clear container

  // Show pizzas in pizzas container
  for (let i = 0; i < arrPizzas.length; i++) {
    // grab current item that we loop over
    const currentPizza = arrPizzas[i];

    // create HTML element from item
    const elPizza = document.createElement("div");
    elPizza.innerText = currentPizza.toUpperCase(); // ex: FUNGHI

    // add to container
    elPizzasContainer.appendChild(elPizza);
  }
};

// CALL the function
displayPizzas(arrPizzas);


// Named Function: function myName() oder const myName = () => {} 
// anynomous function: () => {} (kein Name)

// Search on user input
elSearch.addEventListener("input", () => {
  const searchTerm = elSearch.value;
  console.log("Somethin changed...", searchTerm);

  // stores all items that match the search
  const arrPizzasMatch = []

  // loop over all array items
  // check which one includes the search term
  // show only the matching items
  for(let i=0; i<arrPizzas.length; i++) {

    // grab the current item we loop over... and store it in variable
    const currentPizza = arrPizzas[i]

    // check if searchTerm is INCLUDED in currentPizza
    if( currentPizza.toLowerCase().includes(searchTerm.toLowerCase()) ) {
      arrPizzasMatch.push( currentPizza )
    }
  }

  // show search result
  console.log(arrPizzasMatch)

  // display pizzas but just the search results (not all)
  displayPizzas(arrPizzasMatch)

});

// change event is triggered when user leaves the item
// => often used for validating if the input if user is correct
// elSearch.addEventListener("change", () => {
//   console.log("Somethin changed...");
// });
