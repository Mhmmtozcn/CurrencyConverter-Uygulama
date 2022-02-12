
// Elementleri seçme
const amountElement = document.querySelector(".converter__amount-input");
const selectElement = document.querySelector(".converter__amount-select");
const changeButton = document.querySelector(".converter__image-changeButton");
const resultButton = document.querySelector(".converter__result-result");
const currency = new Currency("USD");

// Eventleri bir fonksiyon içerisinde toplayıp çağırma
eventListeners();

function eventListeners() {
    amountElement.addEventListener('input', exchangeCurrency);
    selectElement.onchange = function () {
        currency.changeFirstCurrency(selectElement.options[selectElement.selectedIndex].textContent);
        exchangeCurrency();
    }
    exchangeCurrency();
}

function exchangeCurrency() {
    currency.changeAmount(amountElement.value)
    currency.exchange()
        .then(result => {
            resultButton.innerHTML = result.toFixed(2)
        })
        .catch(err => console.log(err))
}

