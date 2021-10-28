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




fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
.then(response =>{
    return response.json()
})
.then(result =>{
    console.log(result);
    let currency = {}
    currency.eur = result.filter(el => {
        return el.cc == 'EUR'
    })
    currency.usd = result.filter(el => {
        return el.cc == 'USD'
    })
    console.log(currency);
})