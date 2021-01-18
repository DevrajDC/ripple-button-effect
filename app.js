const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
  let addAnimation = false;
  if (element.classList[1] == "FLASH") {
    element.addEventListener("animationend", (e) => {
      element.classList.remove(ANIMATEDCLASSNAME);
    });
    addAnimation = true;
  }
  if (!ELEMENTS_SPAN[index])
    ELEMENTS_SPAN[index] = element.querySelector("span");
});

// next button
function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}
