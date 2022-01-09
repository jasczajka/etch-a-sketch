//create 16 divs and add them to  container
//let canvasSize = prompt("how wide should the canvas be?");
const defaultSize = 16;
const canvas = document.querySelector('#canvas');


function drawCanvas(canvasSize) {
  for (let i = 0; i < Math.pow(canvasSize, 2); i++)
  {
    let newDiv = document.createElement('div');
    newDiv.classList.add('pixel');
    canvas.appendChild(newDiv);
  }
  canvas.style.gridTemplate = `repeat(${canvasSize}, 1fr) / repeat(${canvasSize}, 1fr)`;
  addDrawingFunctionality()
}


//drawing functionality
function addDrawingFunctionality ()
{
  let pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i++)
  {
    pixels[i].addEventListener('mouseover', (e) => {e.target.style.backgroundColor = 'black' });
  }
}

drawCanvas(defaultSize);

//reset button functionality
document.querySelector('#reset').addEventListener('click', () =>{
  let pixels = document.querySelectorAll('.pixel');
  Array.from(pixels).forEach(pixel => pixel.style.backgroundColor = 'white');
});

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
  drawCanvas(newSize);
});