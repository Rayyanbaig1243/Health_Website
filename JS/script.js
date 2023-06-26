// Responsive CSS Code
const header = document.querySelector(".header");
const navbar_icons = document.querySelector(".menu-bar");

// toggle_header fuction:
const toggle_header = () => {
  header.classList.toggle("active");
};

navbar_icons.addEventListener("click", () => {
  // alert("Hello");
  toggle_header(); // toggle_header fuction call
});
