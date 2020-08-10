const links = document.querySelector(".links");
const button = document.querySelector(".linkShow");

button.addEventListener("click", function () {
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
    links.classList.toggle("linksq");
  }
});
