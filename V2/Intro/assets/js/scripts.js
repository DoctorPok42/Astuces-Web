const container = document.getElementById("container");
const element = document.getElementById("logo");
const title = document.getElementById("title");

setTimeout(() => {
  element.style.animation = "second 0.5s linear";
}, 500);

setTimeout(() => {
  container.style.animation = "background 0.2s linear";
  container.style.backgroundColor = "#57F287";
}, 1000);

setTimeout(() => {
  element.style.animation = "third 0.4s linear";
  element.style.transform = "translateX(-50vh)";
}, 1150);

setTimeout(() => {
  title.style.animation = "title 0.5s linear";
  title.style.opacity = "1";
}, 1450);
