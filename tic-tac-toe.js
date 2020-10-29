window.addEventListener('DOMContentLoaded', event => {


  let squareValues = ['', '', '', '', '', '', '', '', '']
  let currentPlayerSymbol = 'x';

  let grid = document.getElementById('tic-tac-toe-board');
  let newGame = document.getElementById('new-game');
  let giveUp = document.getElementById('give-up');

  newGame.addEventListener('click', event => {
    window.location.reload(true);
  });



  grid.addEventListener('click', event => {
    let id = event.target.id;

    for (let i = 0; i < 9; i++) {
      if (squareValues[i].length === 0) {
        if (id.includes(String(i))) {
          if (currentPlayerSymbol === 'x') {

            let xImg = document.createElement('img');
            xImg.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg"
            squareValues[i] = currentPlayerSymbol;
            let currentSquare = document.getElementById(id);
            currentSquare.appendChild(xImg);
            currentPlayerSymbol = 'o'
            if (checkWin(squareValues)) {
              let winner = document.getElementById('game-status')
              winner.innerText = "Winner: X"
            }

            giveUp.addEventListener('click', event => {
              let winner = document.getElementById('game-status')
              winner.innerText = "Winner: O"
            });


          } else {

            let oImg = document.createElement('img');
            oImg.src = "https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg"
            squareValues[i] = currentPlayerSymbol;
            let currentSquare = document.getElementById(id);
            currentSquare.appendChild(oImg);
            currentPlayerSymbol = 'x'
            if (checkWin(squareValues)) {
              let winner = document.getElementById('game-status')
              winner.innerText = "Winner: O"
            }

            giveUp.addEventListener('click', event => {
              let winner = document.getElementById('game-status')
              winner.innerText = "Winner: X"
            });


          }
        }
      }
      if (checkDraw(squareValues) && !(checkWin(squareValues))) {
        let draw = document.getElementById('game-status')
        draw.innerText = "Draw"
      }
    }
    console.log(squareValues);
  });
});

let checkDraw = arr => {
  let isDraw = true;
  arr.forEach(ele => {
    if (ele.length === 0) {
      isDraw = false;
    }
  });
  return isDraw;
}

let checkWin = arr => {

  if (arr[0] === 'x' && arr[1] === 'x' && arr[2] === 'x') {
    return true;
  }
  if (arr[3] === 'x' && arr[4] === 'x' && arr[5] === 'x') {
    return true;
  }
  if (arr[6] === 'x' && arr[7] === 'x' && arr[8] === 'x') {
    return true;
  }
  if (arr[0] === 'x' && arr[3] === 'x' && arr[6] === 'x') {
    return true;
  }
  if (arr[1] === 'x' && arr[4] === 'x' && arr[7] === 'x') {
    return true;
  }
  if (arr[2] === 'x' && arr[5] === 'x' && arr[8] === 'x') {
    return true;
  }
  if (arr[0] === 'x' && arr[4] === 'x' && arr[8] === 'x') {
    return true;
  }
  if (arr[2] === 'x' && arr[4] === 'x' && arr[6] === 'x') {
    return true;
  }



  if (arr[0] === 'o' && arr[1] === 'o' && arr[2] === 'o') {
    return true;
  }
  if (arr[3] === 'o' && arr[4] === 'o' && arr[5] === 'o') {
    return true;
  }
  if (arr[6] === 'o' && arr[7] === 'o' && arr[8] === 'o') {
    return true;
  }
  if (arr[0] === 'o' && arr[3] === 'o' && arr[6] === 'o') {
    return true;
  }
  if (arr[1] === 'o' && arr[4] === 'o' && arr[7] === 'o') {
    return true;
  }
  if (arr[2] === 'o' && arr[5] === 'o' && arr[8] === 'o') {
    return true;
  }
  if (arr[0] === 'o' && arr[4] === 'o' && arr[8] === 'o') {
    return true;
  }
  if (arr[2] === 'o' && arr[4] === 'o' && arr[6] === 'o') {
    return true;
  }

}
