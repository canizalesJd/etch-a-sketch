const grid = document.querySelector(".grid");

const square = document.createElement("div");
square.classList.add("square");

const createGrid = (gridSize) => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    square.style.height = `${100 / gridSize}%`;
    square.style.width = `${100 / gridSize}%`;
    grid.appendChild(square.cloneNode(true));
  }
};

const generateGradient = () => {
  console.log("test");
};

const randomColor = (square) => {
  const randomR = Math.floor(Math.random() * 255);
  const randomG = Math.floor(Math.random() * 255);
  const randomB = Math.floor(Math.random() * 255);
  color = `rgb(${randomR}, ${randomG}, ${randomB})`;
  square.style.backgroundColor = color;
};

const setSquaresBackground = (color) => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      if (color === "randomColor") {
        const square = event.target;
        randomColor(square);
      }
      square.style.backgroundColor = color;
    });
  });
};

const adjustGridSize = (gridSize, color = "#707070") => {
  grid.innerHTML = "";
  createGrid(gridSize);
  setSquaresBackground(color);
};

const sizeInput = document.querySelector(".grid-size");
sizeInput.addEventListener("change", () => {
  if (sizeInput.value > 100) {
    sizeInput.value = 100;
    alert("Grid size cannot exceed 100");
    adjustGridSize(sizeInput.value);
    return;
  }
  if (sizeInput.value < 1) {
    sizeInput.value = 1;
    alert("Grid size cannot be less than 1");
    return;
  }
  if (isNaN(sizeInput.value)) {
    alert("Please enter a number");
    return;
  }
  adjustGridSize(sizeInput.value);
});

const resetGrid = () => {
  grid.innerHTML = "";
  init();
};

const resetButton = document.querySelector(".reset-grid-btn");
resetButton.addEventListener("click", resetGrid);

const eraserButton = document.querySelector(".eraser-mode-btn");
eraserButton.addEventListener("click", () => {
  setSquaresBackground("#d8d8d8");
});

const grayButton = document.querySelector(".gray-mode-btn");
grayButton.addEventListener("click", () => {
  setSquaresBackground("#707070");
});

const gradientButton = document.querySelector(".gradient-mode-btn");
gradientButton.addEventListener("click", () => {
  setSquaresBackground("gradient");
});

const randomButton = document.querySelector(".random-mode-btn");
randomButton.addEventListener("click", () => {
  setSquaresBackground("randomColor");
});

const init = () => {
  let gridSize = 32;
  createGrid(gridSize);
  setSquaresBackground("#707070");
};

init();
