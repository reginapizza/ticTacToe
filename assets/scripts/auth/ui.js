'use strict'

const store = require('../store')
// require so we can save the user and their token

const onSignUpButton = function (event) {
  $('.sign-up-start-button').hide()
  $('.sign-up').show()
}

const onSignInButton = function (event) {
  $('.sign-in-start-button').hide()
  $('.sign-in').show()
}

const onChangePasswordButton = function (event) {
  $('.change-password, .change-password-start').css('display', 'block')
}

const onCancelButton = function (event) {
  $('.change-password').hide()
  $('.change-password-start-button').show()
}

const onSignUpCancel = function (event) {
  $('.sign-up').hide()
  $('.sign-up-start-button').show()
}

const onSignInCancel = function (event) {
  $('.sign-in').hide()
  $('.sign-in-start-button').show()
}

const onSignUpFailure = function () {
  $('.auth-message').text('Sign Up Failed. Please Try Again.').fadeIn(0, 1)
  $('.auth-message').text('Sign Up Failed. Please Try Again.').fadeOut(5000, 0)
  $('.sign-up-form').trigger('reset')
}

const onSignInSuccess = function (responseData) {
  $('.auth-message').text('Signed In Successfully!').fadeIn(0, 1)
  $('.auth-message').text('Signed In Successfully!').fadeOut(5000, 0)
  store.user = responseData.user
  $('.sign-up, .sign-up-start-button, .sign-in').hide()
  $('#messageBox').show()
  $('.new-game').css('display', 'block')
  $('.player-stats, .change-password, .sign-out').css('display', 'inline-block')
  $('.sign-in-form , .sign-up-form').trigger('reset')
}

const onSignInFailure = function () {
  $('.auth-message').text('Sign in failed. Please Try Again.').fadeIn(0, 1)
  $('.auth-message').text('Sign in failed. Please Try Again.').fadeOut(5000, 0)
  $('.sign-in-form').trigger('reset')
}

const onChangePasswordSuccess = function () {
  $('.auth-message').text('Password changed successfully!').fadeIn(0, 1)
  $('.auth-message').text('Password changed successfully!').fadeOut(5000, 0)
  $('#changePassword').modal('hide')
  $('.change-password-form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('.auth-message').text('Password change failed. Please Try Again.').fadeIn(0, 1)
  $('.auth-message').text('Password change failed. Please Try Again.').fadeOut(5000, 0)
  $('.change-password-form').trigger('reset')
}

const onSignOutSuccess = function () {
  $('.auth-message').text('Signed out successfully!').fadeIn(0, 1)
  $('.auth-message').text('Signed out successfully!').fadeOut(5000, 0)
  $('.sign-up-start-button, .sign-in-start-button').show()
  $('.change-password, .sign-out, .change-password-start-button, .player-stats, .board, .new-game, #messageBox, .sign-up, .sign-in').hide()
  $('#total-games-number').text('')
}

const onSignOutFailure = function () {
  $('.auth-message').text('Sign out failed. Please Try Again.').fadeIn(0, 1)
  $('.auth-message').text('Sign out failed. Please Try Again.').fadeOut(5000, 0)
}

module.exports = {
  onSignUpButton,
  onSignInButton,
  onSignUpCancel,
  onSignInCancel,
  onChangePasswordButton,
  onCancelButton,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
