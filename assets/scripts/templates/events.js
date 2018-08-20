'use strict'

const getFormFields = require(`../../lib/get-form-fields`)
const store = require('./store')

const api = require('./api')
const ui = require('./ui')

// const renderBoard = () => {
// console.log('hellos')
//   let table = '<table><tr>'
//
//   for(let i = 0; i < 3; i++) {
//     table += '<td>'+ i + '</td>'
//   }
//   table += '</tr></table>'
//   $('#board').innerHTML = table/
// }

const onSignUp = function (event) {
  event.preventDefault()
  console.log('sign up ran!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in ran!')

  const data = getFormFields(this)
  api.signIn(data)
    .then((result) => {
      ui.signInSuccess()
      console.log(result)
      store.user = result.user
    })
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(() => {
      ui.signOutSuccess()
      store.user = null
    })
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#start').on('click', oncreategame)
  $('#ongetgames').on('submit', ongetgames)
  // $('#ondeletegame').on('submit', ondeletegame)
  // $('#onupdategame').on('submit', onupdategame)
  // $('#show-board').on('click', renderBoard)
}

const ongetgames = function (event) {
  event.preventDefault()
  console.log('get games ran')
  api.getgames()
    .then(ui.ongetgamessuccess)
    .catch(ui.ongetgamesfailure)
}
const oncreategame = function (event) {
  event.preventDefault()
  console.log('on games ran')
  api.creategame()
    .then(ui.creategameSuccess)
    .catch(ui.creategamesfailure)
}
// const ondeletegame = function (event) {
//   event.preventDefault()
//   console.log('delete games ran')
//   api.deletegame()
//     .then(ui.ondeletegameSuccess)
//     .catch(ui.ondeletegameFailure)
// }
const onupdategame = function (event) {
  event.preventDefault()
  console.log('update games ran')
  console.log(event)
  api.updategame(id, index, value, over)
    .then(ui.updategameSuccess)
    .catch(ui.updategameFailure)
}
module.exports = {
  addHandlers,
  onupdategame
}
