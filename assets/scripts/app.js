'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game-logic/events-game.js')

$(() => {
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('.cell').on('click', gameEvents.cellClick)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#total-games').on('click', gameEvents.gameTotal)
})
