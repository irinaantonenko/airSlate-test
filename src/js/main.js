var form = document.querySelector('.login__form--js')
var validateBtn = form.querySelector('.login__button--js')
var password = form.querySelector('.login__input--password-js')
var email = form.querySelector('.login__input--email-js')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log('clicked on validate')
  console.log('password: ', password.value)
  console.log('email ', email.value)
})