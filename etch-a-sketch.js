let gridsize = '';

function getGridSize() {
    gridsize = Number(window.prompt("Enter a value for the grid size:"));
}

function setGridDimensions(grid, gridsize) {
    grid.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
}

function createGridCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

function populateGrid(grid, gridsize) {
    for (let i = 0; i < gridsize; i++) {
        for (let j = 0; j < gridsize; j++) {
            const cell = createGridCell();
            grid.appendChild(cell);
        }
    }
}

function createGrid() {
    const grid = document.querySelector('.grid');
    const size = gridsize;

    grid.innerHTML = '';

    setGridDimensions(grid, size);
    populateGrid(grid, size);
    gridColorChange();
}

function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function gridColorChange() {
    let cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.addEventListener('mouseout', () => {
                cell.style.backgroundColor = `${randomColor()}`;
            }); 
        });
}

function clearGrid() {
    const grid = document.querySelector('.grid');
    createGrid.innerHTML = '';
    createGrid();
} 

let clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener("click", () => {
    clearGrid();
})

getGridSize();
createGrid();