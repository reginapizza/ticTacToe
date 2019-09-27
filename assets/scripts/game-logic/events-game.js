'use strict'

const api = require('./api-game.js')
const ui = require('./ui-game.js')
const store = require('../store')

let currentPlayer = 'X'

const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
  }
}

// const onChoice = function (event) {
//   event.preventDefault()
//   const div = event.target
//   console.log(div)
//   $(event.target).text('x')
// }

const cellClick = function (event) {
  // if the cell clicked is both empty and the game is not over...
  if ($(event.target).text() === '' /* && store.gameOver === false */) {
    // makes markers for the current player x or o
    $(event.target).text(currentPlayer)
    checkForWin()
    checkForTie()
    isGameOver()
    if (currentPlayer === 'X') {
      // store.user/* store playerX data */
    } else if (currentPlayer === 'O') {
      // store.user/* store playerO data */
    }
    //       playerXMoves.push(event.target.id)
    //     } else if (currentPlayer === 'O') {
    //       playerOMoves.push(event.target.id)
    //     }
    // $('#messageBox').text(checkForWin())
    switchPlayer()
  }
}
// store.game.cells[event.target.id] = currentPlayer

// this function will clear the gameboard, not refresh, and trigger api newGame
const onNewGame = function (event) {
  event.preventDefault()
  // clear board but don't refresh page
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUpdateGame = function (event) {
  event.preventDefault()
  // clear board but don't refresh page
  api.newGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

// this functions checks for a win and tells you which player won.
const checkForWin = function () {
  const cells = store.game.cells
  // for horizontal wins X
  if (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') {
    ui.onWin()
  } else if (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') {
    ui.onWin()
  } else if (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') {
    ui.onWin()
    // for vertical wins for X
  } else if (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') {
    ui.onWin()
  } else if (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') {
    ui.onWin()
  } else if (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') {
    ui.onWin()
  // for diagonal wins for X
  } else if (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') {
    ui.onWin()
  } else if (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X') {
    ui.onWin()
  // for horizontal wins for O
  } else if (cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') {
    ui.onWin()
  } else if (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') {
    ui.onWin()
  } else if (cells[6] === 'O' && cells[7] === 'X' && cells[8] === 'X') {
    ui.onWin()
  // for vertical wins for O
  } else if (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') {
    ui.onWin()
  } else if (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') {
    ui.onWin()
  } else if (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') {
    ui.onWin()
  // for diagonal wins for O
  } else if (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') {
    ui.onWin()
  } else if (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O') {
    ui.onWin()
  }
}

const checkForTie = function () {
  const cells = store.game.cells
  if (cells !== ''/* && gameOver === true */) {
    ui.onTie()
  }
}

const isGameOver = function () {
  if (checkForWin === true || checkForWin === false) {
    return true
  } else {
    return false
  }
}

module.exports = {
  // onChoice,
  onNewGame,
  onUpdateGame,
  checkForWin,
  checkForTie,
  cellClick,
  currentPlayer,
  isGameOver
}

// check if a new game has been started
// -check if cell is empty when a player clicks it
// -figure out which cell was clicked on (through the ID)
// -use that ID to update the array
// -when the array is updated, use that to check if it
// -matches any winning combinations
// sending index, current player, and if the game is over to api
// switch player if game is not over
