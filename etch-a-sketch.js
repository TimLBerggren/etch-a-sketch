const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; i++) {
        const cell = document.querySelector('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}