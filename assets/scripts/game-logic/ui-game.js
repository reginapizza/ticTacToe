'use strict'
const events = require('./events-game.js')
const store = require('../store')

// const onChoice = function () {
//   console.log('player made a choice')
// }

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

const onWin = function () {
  $('#messageBox').text(events.currentPlayer + 'won the game! ' + tryAgain)
}

const onTie = function () {
  $('#messageBox').text('Woah! The game is a tie!' + tryAgain)
}

const tryAgain = function () {
  return 'Press the New Game Button to play again!'
}
module.exports = {
  // onChoice,
  onSameChoice,
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onWin,
  onTie
}
