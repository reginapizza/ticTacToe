'use strict'

const api = require('./api-game.js')
const ui = require('./ui-game.js')
// const currentPlayer = 'x'
const onNewGameClick = function (event) {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onChoice = function (event) {
  event.preventDefault()
  const div = event.target
  console.log(div, div.id)
  $(event.target).text('x')
  // api.choice()
  //   .then(ui.onChoice)
  //  .catch(ui.onSameChoice)
}

module.exports = {
  onChoice,
  onNewGameClick
}

// check if a new game has been started
// check if cell is empty when a player clicks it
// figure out which cell was clicked on (through the ID)
// use that ID to update the array
// when the array is updated, use that to check if it
// matches any winning combinations
// sending index, current player, and if the game is over to api
// switch player if game is not over
