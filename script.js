const sketchPad = document.querySelector('.canvas-container');
const sketchPadSquares = sketchPad.querySelectorAll('div');


const paintSquare = function(color){
    this.style.backgroundColor = 'black';
};

// GENERATING THE SQUARES OF THE SKETCHBOARD

const setSize = function(size){


    sketchPad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    sketchPadSquares.forEach( (div)  => div.remove())

    let total = size * size;

    for (let i = 0; i < total; i++){
        let square = document.createElement('div');
        square.addEventListener('mouseover', paintSquare);
        square.style.backgroundColor = 'white';
        sketchPad.appendChild(square);
    };
};

const resetSketch = function(value){
        location.reload();
};

setSize(16);


