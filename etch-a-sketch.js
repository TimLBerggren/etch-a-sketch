let gridsize = 20;

// function gridSize(input) {
//     let prompt = document.querySelector('.prompt')
//     if (input > 100 || input < 2) {
//         prompt.textContent = "Enter a value between 2 and 100."
//     }
//     else {
//         createGrid(input)
//         prompt.textContent = "Grid has been created."
//     }
// }

function createGrid() {
    const grid = document.querySelector('.grid');

    grid.innerHTML = '';

    grid.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;

    for (let i = 0; i < gridsize; i++) {
        for (let j = 0; j < gridsize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
        }
        gridColorChange();
    }
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
    createGrid.innerHTML = '';
    createGrid();
} 

let clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener("click", () => {
    clearGrid();
})

createGrid();