let spinnersContainer = document.querySelector('#spinners-container')

const imgArray = [ 'cherry.png', 'dimond.png', 'lemon.png', 'pumpkin.png', 'seven.png', ];

function drawRow(randomArray) {
    let row = document.createElement('div')
    row.className = 'row'
    spinnersContainer.append(row)
    randomArray.forEach(drawFigure);
    function drawFigure(figure) {
        const figureElement = document.createElement('div');
        figureElement.className = 'figure-element';
        figureElement.innerHTML = `<img src='${figure}'/>`
        row.append(figureElement);
    }
}
const ri4ag = document.querySelector('#ri4ag');
let spinnersContainerTop = 0

const spinDuration = 1500;
ri4ag.addEventListener('click', spin);

function spin() {
  ri4ag.src = 'lever.gif';
  setTimeout(stopSpinning, spinDuration);
  spinnersContainerTop -= 500;
  spinnersContainer.style.top = spinnersContainerTop + 'px';
  drawFiveRow()
}

function stopSpinning() {
  // replace gif with png to stop spin animation
  ri4ag.src = 'lever.png';
}

drawFiveRow()

function drawFiveRow() {
  const randomArray0 = getRandomArray();
  const randomArray1 = getRandomArray();
  const randomArray2 = getRandomArray();
  const randomArray3 = getRandomArray();
  const randomArray4 = getRandomArray();

  if (winCombination(randomArray0)) {
    setTimeout(congratulation, spinDuration) 
  }

  drawRow(randomArray0);
  drawRow(randomArray1);
  drawRow(randomArray2);
  drawRow(randomArray3);
  drawRow(randomArray4);
}

function congratulation() {
  alert('win')
}
function getRandomNumber() {
  return Math.floor(Math.random() * imgArray.length)
}

function getRandomArray() {
  return [
    imgArray[getRandomNumber()],
    imgArray[getRandomNumber()],
    imgArray[getRandomNumber()],
    imgArray[getRandomNumber()],
    imgArray[getRandomNumber()],
  ]
}

function winCombination(randomArray0) {
  if(randomArray0[0]===randomArray0[1] ) {
    return true
  }
}