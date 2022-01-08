//create 16 divs and add them to  container
//let canvasSize = prompt("how wide should the canvas be?");
let canvasSize = 16;
const canvas = document.querySelector('#canvas');
console.log(canvas);
for (let i = 0; i < Math.pow(canvasSize, 2); i++)
{
  let newDiv = document.createElement('div');
  newDiv.classList.add('pixel');
  canvas.appendChild(newDiv);
}
//drawing functionality
let pixels = document.querySelectorAll('.pixel');
for (let i = 0; i < pixels.length; i++)
{
  pixels[i].addEventListener('mouseover', (e) => {e.target.style.backgroundColor = 'black' });
}
//reset button functionality
document.querySelector('#reset').addEventListener('click', () =>{
  Array.from(pixels).forEach(pixel => pixel.style.backgroundColor = 'white');
});