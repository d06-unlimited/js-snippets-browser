/**
 * PLAN:
 *
 * - X have two constants email and password (with the correct login data)
 * - X get login button from DOM
 * - X make login button clickable
 * - when login button clicked
 *   - X get email and password from input fields
 *   - X compare values from input fields with our two constants email and password ???
 *   - wenn matchen => mache dashboard visible!
 *   - wenn nicht matchen => popup => login falsch!
 */

// Collect DOM (HTML) elements
const button = document.querySelector(".btn-login");
const inpütEmail = document.querySelector("input[name='email']");
const inpütPw = document.querySelector("input[name='password']");
const dashboard = document.querySelector(".dashboard");
const error = document.querySelector(".error");

const emailCorrecto = "admin@cloudy.com";
const pwCorrecto = "cloudy123";

button.addEventListener("click", function () {
  console.log("Form submitted....");

  const emailTyped = inpütEmail.value;
  const pwTyped = inpütPw.value;

  if (emailCorrecto === emailTyped && pwCorrecto === pwTyped) {
    console.log("Truthy");
    dashboard.style.display = "block"
    error.style.display = "none"
  } else {
    console.log("Falsey");
    error.style.display = "block"
    dashboard.style.display = "none"
  }

  console.log(emailTyped, pwTyped);
});
