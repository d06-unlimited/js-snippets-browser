// select an DOM item by CSS selector
const body = document.querySelector("body")
const divDemo = document.querySelector(".demo")
const button = document.querySelector(".btn-theme-switch"); // just fetches FIRST button it finds!
const buttons = document.querySelectorAll("button") // fetches ALL buttons in document
const buttonLast = document.querySelector("section > :nth-child(2)")

// console.log(body)
// console.log(button)
// console.log(buttonLast)

// console.log("Hallo");
// console.log();
// console.log("JS im Browser geht ja auch, ey! Geil!");

// overwrite all CSS of element at once using classical CSS
// divDemo.style.cssText = "background-color: blue; font-size: 3rem"

// console.log(divDemo);
// console.log(button)

// register a click event handler for the button
// meaning: if the user clicks that f**** button, we will execute some code (inside the function block)
button.addEventListener("click", function() {
  console.log("Button wurde geklickt!");

  // toggle TEXT of button (from Light to Dark)
  if (button.innerText == "Light") {
    button.innerText = "Dark";
  } else {
    button.innerText = "Light";
  }

  // toggle CSS properties (Light Mode / DarkMode)

  // get current value of CSS variable
  let cssPropValue =
    getComputedStyle(body).getPropertyValue("--theme-bg-color");
  cssPropValue = cssPropValue.trim();
  console.log("Current Theme:", cssPropValue);

  // if current theme mode is white => toggle variables to darkmode
  if (cssPropValue == "white") {
    body.style.setProperty("--theme-bg-color", "dimgray");
    body.style.setProperty("--theme-fg-color", "white");
  }
  // if current theme is not white (=dark) => toggle variables to lightmode
  else {
    body.style.setProperty("--theme-bg-color", "white");
    body.style.setProperty("--theme-fg-color", "dimgray");
  }

  // remove one specific style prop (e.g. border)
  // button.style.border = "none"

  // if we want to set CSS style attributes, we have to use camelCase (starting lowercase, following words uppercase)
  // example: background-color => backgroundColor, transform-origin => transformOrigin

  // toggle a CSS CLASS
  // toggle means: if class already exists on element => REMOVE class. otherwise ADD class
  // divDemo.classList.toggle("corallify");
})