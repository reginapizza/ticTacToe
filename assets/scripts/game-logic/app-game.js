'use strict'

const gameEvents = require('./events-game.js')

$(() => {
  $('.board').on('click', gameEvents.onChoice)
}
