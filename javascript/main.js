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

function showAnimation() {
  const screenPosition = window.innerHeight / 1.5;
  const leftContents = document.querySelectorAll(".left-content");
  const rightContents = document.querySelectorAll(".right-wrapper");
  const rightImage = document.querySelectorAll(".right-image");
  const leftImage = document.querySelectorAll(".left-image");

  leftContents.forEach(function (leftContent) {
    const leftContentsPosition = leftContent.getBoundingClientRect().top;

    if (leftContentsPosition < screenPosition) {
      leftContent.classList.add("animation-appear");
    }
  });

  leftImage.forEach(function (leftImg) {
    const leftImagePosition = leftImg.getBoundingClientRect().top;

    if (leftImagePosition < screenPosition) {
      leftImg.classList.add("animation-appear");
    }
  });

  rightContents.forEach(function (rightContent) {
    const rightContentsPosition = rightContent.getBoundingClientRect().top;

    if (rightContentsPosition < screenPosition) {
      rightContent.classList.add("animation-appear");
    }
  });

  rightImage.forEach(function (rightImg) {
    const rightImagePosition = rightImg.getBoundingClientRect().top;

    if (rightImagePosition < screenPosition) {
      rightImg.classList.add("animation-appear");
    }
  });
}

window.addEventListener("scroll", showAnimation);

function introAnimation() {
  const left = document.querySelector(".intro-left");
  const right = document.querySelector(".intro-right");

  left.classList.add("intro-appear");
  right.classList.add("intro-appear");
}
introAnimation();
