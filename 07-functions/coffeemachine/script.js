// coffee card template
{
  /* <div class="coffee">
  <div>
    <img src="https://source.unsplash.com/100x100/?coffee,crema" />
  </div>
  <div>Crema</div>
  <div>0.99</div>
</div>; */
}

const coffees = [
  {
    image: "https://source.unsplash.com/100x100/?coffee,crema",
    name: "Crema",
    price: 0.99,
  },

  {
    image: "https://source.unsplash.com/100x100/?coffee,espresso",
    name: "Espresso",
    price: 1.49,
  },
  {
    image: "https://source.unsplash.com/100x100/?coffee,cappuccino",
    name: "Cappuccino",
    price: 1.99,
  },
];

// Grab coffees container div
const coffeeContainer = document.querySelector(".coffees")
const buttonBuy = document.querySelector("button")
const inputBetrag = document.querySelector("input[name='betrag']")
const result = document.querySelector(".result")

// loope over coffees
// wandle jedes coffee object in ein DIV um
// let htmlCoffees = "";

// store coffee choice here (Outside of loop!)
let coffeeChoice

for (let coffee of coffees) {
  const coffeeCard = document.createElement("div")  
  coffeeCard.className = "coffee"

  coffeeCard.innerHTML = `<div>
                      <img src="${coffee.image}" />
                    </div>
                    <div>${coffee.name}</div>
                    <div>${coffee.price}</div>
  `;

  // add click listener to coffee DIV
  // so once we click it, we chose that coffee
  coffeeCard.addEventListener("click", () => {
    console.log("Coffee Choice: ", coffee.name)
    coffeeChoice = coffee // packe geklickten Coffee in meine Variable
  })

  // add coffee card item to container
  coffeeContainer.appendChild(coffeeCard)
}


buttonBuy.addEventListener("click", () => {
  console.log("Du willst kaufen: ", coffeeChoice.name)
  console.log("Ich geb dir: ", inputBetrag.value)
  console.log("Kaufen, jetzt!")

  const betrag = Number(inputBetrag.value) // convert string to number

  // check price of chosen coffee! if betrag ausreichend!
  if( betrag >= coffeeChoice.price) {
    console.log("Reicht!")
    result.innerHTML = "Enjoy!"
  }
  else {
    console.log("Reicht nicht! Mehr GELD!")
    result.innerHTML = "Reicht nicht! Mehr GELD"
  }
})