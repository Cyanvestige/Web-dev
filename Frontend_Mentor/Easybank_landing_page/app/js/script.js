const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector("header");
const overlay = document.querySelector(".overlay");
btnHamburger.addEventListener("click", () => {
  if (!header.classList.contains("open")) {
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
  } else {
    overlay.classList.add("fade-out");
    overlay.classList.remove("fade-in");
    header.classList.remove("open");
  }
});
