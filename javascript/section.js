function showAnimation() {
  const screenHeight = window.innerHeight / 1.3;
  const pictures = document.querySelectorAll(".gallery-items");
  const secondLeft = document.querySelectorAll(".secondLeft");
  const secondRight = document.querySelectorAll(".secondRight");

  pictures.forEach((picture) => {
    const pictureHeight = picture.getBoundingClientRect().top;
    if (pictureHeight < screenHeight) {
      picture.classList.add("gallery-show");
    }
  });

  secondLeft.forEach((left) => {
    const leftHeight = left.getBoundingClientRect().top;
    if (leftHeight < screenHeight) {
      left.classList.add("animation-appear");
    }
  });
  secondRight.forEach((right) => {
    const rightHeight = right.getBoundingClientRect().top;
    if (rightHeight < screenHeight) {
      right.classList.add("animation-appear");
    }
  });
}

function firstContent() {
  const lefts = document.querySelectorAll(".firstLeft");
  const rights = document.querySelectorAll(".firstRight");
  lefts.forEach((left) => {
    left.classList.add("animation-appear");
  });
  rights.forEach((right) => {
    right.classList.add("animation-appear");
  });
}

firstContent();
window.addEventListener("scroll", showAnimation);
