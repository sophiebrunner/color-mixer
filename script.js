function renderColorApp() {
  const main = document.querySelector("main");
  const header = document.querySelector("header");

  const colorSlider = document.querySelector("#slider-container");

  const redValue = document.querySelector("#red");
  const greenValue = document.querySelector("#green");
  const blueValue = document.querySelector("#blue");

  const colorLabel = document.querySelector("label[for=slider-container]");
  const btnRandomColor = document.querySelector("#btn-rndm-clr");

  colorSlider.addEventListener("change", function () {
    changeColor("--red-value", redValue.value);
    changeColor("--green-value", greenValue.value);
    changeColor("--blue-value", blueValue.value);
    changeColorLabel();
  });

  btnRandomColor.addEventListener("click", getRandomColor);

  function changeColor(customColor, colorValue) {
    main.style.setProperty(customColor, colorValue);
    header.style.setProperty(customColor, colorValue);
  }

  let rgbToHex = function (rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return hex;
  };

  let fullColorHex = function (r, g, b) {
    let red = rgbToHex(r);
    let green = rgbToHex(g);
    let blue = rgbToHex(b);
    return red + green + blue;
  };

  function changeColorLabel() {
    colorLabel.innerText =
      "#" + fullColorHex(redValue.value, greenValue.value, blueValue.value);
  }

  function getRandomColor() {
    fetch("https://dummy-apis.netlify.app/api/color")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        changeColor("--red-value", data.rgb.r);
        redValue.value = data.rgb.r;
        changeColor("--green-value", data.rgb.g);
        greenValue.value = data.rgb.g;
        changeColor("--blue-value", data.rgb.b);
        blueValue.value = data.rgb.b;
        colorLabel.innerText = data.color;
      });
  }
}

renderColorApp();
