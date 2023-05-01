let spinnersContainer = document.querySelector('#spinners-container')

const imgArray = [ 'cherry.png', 'dimond.png', 'lemon.png', 'pumpkin.png', 'seven.png', ];

function drawRow() {
    let row = document.createElement('div')
    row.className = 'row'
    spinnersContainer.append(row)

    imgArray.forEach(drawFigure);
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
  drawRaw();
  drawRaw();
  drawRaw();
  drawRaw();
  drawRaw();
}

function drawRaw() {
  drawRow();
}
