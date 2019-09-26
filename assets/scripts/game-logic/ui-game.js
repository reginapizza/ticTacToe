'use strict'
// onChoice, onSameChoice

const store = require('../store')

const onChoice = function () {
  console.log('player made a choice')
}

const onSameChoice = function () {
  console.log('invalid move')
}

module.exports = {
  onChoice,
  onSameChoice
}
