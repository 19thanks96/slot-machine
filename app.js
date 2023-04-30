let spinnersContainer = document.querySelector('#spinners-container')
console.log('hello');

const krytilka = [ 'tr', 'sq', 'crc', 'tr', 'sq' ];
let i = 0;
function drawRow() {
    let row = document.createElement('div')
    i++;
    row.className = 'row'
    row.id = `row-${i}`
    spinnersContainer.append(row)
  krytilka.forEach(drawFigure);
    function drawFigure(figure) {
        const figureElement = document.createElement('div');
        figureElement.className = 'figure-element';
        figureElement.innerHTML = figure;
        row.append(figureElement);
    }
}
const ri4ag = document.querySelector('#ri4ag');
let spinnersContainerTop = 0



ri4ag.addEventListener('click', krytVert);
function krytVert() {
  spinnersContainerTop -= 500;
  spinnersContainer.style.top = spinnersContainerTop + 'px';
  drawFiveRow()
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
  const randomIndex = Math.floor(Math.random() * 4);
  krytilka[randomIndex] = krytilka[randomIndex + 1];
  drawRow();
}