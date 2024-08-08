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
    gridColorChange();
}

let randomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function gridColorChange() {
    let items = document.querySelectorAll('.cell');
        items.forEach(item => {
            item.addEventListener('mouseover', () => {
                item.style.backgroundColor = `${randomColor()}`;
            }); 
        });
}