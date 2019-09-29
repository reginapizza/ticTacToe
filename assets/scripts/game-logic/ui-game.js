'use strict'
const events = require('./events-game.js')
const store = require('../store')

const onCellClick = function () {
  console.log(events.currentPlayer + ' made a choice')
}

const onSameChoice = function () {
  $('#messageBox').text('That box is already taken!')
}

const onNewGameSuccess = function (data) {
  store.game = data.game
  console.log(store)
  $('.cell').text('')
  $('#messageBox').text('Make your move...choose wisely!')
}

const onNewGameFailure = function (error) {
  console.error(error)
  $('#messageBox').text('Sorry, there was an error...')
}

const onUpdateGameSuccess = function (data) {
  store.game = data.game
  console.log(data)
  $('#messageBox').text('Make your move...choose wisely!')
}

const onXWin = function () {
  $('#messageBox').text('X won the game! Press the "Create a New Game Button" to play again!')
}

const onOWin = function () {
  $('#messageBox').text('O won the game! Press the "Create a New Game Button" to play again!')
}

const onTie = function () {
  $('#messageBox').text('Woah! The game is a tie! Press the "Create a New Game Button" to play again!')
}
const onGameOver = function () {
  store.gameOver = true
  $('.cell').text('')
  $('#messageBox').text('The game has ended! Press the "Create a New Game Button" to play again!')
}

module.exports = {
  onCellClick,
  onSameChoice,
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onXWin,
  onOWin,
  onTie,
  onGameOver
}
