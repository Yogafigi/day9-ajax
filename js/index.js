const menuToggle = document.querySelector(".menu-toggle input");
const hambMenu = document.querySelector(".hamb-menu ");

menuToggle.addEventListener("click", function () {
  hambMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!menuToggle.contains(e.target)) {
    hambMenu.classList.remove("active");
    inputFalse();
  }
});

const inputFalse = () => {
  const inputMenu = document.querySelector(".input-menu");
  inputMenu.checked = false;
};
