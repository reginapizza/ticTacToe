'use strict'

const api = require('./api-game.js')
const ui = require('./ui-game.js')

const onChoice = function (event) {
  event.preventDefault()
  const div = event.target
  console.log(div)
  // api.choice()
  //   .then(ui.onChoice)
  //  .catch(ui.onSameChoice)
}

module.exports = {
  onChoice
}
