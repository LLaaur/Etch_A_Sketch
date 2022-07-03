let color = 'black';
let click = true;


const paintSquare = function () {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else if (color === switchColors.value) {
            this.style.backgroundColor = this.value;
        }
        else {
            this.style.backgroundColor = color;
        }
    }
};

const switchColors = function (choice) {
    color = choice;
};

// GENERATING THE SQUARES OF THE SKETCHBOARD

const setSize = function (size) {

    // declaring variables to select the canvas container and all the divs inside it
    let sketchPad = document.querySelector('.canvas-container');
    let sketchPadSquares = sketchPad.querySelectorAll('div');

    // removing each div and creating new ones so the background color of the div always remains white when changing the grid size
    sketchPadSquares.forEach((div) => div.remove());

    // creating rows and columns
    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let total = size * size;

    // loop that creates new divs based on the user input
    for (let i = 0; i < total; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', paintSquare);
        square.style.backgroundColor = 'white';
        sketchPad.appendChild(square);
    };
};

setSize(16);

// RESET BUTTON FUNCTION
const resetSketch = function () {
    location.reload();
};


const warnMsg = document.querySelector('.warning-message')
warnMsg.style.visibility = 'hidden';


// FUNCTION TO CHECK THE SIZE INPUT
const checkSize = function (userInput) {
    if (userInput >= 2 && userInput < 101) {
        setSize(userInput);
    }
};


// ENABLE\DISABLE DRAWING ON CLICK
const drawMode = document.querySelector('.mode h1');

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != 'BUTTON') {
        click = !click;
        if (click){
            drawMode.textContent = 'Drawing'
        }
        else{
            drawMode.textContent = 'Not Drawing'

        }
    }
});