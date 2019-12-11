'use strict'

const authEvents = require('./auth/events.js')
const gameEvents = require('./game-logic/events-game.js')
const ui = require('./auth/ui.js')

$(() => {
  $('.sign-up-start-button').on('click', ui.onSignUpButton)
  $('.sign-up-form').on('submit', authEvents.onSignUp)
  $('.sign-up-cancel').on('click', ui.onSignUpCancel)
  $('.sign-in-start-button').on('click', ui.onSignInButton)
  $('.sign-in-form').on('submit', authEvents.onSignIn)
  $('.sign-in-cancel').on('click', ui.onSignInCancel)
  $('.change-password-start-button').on('click', ui.onChangePasswordButton)
  $('.change-password-form').on('submit', authEvents.onChangePassword)
  $('.cancel').on('click', ui.onCancelButton)
  $('.sign-out-button').on('click', authEvents.onSignOut)
  $('.cell').on('click', gameEvents.cellClick)
  $('.new-game').on('click', gameEvents.onNewGame)
  $('#total-games').on('click', gameEvents.gameTotal)
})
