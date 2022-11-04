console.log("JS ist da! Zu Diensten!")

// document element => complete scrollable area
const root = document.scrollingElement

const nav = document.querySelector("nav")

// console.log(root.clientHeight, root.scrollHeight);

window.addEventListener("scroll", function() {

  // if we scroll down to a certain position in scroll area
  // => hide navbar
  if (root.scrollTop > 200) {
    // console.log("Scroll Top:", root.scrollTop, root.scrollHeight)
    // nav.style.display = "none";
    // nav.style.opacity = 0
    nav.style.translate = "0 -15vh";
  }
  // if we scrol up to a certain position in scroll area
  // => show navbar
  else {
    // nav.style.display = "flex"
    // nav.style.opacity = 1
    nav.style.translate = "0";
  }


})