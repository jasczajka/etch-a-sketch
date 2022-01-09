//create 16 divs and add them to  container
//let canvasSize = prompt("how wide should the canvas be?");
const defaultSize = 16;
const canvas = document.querySelector('#canvas');


function drawCanvas(canvasSize, drawingColor) {
  for (let i = 0; i < Math.pow(canvasSize, 2); i++)
  {
    let newDiv = document.createElement('div');
    newDiv.classList.add('pixel');
    newDiv.style.height = `calc(60vh / ${canvasSize})`;
    newDiv.style.width = `calc(60vh / ${canvasSize})`;
    canvas.appendChild(newDiv);
  }
  canvas.style.gridTemplate = `repeat(${canvasSize}, 1fr) / repeat(${canvasSize}, 1fr)`;
  addDrawingFunctionality(drawingColor)
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//drawing functionality
function addDrawingFunctionality(drawingColor)
{
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i++)
  {
    pixels[i].addEventListener('mouseenter', (e) => {e.target.style.backgroundColor = drawingColor });
  }
}

drawCanvas(defaultSize, 'black');

//clear current canvas
document.querySelector('#reset').addEventListener('click', () =>{
  let pixels = document.querySelectorAll('.pixel');
  Array.from(pixels).forEach(pixel => pixel.style.backgroundColor = 'white');
});

//new canvas with new size
document.querySelector('#new-canvas').addEventListener('click', () => {
  //remove the current canvas
  let pixels = document.querySelectorAll('.pixel');
  Array.from(pixels).forEach(pixel => pixel.remove());
  //draw a new canvas with max size < 100x100
  do
  {
    newSize = prompt('Please enter new length of the canvas (max 100)');
  }
  while(isNaN(newSize) === true || newSize < 0 || newSize > 100)
  drawCanvas(newSize, 'black');
});


let pencilButton = document.querySelector('#pencil-mode');
let rainbowButton = document.querySelector('#rainbow-mode');

//rainbow button
rainbowButton.addEventListener('click', () => {
  rainbowButton.style.border = '3px solid #FF968A';
  pencilButton.style.border = '2px solid';
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i++)
  {
    pixels[i].addEventListener('mouseenter', (e) => {e.target.style.backgroundColor = getRandomColor() });
  }
});


//pencil button
pencilButton.addEventListener('click', () => {
  pencilButton.style.border = '3px solid #FF968A';
  rainbowButton.style.border = '2px solid';
  addDrawingFunctionality('black');

});