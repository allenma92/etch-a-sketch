// default values 
const defaultGrid = 16

//variables to be adjusted for values to be defined
let currentSize = defaultGrid;

//makes the new slider value the newSize value 
function setCurrentSize(newSize) {
    currentSize = newSize;
}

const resetBtn = document.getElementById('clearGrid');
const sizeNumber = document.getElementById('sizeNumber');
const sizeChanger = document.getElementById('sizeChanger');
const container = document.querySelector('.container');

//event listeners to give values when user interacts with slider for sizeChange function
sizeChanger.onmousemove = (e) => newSizeValue(e.target.value);
sizeChanger.onchange = (e) => sizeChange(e.target.value);

//event listener to run clear grid function when user clicks 'Reset' button
resetBtn.onclick = () => reloadGrid();


// assigns values to corresponding functions
function sizeChange(value) {
    setCurrentSize(value);
    newSizeValue(value);
    reloadGrid();
}

//updates HTML numbers to let user choose grid size calls from even listener
function newSizeValue(value) {
    sizeNumber.innerHTML = `${value} x ${value}`;
}

// when user selects new grid size, this function creates the new grid with new slider values
function reloadGrid() {
    clearGrid();
    newGrid(currentSize);
}

// erases grid when new slider values are selected
function clearGrid() {
    container.innerHTML = '';
}

//makes grid based on default value or slider value
function newGrid (size) {
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
   

    for (let i = 0; i < size * size; i++) {
        const gridDiv = document.createElement('div');
        // add hover event listener to div element
        gridDiv.addEventListener('mouseover', changeColor);
        container.appendChild(gridDiv);
    }
}
 // mouseover function to change gridDiv color
function changeColor(e) {
    e.target.style.backgroundColor = '#007C80';
}

newGrid(defaultGrid);