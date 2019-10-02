'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game-logic/events-game.js')

$(() => {
  $('.sign-up-start-button').on('click', authEvents.onSignUpButton)
  $('.sign-up').on('submit', authEvents.onSignUp)
  $('.sign-in-start-button').on('click', authEvents.onSignInButton)
  $('.sign-in').on('submit', authEvents.onSignIn)
  $('.change-password-start-button').on('click', authEvents.onChangePasswordButton)
  $('.change-password').on('submit', authEvents.onChangePassword)
  $('.sign-out').on('submit', authEvents.onSignOut)
  $('.cell').on('click', gameEvents.cellClick)
  $('#new-game').on('click', gameEvents.onNewGame)
  $('#total-games').on('click', gameEvents.gameTotal)
})
