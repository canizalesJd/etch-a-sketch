const grid = document.querySelector(".grid");

const square = document.createElement("div");
square.classList.add("square");

// To do: convert this to user input
let gridSize = 64;

const createGrid = (gridSize) => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    square.style.height = `${100 / gridSize}%`;
    square.style.width = `${100 / gridSize}%`;
    grid.appendChild(square.cloneNode(true));
  }
};

const sizeInput = document.querySelector(".grid-size");
sizeInput.addEventListener("change", () => {
  gridSize = sizeInput.value;
  grid.innerHTML = "";
  createGrid(gridSize);
});

createGrid(gridSize);

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "#707070";
  });
});
