const main = document.querySelector("main");
const header = document.querySelector("header");

const redValue = document.querySelector("#red");
const greenValue = document.querySelector("#green");
const blueValue = document.querySelector("#blue");

const colorLabel = document.querySelector("label[for=slider-container]");

function changeColorLabel() {
  colorLabel.innerText =
    "rgb(" +
    redValue.value +
    "," +
    greenValue.value +
    "," +
    blueValue.value +
    ")";
}

redValue.addEventListener("change", function () {
  main.style.setProperty("--red-value", redValue.value);
  header.style.setProperty("--red-value", redValue.value);
  changeColorLabel();
});

greenValue.addEventListener("change", function () {
  main.style.setProperty("--green-value", greenValue.value);
  header.style.setProperty("--green-value", greenValue.value);
  changeColorLabel();
});

blueValue.addEventListener("change", function () {
  main.style.setProperty("--blue-value", blueValue.value);
  header.style.setProperty("--blue-value", blueValue.value);
  changeColorLabel();
});
