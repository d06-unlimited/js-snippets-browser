// select an DOM item by CSS selector
const divDemo = document.querySelector(".demo")
const button = document.querySelector("button")

console.log("Hallo");
console.log();
console.log("JS im Browser geht ja auch, ey! Geil!");

// overwrite all CSS of element at once using classical CSS
// divDemo.style.cssText = "background-color: blue; font-size: 3rem"

// console.log(divDemo);
// console.log(button)

// register a click event handler for the button
// meaning: if the user clicks that f**** button, we will execute some code (inside the function block)
button.addEventListener("click", function() {
  console.log("Button wurde geklickt!");
  // if we want to set CSS style attributes, we have to use camelCase (starting lowercase, following words uppercase)
  // example: background-color => backgroundColor, transform-origin => transformOrigin
  divDemo.style.backgroundColor = "coral";
  divDemo.style.fontSize = "3rem";
})