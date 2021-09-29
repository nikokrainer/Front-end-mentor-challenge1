const btnHamburger = document.querySelector("#btnHamburger")
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")
const fadeElems = document.querySelectorAll(".has-fade")
const body = document.querySelector('body')

header.addEventListener("click", () => {
  if (header.classList.contains("open")) {   //close hamburger menu
    body.classList.remove('noscroll')
    header.classList.remove("open")
    fadeElems.forEach((elem) => {
      elem.classList.remove("fade-in")
      elem.classList.add("fade-out")
    })
  } else {    //open hamburger menu
    header.classList.add("open")
    body.classList.add('noscroll')
    fadeElems.forEach((elem) => {
      elem.classList.remove("fade-out")
      elem.classList.add("fade-in")
    })
  }
})
