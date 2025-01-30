const root = document.querySelector("#root");
const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const demo = document.querySelector("#demo");
const colorInput = document.querySelector(".color-input");
const doneBtn = document.querySelector(".done-btn");
let intervalId;
let bgColor;

startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    bgColor = randomColorGenerate();
    root.style.backgroundColor = bgColor;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  demo.textContent = `Current RGB color ${bgColor}`;
});

function randomColorGenerate() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return `rgb(${red},${green},${blue})`;
}

function getInputColor() {
  doneBtn.addEventListener("click", () => {
    const inputColor = colorInput.value;
    console.log(inputColor);

    const [r = 0, g = 0, b = 0] = inputColor.split(",");
    console.log(r, g, b);

    const red = Number(r);
    const green = Number(g);
    const blue = Number(b);

    if (red <= 255 && green <= 255 && blue <= 255) {
      root.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else  {
     demo.textContent = "RGB values must be between 0 and 255."
    }
  });
}

getInputColor();
