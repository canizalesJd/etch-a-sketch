const grid = document.querySelector(".grid");

const square = document.createElement("div");
square.classList.add("square");

// I'll make this a user input
let gridSize = 16;

const createGrid = (gridSize) => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    square.style.height = `${100 / gridSize}%`;
    square.style.width = `${100 / gridSize}%`;
    grid.appendChild(square.cloneNode(true));
  }
};

createGrid(gridSize);
