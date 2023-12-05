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
      cell.textContent = j;
      row.append(cell);
    }
  }

  return gridContainer;
}

const newGridContainer = createGrid(16);
container = document.querySelector('.container');
container.append(newGridContainer); // Append the new grid container to the body
