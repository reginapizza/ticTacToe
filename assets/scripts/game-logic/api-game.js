'use strict'
const config = require('../config')
const store = require('../store')

// const choice = function () {
//   return $.ajax({
//     method: 'GET',
//     url: config.apiUrl +
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//   })
// }
const newGame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  newGame
}
