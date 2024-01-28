const priceCurrency = document.querySelectorAll('.tariff__price-currency');
const priceValue = document.querySelectorAll('.tariff__price-value');
const pricePeriod = document.querySelectorAll('.tariff__price-period');
const tariff = document.querySelectorAll('.tariff');

const dollarRate = 90;

priceCurrency.forEach(currency => {
  currency.addEventListener('click', function() {
    if (currency.innerHTML === '$') {
      priceCurrency.forEach(x => {
        x.innerHTML = '₽'
      },
      priceValue.forEach(x => {
        x.innerHTML = x.innerHTML * 80
      })
      )
    } else {
      priceCurrency.forEach(x => {
        x.innerHTML = '$'
      },
      priceValue.forEach(x => {
        x.innerHTML = x.innerHTML / 80
      })
      )
    }    
  })
})

pricePeriod.forEach(period => {
  period.addEventListener('click', function() {
    if (period.innerHTML === '/Months') {
      pricePeriod.forEach(x => {
        x.innerHTML = '/Day'
      },
      priceValue.forEach(x => {
        x.innerHTML = Math.round(x.innerHTML / 30)
      })
      )
    } else {
      pricePeriod.forEach(x => {
        x.innerHTML = '/Months'
      },
      priceValue.forEach(x => {
        x.innerHTML = x.innerHTML * 30
      })
      )
    }    
  })
})