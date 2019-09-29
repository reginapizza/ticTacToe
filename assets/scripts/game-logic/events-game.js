'use strict'

const api = require('./api-game.js')
const ui = require('./ui-game.js')
const store = require('../store')

store.player1 = 'X'
store.player2 = 'O'
store.currentPlayer = 'X'
store.gameOver = false

const switchPlayer = function () {
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else if (store.currentPlayer === 'O') {
    store.currentPlayer = 'X'
  }
}

// const onChoice = function (event) {
//   event.preventDefault()
//   const div = event.target
//   console.log(div)
//   $(event.target).text('x')
// }

const onNewGame = function (event) {
  event.preventDefault()
  // clear board but don't refresh page
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const cellClick = function (event) {
  // if the cell clicked is both empty and the game is not over...
  if ($(event.target).text() === '' && store.gameOver === false) {
    if (store.currentPlayer === store.player1) {
      store.cells[event.target.id] = 'X'
      $(event.target).text('X')
      const id = store.game.id
      api.updateGame(id)
        .then(ui.onXTurnSuccess)
        .catch(ui.onError)
      checkForWin()
      switchPlayer()
    } else if (store.currentPlayer === store.player2) {
      store.cells[event.target.id] = 'O'
      $(event.target).text('O')
      const id = store.game.id
      api.updateGame(id)
        .then(ui.onOTurnSuccess)
        .catch(ui.onError)
      checkForWin()
      switchPlayer()
    } else if (store.cells[$(event.target).text()] !== '' && store.gameOver === false) {
      ui.onSameChoice()
    } else if (store.gameOver === true) {
      ui.tryAgain()
    } // change the last else if to be a conditional for the parent if
  }
}
// store.game.cells[event.target.id] = currentPlayer

// this function will clear the gameboard, not refresh, and trigger api newGame

const onUpdateGame = function (event) {
  event.preventDefault()
  // clear board but don't refresh page
  api.newGame()
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

// this functions checks for a win and tells triggers ui.onWin function
const checkForWin = function () {
  const cells = store.cells
  // for horizontal wins X
  if (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') {
    ui.onXWin()
  } else if (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') {
    ui.onXWin()
  } else if (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') {
    ui.onXWin()
    // for vertical wins for X
  } else if (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') {
    ui.onXWin()
  } else if (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') {
    ui.onXWin()
  } else if (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') {
    ui.onXWin()
  // for diagonal wins for X
  } else if (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') {
    ui.onXWin()
  } else if (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X') {
    ui.onXWin()
  // for horizontal wins for O
  } else if (cells[0] === 'O' && cells[1] === 'O' && cells[2] === 'O') {
    ui.onOWin()
  } else if (cells[3] === 'O' && cells[4] === 'O' && cells[5] === 'O') {
    ui.onOWin()
  } else if (cells[6] === 'O' && cells[7] === 'X' && cells[8] === 'X') {
    ui.onOWin()
  // for vertical wins for O
  } else if (cells[0] === 'O' && cells[3] === 'O' && cells[6] === 'O') {
    ui.onOWin()
  } else if (cells[1] === 'O' && cells[4] === 'O' && cells[7] === 'O') {
    ui.onOWin()
  } else if (cells[2] === 'O' && cells[5] === 'O' && cells[8] === 'O') {
    ui.onWin()
  // for diagonal wins for O
  } else if (cells[0] === 'O' && cells[4] === 'O' && cells[8] === 'O') {
    ui.onOWin()
  } else if (cells[2] === 'O' && cells[4] === 'O' && cells[6] === 'O') {
    ui.onOWin()
  }
}

const checkForTie = function () {
  const cells = store.cells
  if (cells !== '' && store.gameOver === true) {
    ui.onTie()
  }
}

const isGameOver = function () {
  if (checkForWin() === true || checkForTie === true) {
    return true
  } else {
    return false
  }
}

module.exports = {
  onNewGame,
  onUpdateGame,
  checkForWin,
  checkForTie,
  cellClick,
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
