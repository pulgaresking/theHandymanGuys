function showAnimation() {
  const left = document.querySelectorAll(".left");
  const right = document.querySelectorAll(".right");
  const screenHeight = window.innerHeight / 1.3;

  left.forEach((l) => {
    const leftHeight = l.getBoundingClientRect().top;
    if (leftHeight < screenHeight) {
      l.classList.add("animation-appear");
    }
  });

  right.forEach((r) => {
    const rightHeight = r.getBoundingClientRect().top;
    if (rightHeight < screenHeight) {
      r.classList.add("animation-appear");
    }
  });
}

showAnimation();
