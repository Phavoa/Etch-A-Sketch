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
  const colorPicker = document.querySelector('#colorPicker');
  const ranbow = document.querySelector('#ranbow');
  const erase = document.querySelector('#erase');

  colorPicker.addEventListener("input", () => {
    changeBackgroundColor(element, selectColor());
  });

  ranbow.addEventListener('click', () => {
    changeBackgroundColor(element, getRandomColor());
  });

  erase.addEventListener('click', () => {
    changeBackgroundColor(element, "white");
  });
}

function changeBackgroundColor(element, color) {
  element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = color;
  });

  element.addEventListener("mouseleave", () => {
    element.style.backgroundColor = color;
  });
}


function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function selectColor() {
  const colorPicker = document.querySelector('#colorPicker');
  const selectedColor = colorPicker.value;
  return selectedColor;
}


function getSize() {
  let newSize = prompt("Enter the number of squares per side (up to 100):");

  if (newSize === null || isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Invalid input. Please enter a number between 1 and 100.");
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


const newGridContainer = createGrid(16);
container = document.querySelector('.container');
container.append(newGridContainer);


const colors = ["#FF5733", "#33FF57", "#5733FF", "#33B5FF"];

// Function to change the background color
function changePageColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}
setInterval(changePageColor, 3000);