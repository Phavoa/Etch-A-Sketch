function createGrid(gridSize) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add('grid-container');

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    gridContainer.append(row);

    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      addElementEventListeners(cell);
      row.append(cell);
    }
  }

  return gridContainer;
}

function addElementEventListeners(element) {
  element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = "green";
  });

  element.addEventListener("mouseleave", () => {
    element.style.backgroundColor = getRandomColor();
  });
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function getSize() {
  let newSize = prompt("Enter the number of squares per side (up to 100):");

  if (newSize === null || isNaN(newSize) || newSize < 1 || newSize > 150) {
    alert("Invalid input. Please enter a number between 1 and 150.");
    return;
  }

  newSize = parseInt(newSize);

  // Call a function to reset the grid with the new size
  resetGridWithSize(newSize);
}

function resetGridWithSize(size) {
  const newGridContainer = createGrid(size);
  // Replace the old grid with the new one
  const container = document.querySelector('.container');
  container.textContent = ''; // Clear the container
  container.append(newGridContainer);
}

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', getSize);


const newGridContainer = createGrid(150);
container = document.querySelector('.container');
container.append(newGridContainer);