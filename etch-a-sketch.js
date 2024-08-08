let gridsize = 16;
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
}


// function gridColorChange {
//     for (let )
// }