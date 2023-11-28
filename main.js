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

const setSquaresBackground = (color) => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
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

const init = () => {
  let gridSize = 32;
  createGrid(gridSize);
  setSquaresBackground("#707070");
};

init();
