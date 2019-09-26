'use strict'
// onChoice, onSameChoice

const store = require('../store')

const onChoice = function () {
  console.log('player made a choice')
}

const onSameChoice = function () {
  console.log('invalid move')
}

const onNewGameSuccess = function (data) {
  console.log(data)
}

const onNewGameFailure = function (error) {
  console.error(error)
}

module.exports = {
  onChoice,
  onSameChoice,
  onNewGameSuccess,
  onNewGameFailure
}
