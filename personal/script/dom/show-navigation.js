const container = document.querySelector(".container");
const menuIcon = document.querySelector(".menu-icon");

export default function showNavigation() {
  menuIcon.addEventListener("click", (e) => {
    container.classList.toggle("navigate");
  });
}
