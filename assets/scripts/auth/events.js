'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUpButton = function (event) {
  $('.sign-up-start-button').hide()
  $('.sign-up-start').show()
}

const onSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignInButton = function (event) {
  $('.sign-in-start-button').hide()
  $('.sign-in-start').show()
}

const onChangePasswordButton = function (event) {
  $('.change-password-start-button').hide()
  $('.change-password, .change-password-start').css('display', 'block')
}

const onCancelButton = function (event) {
  $('.change-password').hide()
  $('.change-password-start-button').show()
}

const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  // const form = event.target
  // const formData = getFormFields(form)
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}
module.exports = {
  onSignUpButton,
  onSignUp,
  onSignInButton,
  onSignIn,
  onChangePasswordButton,
  onChangePassword,
  onCancelButton,
  onSignOut
}
