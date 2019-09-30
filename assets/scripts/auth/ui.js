'use strict'

const store = require('../store')
// require so we can save the user and their token

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onSignUpSuccess = function () {
  successMessage('Signed Up Successfully!')
}

const onSignUpFailure = function () {
  failureMessage('Sign up failed.')
}

const onSignInSuccess = function (responseData) {
  successMessage('Signed In Successfully!')
  store.user = responseData.user
  $('.sign-up, .sign-in').hide()
  $('.change-password, .sign-out').css('display', 'block')
}

const onSignInFailure = function () {
  failureMessage('Sign in failed.')
}

const onChangePasswordSuccess = function () {
  successMessage('Password changed successfully!')
}

const onChangePasswordFailure = function () {
  failureMessage('Password change failed.')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  $('.sign-up, .sign-in').show()
  $('.change-password, .sign-out').hide()
}

const onSignOutFailure = function () {
  failureMessage('Sign out failed :(')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
