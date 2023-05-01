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
  const board = [
    getRandomArray(), 
    getRandomArray(), 
    getRandomArray(),
    getRandomArray(),
    getRandomArray(),
  ]

  if (winCombination(board)) {
    setTimeout(congratulation, spinDuration) 
  }

  drawRow(board[0]);
  drawRow(board[1]);
  drawRow(board[2]);
  drawRow(board[3]);
  drawRow(board[4]);
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

function winCombination(board) {
  let rowResult = [true,true,true,true,true];
  let winResult = false;
  board.forEach(fiveInARow);
  
  function fiveInARow (row,rowIndex) {
    let getFiveInRow = true;
    row.forEach(sameInRow);
  
    function sameInRow (imgName,imgIndex) {
      if (row[0] !== imgName) {
        rowResult[rowIndex] = false;
      }
    } 
    
    if ( getFiveInRow !== true) {
      winResult = false
    }
  }

  winResult = rowResult.some(x => x === true)  
  return winResult;
}

