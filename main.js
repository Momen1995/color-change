// Select key DOM elements for interaction
const root = document.querySelector("#root"); 
const startBtn = document.querySelector("#start-btn"); 
const stopBtn = document.querySelector("#stop-btn"); 
const demo = document.querySelector("#demo");
const colorInput = document.querySelector(".color-input"); 
const doneBtn = document.querySelector(".done-btn"); 

let intervalId; 
let bgColor; 

// Start changing background color every second when the start button is clicked
startBtn.addEventListener("click", () => {
  intervalId = setInterval(() => {
    bgColor = randomColorGenerate(); 
    root.style.backgroundColor = bgColor; 
  }, 1000);
});

// Stop the background color changes and display the current color when the stop button is clicked
stopBtn.addEventListener("click", () => {
  clearInterval(intervalId); 
  demo.textContent = `Current RGB color: ${bgColor}`; 
});

// Function to generate a random RGB color
function randomColorGenerate() {
  let red = Math.floor(Math.random() * 255); 
  let green = Math.floor(Math.random() * 255); 
  let blue = Math.floor(Math.random() * 255); 
  return `rgb(${red},${green},${blue})`; 
}

// Function to handle custom color input and apply it as the background color
function getInputColor() {
  doneBtn.addEventListener("click", () => {
    const inputColor = colorInput.value; 
    console.log(inputColor);

    
    const [r = 0, g = 0, b = 0] = inputColor.split(",");
    console.log(r, g, b);

    // Convert values to numbers
    const red = Number(r);
    const green = Number(g);
    const blue = Number(b);

    // Validate that RGB values are within the correct range
    if (red <= 255 && green <= 255 && blue <= 255) {
      root.style.backgroundColor = `rgb(${red},${green},${blue})`; 
    } else {
      demo.textContent = "RGB values must be between 0 and 255."; 
    }
  });
}

// Initialize custom color input handler
getInputColor();
