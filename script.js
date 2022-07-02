let color = 'black';

const colorPicker = document.getElementById('colorpicker');

const paintSquare = function () {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }
        else if (color === switchColors.value) {
            this.style.backgroundColor = this.value;
        }
        else{
            this.style.backgroundColor = color;
        }
};

const switchColors = function (choice) {
    color = choice;
};

// GENERATING THE SQUARES OF THE SKETCHBOARD

const setSize = function (size) {

    let sketchPad = document.querySelector('.canvas-container');
    let sketchPadSquares = sketchPad.querySelectorAll('div');

    sketchPadSquares.forEach((div) => div.remove());

    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let total = size * size;

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
        warnMsg.style.visibility = 'hidden';
        setSize(userInput);
    }
    else {
        warnMsg.style.visibility = 'visible';
    }
}