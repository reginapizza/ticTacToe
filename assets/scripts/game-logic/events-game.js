'use strict'

const api = require('./api-game.js')
const ui = require('./ui-game.js')
const store = require('../store')

let playerXMoves = []
let playerOMoves = []
let currentPlayer = 'X'

const switchPlayer = function () {
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X'
  }
}

const onChoice = function (event) {
  event.preventDefault()
  const div = event.target
  console.log(div)
  $(event.target).text('x')
}

const cellClick = function (event) {
  // if the cell clicked is both empty and the game is not over...
  if ($(event.target).text() === '' /*&& store.gameOver === false*/) {
    // makes markers for the current player x or o
    $(event.target).text(currentPlayer)
    if (currentPlayer === 'X') {
      playerXMoves.push(event.target.id)
    } else if (currentPlayer === 'O') {
      playerOMoves.push(event.target.id)
    }
    $('#messageBox').text(checkForWin())
    switchPlayer()
  }
}

const onNewGameClick = function (event) {
  event.preventDefault()
  // clear board but don't refresh page
  let cells = ['', '', '', '', '', '', '', '', '']
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}
const checkForWin = function () {
  // for horizontal wins X
  if (playerXMoves[0] === 'X' && playerXMoves[1] === 'X' && playerXMoves[2] === 'X') {
    return 'Player X has won!'
  } else if (playerXMoves[3] === 'X' && playerXMoves[4] === 'X' && playerXMoves[5] === 'X') {
    return 'Player X won!'
  } else if (playerXMoves[6] === 'X' && playerXMoves[7] === 'X' && playerXMoves[8] === 'X') {
    return 'Player X won!'
    // for vertical wins for X
  } else if (playerXMoves[0] === 'X' && playerXMoves[3] === 'X' && playerXMoves[6] === 'X') {
    return 'Player X won!'
  } else if (playerXMoves[1] === 'X' && playerXMoves[4] === 'X' && playerXMoves[7] === 'X') {
    return 'Player X won!'
  } else if (playerXMoves[2] === 'X' && playerXMoves[5] === 'X' && playerXMoves[8] === 'X') {
    return 'Player X won!'
  // for diagonal wins for X
  } else if (playerXMoves[0] === 'X' && playerXMoves[4] === 'X' && playerXMoves[8] === 'X') {
    return 'Player X won!'
  } else if (playerXMoves[2] === 'X' && playerXMoves[4] === 'X' && playerXMoves[6] === 'X') {
    return 'Player X won!'
  // for horizontal wins for O
  } else if (playerOMoves[0] === 'O' && playerOMoves[1] === 'O' && playerOMoves[2] === 'O') {
    return 'Player O has won!'
  } else if (playerOMoves[3] === 'O' && playerOMoves[4] === 'O' && playerOMoves[5] === 'O') {
    return 'Player O won!'
  } else if (playerOMoves[6] === 'O' && playerOMoves[7] === 'X' && playerOMoves[8] === 'X') {
    return ' Player X won!'
  // for vertical wins for O
  } else if (playerOMoves[0] === 'O' && playerOMoves[3] === 'O' && playerOMoves[6] === 'O') {
    return 'Player X won!'
  } else if (playerOMoves[1] === 'O' && playerOMoves[4] === 'O' && playerOMoves[7] === 'O') {
    return 'Player X won!'
  } else if (playerOMoves[2] === 'O' && playerOMoves[5] === 'O' && playerOMoves[8] === 'O') {
    return 'Player O won!'
  // for diagonal wins for O
  } else if (playerOMoves[0] === 'O' && playerOMoves[4] === 'O' && playerOMoves[8] === 'O') {
    return 'Player X won!'
  } else if (playerOMoves[2] === 'O' && playerOMoves[4] === 'O' && playerOMoves[6] === 'O') {
    return 'Player O won!'
  }
}

module.exports = {
  onChoice,
  onNewGameClick,
  checkForWin,
  cellClick
}
// check if a new game has been started
// check if cell is empty when a player clicks it
// figure out which cell was clicked on (through the ID)
// use that ID to update the array
// when the array is updated, use that to check if it
// matches any winning combinations
// sending index, current player, and if the game is over to api
// switch player if game is not over
