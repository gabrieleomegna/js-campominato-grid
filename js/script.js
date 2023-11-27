// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro 
// ed emetto un messaggio in console con il numero della cella cliccata.


// ! Aggiungo un EventListener al bottone play
  // ! genero una griglia quadrata 10x10

const wrapperElement = document.querySelector('div.wrapper');

const btnPlayElement = document.querySelector('button#play');


btnPlayElement.addEventListener('click',
function () {
    gridGenerator (100, wrapperElement);
})






// ! Aggiungo un event listener per ogni cella in cui:
  // ! la cella si colora di azzurro
  // ! emetto un messaggio in console in cui viene scritto il numero della cella corrispondente


// wrapperElement.appendChild(gridGenerator(100));

function gridGenerator(numberOfSquares, parent) {
    for (let i = 0; i < numberOfSquares; i++) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square-item');
        parent.appendChild(squareElement);
    }
}