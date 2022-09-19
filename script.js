//                                                    light and dark Mode

let body = document.querySelector("body");
let MODE = document.querySelector("#mode");

MODE.addEventListener("click", () => {
  MODE.classList.toggle("fa-moon");

  if (MODE.classList.contains("fa-moon")) {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "1s";
  } else {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "1s";
  }
});
