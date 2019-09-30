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
  console.log('got to onNewGameSuccess')
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
  store.gameOver = true
  $('#messageBox').text('X won the game! Press the "Create a New Game Button" to play again!')
}

const onOWin = function () {
  store.gameOver = true
  $('#messageBox').text('O won the game! Press the "Create a New Game Button" to play again!')
}

const onTie = function () {
  store.gameOver = true
  $('#messageBox').text('Woah! The game is a tie! Press the "Create a New Game Button" to play again!')
}
const onGameOver = function () {
  $('#messageBox').text('The game has ended! Press the "Create a New Game Button" to play again!')
}

const onGameTotalSuccess = function (responseData) {
  console.log('what is the response ', responseData)
  $('#total-games').text(`${responseData.games.length}`)
}

const onGameTotalFailure = function (responseData) {
  $('#total-games').text('Could not retrieve total games right now.')
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
  onGameOver,
  onGameTotalSuccess,
  onGameTotalFailure
}
